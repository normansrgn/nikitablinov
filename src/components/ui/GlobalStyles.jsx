export default function GlobalStyles() {
  return (
    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(32px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -30px) scale(1.05); }
        66% { transform: translate(-20px, 20px) scale(0.95); }
      }
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 0.7; transform: scale(1.1); }
      }
      @keyframes grid-move {
        0% { transform: translateY(0); }
        100% { transform: translateY(40px); }
      }
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease forwards;
      }
      .animate-fade-in-up-delay-1 { animation: fadeInUp 0.8s ease 0.1s forwards; opacity: 0; }
      .animate-fade-in-up-delay-2 { animation: fadeInUp 0.8s ease 0.2s forwards; opacity: 0; }
      .animate-fade-in-up-delay-3 { animation: fadeInUp 0.8s ease 0.3s forwards; opacity: 0; }
      .animate-float { animation: float 8s ease-in-out infinite; }
      .animate-float-delay { animation: float 10s ease-in-out 2s infinite; }
      .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
      .reveal-hidden { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
      .reveal-visible { opacity: 1; transform: translateY(0); }
      .btn-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
      .btn-hover:hover { transform: scale(1.05); }
      .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
      .card-hover:hover {
        transform: scale(1.03) translateY(-4px);
        box-shadow: 0 20px 60px rgba(255, 59, 48, 0.15), 0 0 40px rgba(255, 149, 0, 0.08);
        border-color: rgba(255, 149, 0, 0.3);
      }
      .drawer-enter { animation: drawerSlide 0.35s ease forwards; }
      @keyframes drawerSlide {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      .accordion-content {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.35s ease;
      }
      .accordion-content.open { grid-template-rows: 1fr; }
      .accordion-inner { overflow: hidden; }
    `}</style>
  )
}
