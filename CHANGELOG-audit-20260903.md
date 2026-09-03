# Audit-rettelser 3. september 2026 (oven på rensepakken samme dag)

Drop-in: erstat repoets filer, commit og push. Kun kode/metadata – ingen brødtekst er ændret.

## Rettet i denne zip
- FAQPage-skema: 10 spørgsmål, der ikke findes synligt på siden, er fjernet (billigste 4, elitebilist 3, ansvarsforsikring 2, kaskoforsikring 1). Google kræver at skema-FAQ matcher synligt indhold.
- Datoer: 39 sider havde datePublished senere end dateModified og/eller to forskellige dateModified i samme side. Nu én datePublished (tidligste) og én dateModified (seneste) pr. side. 22 sitemap-lastmod og 2 synlige bylines (elitebilist, suzuki/across) er rettet, så synlig dato = skema = sitemap.
- 12 meta descriptions, der sluttede midt i en sætning ("...Sammenlign tilbud og spar"), er afsluttet.
- og:locale="da_DK" manglede på 64 sider – tilføjet.
- /artikler/page/2–6/: og:url pegede på /artikler/ – peger nu på siden selv.
- .htaccess: /index.html i roden redirectede ikke til / (regex krævede en mappe foran). Rettet.
- .htaccess: reglerne for "grønt-kort" og "år" var skrevet URL-encoded (%C3%B8) – Apache matcher den dekodede sti, så de virkede aldrig. Begge varianter er nu med.
- .htaccess: /suzuki-bilforsikring/ (gammelt link, stadig i Googles indeks) → 301 til /suzuki/.

## IKKE rettet – kræver handling på serveren (se rapport)
- /billeder/02/, /03/, /04/, /06/, /07/ findes ikke på serveren. 158 og:image/skema-billeder giver 404 (bl.a. biler.png på 45 sider og forfatterfotoet). Upload WordPress' uploads/2026/{02,03,04,06,07} til public_html/billeder/.
- De 6 nye webp i billeder/ i denne zip skal uploades manuelt (deploy.yml og .gitignore udelader billeder/).
- 25 titles > 60 tegn og 18 descriptions > 160 tegn – redaktionelt valg.

## /trods-rki/ – genopbygget (3. sep. 2026)
- Siden er skrevet forfra som ren artikel: H1, kort svar, 7 tabeller, 2 nummererede lister, 9 FAQ som H3+P, 29 interne links, 2 tekst-CTA-links. Ingen hero-boks, ingen farvede bokse, ingen kort. 88 KB → 45 KB.
- Struktur: kort svar → nøgletal → rettigheder → selskaber → priser → 7 trin → dokumentation → eksisterende police → ud af RKI → 8 FAQ → læs også.
- Skema: WebPage, BreadcrumbList, Article, FAQPage (8 spørgsmål = de 8 synlige). HowTo fjernet (giver ikke længere rich results).
- Title 58 tegn, description 145 tegn, og:image = /billeder/trods-rki.webp (ligger i zippen – skal uploades manuelt til billeder/).

## Runde 3 (3. sep. 2026, aften)
- Sticky-bar (bund-CTA): v2.js observerede `.plate` – og fandt sin egen plade inde i sticky-baren. Når baren gled ind, forsvandt pladen fra viewport, baren gled ud, pladen kom ind … uendelig flimren. Nu: observerer kun plader uden for baren, viser først efter 320 px scroll, skjuler når footeren er synlig. Cache-bust: v2.js og site.css → ?v=20260904 på alle 326 sider.
- site.css: box-shadow-typo (`0-6px`) rettet. Tre linjer til tabelombrydning i artikler flyttet fra /trods-rki/ ind i site.css, så alle artikelsider får dem.
- /trods-rki/: standard-hero tilbage (hubhero + nummerplade). Ny tabel "ansvarsforsikring med RKI selskab for selskab" – 12 selskaber, standardpris → RKI-interval, ansvar/kasko-status. 2.300 ord, 8 tabeller.
- 13 selskabssider (alka, alm-brand, aros, codan, fdm, forsia, gjensidige, if, topdanmark, tryg, tjm, abcforsikring, gf): 
  - Dubletter fjernet: hver side havde et påhængt art-in-blok med "Er X det rigtige valg for dig?" og "Skadeforløbet hos X", som allerede fandtes i hovedindholdet (17 blokke fjernet, verificeret mod hovedindholdet – tjm/gf fik deres beholdt, da der ikke var dubletter).
  - Ny tabel "X mod alle selskaber: priser 2026" – alle 13 selskaber, sorteret efter ansvarspris, eget selskab fremhævet, med links. Bygget af sitets egne standardpriser.
  - Ny tabel "Hvad koster X for din profil?" – 5 profiler (18 år, Indre København, 0 skadefri år, høj selvrisiko) beregnet af sidens egne profil-effekter. (De 10 sider med standardpris-tabel.)
  - Ny "Datagrundlag og metode"-blok (som Samlino har, med kilder og link til redaktionel metode).
  - /alka/: konkurrent-tabellen listede Alka to gange – rettet.
  - Forfatterboksens `<h2>Emil Rostgaard Clausen</h2>` (11 sider) → `<p>`; et navn er ikke en sektionsoverskrift.
- Coop mangler standardpris-tabel og er derfor ikke med i markedstabellen – tilføj en ansvarspris, så tager jeg den med.
