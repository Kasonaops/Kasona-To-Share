# Talking-head auto-cut with Claude Code

A pattern for turning a raw recording of one person talking into a tight short-form cut: silences, filler words and false starts removed using word-level timestamps, hard cuts between two or three punch-in framings, and a 9:16 export. The agent writes an edit decision list (EDL) first, you review it, and only then does ffmpeg render.

> **Not a developer? You do not need to read the rest of this page. Claude does.**
>
> 1. Get **Claude Code** (the Code tab in the Claude desktop app, see [claude.com/claude-code](https://claude.com/claude-code)).
> 2. Create a new folder, put your raw video in it, and open the folder in Claude Code.
> 3. Paste the prompt at the end of this page, or this shorter version:
>
>    *Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/talking-head-autocut.md. Cut the video in this folder into one vertical short, following the pattern. Show me the edit list before you render anything.*
>
> More help: [GETTING-STARTED.md](../GETTING-STARTED.md).

## What you get

- A cut that keeps only the best take of each sentence (no stumbles, no dead air)
- Hard cuts between 2 to 3 framings of the same footage, so the picture keeps moving without effects
- A vertical 1080x1920 file, plus the EDL as plain JSON you can edit and re-render in seconds

Everything is deterministic after the EDL is approved: the same EDL and the same source always give the same video.

## Tools

- **ffmpeg** and **ffprobe** (cutting, cropping, fades, encoding)
- **A transcriber with word-level timestamps.** Local option: [whisper.cpp](https://github.com/ggml-org/whisper.cpp). Any hosted transcription service that returns per-word start and end times works too.
- **Python 3** for the small EDL-to-ffmpeg script below

Claude asks before installing anything.

## 1. Transcribe with word timestamps

```bash
ffmpeg -i raw.mp4 -vn -ac 1 -ar 16000 -c:a pcm_s16le audio16k.wav
whisper-cli -m models/ggml-small.bin -f audio16k.wav -ml 1 -sow -ojf -of words
```

The flags above (`-ml 1` and `-sow` for one word per segment, `-ojf` for full JSON) are from memory of recent whisper.cpp builds: **verify with `whisper-cli --help`**, since binary names and options have changed between versions. Have the agent normalise whatever comes out into one flat file:

```json
[
  { "w": "Did",  "start": 1.20, "end": 1.41 },
  { "w": "you",  "start": 1.41, "end": 1.52 },
  { "w": "know", "start": 1.52, "end": 1.80 }
]
```

Word timestamps are usually good to within a few tens of milliseconds, sometimes worse. That is why the audio pad below exists. Transcribers also tend to **omit fillers** ("um", "uh") from the text. Cross-check pauses and fillers against the audio itself:

```bash
ffmpeg -i raw.mp4 -af silencedetect=noise=-35dB:d=0.35 -f null - 2>&1 | grep silence_
```

## 2. Decide what to remove

Have the agent read the whole transcript first, then mark spans to drop:

1. **Fillers** ("um", "uh", "like", "you know" used as a tic). Keep a filler only if removing it makes the sentence feel clipped.
2. **False starts and repeats.** When a sentence is restarted, keep the **last complete take** and drop the earlier attempts.
3. **Dead air.** Any gap between kept words longer than the pause threshold is shortened.
4. **Off-topic asides** the speaker flags themselves ("sorry, let me say that again").

Defaults that work as a starting point (tune per speaker):

| Setting | Default | Meaning |
| --- | --- | --- |
| `pause_threshold` | 0.40 s | Gaps longer than this get cut. Shorter gaps are natural rhythm and stay |
| `breathing_room` | 0.15 s | Pause left at a sentence boundary, so sentences do not collide |
| `audio_pad` | 0.06 s | Extra audio kept before and after every kept range, absorbs timestamp error |
| `audio_fade` | 0.015 s | Fade in and out on every cut, prevents clicks |
| `min_dwell` | 3 s | Shortest time on one framing |
| `max_dwell` | 8 s | Longest time on one framing |

## 3. Layouts: punch-ins with hard cuts

A "layout" is just a crop of the same footage at a different zoom. Define two or three:

| Layout | Zoom | Use |
| --- | --- | --- |
| `wide` | 1.0 | Default, calm explanation |
| `punch1` | 1.3 | Emphasis, a new point |
| `punch2` | 1.6 | The hook in the first seconds, or the punchline |

Rules:

- Switch layout **only at sentence boundaries**, never in the middle of a sentence.
- Hard cut, no transition effect. The point is that attention stays on what is said.
- Never use the same layout twice in a row. Respect `min_dwell` and `max_dwell`.
- Open on `punch2` or `punch1` so the first frame is not the loosest one.
- Honest limit: a removal in the middle of a sentence is a visible jump on the same framing. If it bothers you, ask the agent to drop that filler less aggressively, or accept the jump cut, which viewers of short-form video are used to.

## 4. 9:16 reframe with a static anchor

The reframe is a plain crop around a fixed point, the **anchor**, given as fractions of the source frame (`x: 0.5, y: 0.42` is horizontally centred, face slightly above the middle). There is **no face tracking** in this pattern. Consequences:

- Frame the shot so the speaker stays near the anchor for the whole take, and check one still per layout before rendering.
- A 16:9 source cropped to 9:16 uses only about a third of its width. At 1080p source resolution the `wide` layout is already an upscale; record in 4K if you can.
- If the speaker moves a lot, use a wider crop or a dedicated tracking tool (verify what your editor offers). Do not pretend a static crop will follow them.

## 5. The EDL

One JSON file is the single source of truth. Segment times refer to the **source** file; the output is the concatenation in order.

```json
{
  "source": "raw.mp4",
  "fps": 30,
  "output": { "size": [1080, 1920] },
  "anchor": { "x": 0.5, "y": 0.42 },
  "layouts": {
    "wide":   { "zoom": 1.0 },
    "punch1": { "zoom": 1.3 },
    "punch2": { "zoom": 1.6 }
  },
  "audio": { "fade": 0.015 },
  "segments": [
    { "src_in": 1.20, "src_out": 4.85,  "layout": "punch2", "text": "Did you know that ..." },
    { "src_in": 5.60, "src_out": 8.10,  "layout": "wide",   "text": "The first one is ..." },
    { "src_in": 8.75, "src_out": 11.40, "layout": "punch1", "text": "And the second ..." }
  ]
}
```

`src_in` and `src_out` already include `audio_pad`. The `text` field is for you: have the agent print the EDL as a readable table (index, duration, layout, text, seconds removed before it) so you can approve the cut without scrubbing video.

## 6. Render with ffmpeg

Each segment is trimmed, cropped, scaled and faded, then all segments are joined with the concat filter. This script was run against a synthetic 1080p test clip and produced the expected 1080x1920 file with the expected duration.

```python
import json, subprocess, sys

edl = json.load(open(sys.argv[1]))
out_path = sys.argv[2]
src_w, src_h = 1920, 1080          # read with ffprobe in a real run
out_w, out_h = edl["output"]["size"]
fade = edl["audio"]["fade"]
ax, ay = edl["anchor"]["x"], edl["anchor"]["y"]

def even(v):
    return int(v) // 2 * 2

parts, labels = [], []
for i, seg in enumerate(edl["segments"]):
    z = edl["layouts"][seg["layout"]]["zoom"]
    base_w = even(src_h * out_w / out_h)          # widest 9:16 window that fits
    cw, ch = even(base_w / z), even(src_h / z)
    cx = min(max(ax * src_w - cw / 2, 0), src_w - cw)
    cy = min(max(ay * src_h - ch / 2, 0), src_h - ch)
    dur = seg["src_out"] - seg["src_in"]
    parts.append(
        f"[0:v]trim=start={seg['src_in']}:end={seg['src_out']},setpts=PTS-STARTPTS,"
        f"crop={cw}:{ch}:{even(cx)}:{even(cy)},scale={out_w}:{out_h},setsar=1[v{i}]")
    parts.append(
        f"[0:a]atrim=start={seg['src_in']}:end={seg['src_out']},asetpts=PTS-STARTPTS,"
        f"afade=t=in:d={fade},afade=t=out:st={dur - fade:.3f}:d={fade}[a{i}]")
    labels.append(f"[v{i}][a{i}]")

parts.append("".join(labels) + f"concat=n={len(labels)}:v=1:a=1[v][a]")
subprocess.run(["ffmpeg", "-y", "-hide_banner", "-loglevel", "error", "-i", edl["source"],
    "-filter_complex", ";".join(parts), "-map", "[v]", "-map", "[a]",
    "-r", str(edl["fps"]), "-c:v", "libx264", "-crf", "18", "-pix_fmt", "yuv420p",
    "-c:a", "aac", "-b:a", "192k", out_path], check=True)
```

For long recordings with many segments, write the filter graph to a file and pass it with `-filter_complex_script` instead of one very long argument.

Optional follow-ups, each its own pattern: [overlay-asset-research](overlay-asset-research.md) for on-screen logos and screenshots, [audio-ducking-and-mix](audio-ducking-and-mix.md) for music and loudness, and a subtitle pass.

## 7. Check before you ship

- Pull one still at each cut point and look at it: is the face inside the frame in every layout?
- Listen to every cut boundary once with headphones. Chopped first or last syllables mean the pad is too small.
- Compare final duration with the sum of the segments. A mismatch means a trim or an audio/video drift.
- Confirm the first second contains the hook, not a breath.

## Pitfalls

- **Trusting the transcript blindly.** Transcribers drop fillers and mishear words. A cut planned from text alone can leave an "um" in the audio. Cross-check with `silencedetect`.
- **No audio pad.** Timestamps are approximate. Without padding you clip word starts and ends.
- **Cutting inside a word's breath.** Cut in the pause, not at the word boundary exactly; leave `breathing_room` at sentence ends.
- **Odd crop sizes.** H.264 with yuv420p needs even width and height. The script rounds down to even numbers; keep that when you edit it.
- **Layout switches mid-sentence.** Feels like a glitch, not an edit.
- **Assuming the face will be tracked.** It will not. Check stills.
- **Whisper flags from memory.** Option names differ between builds. Verify with `--help`.
- **Rendering before approval.** Re-rendering is cheap, but re-explaining a bad cut is not. Approve the EDL table first.

## Prompt to give your agent

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/talking-head-autocut.md
>
> Goal: turn `[raw video file]` into one vertical short of `[target length, e.g. 45 seconds]` for `[platform]`.
> Audience and taste: `[who watches, how fast it should feel, any rules like "never cut mid-sentence"]`.
>
> Work in this order and stop at step 3 for my approval: (1) extract audio and transcribe with word-level timestamps, using whisper.cpp if it is installed, otherwise tell me what you would use; (2) mark fillers, false starts and long pauses, keeping the last complete take of any repeated sentence; (3) write `edl.json` with layouts `wide`, `punch1`, `punch2`, switching layout only at sentence boundaries, and show me a readable table of the cut plus the total seconds removed. After my approval, render with ffmpeg, extract one still per layout and one still per cut, and tell me anything that looks off. Use the defaults from the pattern unless I say otherwise. Do not install anything without asking me first.
