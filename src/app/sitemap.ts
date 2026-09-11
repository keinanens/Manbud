import type {MetadataRoute} from 'next';
import {baseUrl,pages} from '@/lib/content';
export default function sitemap():MetadataRoute.Sitemap{return ['',...Object.keys(pages)].map(slug=>({url:`${baseUrl}/${slug?slug+'/':''}`,changeFrequency:slug===''||slug==='kundcase'?'weekly':'monthly',priority:slug===''?1:['tjanster','anbud','overprovning','kundcase'].includes(slug)?0.8:0.5}))}
