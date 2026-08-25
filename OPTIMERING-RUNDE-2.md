# Bilforsikringer.nu — runde 2: intern linkarkitektur og on-page
**25. august 2026 · alle 319 sider gennemgået**

Denne runde bygger oven på den tekniske oprydning fra runde 1. Fokus: at få dine backlinks til rent faktisk at nå frem til de sider, der skal rangere.

---

## 1. Intern linkarkitektur — hovedindsatsen

### Problemet
Fordelingen af interne links var binær. 37 sider lå i navigation og footer og fik 317-318 links hver. De resterende 270 sider fik i median 5 links, og 85 af dem fik 3 eller færre. Blandt de 37 nav-sider lå `/om-os/`, `/privatlivspolitik/` og `/cookiepolitik-eu/` — sider der ikke skal rangere på noget.

Konsekvensen: backlinks til domænet samlede autoritet på forsiden, som fordelte den til 37 sider. Alt andet — 146 bilmodelsider, artikler, ordbogstermer — fik smuler. Derfor sad de på side 2-3 uanset hvor gode dine backlinks var.

### Løsningen
Jeg byggede en link-motor der for hver side beregner de mest relevante målsider ud fra en vægtet TF-IDF-model (title og H1 vægtes 6×, H2/H3 2×, brødtekst 1×), med bonus for søskendemodeller inden for samme bilmærke og for tematisk match mod hub-siderne. Oven i lægges en equity-bonus, der prioriterer underlinkede sider — men kun som tiebreaker mellem sider der i forvejen er relevante. Der er sat et relevansgulv, så ingen side får links til noget usammenhængende.

Derudover er der bygget syv redaktionelt kuraterede emneklynger, hvor siderne krydslinker indbyrdes:

| Klynge | Sider |
|---|---|
| Andre køretøjer | erhverv, varevogn, taxa, lastbil, bus, motorcykel, veteranbil, selvstændige, VW Caddy |
| Skade og uheld | trafikulykke, bagfra-påkørsel, biltyveri, vildtskade, kørt galt i andens bil, bule i andens bil, hærværk, parkeringsskade, totalskade, indbrud, stenslag, motorhavari |
| Elbil i drift | elbil, lade hjemme, lade på tankstation, batterilevetid, hvad koster elbil om året, Tesla dyrere, brugt Tesla, elbil vs. benzin, dyreste elbiler, mest solgte elbiler |
| Pris og besparelse | billigste, spar penge, priser stiger 2026, dyreste fejl, gennemsnitspris, postnummer, månedlig betaling, selvrisiko, bonusklasse, elitebilist |
| Bil og ejerskab | brugt bil, sælge bil, import, flest skader, mest pålidelige, km på literen, sove i bil, vinterdæk, GAP |
| Hvem kører bilen | udlån til ven, låner bilen ud, lånebil, delebil, udenlandsk kørekort, køre uden forsikring, trods RKI, kilometerforsikring |
| Unge bilister | unge, 18-årige, 17-årige, billigste biler under 25, første bil efter kørekort, 10 billigste biler |

Plus krydslinks mellem alle 34 mærke-hubs og mellem alle 27 ordbogstermer.

Links er indsat i `nav.art-rel`-modulet, som allerede fandtes i temaet og har CSS i `v2.css`. På 109 sider er der føjet til det eksisterende modul; på 187 sider er der oprettet et nyt, placeret før den afsluttende CTA-blok. Ankertekster er afledt af målsidens H1 og beskåret naturligt — ingen gentaget exact-match.

### Resultatet

| Måltal (ikke-nav-sider, 270 stk.) | Før | Efter |
|---|---|---|
| Median interne links ind | 5 | **13** |
| 25. percentil | 3 | **10** |
| Laveste antal | 1 | **5** |
| Sider med ≤3 links ind | 85 | **0** |
| Top-20 siders andel af alle links | 45 % | 41 % |
| Interne links i alt | 13.972 | 15.604 |

1.642 nye kontekstuelle links. Ingen brudte.

---

## 2. Kannibalisering

**`/kaskoforsikring/`** (3.333 ord) havde titlen *"Kaskoforsikring: Hvornår kan det ikke længere betale sig?"* — altså optimeret til et long-tail-spørgsmål, selvom H1 targeter hovedsøgeordet. Samtidig lå `/kaskoforsikring-hvornaar-kan-det-betale-sig/` (915 ord) med næsten identisk titel. To sider konkurrerede om samme søgeintention, og ingen af dem vandt.

