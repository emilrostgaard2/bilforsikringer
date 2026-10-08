# Bilforsikringer.nu – ny statisk version (22. sep. 2026)

Hele sitet er genereret fra bunden: ny skabelon, nyt design, én CSS-fil og én lille JS-fil. Alle 315 eksisterende URL'er er bevaret 1:1 (backlinks), /artikler/page/2–6 er 301-redirectet til /artikler/.

## Upload
1. Slet alt i GitHub-mappen på din computer UNDTAGEN den skjulte .git-mappe og billeder/.
2. Læg indholdet af zippen ind (vis skjulte filer med Cmd+Shift+. – .htaccess og .github skal med).
3. Commit og push. Deploy tager ca. 8 min.
4. Tjek at /assets/bf-20260922.css findes i file manager.

## Nye sider
/affiliate-oplysning/, /kontakt/, /kilder/ (og /redaktionel-metode/, /emil-clausen/ er skrevet om).

## Design
Schibsted Grotesk (hele sitet) + Spline Sans Mono (nummerpladen) – samme skrifter som det oprindelige brand. Farver: navy #1e2b3a, teal #1f7fa3, grøn CTA #1c9a55, lys baggrund #f5f8fb. Afrundede kort (14 px), bløde skygger, mint "Kort svar"-boks med flueben, tillidsmærker under knappen (Gratis, Ingen binding, Tager 2 minutter).
CTA: nummerpladefelt + grøn knap (hero, midt i artiklen, sticky i højre side på desktop). Formularen sender til FindForsikring med UTM pr. side og placering.
Menu: dropdowns (Bilforsikring, Målgrupper, Selskaber, Bilmærker) – rene <details>-links, crawlbare uden JS, accordion på mobil.
Modelnavne i brødteksten linkes automatisk til modelsiderne (maks. 8 pr. side, første forekomst).

## Bevidst IKKE gjort (kræver redaktionel beslutning)
- Tekstindholdet på de 315 gamle sider er overført og renset (emojis, dubletter, gentagne standardafsnit, udokumenterede "efterprøvet/prissampling"-påstande), men ikke omskrevet. Mange model- og selskabssider indeholder stadig egne prisestimater ("billigst i vores oversigt"). Disse skal gennemgås side for side.
- 158 modelsider: vurder hvilke der har reel søgeefterspørgsel og unikt indhold; resten bør samles på mærkesiden.

## Opdatering 30. sep. 2026 – SEO/E-E-A-T-runde
- YMYL: 186 udokumenterede påstande fjernet på 73 sider ("billigst i vores oversigt", "markedsestimater", Fælles Forsikring-priser, "spar op til 60 %").
- Prisnote ("redaktionelle skøn, ikke tilbud") på 198 mærke-/modelsider med prisintervaller.
- Selvmodsigelsen "vi offentliggør ikke egne prisestimater" erstattet med en præcis formulering.
- Forside, /ansvarsforsikring/, /kaskoforsikring/, /unge/ udvidet (beslutningstabeller, regres, fast bruger/Højesteret, skifteguide, FAQ).
- Kannibalisering: kasko-regnestykket og /laanebil/ har fået egen vinkel; 26 ordbogssider omskrevet til definitionsform med link til hovedguiden.
- Title Case-overskrifter rettet på ca. 30 artikler.
- "Relaterede guides" på 72 artikler; /beregn/, /artikler/, /kontakt/ linket fra forsiden.
- /redaktionel-metode/ og /emil-clausen/ udvidet. Sitemap lastmod opdateret for 296 sider.

## Opdatering 30. sep. 2026 (2) – prioriterede modelsider
Tesla Model Y, Tesla Model 3, Skoda Enyaq, Skoda Elroq, VW ID.4 og VW ID.3 er skrevet om fra bunden:
opfundne forsikringspriser og tal er fjernet og erstattet af kildebelagte fakta (nypris, garanti, leasingkrav,
FSD-godkendelse, salgstal) og konkrete spørgsmål til selskabet. Generator: build_models.py + models_data.py (ikke en del af sitet).

