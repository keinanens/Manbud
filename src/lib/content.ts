export const company = { name: 'M-Anbud Konsult AB', phone: '072-706 81 10', tel: '+46727068110', email: 'info@m-anbud.se', address: 'Sjöbacken 25', city: '165 65 Hässelby', org: '559141-8156', map: 'https://www.google.com/maps/search/?api=1&query=Sj%C3%B6backen+25+H%C3%A4sselby' };
export const baseUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');
export const cases = [
 {name:'TH:s Måleri', industry:'MÅLERI', result:'7 → 45', unit:'anställda', text:'Med ramavtalen som grund växte TH:s Måleri från 7 till 45 anställda. Ett konkret exempel på vad långsiktiga uppdrag kan betyda för ett företag.'},
 {name:'Ljus och Kraft', industry:'ELINSTALLATION', result:'Nr 1', unit:'i rangordningen', text:'Ramavtal med rangordning 1 hos Vallentuna kommun, Upplands Väsby kommun och Svenska kyrkan i Täby.'},
 {name:'Järfälla Badrumsrenovering', industry:'VVS & BADRUM', result:'+2', unit:'nya rörmontörer', text:'Efter vunnet ramavtal kunde Järfälla Badrumsrenovering direkt anställa två nya rörmontörer.'}
];
export const steps = [
 ['Du hör av dig','Berätta om ditt företag och upphandlingen du är intresserad av. Vi börjar med ett kostnadsfritt samtal.'],
 ['Vi läser upphandlingen','Vi går igenom handlingarna, identifierar kraven och bedömer vad som behöver göras.'],
 ['Du får ett fast pris','Du vet vad arbetet kostar innan vi börjar. Inga dolda kostnader och ingen betalning i förskott.'],
 ['Vi samlar in uppgifterna','Vi guidar dig genom priser, referenser, certifikat och övriga uppgifter som behövs.'],
 ['Vi skriver. Du godkänner.','Vi sammanställer ett genomarbetat anbud. Du läser och godkänner innehållet före inlämning.'],
 ['Vi lämnar in elektroniskt','Anbudet lämnas in i rätt portal före sista datum. Du får besked när det är klart.']
];
export const faq = [
 ['Vad är ett ramavtal?','Ett ramavtal anger villkoren för framtida beställningar under en viss tid. Det kan ge möjlighet till återkommande uppdrag, men innebär inte alltid en garanti för en viss volym.'],
 ['Hur lång tid tar det att skriva ett anbud?','Det beror på hur omfattande upphandlingen är och vilka underlag som finns. Hör av dig så tidigt som möjligt, så gör vi en tidsplan utifrån sista anbudsdag.'],
 ['Vad kostar det att anlita M-Anbud?','Vi lämnar ett fast pris innan arbetet börjar. Priset beror på upphandlingens storlek och komplexitet. Du betalar när anbudet har lämnats in, inte i förskott.'],
 ['Måste mitt företag vara certifierat?','Kraven varierar mellan upphandlingar. Vi går igenom vilka intyg, certifikat och andra bevis som efterfrågas i just den upphandling du vill delta i.'],
 ['Vad händer om vi inte vinner?','Vi kan hjälpa dig att förstå tilldelningsbeslutet och vad du kan förbättra till nästa gång. Om något verkar fel kan vi granska förutsättningarna för överprövning tillsammans med vår advokat.'],
 ['Kan vi överpröva ett tilldelningsbeslut?','Det kan finnas möjlighet att ansöka om överprövning när upphandlingsreglerna inte har följts och ditt företag har lidit eller riskerar att lida skada. Kontakta oss skyndsamt för en bedömning av ditt ärende.'],
 ['Hur hittar vi relevanta upphandlingar?','Upphandlingar annonseras i upphandlingsdatabaser. Vi kan ge råd om vad du ska leta efter och hjälpa dig bedöma om en upphandling passar ditt företag.'],
 ['Vad betyder LOU?','LOU står för lagen om offentlig upphandling. Den reglerar många av de inköp som kommuner, myndigheter och andra offentliga organisationer gör.'],
 ['När får vi veta om vi har vunnit?','Tiden mellan sista anbudsdag och tilldelningsbeslut varierar. Upphandlingsdokumenten kan innehålla en preliminär tidsplan. Vi hjälper dig att följa vad som gäller.'],
 ['Kan ni hjälpa företag utanför Stockholm?','Ja. Vi har kontor i Hässelby och arbetar med företag i Stockholm och Mälardalen. Kontakta oss även om du finns på annan ort, så pratar vi om hur vi kan hjälpa dig.'],
 ['Vad behöver vi själva göra?','Ni bidrar med korrekta priser, referenser och fakta om företaget, svarar på våra frågor och godkänner anbudet. Vi guidar er genom resten.'],
 ['Garanterar ni att vi vinner?','Nej. Resultatet beror bland annat på konkurrensen, kraven och hur anbuden utvärderas. Vi hjälper dig att ta fram ett genomarbetat och konkurrenskraftigt anbud.']
];
export const pages: Record<string,{label:string,title:string,heading:string,description:string,intro:string}> = {
 'tjanster':{label:'Tjänster',title:'Hjälp att vinna ramavtal | M-Anbud',heading:'Så hjälper vi dig att vinna ramavtal.',description:'Anbud, rådgivning och överprövning. M-Anbud hjälper ditt företag genom offentlig upphandling med över 30 års erfarenhet.',intro:'Du kan ditt hantverk. Vi kan upphandling. Tillsammans gör vi det enklare att ta nästa steg med ditt företag.'},
 'anbud':{label:'Anbud',title:'Hjälp med anbud offentlig upphandling | M-Anbud',heading:'Vi skriver anbudet åt dig.',description:'Från första läsningen till elektronisk inlämning. Hjälp med anbud till fast pris och betalning först efter inlämning.',intro:'Från första läsningen till elektronisk inlämning. Du fortsätter driva företaget, vi håller ihop anbudsarbetet.'},
 'overprovning':{label:'Överprövning',title:'Överpröva upphandling | M-Anbud',heading:'Känns tilldelningsbeslutet fel?',description:'M-Anbud granskar upphandlingen och tilldelningsbeslutet tillsammans med sin advokat. Kontakta oss för en bedömning.',intro:'Vi hjälper dig att förstå beslutet och undersöker, tillsammans med vår advokat, om det finns grund för överprövning.'},
 'kundcase':{label:'Kundcase',title:'Kundcase – företag som växer | M-Anbud',heading:'Fler uppdrag. Fler kollegor. Större möjligheter.',description:'Från 7 till 45 anställda och ramavtal med rangordning 1. Se hur M-Anbud har hjälpt företag inom måleri, el och VVS.',intro:'Vår erfarenhet blir värdefull när den gör skillnad för ditt företag. Här är tre konkreta resultat från våra kunder.'},
 'process':{label:'Så går det till',title:'Så går anbudsarbetet till | M-Anbud',heading:'En tydlig väg från första samtal till inlämnat anbud.',description:'Sex tydliga steg, fast pris och inga förskott. Se hur samarbetet med M-Anbud fungerar från samtal till inlämnat anbud.',intro:'Du ska alltid veta vad som händer, vad vi behöver från dig och vad arbetet kostar. Så här arbetar vi tillsammans.'},
 'om-oss':{label:'Om oss',title:'Upphandlingskonsult i Stockholm | M-Anbud',heading:'Tina och Mats. På ditt företags sida.',description:'Möt M-Anbud i Hässelby, Stockholm. Över 30 års erfarenhet av anbud och offentlig upphandling för små och medelstora företag.',intro:'Bakom M-Anbud finns Tina Horndahl och Mats Nordström. Vi hjälper företagare att göra fler affärer med kommuner och kommunala bostadsbolag.'},
 'kontakt':{label:'Kontakt',title:'Boka ett kostnadsfritt samtal | M-Anbud',heading:'Nästa ramavtal börjar med ett samtal.',description:'Ring M-Anbud på 072-706 81 10 eller mejla oss. Boka ett kostnadsfritt samtal om anbud och ramavtal. Kontor i Hässelby.',intro:'Har du en upphandling på gång eller vill du veta var du ska börja? Berätta lite om ditt företag så tar vi nästa steg tillsammans.'},
 'fragor-svar':{label:'Frågor & svar',title:'Frågor om upphandling och ramavtal | M-Anbud',heading:'Bra frågor. Raka svar.',description:'Vad kostar anbudshjälp? Vad är ett ramavtal? Här svarar M-Anbud på vanliga frågor om offentlig upphandling.',intro:'Offentlig upphandling behöver inte vara obegriplig. Här reder vi ut det som företagare oftast undrar över.'},
 'integritet':{label:'Integritet',title:'Så hanterar vi personuppgifter | M-Anbud',heading:'Dina uppgifter ska vara i trygga händer.',description:'Läs hur M-Anbud Konsult AB behandlar dina kontaktuppgifter, varför de behövs och vilka rättigheter du har.',intro:'Här beskriver vi hur personuppgifter behandlas när du kontaktar oss via webbplatsen, telefon eller mejl.'}
};
