# Runde 7 — de to schema-fejl fra Search Console
**26. august 2026**

Dine to eksporter afslørede fejl, jeg ikke fandt selv. Begge er rettet.

---

## Fejl 1: Ugyldig webadresse i breadcrumbs — 210 elementer

Search Console: *"Ugyldig webadresse i feltet id (i itemListElement.item)"*, registreret første gang 10. august, stigende til 210 elementer.

**Årsagen:** breadcrumb-schemaet brugte relative URL'er:

```json
{"@type":"ListItem","position":1,"name":"Forside","item":"/"}
{"@type":"ListItem","position":2,"name":"Volkswagen forsikring","item":"/volkswagen/"}
```

Google kræver **absolutte** URL'er i `item`-feltet. En relativ sti bliver afvist.

**Hvorfor jeg ikke fandt det:** min egen kontrol i runde 3 sammenlignede kun det *sidste* breadcrumb-led med sidens egen URL — og den sammenligning strippede domænet væk først. Så `/volkswagen/` bestod testen, selvom den var relativ. Jeg testede for det forkerte.

**Rettet:** 262 breadcrumb-URL'er på 105 sider er konverteret til absolutte. Kontrolleret bagefter: 0 tilbage.

---

## Fejl 2: Struktureret data kunne ikke parses — 5 sider

Search Console: *"Dobbelt forekomst af unik ejendom"* på `/17-aarige/`, `/elbil/`, `/maanedlig-betaling/`, `/18-aarige/` og `/leasing/`.

**Denne var allerede rettet.** Jeg tjekkede de oprindelige filer:

| Side | Dubletter i originalen |
|---|---|
| `/17-aarige/` | 3× BreadcrumbList, 2× Article, 2× FAQPage |
| `/elbil/` | 3× BreadcrumbList, 2× Article, 2× ItemList, 2× FAQPage |
| `/maanedlig-betaling/` | 3× BreadcrumbList, **4× Article**, 2× FAQPage |
| `/18-aarige/` | 3× BreadcrumbList, 2× Article, 2× ItemList, 2× FAQPage |
| `/leasing/` | 3× BreadcrumbList, 2× Article, 2× FAQPage |

Det er præcis den fejl, runde 1-3 fjernede. Crawl-datoerne i din eksport er 19.-23. august — før rettelserne blev deployet den 25. Fejlen står stadig i rapporten, fordi Google endnu ikke har gencrawlet siderne.

Bonus: under kontrollen fandt jeg **én tilbageværende dublet** på `/citroen/` — en tom FAQPage uden spørgsmål ved siden af den rigtige med fire. Fjernet.

---

## Hvad du skal gøre

Tryk **Valider rettelse** på begge rapporter:

- **Forbedringer → Breadcrumbs** → *"Ugyldig webadresse i feltet id"*
- **Forbedringer → Strukturerede data, som ikke kunne parses**

Valideringen tager typisk 1-2 uger. Du får en mail, når den er færdig.

---

## Fuld schema-validering efter rettelserne

Kørt på alle 679 filer med en strengere parser end før — denne gang med detektion af dublet-nøgler inde i JSON-objekter, som Pythons standardparser ellers accepterer i stilhed:

| Kontrol | Resultat |
|---|---|
| Ugyldig JSON | 0 |
| Dublet-nøgler i JSON-objekter | 0 |
| Dublerede schema-typer på samme side | 0 |
| Dublerede `@id`-værdier | 0 |
| Breadcrumb-URL'er der ikke er absolutte | 0 |
| FAQ-svar der matcher siden ordret | 96 % |

---

## En bemærkning om metode

Begge fejl fandt du, ikke jeg. Det er værd at holde fast i: **Search Consoles egne rapporter under Forbedringer er en bedre schema-validator end noget, jeg kan bygge**, fordi de viser, hvad Googles parser faktisk afviser — ikke hvad en generisk JSON-parser accepterer.

Der er flere rapporter under Forbedringer, jeg ikke har set: Datasæt, Profilside, Uddrag fra gennemgang. Har de fejl, er de værd at eksportere på samme måde.
