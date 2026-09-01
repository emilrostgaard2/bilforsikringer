# SEO-rettelser 2. september 2026

Alle ændringer er lavet automatisk på tværs af de 326 sider. Drop-in: erstat repoets filer med denne mappe og commit.

## Core Web Vitals
- Første indholdsbillede (LCP-kandidat) på 24 sider: `loading="eager" fetchpriority="high"` + `<link rel="preload" as="image">` i head. Alle øvrige billeder er stadig lazy.
- CSS minificeret med csso: v2.css 47→41 KB, v2-all.css 134→81 KB, v2-shared 86→40 KB. Asset-version bumpet til `?v=20260902` på alle sider (cache-bust).
- Ni ubrugte PNG'er (2–3 MB stk.) slettet fra `billeder/`. De var ikke refereret nogen steder.

## Overskriftsstruktur
- Cookie-boksens `<h2>` → `<p class="bfn-cc-t">` på alle 326 sider (CSS-selector opdateret, samme udseende).
- Forsiden: den generiske FAQ-blok nederst (3 spørgsmål der allerede besvares i hoved-FAQ'en) er fjernet, og de 3 dubletter er fjernet fra FAQPage-skemaet.
- 40 sider med to FAQ-blokke: blok nr. 2 hedder nu "Flere spørgsmål og svar" (indholdet er unikt, så det er bevaret).
- 7 sider med både "Relaterede guides" og den automatiske "Relaterede sider": sidstnævnte hedder nu "Læs også".
- /unge/: fem H2'er omskrevet, så "unge under 25" ikke gentages i hver overskrift.

## Links
- /mg/: fire links til ikke-eksisterende modelsider (mg4, zs, hs, mgs5) er lavet om til ren tekst.
- Forsidens "Relaterede sider" linkede kun til VW T-Roc – nu 8 kontekstuelle links til de vigtigste sider (billigste, unge, kasko, elbil, skift, selvrisiko, gennemsnitspris, selskaber).
- Bemærk: orphan-analysen fra første gennemgang var forkert (den ignorerede modellister i `<nav>`). Reelt er kun /artikler/page/2–6/ uden interne links, og de er allerede `noindex, follow` – det er korrekt håndteret, ingen ændring.

## E-E-A-T og friskhed
- 67 sider uden synlig dato/forfatter har fået en byline under indledningen: "Af Emil Rostgaard Clausen, ansvarshavende redaktør · Opdateret {dato} · Sådan tester vi". Datoen er hentet fra sidens eget `dateModified`, så synlig dato og skema stemmer.
- sitemap.xml: `lastmod` er nu sidens egen `dateModified` (272 URL'er ændret) i stedet for én fælles dato.
- BreadcrumbList-skema tilføjet på 4 sider, der havde synlig brødkrumme men manglede skemaet.

## Sikkerhed/teknik
- `.htaccess`: `Strict-Transport-Security` tilføjet.

## Ikke rørt (kræver redaktionelle valg)
- 25 titles > 60 tegn og 18 meta descriptions > 160 tegn (bl.a. /billigste/ 166 og /ansvarsforsikring/ 172).
- Pages der stadig loader v2-all.css (117 stk.) bruger reelt hero-/artikel-klasser, som ikke findes i v2.css – de kan ikke skiftes uden at brække layoutet. Filen er i stedet gjort 40 % mindre.
- `deploy.yml` udelader stadig `billeder/` – husk at uploade nye billeder manuelt (de seks nye webp i denne zip ligger IKKE på serveren via GitHub).
