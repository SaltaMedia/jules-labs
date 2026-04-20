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
    <section id={id} className={`${getBackgroundClass()} ${hasDivider ? "pb-20 md:pb-24" : ""} scroll-mt-24`}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-24">
        {title && (
          <h2 className={`text-center text-3xl font-medium tracking-[-0.03em] md:text-[2.35rem] ${isDarkBackground ? "text-white" : "text-slate-900"}`}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={`mx-auto mt-3 max-w-2xl text-center text-sm tracking-[0.08em] ${isDarkBackground ? "text-white/60" : "text-slate-600"}`}>
            {subtitle}
          </p>
        )}
        <div className={`mt-8 md:mt-10 ${isDarkBackground ? "text-white/90" : "text-slate-900"}`}>{children}</div>
      </div>
      {hasDivider && <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>}
    </section>
  );
}
