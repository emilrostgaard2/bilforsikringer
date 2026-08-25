# Runde 5 — beviset for at .htaccess ikke kører, plus rettelser

**25. august 2026 · baseret på alle tre GSC-eksporter**

## Beviset

De to nye eksporter afgør spørgsmålet endeligt. Jeg klassificerede hver af de 11 "Side med omdirigering" efter hvilken mekanisme der udløste dem:

| Crawlet | URL | Mekanisme |
|---|---|---|
| 16-08 | `/bmw` | Apache DirectorySlash (indbygget) |
| 16-08 | `http://…/` | HTTPS-tvang (host-niveau) |
| 14-08 | `/byd` | Apache DirectorySlash |
| 09-08 | `/tjm` | Apache DirectorySlash |
| **09-08** | `/delkasko/` | **.htaccess-regel** |
| **03-08** | `/firmabil/` | **.htaccess-regel** |
| **20-07** | `/bmw/ix/` | **.htaccess-regel** |
| **20-06** | `/volvo/v90-cross-country/` | **.htaccess-regel** |
| **16-06** | `/artikler/totalskade-bil/` | **.htaccess-regel** |
| **27-04** | `/bonus/` | **.htaccess-regel** |
| 18-04 | `/suzuki-bilforsikring/` | gammel WP-regel |

M�nsteret er skarpt:

- **Hver eneste redirect, der kræver .htaccess, blev crawlet 9. august eller før.**
- **Ingen efter.**
- De eneste redirects, der virker efter 9. august, er Apaches indbyggede DirectorySlash og hostens HTTPS-tvang — som begge fungerer helt uden .htaccess.
- Samtidig fik 25 URL'er med gyldige .htaccess-regler **404** ved crawl 14.–19. august.

Skæringsdatoen er migreringen. Konklusion: den nye `.htaccess` er ikke aktiv på serveren.

`deploy.yml` har nu `set ftp:list-options -a` og `--include-glob '.htaccess'`, som er den mest sandsynlige årsag (lftp lister ikke skjulte filer over FTP uden den indstilling).

## Rettelser i denne runde

### robots.txt — jeg lavede en fejl i går, som er rettet nu

Jeg tilføjede `Disallow: /author/` og `Disallow: /category/`. Det var forkert, og de nye eksporter viser hvorfor.

`/author/admin/` og de 12 pagineringssider ligger under noindex — altså crawlet af Google, som har set noindex-tagget. Havde jeg blokeret dem i robots.txt, kunne Google **ikke længere crawle dem** og dermed ikke se hverken noindex-tagget eller den 301 jeg lagde ind. De ville blive hængende i indekset som "blokeret af robots.txt" i stedet for at forsvinde.

Begge Disallow-linjer er fjernet. Blokering og fjernelse er modsatrettede signaler.

### SearchAction fjernet fra 252 sider

`/?s={search_term_string}` optrådte i din noindex-liste. Kilden var `WebSite.potentialAction.SearchAction` i Yoast-schemaet, som pegede på WordPress' søgefunktion. Den findes ikke længere — det statiske site har ingen søgning. Google blev altså fortalt om et søge-endpoint, der ikke eksisterer.

Fjernet fra alle 252 sider. `?s=` er samtidig blokeret i robots.txt.

## Status på alle tre eksporter

| Kategori | Antal | Efter deploy |
|---|---|---|
| Ikke fundet (404) | 77 | 76 dækket af 301, 1 af 410 |
| Ekskluderet af noindex | 28 | 7 → 301, 14 feeds → 301, 6 bevidst noindex, 1 blokeret |
| Side med omdirigering | 11 | Uændret — det er den ønskede tilstand |

Bemærk igen: 404-tallet falder, men "Side med omdirigering" **stiger** tilsvarende. En URL der før gav 404 og nu giver 301 skifter blot kategori. Det er korrekt, ikke en fejl.

## Testen

Efter deploy: åbn `https://bilforsikringer.nu/peugeot/2008/`

Havner du på `/peugeot/2008-pris/` → .htaccess er aktiv, og alt ovenstående virker.
Får du 404 → filen er stadig ikke på serveren. Upload den manuelt til `public_html/.htaccess` via Simplys filhåndtering med "vis skjulte filer" slået til.
