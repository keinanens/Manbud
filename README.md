# M-Anbud Konsult AB

Svensk webbplats byggd med Next.js App Router, TypeScript och Tailwind CSS. Tio sidor, responsiv design, lokalt hostade Roboto/Noto Sans, metadata, strukturerad data, sitemap, robots, llms.txt, delningsbild och tillgängligt kontaktformulär.

## Kör lokalt

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm start
```

`npm run dev` fungerar också när beroendena är installerade. Vid macOS-felet EMFILE: kör `WATCHPACK_POLLING=true pnpm dev`.

## Driftsättning på Vercel

Importera GitHub-repot. Ramverk: Next.js. `vercel.json` anger Frankfurt (`fra1`). Sätt `SITE_URL` till den slutliga publika adressen utan avslutande snedstreck. Annars används Vercels produktionsadress automatiskt. Kör en ny deployment efter ändringar av miljövariabler eftersom sidorna genereras vid bygget.

## Kontakt och e-post

- `SWEEGO_API_KEY`: hemlig API-nyckel, endast server.
- `MAIL_FROM`: verifierad avsändaradress i Sweego.
- `MAIL_TO`: mottagare, standard `info@m-anbud.se`.

Utan nyckel och avsändare är knappen avstängd och besökaren hänvisas till telefon/mejl. API:et returnerar 503 och visar aldrig en falsk lyckad leverans. Formuläret har honeypot, servervalidering, ursprungskontroll och begränsade fältlängder. Ett lyckat API-svar betyder att mejlleverantören har accepterat företagets notis; faktisk inkorgsleverans garanteras inte. Bekräftelsemejlet skickas därefter via `after()` och ett fel loggas utan att uppmana besökaren att skicka samma förfrågan igen. Ingen databas behövs.

Aktivera först efter att avsändardomänen verifierats och testa mottagning samt bekräftelse med en godkänd testadress. Lägg gärna en Vercel WAF-regel för begränsning av upprepade POST till `/api/contact/` innan formuläret öppnas.

## Statistik

Valfri cookie-fri Plausible-koppling: sätt `NEXT_PUBLIC_PLAUSIBLE_SCRIPT_URL` till det platsspecifika script som ditt Plausible-konto tillhandahåller. Ingen statistik eller annonsspårning skickas när variabeln är tom. Annonsverktyg får en separat samtyckeslösning om de införs.

## Innehåll och tillgångar

- Innehåll: `src/lib/content.ts`, `src/app/page.tsx` och `src/app/[slug]/page.tsx`.
- Formulär: `src/components/contact-form.tsx`, `src/app/api/contact/route.ts`.
- Generiskt mejlgränssnitt och Sweego-adapter: `src/lib/mail.ts`.
- Logotypen kommer från befintliga m-anbud.se. `logo.svg` kapslar in originalets JPEG; den är inte en vektoriserad originalfil. Byt gärna till företagets riktiga vektororiginal.
- Inga påhittade personfoton eller kundcitat används. Teamet visas med initialer tills riktiga porträtt finns.
- Kundresultaten bygger på beställarens brief. Kontaktuppgifterna har kontrollerats på befintliga webbplatsen.

## Källor

- Kontaktuppgifter: https://m-anbud.se/kontakt/
- Sweego API: https://www.sweego.io/channel/email/integrate-sweegos-api-to-send-transactional-emails
- Överprövning: https://www.upphandlingsmyndigheten.se/regler-och-lagstiftning/overprovning-och-andra-rattsmedel/overprovning/av-en-upphandling

## Verifiering

Produktionsbygge och TypeScript-kontroll godkända. Alla tio sidor kontrollerade i webbläsare på 390 px mobilbredd: en h1 per sida, unik titel/beskrivning, inga trasiga bilder eller horisontell scroll. Startsidan visuellt kontrollerad även på dator. Kontaktens leverans kräver att Sweego ansluts. Test på fysisk mobil och Lighthouse-poäng är inte uppmätta.

Anpassad domän, DNS, Search Console och statistik-konto ingår inte i den initiala Vercel-publiceringen. Integritetstexten bör stämmas av mot företagets faktiska avtal och rutiner före domänbytet.