## Opdatering 30. sep. 2026 (3) – modelsider med prisestimater
11 modelsider bygget fra verificerede fakta + gennemsnitspriser fra en ekstern prisportal (senere fjernet helt, se opdatering 8):
Tesla Model Y, 3, S · Skoda Enyaq, Elroq · VW ID.4, ID.3 · Xpeng G6, G9 · Mercedes EQA · Volvo XC40.
Unikke titler/beskrivelser, modelspecifikke H2'er, maks. 16 % tekstoverlap mellem søstermodeller.
Toyota bZ4X tilføjet (Toyota-kampagneforsikring). Mangler: Hyundai Ioniq 5, Skoda Epiq.

## Opdatering (4)
Unik sektionsrækkefølge og unikke H2-overskrifter på alle modelsider. Ny side: VW ID.Buzz. 13 modelsider i alt.

## Opdatering (5)
Nye modelsider: VW Polo (benzin + ID. Polo), VW Golf, Skoda Epiq. 16 modelsider i alt.

## Opdatering (6) – oprydning på hele sitet
20 modelsider uden efterspørgsel 301-omdirigeret til mærkesiden (se .htaccess). Alle ukildede prisintervaller, opdigtede sammenligningsprofiler, "billigst i vores oversigt", rabatprocenter og "spar op til"-påstande fjernet fra samtlige sider. Tomme sektioner og afklippede sætninger ryddet op.

## Opdatering (7)
Prisestimater fra ekstern prisportal (senere fjernet, se opdatering 8) tilføjet på 13 modelsider: Octavia, Fabia, Kodiaq, Citigo, up!, V60, EX30, EX40, EQE, GLC, GLE, AMG, Model X.

## Opdatering (8) – eksterne portalpriser fjernet helt
Alle tal, henvisninger og afledte sammenligninger fra den eksterne prisportal fjernet fra alle sider og fra generatoren (models_data.py). Desuden 486 ukildede pristabeller fjernet (kolonner som "Ansvar/år", "Kasko gns./år" med opdigtede kilder).

