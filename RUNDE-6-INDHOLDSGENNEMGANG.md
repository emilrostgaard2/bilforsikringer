# Runde 6 — indholds- og validitetsgennemgang
**26. august 2026 · alle 319 sider**

Denne runde kiggede på ting, de tidligere runder ikke havde rørt: struktureret data mod Googles indholdspolitik, HTML-validitet, ankerlinks, dubletindhold på tværs af sider og faktuelle fejl i indholdet.

---

## 1. FAQ-schema uden synligt indhold — 65 spørgsmål

Googles retningslinjer for FAQPage kræver, at spørgsmål og svar **er synlige for brugeren på siden**. Schema-only FAQ gør siden uegnet til rich results og kan i værste fald udløse en manuel handling for struktureret data-spam.

Jeg gennemgik alle 1.249 FAQ-spørgsmål på sitet og sammenlignede dem med sidernes synlige tekst. 65 spørgsmål på 90 sider fandtes udelukkende i schema.

**Rettet:** de manglende spørgsmål og svar er nu skrevet ind som synlige `Ofte stillede spørgsmål`-sektioner. Teksten kom fra schemaet selv — den var allerede skrevet, den var bare ikke synlig.

Resultat: **1.249 spørgsmål, 0 uden synlig tekst.**

---

## 2. /citroen/ indeholdt Dacia-indhold

Den alvorligste enkeltfejl. Halvdelen af Citroën-siden — 25,6 KB og cirka 1.590 ord — handlede om Dacia. Blokken var **100 % identisk** med indholdsblokken på `/dacia/`.

Konkret indeholdt siden:

- En H2 med teksten *"Dacia bilforsikring 2026 — Danmarks billigste bilmærke at forsikre"*
- Statistikbokse med Sandero- og Duster-priser
- Fire FAQ-spørgsmål i schema, alle om Dacia
- 49 omtaler af Dacia mod 3 af Citroën

For Google var det to URL'er med samme indhold, og for en bruger der søgte på Citroën-forsikring, var det den forkerte bil.

**Rettet:** Dacia-indholdet er fjernet og erstattet med reelt Citroën-indhold — hvad der påvirker prisen på et Stellantis-mærke, gennemgang af C3, ë-C3, ë-Berlingo, C4, C5 Aircross og Berlingo, samt de tre faktorer der flytter mest på prisen. Fire nye FAQ-spørgsmål matcher teksten.

**Vigtigt:** jeg har bevidst **ikke opdigtet prisintervaller** for de enkelte modeller. Siden refererer kun de tal, der allerede stod i sidens egen hero-sektion. Vil du have modelspecifikke priser som på de øvrige mærkesider, skal de skrives ind af dig med rigtige data.

Siden er gået fra 1.716 ord (hvoraf 1.594 handlede om Dacia) til 699 ord om Citroën.

---

## 3. Ankerlinks der ikke virkede

`/billigste-biler-unge-under-25/` havde en indholdsfortegnelse med 8 links, hvoraf **ingen** virkede — sektionerne havde ikke de `id`-attributter, linkene pegede på. `/bmw/5-serie/` havde 6 tilsvarende.

**Rettet:** sektionerne har fået de rigtige `id`-attributter. 0 brudte ankerlinks tilbage.

---

## 4. Dublerede HTML-id'er

Fire sider havde `id="main"` to gange i samme dokument. Ugyldig HTML, og det bryder "spring til indhold"-links for skærmlæsere.

**Rettet.**

---

## 5. Ting jeg tjekkede, som var i orden

Værd at vide, så du ikke bruger tid på dem:

- **Rating- og Review-schema:** findes ikke på sitet. Godt — falske anmeldelser i schema er en af de hyppigste årsager til manuelle handlinger.
- **Mixed content:** ingen `http://`-ressourcer på nogen side.
- **Krydsforurening mellem bilmærker:** ud over Citroën fandt jeg 16 tilfælde, hvor et andet mærke nævnes i en FAQ — men alle var legitime sammenligninger (*"Er A4 billigere at forsikre end BMW 3-serie?"*). Ingen fejl.
- **Nær-duplikerede indholdsblokke:** kun Citroën/Dacia. `/tesla/model-x/` og `/tesla/model-s/` ligger på 89 % lighed, hvilket er acceptabelt for to biler fra samme platform, men kunne differentieres bedre.
- **Tynde sider:** 17 sider under 600 ord, men alle er ordbogsdefinitioner eller juridiske sider, hvor længden er passende.
- **Overskriftshierarki:** 317 sider springer fra h2 til h4. Det er en mindre tilgængelighedsdetalje uden SEO-betydning, og at rette det ville kræve ændringer i sidernes styling. Ikke rørt.

---

## Slutstatus efter alle seks runder

| Kontrol | Resultat |
|---|---|
| FAQ-spørgsmål uden synlig tekst | 0 af 1.249 |
| Ugyldig JSON-LD | 0 af 842 blokke |
| Dublerede schema-enheder | 0 |
| Schema-noder uden `@id` | 0 |
| Dublet titles / descriptions / og-tags | 0 |
| Brudte interne links | 0 |
| Brudte ankerlinks | 0 |
| Interne links der rammer en 301 | 0 |
| Sider med flere `<title>` eller `<h1>` | 0 |
| Dublerede HTML-id'er | 0 |
| Billeder uden alt eller dimensioner | 0 |
| Sider med >1 blokerende stylesheet | 0 |
| Sider med ≤3 interne links ind | 0 |
| Mixed content | 0 |
| PageSpeed mobil | 100/100 |

---

## Hvad der er tilbage

Ikke teknik. To ting:

**Søgeordsdata.** Uden en eksport fra Effektivitet → Søgetermer arbejder al optimering på formodninger om, hvad siderne rangerer på.

**Prisdata.** Sidernes priser er redaktionelle estimater. I en prissammenligningsniche er verificerbare tal det stærkeste kvalitetssignal der findes — og Citroën-siden er nu et konkret eksempel på, hvor det mangler.
