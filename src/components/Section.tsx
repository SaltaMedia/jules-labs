type Props = { 
  id?: string; 
  title?: string; 
  subtitle?: string; 
  bg?: "white"|"grey"; 
  children: React.ReactNode; 
};

export function Section({ id, title, subtitle, bg="white", children }: Props) {
  return (
    <section id={id} className={bg === "grey" ? "bg-gradient-grey" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        {title && <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>}
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
