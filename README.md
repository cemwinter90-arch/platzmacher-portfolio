# Platzmacher — Website-Portfolio

Eine responsive Dienstleistungswebsite für Entrümpelung und Haushaltsauflösung. Dieses Repository zeigt die Frontend-Umsetzung als ausgewählte Arbeitsprobe von Kenny Winter.

**[Öffentliche Website ansehen](https://platzmacher.eu/)**

## Was das Projekt zeigt

- Next.js App Router mit TypeScript und React.
- Wiederverwendbare Komponenten für Navigation, Leistungen, Ablauf, Ergebnisse und Kontakt.
- Zentrale Gestaltungsvorgaben mit CSS-Variablen und Tailwind CSS.
- Eigene Seiten für Impressum und Datenschutz sowie Metadaten, Sitemap und Robots-Konfiguration.
- Kontakt über E-Mail; keine Datenbank oder API-Schlüssel für den lokalen Start erforderlich.

## Lokal starten

Voraussetzung: Node.js 22 LTS oder neuer und npm.

```sh
npm ci
npm run dev
```

Danach http://localhost:3000 öffnen. Beim Build lädt `next/font` die verwendeten Google Fonts herunter; dafür wird Internetzugriff benötigt.

## Prüfen und bauen

```sh
npm run lint
npx tsc --noEmit
npm run build
```

Das Projekt verwendet `output: "export"`. Der fertige statische Stand liegt in `out/`; `npm start` ist dafür nicht geeignet. Zum lokalen Prüfen kann Python 3 verwendet werden:

```sh
python -m http.server 4322 --bind 127.0.0.1 --directory out
```

Danach http://localhost:4322/ öffnen. Auf Windows gegebenenfalls `py` statt `python` verwenden.

## Orientierung im Code

| Pfad | Aufgabe |
|---|---|
| `src/app/` | Seiten, Layout, Metadaten und rechtliche Seiten |
| `src/components/sections/` | Abschnitte der Startseite |
| `src/components/ui/` | Wiederverwendbare Schaltflächen und Gestaltungselemente |
| `src/styles/platzmacher-tokens.css` | Farben, Abstände und Typografie |
| `public/` | Website-Bilder und Markenassets |

Für einen Einstieg in die Umsetzung: `src/app/page.tsx`, anschließend `src/components/sections/HeroSection.tsx` und die UI-Komponenten lesen.

## Einordnung

Dies ist eine eigenständige Portfolio-Kopie mit neuer Historie. Sie enthält den freigegebenen Website-Code und die zugehörigen Assets. Der Produktivbetrieb wird separat verwaltet. Kontaktdaten wurden durch Demo-Platzhalter ersetzt. Die rechtlichen Unterseiten zeigen ausschließlich einen Demo-Hinweis und sind keine Vorlage für den produktiven Einsatz.

Die Erstellung erfolgte mit KI-Unterstützung. Dieses Repository dient dazu, die konkrete Umsetzung und ihre Struktur nachvollziehbar zu machen.

## Nutzung der Inhalte

Code und Assets werden mit Erlaubnis als Arbeitsprobe gezeigt. Es wird keine pauschale Open-Source-Lizenz für die Weiterverwendung von Code, Bildern, Logos oder Kundentexten erteilt. Für eine andere Nutzung bitte die jeweiligen Rechteinhaber kontaktieren. Abhängigkeiten behalten ihre eigenen Lizenzen.

**Demo-Daten:** In dieser Arbeitsprobe sind echte Ansprechpartner, Anschriften und E-Mail-Empfänger entfernt. `demo@example.invalid` ist keine erreichbare Adresse. Die produktive Website ist oben separat verlinkt.
