# Kasona To-Share

Kuratierte, teilbare AI-Agent-Skills, Plugins und Prompts.

Dieses Repository enthält **ausschließlich generische, wiederverwendbare Inhalte**. Es ist bewusst mit frischer Git-History angelegt und von den internen Repositories getrennt — es enthält keine Kundendaten, keine Team-Informationen, keine Infrastruktur-Details und keine Credentials.

> **Interne Inhalte gehören hier nicht hinein.** Alles Kunden-, Team- oder Infrastruktur-bezogene lebt in den internen Repositories. Siehe [Beitragen](#beitragen).

## Inhalt

### `plugins/`

| Plugin | Beschreibung |
|---|---|
| `seo-audit` | Technisches SEO-Audit: Kategorien, Prüfkriterien, Reporting-Struktur |
| `seo-optimizing` | SEO-Optimierung: Analysis-Playbooks, Keyword- und Ranking-Arbeit |

### `skills/`

| Skill | Beschreibung |
|---|---|
| `error-handling-patterns` | Muster für robuste Fehlerbehandlung in Agent-Workflows |
| `excalidraw-diagrams` | Programmatische Erzeugung von Excalidraw-Diagrammen |
| `humanizing-text` | Text von generischem AI-Duktus in natürliche Sprache überführen |
| `skill-searcher` | Passenden Skill aus einer Skill-Bibliothek finden (Semantic Matching) |
| `ui-ux-pro-max` | UI/UX-Referenz: Style-Systeme, Farbpaletten, Komponenten-Patterns |

### `prompts/`

| Prompt | Beschreibung |
|---|---|
| `ultimate-debugger-prompt` | Strukturierter Debugging-Prompt mit Beispielen |

## Nutzung

Jeder Skill folgt der `SKILL.md`-Konvention: eine Beschreibung mit Trigger-Bedingungen im Frontmatter, gefolgt von der Arbeitsanweisung. Referenzdateien liegen jeweils unter `references/`.

Skills lassen sich direkt in Claude Code, Claude.ai oder vergleichbaren Umgebungen einsetzen — den jeweiligen Ordner in das Skills-Verzeichnis kopieren.

## Beitragen

Bevor etwas hier landet, muss es den Redaktions-Check bestehen:

- [ ] Keine Kundennamen, Angebote, Preise oder Vertragsdaten
- [ ] Keine Team-Mitglieder, E-Mail-Adressen oder personenbezogenen Daten
- [ ] Keine Notion-Datenbank-IDs, internen URLs oder Workspace-Referenzen
- [ ] Keine Infrastruktur-Details (Server, Ports, Tunnel, Deployment-Pfade)
- [ ] Keine API-Keys, Tokens oder Credentials
- [ ] Keine absoluten lokalen Dateipfade
- [ ] Keine markenspezifische Tonalität oder ICP-Definitionen einer realen Person

Faustregel: Wenn ein Außenstehender aus dem Inhalt etwas über Kunden, Team oder Systeme lernen kann, gehört er nicht hierher.

Bei Zweifeln: nicht committen, sondern vorher fragen. Ein einmal gepushter Commit lässt sich nicht zuverlässig aus der History entfernen.
