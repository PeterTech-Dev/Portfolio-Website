export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <div className="mx-auto w-full max-w-5xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-sm text-black/70">{subtitle}</p>
        ) : null}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
