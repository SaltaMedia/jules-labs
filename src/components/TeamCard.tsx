export function TeamCard({ name, role, blurb }:{
  name: string; 
  role: string; 
  blurb: string;
}) {
  return (
    <div className="rounded-2xl border p-5 bg-white shadow-sm">
      <div className="text-lg font-medium">{name}</div>
      <div className="text-sm text-slate-600">{role}</div>
      <p className="mt-3 text-sm">{blurb}</p>
    </div>
  );
}
