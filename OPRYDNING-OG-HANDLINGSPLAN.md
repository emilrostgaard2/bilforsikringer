# Bilforsikringer.nu — teknisk oprydning og handlingsplan
**Udført 25. august 2026 · gennemgang af alle 325 HTML-sider i deploy-pakken**

---

## Diagnose af faldet i Search Console

**Grafen for "Generativ AI" (44,2 t eksponeringer) skal ignoreres.** Google har på deres officielle data-anomalies-side bekræftet en logningsfejl i Generativ AI-rapporten for data fra 13.–17. august 2026. John Mueller bekræftede det offentligt 17. august. Fejlen påvirker kun logningen, ikke den reelle synlighed, og rapporten så ud til at rette sig omkring 20. august. Der er ingen handling at foretage her.

**Faldet i almindelige klik og eksponeringer** falder tidsmæssigt sammen med Google August 2026 spam update, som kørte 18.–21. august 2026. Google har præciseret, at denne udrulning ikke specifikt retter sig mod link-spam eller site reputation abuse — brug derfor ikke tid på backlink-oprydning.

To ting komplicerer aflæsningen:

1. Sitet blev migreret fra WordPress til statisk HTML 8.–9. august, altså ni dage før spam-opdateringen. Google skulle genkravle og revurdere 307 URL'er midt i en algoritmeændring.
2. De sidste 2–3 dage i Search Console er altid ufuldstændige. En del af det stejle fald yderst til højre i grafen forsvinder af sig selv.

**Vurdering:** Sitet ligner ikke et mål for en spam-opdatering. Median-sidelængden er 1.946 ord, der er ingen dublet-titles, ingen brudte interne links, affiliate-links er korrekt markeret `sponsored nofollow noopener`, og andelen af genbrugt boilerplate-tekst er median 1 %. Kun ordbogssiderne ligner hinanden i nævneværdig grad (Jaccard 0,30–0,34), og det er inden for det normale for en begrebsordbog. Sandsynligvis en falsk positiv.

---

## Rettet i denne pakke

| # | Problem | Omfang | Handling |
|---|---------|--------|----------|
| 1 | Hele JSON-LD-blokken indsat to gange på samme side — op til 5× BreadcrumbList, 4× Article, 2× FAQPage, 2× HowTo | 128 sider | 564 byte-identiske blokke fjernet |
| 2 | Efterladt Yoast-schema fra WordPress (`class="yoast-schema-graph"`) der konkurrerede med det nye håndlavede schema | 258 sider | Dublet-BreadcrumbList fjernet fra Yoast-grafen, `breadcrumb`-reference ryddet, `dateModified` synkroniseret på 91 sider |
| 3 | Modstridende Article- og BreadcrumbList-entiteter med forskelligt indhold | 95 sider | 66 ekstra Article + 29 ekstra BreadcrumbList fjernet; den bevarede Article er den, hvis `headline` matcher sidens H1 bedst |
| 4 | Breadcrumb pegede på URL'er der ikke findes (fx `/tesla/models/`, `/lastbil/`) eller ikke på sidens egen URL | 55 rettelser | Sidste led peger nu altid på sidens egen kanoniske URL |
| 5 | Flere modstridende `<title>` og `<meta description>` i `<head>` — `/fiat/500-pris/` havde fem af hver | 15 sider | Den første beholdt (den Google reelt bruger), resten fjernet |
| 6 | `<title>`, `<link rel=canonical>`, `<meta robots>` og `og:`-tags placeret nede i `<body>` | 15 sider | 65 tags fjernet; `<title>` inde i `<svg>` er bevaret |
| 7 | Titles med gentaget frase, fx *"Selvrisiko på bilforsikring → Hvad betyder det? Guide — hvad betyder det? \| Forsikringsordbog"* (93 tegn) | 12 sider | Forkortet til under 62 tegn |
| 8 | Meta descriptions op til 208 tegn | 24 sider | Afkortet til ≤158 tegn ved sætningsgrænse |
| 9 | Sitemap angav `lastmod` 2026-08-09 på alle 307 URL'er, selvom siderne selv angav juni 2026 — modstridende signal | hele sitemap | Ægte `lastmod` hentet fra sidernes `dateModified`; `priority` fjernet (Google ignorerer feltet) |
| 10 | `/author/admin/` med 6 undersider duplikerede `/artikler/` og eksponerede brugernavnet "admin" | 6 sider | Mapperne slettet, 301 til `/emil-clausen/` tilføjet i `.htaccess` |

