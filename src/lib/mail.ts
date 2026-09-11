type Email = {to:string; subject:string; text:string};
export async function sendEmail(mail:Email){
 if(!process.env.SWEEGO_API_KEY||!process.env.MAIL_FROM)throw new Error('MAIL_NOT_CONFIGURED');
 const response=await fetch('https://api.sweego.io/send',{method:'POST',headers:{'Content-Type':'application/json','Api-Key':process.env.SWEEGO_API_KEY},body:JSON.stringify({channel:'email',provider:'sweego',from:{name:'M-Anbud Konsult AB',email:process.env.MAIL_FROM},recipients:[{email:mail.to}],subject:mail.subject,'message-txt':mail.text,'campaign-type':'transac'}),signal:AbortSignal.timeout(12000)});
 if(!response.ok)throw new Error(`MAIL_PROVIDER_${response.status}`);
}
