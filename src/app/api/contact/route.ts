import { NextRequest, NextResponse } from 'next/server';
import { after } from 'next/server';
import { sendEmail } from '@/lib/mail';
export const runtime='nodejs';
export async function POST(request:NextRequest){
 const origin=request.headers.get('origin');
 if(origin && !isSameHost(origin,request.headers.get('host')))return NextResponse.json({message:'Ogiltig förfrågan.'},{status:403});
 if(!request.headers.get('content-type')?.includes('application/json'))return NextResponse.json({message:'Ogiltigt format.'},{status:415});
 let data:Record<string,unknown>;
 try{const body=await request.text();if(body.length>14000)return NextResponse.json({message:'Meddelandet är för långt.'},{status:413});data=JSON.parse(body);if(!data||Array.isArray(data)||typeof data!=='object')throw new Error();}catch{return NextResponse.json({message:'Formuläret kunde inte läsas.'},{status:400})}
 if(data.website)return NextResponse.json({message:'Förfrågan kunde inte behandlas.'},{status:400});
 const fields=Object.fromEntries(['name','company','phone','email','message'].map(k=>[k,typeof data[k]==='string'?(data[k] as string).trim():'']));
 const errors:Record<string,string>={};
 if(fields.name.length<2||fields.name.length>120)errors.name='Ange ditt namn, 2–120 tecken.';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)||fields.email.length>254)errors.email='Ange en giltig mejladress.';
 if(fields.company.length>120)errors.company='Företagsnamnet får ha högst 120 tecken.';
 if(fields.phone.length>120)errors.phone='Telefonnumret får ha högst 120 tecken.';
 if(fields.message.length<10||fields.message.length>5000)errors.message='Skriv ett meddelande med 10–5 000 tecken.';
 if(Object.keys(errors).length)return NextResponse.json({message:'Kontrollera de markerade fälten.',errors},{status:400});
 if(!process.env.SWEEGO_API_KEY||!process.env.MAIL_FROM)return NextResponse.json({message:'Formuläret är inte öppet ännu. Mejla info@m-anbud.se eller ring 072-706 81 10.'},{status:503});
 try{await sendEmail({to:process.env.MAIL_TO||'info@m-anbud.se',subject:'Ny förfrågan från webbplatsen',text:`Namn: ${fields.name}\nFöretag: ${fields.company}\nTelefon: ${fields.phone}\nMejl: ${fields.email}\n\n${fields.message}`});}catch{console.error('Contact notification delivery failed');return NextResponse.json({message:'Meddelandet kunde inte skickas. Försök igen senare eller ring oss.'},{status:502})}
 after(async()=>{try{await sendEmail({to:fields.email,subject:'Tack för ditt meddelande till M-Anbud',text:'Tack för ditt meddelande. Vi hör av oss inom 24 timmar.\n\nMed vänlig hälsning\nM-Anbud Konsult AB\n072-706 81 10\ninfo@m-anbud.se'});}catch{console.error('Contact confirmation delivery failed')}});
 return NextResponse.json({ok:true});
}

function isSameHost(origin:string,host:string|null){try{return new URL(origin).host===host;}catch{return false}}
