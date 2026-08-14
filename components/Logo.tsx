export default function Logo({ light = false }: { light?: boolean }) {
  const text = light ? "#FFFFFF" : "#13233B";
  const muted = light ? "rgba(255,255,255,.62)" : "#6A7381";

  return (
    <div className="flex items-center gap-3" aria-label="LUCENTA">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M31.8 5.5C24.2 7.5 17.7 12.8 15 20.2c-2.4 6.5-.9 12.5 3.7 15.7 4.2 2.9 10.5 2.2 15.3-2.1-5 1.6-9.2.5-11.1-2.6-2.2-3.6-.5-8.8 3.1-12.7 2.7-2.9 5.7-4.8 9-6.1-.4-3.1-.9-5.3-3.2-6.9Z"
          stroke="#C99A42"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 41.5C15.4 40.2 22.4 36.2 28 30" stroke="#C99A42" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
      <div>
        <div className="font-display text-2xl font-extrabold tracking-[0.16em]" style={{color:text}}>LUCENTA</div>
        <div className="text-[9px] font-bold tracking-[0.28em]" style={{color:muted}}>TALENTO · GESTIÓN · CRECIMIENTO</div>
      </div>
    </div>
  );
}
