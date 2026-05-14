export default function NeonBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Floating atoms */}
      <div className="absolute left-10 top-20 h-24 w-24 rounded-full bg-neonViolet/25 blur-2xl shadow-neon animate-pulse" />
      <div className="absolute right-12 top-32 h-32 w-32 rounded-full bg-neonCyan/20 blur-2xl shadow-neon animate-pulse" />
      <div className="absolute left-24 bottom-10 h-20 w-20 rounded-full bg-pink-500/20 blur-2xl shadow-neon animate-pulse" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}
