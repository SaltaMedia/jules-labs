export function CTAButton({ href, label, variant = "dark" }:{
  href: string; 
  label: string; 
  variant?: "dark"|"light";
}) {
  const base = "inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium transition";
  const dark = "bg-slateBlue text-white hover:opacity-90";
  const light = "bg-white text-slate-900 hover:opacity-90 shadow";
  return <a href={href} className={`${base} ${variant === "light" ? light : dark}`}>{label}</a>;
}
