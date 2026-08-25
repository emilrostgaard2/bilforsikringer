# Bilforsikringer.nu — runde 3: fuld teknisk gennemgang
**25. august 2026 · alle 319 sider, sitemap, .htaccess og robots.txt**

---

## ⚠️ Det vigtigste fund: 8 levende sider blev 301-redirectet væk

`.htaccess` indeholdt 51 redirect-regler fra migreringen. Otte af dem pegede væk fra sider, der **findes, er indekserbare og står i sitemap.xml**:

| URL | Blev sendt til | Sidens titel |
|---|---|---|
| `/dacia/sandero/` | `/dacia/` | Dacia Sandero forsikring 2026 |
| `/ford/fiesta/` | `/ford/` | Ford Fiesta forsikring 2026 |
| `/kia/ev6/` | `/kia/` | Kia EV6 forsikring 2026 |
| `/kia/sportage/` | `/kia/` | Kia Sportage forsikring 2026 |
| `/nissan/qashqai/` | `/nissan/` | Nissan Qashqai forsikring 2026 |
| `/renault/clio/` | `/renault/` | Renault Clio forsikring 2026 |
| `/seat/ateca/` | `/seat/` | Seat Ateca forsikring 2026 |
| `/seat/ibiza/` | `/seat/` | Seat Ibiza forsikring 2026 |

Mekanismen: sitemappet bad Google indeksere URL'en, Google hentede den, serveren svarede 301, og siden kunne aldrig indekseres. Alt indhold på dem var reelt usynligt for Google. I Search Console vil de have stået under *"Side med omdirigering"*.

Det er otte af de mest søgte bilmodeller i Danmark — Clio, Fiesta, Ibiza, Qashqai, Sandero. Reglerne er fjernet.

Derudover pegede 98 interne links mod de samme 301-URL'er, plus `/lastbil/`, `/Lastbilforsikring/`, `/tesla/models/` og `/if` (uden slash). Alle er nu rettet til at pege direkte på slutmålet, så ingen crawl-budget spildes på hop.

---

## Dubletter

Kontrolleret på tværs af alle 307 indekserbare sider:

| Felt | Dubletgrupper |
|---|---|
| `<title>` | 0 |
| `meta description` | 0 |
| `og:title` | 0 |
| `og:description` | 0 |

Der var ingen ægte dubletter tilbage efter runde 1-2. Til gengæld var **og-tags og titler ude af sync**: 9 sider havde et `og:title` fra før titelomskrivningen (fx `/ordbog/parkeringsskade/` hvor og:title stadig indeholdt den gamle 92-tegns titel med gentaget frase), og 25 sider havde afvigende `og:description`. Alle er nu synkroniseret på tværs af `<title>`, `og:title`, `twitter:title`, `meta description`, `og:description` og `twitter:description`.

53 sider manglede `twitter:card` helt. 318 manglede `twitter:image`. Begge dele er tilføjet.

13 descriptions over 160 tegn er afkortet ved sætningsgrænse. 6 for korte (82-108 tegn) er skrevet om til fuld længde.

---

## Schema

**596 noder forbedret.** Konkret:

- **120 Article-noder manglede `image`** — nu udfyldt fra sidens `og:image`
- **45 `author`-noder manglede `url`** — peger nu på `/emil-clausen/`, så forfatterentiteten kan kobles på tværs af sitet
- **548 noder manglede `@id`** — alle Article, FAQPage, HowTo, BreadcrumbList og ItemList har nu stabile identifikatorer (`#article`, `#faq`, `#howto`, `#breadcrumb`, `#list`), så Google kan koble entiteterne sammen i stedet for at se dem som løsrevne fragmenter
- **2 `mainEntityOfPage` pegede på URL'er der ikke findes** (`/lastbil/`, `/tesla/models/`)
- **Organization manglede `sameAs`** — nu koblet til LinkedIn-profilen
- **WebSite manglede `publisher` og `inLanguage`** — nu koblet til Organization via `@id`
- **34 sider havde slet intet WebPage-schema** — `/forsikringsselskaber/`, `/bilmaerker/`, `/ordbog/` og `/artikler/` har fået `CollectionPage`; ordbogstermerne og de juridiske sider har fået `WebPage`, alle koblet til `#website` og `#organization`
- **1 Article manglede `dateModified`**, 1 manglede `mainEntityOfPage`
- **4 sider havde modstridende `dateModified`** i to forskellige noder (Suzuki-siderne havde både 10. og 16. april) — ensrettet til nyeste

