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
Barlow Condensed (overskrifter) + Barlow (tekst), selvhostet – en skrift tegnet efter vejskilte og nummerplader. Farver: sort #000, vejskiltegul #ffd400, nummerpladeblå #1639a3, signalgrøn #0c8a3f (knapper), rød pladekant #c8102e. Motiver: vejstriber over overskrifter, "Kort svar" som gult vejskilt, CTA som dansk nummerplade.
CTA: nummerpladefelt + grøn knap (hero, midt i artiklen, sticky i højre side på desktop). Formularen sender til FindForsikring med UTM pr. side og placering.
Menu: dropdowns (Bilforsikring, Målgrupper, Selskaber, Bilmærker) – rene <details>-links, crawlbare uden JS, accordion på mobil.
Modelnavne i brødteksten linkes automatisk til modelsiderne (maks. 8 pr. side, første forekomst).

## Bevidst IKKE gjort (kræver redaktionel beslutning)
- Tekstindholdet på de 315 gamle sider er overført og renset (emojis, dubletter, gentagne standardafsnit, udokumenterede "efterprøvet/prissampling"-påstande), men ikke omskrevet. Mange model- og selskabssider indeholder stadig egne prisestimater ("billigst i vores oversigt"). Disse skal gennemgås side for side.
- 158 modelsider: vurder hvilke der har reel søgeefterspørgsel og unikt indhold; resten bør samles på mærkesiden.
