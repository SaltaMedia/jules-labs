type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  bg?: "white"|"grey"|"dark"|"gradient1"|"gradient2"|"gradient3"|"gradient4";
  children: React.ReactNode;
};

export function Section({ id, title, subtitle, bg="white", children }: Props) {
  const getBackgroundClass = () => {
    switch (bg) {
      case "grey":
        return "bg-white/10 backdrop-blur";
      case "dark":
        return "bg-site-gradient";
      case "gradient1":
        return "bg-section-gradient-1";
      case "gradient2":
        return "bg-section-gradient-2";
      case "gradient3":
        return "bg-section-gradient-3";
      case "gradient4":
        return "bg-section-gradient-4";
      default:
        return "bg-white";
    }
  };

  const isDarkBackground = bg === "grey" || bg === "dark" || bg?.startsWith("gradient");
  const hasDivider = isDarkBackground; // All dark/gradient sections get a divider

  return (
    <section id={id} className={`${getBackgroundClass()} ${hasDivider ? 'pb-16' : ''} scroll-mt-20`}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        {title && <h2 className={`text-2xl md:text-3xl font-semibold text-center ${isDarkBackground ? "text-white" : "text-slate-900"}`}>{title}</h2>}
        {subtitle && <p className={`mt-2 text-center ${isDarkBackground ? "text-white/70" : "text-slate-600"}`}>{subtitle}</p>}
        <div className={`mt-6 ${isDarkBackground ? "text-white/90" : "text-slate-900"}`}>{children}</div>
      </div>
      {hasDivider && <div className="h-px bg-white/10 mx-auto max-w-6xl"></div>}
    </section>
  );
}