Resultat: **0 ugyldige JSON-LD-blokke, 0 manglende obligatoriske felter, 0 noder uden `@id`.**

---

## Crawlbarhed

**`.htaccess`** har fået kanoniske vært-regler øverst, så samme indhold ikke kan nås på flere URL'er:

- HTTP → HTTPS
- `www.` → uden www
- `/side/index.html` → `/side/`
- `/side` → `/side/`

HTTPS-reglen har en `X-Forwarded-Proto`-betingelse, så den ikke kan udløse redirect-loop bag Simplys SSL-terminering.

**`robots.txt`** blokerer nu `/author/` og `/category/` (WordPress-rester) samt URL'er med `?utm_` og `?fbclid`, der ellers kan skabe dublet-URL'er i indekset.

**Sitemap:** 307 URL'er = præcis antallet af indekserbare sider. Ingen noindex-sider medtaget, ingen indekserbar side mangler, ingen URL rammer en redirect, alle har `lastmod` 2026-08-25.

**Sikkerhedsheadere:** `X-Frame-Options` og `Permissions-Policy` tilføjet ved siden af de eksisterende.

---

## Hastighed

- **104 sider indlæste to blokerende stylesheets** (`v2.css` 45 KB + `v2-shared.css` 86 KB). Filerne havde kun 13 overlappende selektorer ud af 791, så de er sammenlagt til `v2-all.css` i korrekt kaskade-rækkefølge. Nu indlæser **alle sider præcis ét stylesheet.**
- **27 billeder manglede `width`/`height`** — dimensionerne er læst ud af de faktiske filer og indsat. Det fjerner layout-hop (CLS) på forsiden og `/forsikringsselskaber/`.
- **1 billede manglede alt-tekst** (YouTube-thumbnail på `/kaskoforsikring/`).
- Cache-busting bumpet til `?v=20260825` på CSS og JS, så besøgende ikke sidder fast på gamle filer med et års cache.
- De 17 billeder uden `loading="lazy"` er bevidst uden — de har `fetchpriority="high"` og er LCP-billeder. Korrekt som det er.

---

## Slutstatus

| Kontrol | Resultat |
|---|---|
| Dublet titles / descriptions / og-tags | 0 |
| Ugyldig JSON-LD | 0 af 842 blokke |
| Schema-noder uden `@id` | 0 |
| Schema med manglende obligatoriske felter | 0 |
| Interne links der rammer en 301 | 0 |
| Brudte interne links | 0 |
| Interne links uden afsluttende slash | 0 |
| Sider med flere `<title>` eller `<h1>` | 0 |
| Billeder uden alt | 0 |
| Billeder uden width/height | 0 |
| Sider med >1 blokerende stylesheet | 0 |
| Sitemap-URL'er uden fil, eller noindex i sitemap | 0 |
| Datoer i fremtiden eller modstridende | 0 |

---

## Læs dette inden du deployer

**Test `.htaccess` først.** De nye rewrite-regler er den eneste ændring, der teoretisk kan tage sitet ned. Hvis Simply terminerer SSL på en usædvanlig måde, kan HTTPS-reglen give et loop — derfor `X-Forwarded-Proto`-betingelsen. Åbn forsiden umiddelbart efter deploy. Ser du "for mange omdirigeringer", så slet de fire linjer under *"Kanonisk vært"* med HTTPS-reglen; resten er ufarligt.

**De 8 genåbnede sider.** Send dem manuelt til indeksering i Search Console under *Undersøgelse af webadresse* → *Anmod om indeksering*. De har været utilgængelige for Google og skal genopdages. Det er otte URL'er, det tager to minutter, og det er den enkeltstående handling med størst forventet effekt.

**Hvad der stadig ikke er løst:** analytics mangler fortsat, og jeg har stadig ikke set dine søgeordsdata. Priserne på siderne er redaktionelle estimater fra juli 2026 — i denne niche er verificerbare, faktiske tal det stærkeste kvalitetssignal der findes, og det er den eneste tilbageværende post på listen, som teknik ikke kan løse.
