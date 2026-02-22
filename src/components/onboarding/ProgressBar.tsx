type Props = {
  value: number;
};

export default function ProgressBar({ value }: Props) {
  const pct = Math.max(0, Math.min(1, value)) * 100;

  return (
    <div className="h-1.5 w-full rounded-full bg-(--progress-bg)">
      <div
        className="h-1.5 rounded-full bg-(--progress-fill) transition-[width] duration-200"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