**Resultat:** 767 dublerede schema-enheder → 0. Alle 842 JSON-LD-blokke validerer. 323 af 325 sider har uændret ordtælling — der er ikke fjernet indhold. De to sider med ændret tælling (`/suzuki/across/`, `/suzuki/celerio/`) mistede kun de fejlplacerede `<title>`-tags fra body.

---

## Skal gøres manuelt — prioriteret

### 1. Sæt analytics op (vigtigst)
Ingen af de 325 sider indeholder GA4, Google Tag Manager, Plausible eller andet. Derfor står du nu med to grafer og ingen mulighed for at afgøre, om trafikken faktisk faldt, eller om det kun er Search Console-rapporteringen. Uden en anden datakilde kan næste fald heller ikke diagnosticeres.

Overvej Plausible eller Fathom frem for GA4 — de kræver ikke cookie-samtykke, og sitet har i dag intet samtykkebanner.

### 2. Løft CTR, ikke placeringer
Nøgletallene er 333.000 eksponeringer, 1.780 klik, CTR 0,5 %, gennemsnitsposition 12,1. Position 12 er side 2. Med 333.000 eksponeringer ville en CTR på 1,5 % — stadig lavt for side 2 — give omkring 5.000 klik.

Det er her væksten ligger, ikke i spam-opdateringen. Start med at hente fanen **Effektivitet → Søgetermer** og sortere efter eksponeringer med under 1 % CTR.

### 3. Omskriv 36 for lange titles
Se `titles-til-omskrivning.csv`. De bliver alle afkortet i søgeresultaterne. Værst er ordbogssiderne, hvor suffikset `| Forsikringsordbog` æder 20 tegn — overvej at skifte det til `| Ordbog` globalt.

### 4. Reducer blokerende CSS
104 sider indlæser både `v2.css` (45 KB) og `v2-shared.css` (86 KB) = 131 KB render-blokerende CSS. Enten slå dem sammen til én fil pr. sidetype, eller inline det kritiske og indlæs resten asynkront.

### 5. Hold datoerne ærlige
Forsiden siger "Opdateret 8. august 2026", men de fleste siders `dateModified` er juni 2026, og flere synlige datoer siger april 2026. I en prissammenligningsniche er friskhed et ranking-signal — men et forkert opdateringsstempel er værre end et gammelt. Opdater indholdet, og lad datoen følge med.

### 6. Vent med større omskrivninger
Udrulningen sluttede 21. august. Vurder på ugedata, ikke dagsdata, og lad være med at ændre indholdsstrategi før du har mindst to hele uger efter 21. august at måle på. Deploy de tekniske rettelser nu — de er forbedringer uanset hvad der skete.

---

## Ting der viste sig at være i orden

Værd at vide, så du ikke bruger tid på dem:

- **`/billeder/`-mappen mangler ikke.** 94 filreferencer peger på `/billeder/`, som ikke er i pakken — men det er med vilje: `.gitignore` og deploy-workflowet ekskluderer den, fordi billederne ligger direkte på serveren.
- **Affiliate-links er korrekt håndteret.** Alle 593 links til findforsikring.dk har `rel="sponsored nofollow noopener"`.
- **Ingen brudte interne links** på tværs af ~26.000 links.
- **2.410 billeder, ét uden alt-tekst.**
- **Kanoniske URL'er er korrekte** på alle 307 indekserbare sider — ingen peger et forkert sted hen.
- **Paginering** (`/artikler/page/N/`, `/category/artikel/page/N/`) er korrekt sat til `noindex, follow`.

---

## Billeder jeg mangler for at komme videre

1. **Effektivitet → Sider**, sorteret efter klik, sidste 28 dage vs. forrige 28 dage — viser om faldet rammer bredt eller kun bestemte sidetyper.
2. **Effektivitet → Søgetermer**, samme sammenligning — tabte kommercielle søgeord vs. bredt fald betyder to vidt forskellige ting.
3. **Indeksering → Sider** — hvor mange URL'er er indekseret vs. ikke indekseret efter migreringen 8.–9. august.
4. **Brugeroplevelse → Core Web Vitals**, mobil.
5. **Forbedringer / Rich results** — eventuelle fejl på breadcrumbs og FAQ ville bekræfte schema-dubletterne ovenfor.
