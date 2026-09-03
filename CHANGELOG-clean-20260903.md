# Rensepakke 3. september 2026 (bygger oven på SEO-pakken fra 2. september)

Drop-in: erstat repoets filer med denne mappe, commit og push. Indholdet (tekst, overskrifter, skema-datoer) er uændret – kun kode.

## Ét stylesheet
- `v2.css`, `v2-all.css` og `v2-shared.css` er erstattet af én fil: `assets/site.css` (112 KB minificeret, ~15 KB over linjen med brotli). Alle 326 sider peger på den; de gamle filnavne 301-redirectes i `.htaccess`.
- 533 nye hjælpeklasser i site.css erstatter 7.145 `style=""`-attributter i HTML'en. Der er nu ingen inline styles tilbage (11 sidder inde i SVG-ikoner og er bevidst urørt).

## Sidespecifik CSS (de 160 sider med egen `<style>`)
- 3.961 regler, der var identiske med site.css (blot med `!important`), er fjernet.
- 2.194 regler, hvis selektorer ikke findes på siden, er fjernet.
- Resten er minificeret. Samlet: 1,72 MB → 1,37 MB.
- Rettet en ægte fejl: `calc(-50vw+50%)` uden mellemrum er ugyldig CSS, som browseren har ignoreret. Nu `calc(-50vw + 50%)`.

## FAQ
- 713 spørgsmål/svar i fire forskellige accordion-varianter (bfna, faq-item, kg, q) er konverteret til native `<details class="qa">`/`<summary>`. Svarene er nu i DOM'en uden `display:none` og uden JavaScript – det er den form, Google og AI Overviews læser bedst.
- 93 tilhørende toggle-funktioner er fjernet fra sidernes scripts.

## Ikoner
- 4.495 gentagne inline-SVG'er er erstattet: hvert ikon defineres én gang pr. side som `<symbol>` og bruges via `<use>`.

## Scripts
- Cookie-samtykke-scriptet (identisk på alle sider) er flyttet ind i `v2.js`. Consent-default og gtag-config er samlet i ét head-script.
- Alle 636 inline-scripts minificeret med terser. `v2.js` 12 → 8 KB (den gamle `.q-btn`-FAQ-handler er fjernet).

## HTML
- Alle kommentarer fjernet, whitespace kollapset, tomme attributter fjernet.
- To sider (citroen/e-c4, e-c5-aircross) havde `href=\'…\'` med backslashes i kildekoden – rettet.

## Resultat
- Samlet HTML: 18,5 MB → 16,9 MB. Median side: 53 → 50 KB.
- Det, der er tilbage, er skabelonernes struktur (36 %), tekst (28 %), JSON-LD (8 %) og den sidespecifikke CSS (8 %). Det kan kun slankes yderligere ved at genopbygge skabelonerne, og det ville ændre siderne så meget, at Google skal genvurdere dem igen. Ikke anbefalet nu.

## Kontrol efter kørsel
Én H1 pr. side, ingen canonical-fejl, alt JSON-LD validerer, ingen døde interne links, ingen billeder uden alt, ingen side har mistet tekst.
