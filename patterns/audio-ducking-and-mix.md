# Audio ducking and mix for video with Claude Code

A pattern for the sound of a finished video: licensed library music instead of synthesised music, a music bed that automatically dips under the voice (ducking), a few well-placed sound effects, and a final loudness pass to platform levels. All of it is ffmpeg, so the agent can run it, measure it and repeat it.

> **Not a developer? You do not need to read the rest of this page. Claude does.**
>
> 1. Get **Claude Code** (the Code tab in the Claude desktop app, see [claude.com/claude-code](https://claude.com/claude-code)).
> 2. Open the folder with your video (or voiceover file) and the music and sound effect files you downloaded.
> 3. Paste:
>
>    *Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/audio-ducking-and-mix.md. Mix the voice, music and sound effects in this folder following the pattern, normalise the loudness, and write the track manifest. Tell me what you measured before and after.*
>
> More help: [GETTING-STARTED.md](../GETTING-STARTED.md).

## What you get

- A music bed that sits clearly under the voice and swells back in the pauses
- Sound effects used sparingly, on moments that earn them
- A file at a standard loudness (about -14 LUFS integrated, -1.5 dBTP true peak), verified by measurement
- A `tracks.json` that records where every sound came from and under which licence

## 1. Use licensed library audio, not synthesised audio

One creator who tried both reported that a coding agent can generate music and sound effects from code (oscillators, noise, envelopes), and that the result sounds artificial, so they replaced it with royalty-free library tracks and sound effects and had the agent rebuild the video with them. Treat that as a data point, not a law, but the practical advice holds: let the agent do the mixing and let a human pick the sounds.

- Download tracks from a library whose licence covers your use (commercial use, social platforms, advertising). Royalty-free libraries such as Pixabay are a common start.
- **Check the current licence terms yourself**, on the track's page, on the day you download. Terms change, differ between tracks, and some platforms register uploaded music with automatic claim systems. The agent can record what it sees; it cannot give you clearance.
- Prefer instrumental tracks with a steady dynamic range. Strong melodies and vocals compete with speech.
- Keep a loop-able or long enough track so you do not need to stretch it.

## 2. The track manifest

Every non-voice sound goes in one file, next to the project.

```json
{
  "tracks": [
    {
      "id": "bed-01",
      "role": "music",
      "title": "Example Title",
      "creator": "Example Creator",
      "source_url": "https://example.com/music/example-title",
      "retrieved": "2026-01-15",
      "licence_name": "as stated on the page",
      "licence_url": "https://example.com/licence",
      "attribution_required": "verify",
      "commercial_use": "verify",
      "file": "audio/bed-01.mp3",
      "start": 0.0,
      "gain_db": -16,
      "duck": true
    },
    {
      "id": "sfx-pop-01",
      "role": "sfx",
      "title": "Soft pop",
      "creator": "Example Creator",
      "source_url": "https://example.com/sfx/soft-pop",
      "retrieved": "2026-01-15",
      "licence_name": "as stated on the page",
      "licence_url": "https://example.com/licence",
      "attribution_required": "verify",
      "commercial_use": "verify",
      "file": "audio/sfx-pop-01.wav",
      "start": 4.0,
      "gain_db": -10,
      "duck": false
    }
  ]
}
```

Dates and names are placeholders. Leave `verify` in place until a person has read the licence page and replaced it with a real answer. A video with an unresolved `verify` is not ready to publish.

## 3. Ducking with sidechaincompress

Ducking means the music is compressed by the voice: whenever the voice is present, the music gets quieter, and it recovers in the gaps. In ffmpeg this is `sidechaincompress`: first input is the signal to compress (music), second is the signal that controls it (voice).

Starting values:

| Parameter | Value | Why |
| --- | --- | --- |
| Music bed gain before ducking | -16 to -20 dB | Leaves headroom so the voice is clearly on top |
| `threshold` | 0.02 to 0.05 (linear amplitude, not dB) | Level at which the voice starts to push the music down. Lower is more sensitive |
| `ratio` | 6 to 8 | Strong enough that the music clearly steps back |
| `attack` | 20 ms | Dips fast enough that word starts are not masked |
| `release` | 300 to 600 ms | Recovers smoothly instead of pumping between words |
| `makeup` | 1 | No extra gain on the music |

Tune by ear and by measurement: with real speech the right `threshold` depends on how loud the voice is. If the music barely dips, lower `threshold` or raise `ratio`. If it pumps audibly between words, raise `release`.

## 4. Sound effects

- **Sparse.** Roughly one effect every 8 to 10 seconds at most, and only on a visual event: an overlay appearing, a scene change, a number landing.
- **Short and quiet.** Under about 0.8 seconds, around -10 to -18 dB relative to the voice's peaks.
- **Never on a key word.** The effect should support a moment, not cover it.
- The effect plays on its own track, not through the ducker, so it keeps its punch. Time it from the same cue times as the visuals (see [overlay-asset-research](overlay-asset-research.md)).

## 5. Loudness: two-pass loudnorm

Targets used by many social and streaming platforms: **-14 LUFS integrated, -1.5 dBTP true peak**. Platforms differ and change their rules; verify the current value for your destination.

Single-pass `loudnorm` works dynamically and can alter the sound. The two-pass method measures first, then applies a mostly linear gain computed from the measurement, which is cleaner.

## 6. The command skeleton

This script was run end to end on synthetic tones (a gated sine as voice, a steady sine as music, a short beep as the effect) with ffmpeg 8.0.1. The result measured -14.0 LUFS integrated and a true peak below -1.5 dBTP, and the music measured about 5 dB lower during the voice than in the gaps with these test levels. It is a skeleton to adapt, not a tuned preset.

```bash
#!/usr/bin/env bash
set -euo pipefail

VOICE=voice.wav      # finished voiceover or the speaker's audio
MUSIC=music.wav      # licensed library track
SFX=sfx.wav          # one licensed sound effect
SFX_AT_MS=4000       # where the effect lands, in milliseconds
LEN=12               # total length in seconds

# 1. Premix: duck the music under the voice, add the effect, sum the stems
ffmpeg -y -hide_banner -loglevel error -i "$VOICE" -i "$MUSIC" -i "$SFX" -filter_complex "
  [0:a]aformat=sample_rates=48000:channel_layouts=stereo,asplit=2[vo][vo_sc];
  [1:a]aformat=sample_rates=48000:channel_layouts=stereo,volume=-16dB,
       afade=t=in:d=1.5,afade=t=out:st=$((LEN-2)):d=2[mus];
  [mus][vo_sc]sidechaincompress=threshold=0.02:ratio=6:attack=20:release=400:makeup=1[duck];
  [2:a]aformat=sample_rates=48000:channel_layouts=stereo,volume=-10dB,
       adelay=${SFX_AT_MS}|${SFX_AT_MS}[sfx];
  [vo][duck][sfx]amix=inputs=3:duration=first:normalize=0[mix]
" -map "[mix]" -t "$LEN" premix.wav

# 2. Loudnorm pass 1: measure only
ffmpeg -hide_banner -nostats -i premix.wav \
  -af loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json -f null - 2> pass1.txt
sed -n '/^{/,/^}/p' pass1.txt > pass1.json

# 3. Loudnorm pass 2: apply with the measured values
MEASURED=$(python3 -c "
import json
d = json.load(open('pass1.json'))
print('measured_I=%s:measured_TP=%s:measured_LRA=%s:measured_thresh=%s:offset=%s' % (
    d['input_i'], d['input_tp'], d['input_lra'], d['input_thresh'], d['target_offset']))")
ffmpeg -y -hide_banner -loglevel error -i premix.wav \
  -af "loudnorm=I=-14:TP=-1.5:LRA=11:${MEASURED}:linear=true" -ar 48000 final.wav

# 4. Verify
ffmpeg -hide_banner -nostats -i final.wav -af ebur128=peak=true -f null - 2>&1 | grep -E "^\s+(I:|Peak:)"
```

Attach the result to the video without re-encoding the picture:

```bash
ffmpeg -y -i cut.mp4 -i final.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest with_audio.mp4
```

Notes:

- `amix=...:normalize=0` keeps the stems at their set levels. That option exists in recent ffmpeg versions (7.0 or newer, verify with `ffmpeg -h filter=amix`); on older builds, `amix` divides every input by the number of inputs, so compensate with `volume`.
- `asplit` is needed because the voice feeds both the mix and the ducker.
- If pass 2 reports `normalization_type : dynamic`, the measurement could not be applied linearly (for example the peaks are too high for the target). Lower the premix level slightly and run again.
- If your video framework mixes audio itself, it may offer a ducking or "carve" step (HyperFrames documents one in its audio skill, verify). Use the ffmpeg route when you want one verifiable file and one measurement.

## 7. Check before you ship

- Run the verify line and write both numbers into your notes.
- Listen once on laptop speakers and once on phone speakers: can you follow every word, and is any effect louder than the voice?
- Open `tracks.json` and confirm no `verify` is left.

## Pitfalls

- **Synthesised music and effects.** Cheap to produce, easy to hear. Use library audio.
- **Music too loud before ducking.** Ducking is not a substitute for a sensible bed level.
- **Pumping.** A short release makes the music jump between words. Use 300 ms or more.
- **Linear threshold confusion.** `sidechaincompress` takes `threshold` as linear amplitude, not dB.
- **Shell quoting.** In zsh, `$VAR:linear` is read as a modifier on `$VAR` and silently breaks the filter string. Write `${VAR}` before a colon, as in the script above.
- **Loudness measured on the wrong file.** Measure the final file, not the premix.
- **Treating the licence field as optional.** Unchecked licences are the usual reason for a later takedown or claim.
- **Normalising to a number you did not verify.** Targets differ by platform and change over time.

## Prompt to give your agent

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/audio-ducking-and-mix.md
>
> Goal: mix the audio for `[video file]`. The voice is `[file or the video's own audio]`, the music bed is `[file]`, sound effects are `[files]`. Place effects at `[times or "at each overlay cue in cues.json"]`.
> Taste: `[how present the music should be: barely audible, or clearly felt]`. Destination: `[platform]`.
>
> Use only the files I gave you. Do not synthesise music or effects. Build the mix with ffmpeg exactly as in the pattern: duck the music with sidechaincompress, keep effects sparse, normalise with two-pass loudnorm to -14 LUFS and -1.5 dBTP, and verify with ebur128. Report the loudness before and after. Write `tracks.json` for every music and effect file with the source URL, the retrieval date and the licence fields; leave `verify` wherever you cannot read the licence yourself, and list those items for me. Do not install anything without asking first.
