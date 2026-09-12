import Link from 'next/link';
import { cases, company } from '@/lib/content';
import { Arrow, ResultValue } from './icons';
export { Arrow } from './icons';
export function CTA({text='Boka ett kostnadsfritt samtal'}:{text?:string}){return <Link className="button" href="/kontakt/">{text}<Arrow/></Link>}
export function CaseGrid(){return <div className="case-grid">{cases.map(c=><article className="case" key={c.name}><p className="eyebrow">{c.industry}</p><p className="stat"><ResultValue value={c.result}/></p><p className="unit">{c.unit}</p><h3>{c.name}</h3><p>{c.text}</p><Link href="/kundcase/" className="text-link">Se kundresultatet <Arrow/></Link></article>)}</div>}
export function ContactBand(){return <section className="contact-band"><div className="wrap band-inner"><div><p className="eyebrow">SKA VI TA NÄSTA STEG?</p><h2>Ditt hantverk.<br/>Vår upphandlingskunskap.</h2><p>Vi börjar med ett samtal. Kostnadsfritt och utan förpliktelser.</p></div><div className="band-actions"><CTA/><a className="phone-link" href={`tel:${company.tel}`}>{company.phone}</a></div></div></section>}
export function JsonLd({data}:{data:unknown}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>}
