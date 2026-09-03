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