## Opdatering (9) – redaktionelle prisestimater
Estimattabeller (egen åben metode, se /redaktionel-metode/#estimater) på alle 138 modelsider, mærkesider og 8 hovedsider, med kursiv note. Genereres af step10_estimates.py – kør den efter build_models.py.

## Opdatering (10)
Omskrevet: Peugeot 208 og 2008 (18 modelsider omskrevet i alt).

## Opdatering (13) – 30. sep. 2026
Omskrevet fra bunden (kun danske kilder, verificeret nypris som estimatgrundlag): Fiat 500, Audi e-tron, Toyota Aygo, Mercedes EQC, Hyundai Ioniq 5, Peugeot 107. 24 modelsider omskrevet i alt.
Generator: build_v13.py + pages_v13.py (ikke en del af sitet).
- "Andre modeller": linktekster normaliseret til "Mærke Model forsikring" (fjerner gamle titler med udokumenterede påstande).
- "kr.." rettet til "kr." i estimatnoter.
- Udenlandske kilder fjernet: Wikipedia (208, 2008, ID.4), CarExpert og volvocars.com/us (XC40). Påstande uden dansk kilde er slettet.
- Mangler: de ca. 115 rensede, ikke-omskrevne modelsider indeholder stadig udokumenterede tal (fx reparationspriser, "op til 50 %", H1'er som "1.000 kr./år billigere"). Se valideringsrapporten.

## Opdatering (14) – 30. sep. 2026
Omskrevet (kun danske kilder, unik H-struktur og vinkel pr. side): Audi A3, Xpeng P7+, Hyundai i10, Mercedes GLA, Mercedes GLB.
Samlet: /peugeot/e-208-pris/ → /peugeot/208-pris/ (#e-208) og /peugeot/e-2008-pris/ → /peugeot/2008-pris/ (#e-2008), 301 i .htaccess, fjernet fra sitemap, interne links omlagt.
208- og 2008-estimaterne er nu regnet på e-208 (169.990 kr.) og e-2008 (199.990 kr.) som verificeret nypris.
Alle titler og descriptions på omskrevne modelsider starter med "Mærke Model forsikring"; resten er unikt pr. side.
Estimatkolonnen på mærkesiderne synkroniseres automatisk med modelsidernes standardprofil (13 rækker rettet) og sorteres efter pris.
Kort-labels på mærkesider normaliseret (252) – fjerner gamle titler med udokumenterede påstande.
Rettet: dublerede H2/id på /forsikringsselskaber/ og /hvad-koster-bilforsikring-gennemsnit/.
Generator: build_v13.py, pages_v13.py, pages_v14.py, merge_peugeot.py (ikke en del af sitet).
Bemærk: 16 sider med kildeliste (fx A4, Q3, Q4 e-tron, iX1, EV3, Ariya, ID.5, ID.7, up!, EX30) er IKKE rigtigt omskrevet – de har stadig skabelontitlen "… forsikring 2026 – pris og dækning" og "Billigste selskaber"-afsnit. De skal i køen.

## Opdatering (15) – 30. sep. 2026
Omskrevet fra bunden: de 16 sider, der havde kildeliste men stadig skabelonindhold (A4, Q3, Q4 e-tron, iX1, Sealion 7, ë-C3, EV3, CX-60, Ariya, Corsa, Polestar 2 og 4, ID.5, ID.7, up!, EX30). 45 modelsider er nu reelt omskrevet.
Nye titler på Tesla Model Y og Skoda Elroq (endte før blot på "forsikring 2026").
Mærketabeller synkroniseret igen (15 rækker). uniq_check.py tjekker H-struktur, H-tekster og 6-ords tekstoverlap mod alle omskrevne modelsider.
Generator: pages_v15.py (bruger build_v13.py).

## Opdatering (16) – 30. sep. 2026: oprydning af opdigtede tal
- 47 skabelonmodelsider med under 200 eksponeringer på 3 måneder er 301-omdirigeret til mærkesiden (se .htaccess), slettet og fjernet fra sitemap. Links, kort og tabelrækker er fjernet/omlagt.
- 44 skabelonmodelsider med efterspørgsel er renset med cleanup_v16.py: 125 sektioner (fx "Billigste selskaber", "vs.", prissektioner), 25 pristabeller og ca. 450 sætninger med ukildede priser, procenter, rangeringer, "sammenligningsprofil", superlativer og skabelonfejl (fx "Skodas" på Mercedes-sider) er fjernet. Estimattabel, note og estimat-svar i FAQ er bevaret. H1, lead og beskrivelser med påstande er renset.
- Hovedsider renset: /18-aarige/, /trods-rki/, /elbil/, /elitebilist/, /maanedlig-betaling/, /motorcykelforsikring/ samt mærkesiderne Jaguar, Peugeot og Renault. Rangeringer, "markedsindsamling", sammenligningsprofiler og procentsatser uden kilde er fjernet; Tænk-resultater og estimater er bevaret.
- Tynde efter rensning (under 200 ord ud over estimatet): Audi A6, Suzuki Swift, Hyundai Kona, BMW 5-serie – øverst i omskrivningskøen.
- Mangler: mærkesider, selskabssider og guides er ikke renset med samme regler endnu.
301: volkswagen/arteon, volkswagen/sharan, volkswagen/touran, volkswagen/transporter, volkswagen/t-cross, fiat/punto, fiat/ducato, fiat/tipo, fiat/panda, peugeot/408-pris, peugeot/407-pris, peugeot/106-pris, peugeot/308-pris, peugeot/207-pris, peugeot/508-pris, toyota/corolla, toyota/proace, toyota/land-cruiser, toyota/prius, toyota/auris, ford/fiesta, volvo/v60, volvo/s60, volvo/v90, volvo/ec40, skoda/superb, skoda/kodiaq, skoda/kamiq, skoda/scala, skoda/karoq, skoda/fabia, kia/ev9, kia/ev6, mercedes/amg, mercedes/cla-shooting-brake, mercedes/b-klasse, mercedes/e-klasse, nissan/qashqai, audi/a1, audi/q2, hyundai/bayon, hyundai/i30, hyundai/ix35, bmw/i5, suzuki/baleno, suzuki/celerio, suzuki/jimny

## Opdatering (17) – 30. sep. 2026
- Guides, selskabssider og ordbog (141 sider) renset med guide-regler: kun prisudsagn (beløb eller procent kombineret med pris/præmie/rabat/tillæg), sammenligningsprofiler, "vejledende Q2", rangeringer og pristabeller uden kilde fjernes. Regneeksempler, selvrisikoniveauer, lovregler og udsagn med navngiven kilde (FDM, Tænk, F&P, Ankenævnet m.fl.) bevares. 552 sætninger, 57 tabeller og 9 sektioner fjernet, 16 fiktive personcases fjernet.
- 36 mærkesider renset med model-regler (superlativer som "Danmarks billigste", "konsekvent", pris- og procentudsagn); H1, lead og beskrivelser renset. Tomme "Modeller fra"-sektioner fjernet på Cupra, Dacia, Ford og Seat.
- Omskrevet: Suzuki Swift, Hyundai Kona, Audi A6, BMW 5-serie (de fire sider, der blev tynde i v16). 49 modelsider er nu omskrevet.
- Forside, /billigste/, /unge/, /ansvarsforsikring/ og /kaskoforsikring/ er ikke automatisk renset; de er kildebelagte og bør kun redigeres manuelt.

## Opdatering (18) – 30. sep. 2026
Omskrevet med danske kilder: Toyota Yaris, BMW 3-serie, Volvo EX40 (dansk kilde for navneskiftet fra XC40 Recharge: Elbilguide), Mercedes EQE (udgår 2026), Toyota C-HR (C-HR+), Mercedes GLC, Mercedes CLA, BMW X5. 57 modelsider er nu omskrevet. Mærketabeller synkroniseret.

## Før upload (v19, 30. sep. 2026)
- .htaccess: https/www/index.html-reglerne flyttet øverst, så 301-omdirigeringerne ikke kæder. 69 omdirigeringer i alt.
- Titler >60 og beskrivelser >155 tegn rettet (0 advarsler tilbage).
- Ny manuel workflow .github/workflows/slet-omdirigerede.yml: sletter de 69 omdirigerede mapper på serveren. deploy.yml bruger mirror uden --delete, så gamle filer bliver ellers liggende. Kør den én gang manuelt efter upload (Actions → Engangsoprydning → Run workflow).
- billeder/ er ekskluderet fra deploy. 51 billedfiler refereres, men ligger kun på serveren – tjek at fx /billeder/audi.webp svarer 200.

## Opdatering (20) – 30. sep. 2026, før upload
- Alle 51 titler af typen "… 2026 – pris og dækning" er erstattet med unikke titler og beskrivelser ud fra sidens eget indhold (titles_v20.py). H1 og brødkrummer rettet (fx "BMW 1-serie", "Volkswagen T-Roc", "Volvo EX90"). 86 overskrifter med påstande, "2026" eller afkortet tekst rettet.
- Hovedsiderne har fået hver sin søgeintention: forsiden = overblik, /billigste/ = find den billigste, /hvad-koster-bilforsikring-gennemsnit/ = pris og gennemsnit (fik kort svar med FDM-tal), /kaskoforsikring/ = hvad kasko dækker. Estimattabellen efter biltype ligger nu kun på /hvad-koster-…/ og /unge/; de andre linker dertil. Tekstoverlap mellem hovedsiderne faldt fra 13–18 % til under 8 %.
- Volvo XC40: dansk kilde (Elbilguide) for navneskiftet til EX40 tilføjet i tekst og kildeliste; brødkrumme rettet.

## Opdatering (21) – hovedsidetitler
- Nye titler og H1 med søgeord først: forsiden "Sammenlign bilforsikring", /billigste/ med måned og "fra ca. 2.300 kr./år" (vores estimat for erfaren bilist med ældre bil, står i det korte svar med link til estimaterne), /hvad-koster-…/ som "Bilforsikring pris 2026" med FDM-gennemsnittet.
- VIGTIGT: /billigste/-titlen indeholder måneden. Opdatér den den 1. i hver måned (title, og:title, description og JSON-LD), ellers ser den forældet ud.

## Opdatering (22) – slut-tjek før upload
- Kort svar øverst på alle 240 indholdssider (før 61). Model-/mærkesider: redaktionelt estimat. Guides: "Kort fortalt"-afsnit flyttet op i boksen eller definitionen fra indledningen. Ordbog og resten: skrevet i hånden uden tal uden kilde.
- 27 indledninger og 12 beskrivelser med opdigtede tal/påstande omskrevet (fx TJM "30 % billigere", Tesla "11.373 kr.", elitebilist "35–40 %", samlerabat "10–20 %").
- 301: /billigste-biler-unge-under-25/ → /unge/, /billigste-peugeot-forsikring/ → /peugeot/ (rangeringer uden datagrundlag, dublerede andre sider). /de-10-billigste-biler-…/ er ikke længere en rangering.
- Hovedsidetitler: forsiden "Sammenlign bilforsikring – priser og dækning på 2 minutter", /hvad-koster-…/ uden årstal, /ansvarsforsikring/ med 42,9 % afgift.
- "Andre modeller fra X" opdateret på 79 modelsider med alle søskendemodeller.
- /llms.txt tilføjet (oversigt til AI-crawlere).
- Synlige "Opdateret"-datoer og sitemap-lastmod synkroniseret med dateModified.

## Opdatering (24)
Omskrevet med danske kilder: Skoda Citigo, Tesla Model X, Suzuki Vitara, VW Passat, Mercedes C-klasse, BMW 1-serie, Toyota RAV4, Skoda Octavia. 65 modelsider omskrevet; 24 tilbage.

## Opdatering (25)
Omskrevet: Audi e-tron GT, VW Golf GTI, Hyundai Ioniq 6, Volvo XC60, Volvo EX90, Audi Q5, Suzuki Ignis, Peugeot 5008. 73 modelsider omskrevet; 16 tilbage.

## Opdatering (26)
Omskrevet: VW Touareg, VW T-Roc, Peugeot 3008, Mercedes EQS, Mercedes GLE, Hyundai i20, Hyundai Santa Fe, BMW X3. 81 modelsider omskrevet; 8 tilbage. Alle modelsiders svarboks indeholder nu også forsikringsestimatet (ansvar + kasko, standardprofil).

## Opdatering (27)
Omskrevet de sidste 8: Peugeot 206, Peugeot Partner, Suzuki SX4 S-Cross, Suzuki Alto, Mercedes A-klasse, Hyundai Tucson, VW Caddy, Renault Clio. Alle modelsider er nu omskrevet med danske kilder.

## Opdatering (28)
- Svarboksen på alle 89 modelsider starter nu med selve svaret (forsikringsestimatet) og har ingen links; kilderne står i brødteksten og kildelisten. 34–73 ord.
- Peugeot 206 og Suzuki Alto regnes nu på metodens referencepris for ældre brugt bil (90.000 kr.) i stedet for en lavere værdi, der gav et urealistisk lavt estimat.

## Opdatering (29) – udbygning af modelsider (i gang)
Tilføjet sektion om brugtpriser/værditab (AutoUncle) på: Tesla Model Y, Tesla Model 3, Skoda Enyaq, Mercedes EQA, VW ID.4. Kun hvor der findes danske markedsdata; nye modeller uden brugtmarked springes over. Hjælper: /home/claude/add_sections.py.

## Opdatering (30)
Brugtpris-sektioner også på: Peugeot 208, Peugeot 2008, Fiat 500, Toyota Aygo, Audi e-tron, Audi Q4 e-tron, Mercedes EQC, VW ID.3, VW Polo, VW Golf. I alt 15 af 89 modelsider udbygget.

## Opdatering (31)
Brugtpris-sektioner også på: Toyota bZ4X, Hyundai Ioniq 5, Peugeot 107, Hyundai i10, Audi A3, Tesla Model S, Volvo XC40, Polestar 2, Nissan Ariya, Mercedes GLA. 25 af 89 udbygget.

## Opdatering (32)
Længere sektioner (2–3 afsnit) på: Skoda Elroq, Xpeng G6, Xpeng G9, Peugeot 3008, Peugeot 5008, Kia EV3, Volvo EX30, BYD Sealion 7. Epiq og GLB sprunget over (intet brugbart dansk brugtmarked endnu). 33 af 89 udbygget.

## Opdatering (33)
Epiq (batteri, trækvægt, levering 2027) og GLB (800 V, ladning, anhænger) fik sektioner uden brugtpriser. EQE og GLC fik brugtpris-sektioner. 37 af 89 udbygget.

## Opdatering (34)
Sektioner på Mercedes CLA, BMW 3-serie, Toyota Yaris. Sprunget over: C-klasse og 1-serie (ingen brugbare danske data), X5 og RAV4 (har allerede brugtpris-tabel), EX40 (dækket via XC40-siden). 40 af 89 udbygget.

## Opdatering (35)
Brugtmarkeds-sektioner på VW ID.7, ID.5, ID. Buzz, Polestar 4, Xpeng P7+ og Zeekr (mærkeside). Alle store elbiler fra VW, Polestar, Xpeng og Zeekr er nu udbygget.

## Opdatering (36)
Nye modelsider: VW ID.Polo, VW ID.Cross, BMW iX3, Renault 5, Cupra Raval, Born, Formentor, Terramar, Tavascan og Leon. Cupra/formentor-omdirigeringen er fjernet fra .htaccess og slet-workflow. Mærkesider og 'Andre modeller'-lister opdateret. Rettet: VW Golf og Polo manglede forfatterboks og slut-CTA (stod 'None').

## Opdatering (37) – 8. okt. 2026: fuld audit (SEO, GEO, CRO, faktatjek)
Bygget oven på v36. Estimatmetoden, omdirigeringerne og de omskrevne modelsider er bevaret.
- /elbil/: omskrevet med kildebelagte tal (Tænks elbiltest jan. 2026: 6.000–10.000 kr., op til 3.777 kr./38 % forskel; Samlino 7.584 mod 5.868 kr.; FDM). Ny title/H1 "Billigste elbil forsikring 2026". Estimattabellen bevaret.
- /hvad-koster-bilforsikring-gennemsnit/: omskrevet (tomme "ligger typisk på:"-afsnit og fyld fjernet), kildetabel, FAQ. Title/H1 og estimattabel bevaret.
- /billigste/: tom "Hvad forskellige bilister betaler"-sektion fjernet, Tænk 60 % og FDM-prisstigning i tabellen, FAQ "TJM billigst" → "Bedst i test". Title og kort svar (estimat) uændret.
- /trods-rki/: orphan-prisnote og ukildet selskabstabel erstattet; BEK 1627/2023 § 1 og § 7-undtagelser; Ankenævnets afgørelse 29.11.2023; CTA-modsigelsen "udfyld ikke onlineformularen" fjernet.
- /18-aarige/, /unge/: fragmenter fjernet, FDM-kilde (forhøjet selvrisiko under 26 år), selskabstabel uden priser.
- Selskabssider: tomme pris-sektioner erstattet af ens kildebelagt prisafsnit; ejerforhold (Tryg ejer Alka og TJM, Topdanmark→If, Codan→Alm. Brand, Coop = Købstædernes Forsikring, Forsia kundeejet).
- Faktarettelser hele sitet: 6.239 kr. = Samlino-data 2024 via FDM; 15.200 kr. = FDM; Ankenævnet 18 % (2025)/20,8 % (2024) i stedet for 22,4 %; gebyr 300 kr.; afgift 42,9 % af præmien ≈ 30 % af prisen; Alkas "bedst placeret" angivet som Alkas egen oplysning.
- Interne links: kontekstlinks fra modelsider til /hvad-koster-…/, til /pensionist/ og /trods-rki/ fra relevante guides.
- Teknik: nye assets bf-20261008.css/js (nummerplade accepterer personlige plader og formaterer ved blur, mobilbar sporer cta_click, skjules under cookiebanner, 100dvh-menu), robots-disallows gentaget pr. bot, font-preload af Spline Sans Mono, FAQ-schema genbygget fra synlige spørgsmål, dateModified/lastmod 2026-10-08 kun på ændrede sider.
