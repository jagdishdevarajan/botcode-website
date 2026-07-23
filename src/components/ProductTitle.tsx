/**
 * Renders a product title, colouring the part named in `accentSuffix` with that
 * product's own brand colour. MedNeuron sets its "Neuron" in teal, matching how
 * the name is set on medneuron.com; every other product renders plain.
 */
export function ProductTitle({
  title,
  accentSuffix,
  className = "",
}: {
  title: string;
  accentSuffix?: string;
  className?: string;
}) {
  if (!accentSuffix || !title.endsWith(accentSuffix)) {
    return <span className={className}>{title}</span>;
  }
  const stem = title.slice(0, title.length - accentSuffix.length);
  return (
    <span className={className}>
      {stem}
      <span className="text-[var(--brand-medneuron,#0d9488)]">{accentSuffix}</span>
    </span>
  );
}
