/** SVG paths keep icons independent of the device's emoji and symbol fonts. */
export function Arrow() {
  return <svg className="icon icon-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M7 5h12v12" /></svg>;
}

export function Plus() {
  return <svg className="icon icon-plus" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="M12 5v14M5 12h14" /></svg>;
}

export function ResultValue({ value }: { value: string }) {
  if (!value.includes('→')) return <>{value}</>;
  const [from, to] = value.split('→');
  return <span className="result-value" aria-label={`${from.trim()} till ${to.trim()}`}><span aria-hidden="true">{from.trim()}</span><svg className="icon icon-result-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M3 12h18m-7-7 7 7-7 7" /></svg><span aria-hidden="true">{to.trim()}</span></span>;
}
