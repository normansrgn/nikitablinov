export default function BlobBackground({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-red-600/20 blur-[100px] animate-float" />
      <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-orange-500/15 blur-[90px] animate-float-delay" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-500/10 blur-[80px] animate-pulse-glow" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'grid-move 20s linear infinite',
        }}
      />
    </div>
  )
}