- `/kaskoforsikring/` → **"Kaskoforsikring 2026 — pris, dækning og billigste selskab"** (ejer hovedsøgeordet)
- `/kaskoforsikring-hvornaar-kan-det-betale-sig/` → **"Kan kasko betale sig? Regnestykket på din bil (2026)"** (ejer spørgsmålet)

Samme mønster løst for to andre klynger:

- `/leasing/` → *"Leasingforsikring 2026 — krav, pris og afleveringskasko"*, mens `/ordbog/leasingforsikring/` er gjort rent definitorisk
- `/ordbog/selvrisiko/` → *"Selvrisiko — definition og betydning | Ordbog"*, så den ikke længere konkurrerer med den 2.193 ord lange `/selvrisiko-paa-bilforsikring/`

---

## 3. Titler

41 titler omskrevet. Tre kategorier:

**Spildt brand-suffiks.** `| Bilforsikringer.nu` æder 21 tegn i et felt på cirka 60. Fjernet fra `/forsikringsselskaber/`, `/redaktionel-metode/`, `/emil-clausen/`, `/artikler/`, `/bilmaerker/`, `/ordbog/`, `/volvo/`.

**Titel matchede ikke H1.** `/erhverv/` hed *"Forsikring Erhverv | Skræddersyede Forsikringer til Virksomheder"* i title, men *"Bilforsikring erhverv 2026 — firmabiler og varebiler"* i H1. Nu ensrettet. Samme for `/ansvarsforsikring/`, `/beregn/`, `/audi/`, `/bmw/`, `/ford/`, `/dacia/`, `/lexus/`, `/cupra/`.

**For lange.** 15 model- og guidesider beskåret til under 60 tegn uden at miste hovedsøgeordet.

`og:title` og `twitter:title` er synkroniseret på alle 41, og Yoast-grafens `WebPage.name` følger med. Tilbage er 12 titler på 63-65 tegn — de er velskrevne og ligger i grænselandet, så de er bevidst ikke rørt.

---

## 4. Stavefejl

- **forsikrinng** → forsikring (7 forekomster, bl.a. i H1 på `/volkswagen/` og i ankertekster til `/cupra/`)
- **forvoldr** → forvolder (`/udlaan-af-bil-til-ven/`)
- **minimumsselvriskoen** → minimumsselvrisikoen (`/audi/q2/`)

---

## 5. Sitemap

Alle 307 indekserbare URL'er har fået `lastmod` 2026-08-25, da alle har ændret indhold. De 12 noindex-sider er uændret.

---

## Kvalitetskontrol

Kørt på alle 319 filer efter ændringerne:

- Præcis ét `<title>` og ét `<h1>` pr. side — ingen afvigelser
- Canonical på alle sider
- 0 ugyldige JSON-LD-blokke
- 0 brudte interne links
- Alle `nav.art-rel`-moduler ligger korrekt inde i `<main>`
- Gennemsnitlig sidestørrelse 51,7 KB (var 53,3 KB før runde 1)

---

## Hvad der stadig mangler — og som jeg ikke kan gøre for dig

**1. Analytics.** Stadig ingen måling ud over Search Console. Uden en anden datakilde kan du ikke se, om de interne links flytter noget, og du kan ikke måle konvertering til leads. Plausible eller Fathom kræver ikke cookiesamtykke.

**2. Søgeordsdata.** Jeg har optimeret ud fra sidernes indhold, ikke ud fra hvad de faktisk rangerer på. Med en eksport fra **Effektivitet → Søgetermer** kan link-planen målrettes mod de sider, der ligger på position 8-15 — dem hvor 2-3 positioners fremgang giver resultat inden for uger.

**3. Blokerende CSS.** 104 sider indlæser både `v2.css` (45 KB) og `v2-shared.css` (86 KB). At slå dem sammen kræver at CSS-kaskaden gennemgås manuelt — det kan jeg ikke gøre blindt uden at risikere at ødelægge layoutet.

**4. Prisdata.** Sidernes priser er redaktionelle estimater, efterprøvet juli 2026. I en prissammenligningsniche er faktiske, verificerbare tal det stærkeste differentieringssignal, der findes — og det er præcis den type originalitet, Google belønner efter de seneste opdateringer.

## Hvad du skal forvente

Interne links virker ikke fra den ene dag til den anden. Google skal genkravle siderne, og PageRank omfordeles over uger, ikke dage. Send sitemappet i Search Console efter deploy, og mål tidligst om tre uger. Tag et skærmbillede af dine nuværende tal i dag, så du har et referencepunkt.
