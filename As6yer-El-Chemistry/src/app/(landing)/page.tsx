import NeonBackground from "../(landing)/components/NeonBackground";

export default function LandingPage() {
  return (
    <main className="relative min-h-[78vh] overflow-hidden">
      <NeonBackground />

      <section className="relative mx-auto max-w-6xl px-6 pt-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-neonCyan shadow-neon" />
              <span className="text-sm text-white/80">منصة تعليم كيمياء عربية بتصميم نيوني</span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              As6yer El-Chemistry
              <span className="block bg-gradient-to-r from-neonCyan via-neonViolet to-pink-500 bg-clip-text text-transparent">
                تعلم الكيمياء… بطريقة مستقبلية
              </span>
            </h1>

            <p className="mt-4 text-lg text-white/70">
              دروس تفاعلية + مساعد ذكاء اصطناعي + أدوات تعليمية (جدول دوري، حساب المولات، موازنة المعادلات) — كل شيء بالعربية وبدعم RTL.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/courses"
                className="group inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                ابدأ الآن
                <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-neonViolet shadow-neon transition group-hover:scale-125" />
              </a>

              <a
                href="/assistant"
                className="inline-flex justify-center rounded-2xl bg-transparent px-6 py-3 text-sm font-semibold text-white/80 ring-1 ring-white/20 transition hover:text-white hover:bg-white/5"
              >
                جرّب المساعد الذكي
              </a>
            </div>
          </div>

          <div className="relative mt-10 md:mt-0 md:w-[420px]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow-neon">
              <div className="flex items-center justify-between">
                <p className="text-sm text-white/70">تجربة تعليمية تفاعلية</p>
                <span className="text-xs rounded-full bg-neonCyan/15 px-3 py-1 text-neonCyan">
                  جديد
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "دروس", value: "فيديو + تفاعلات" },
                  { label: "تمارين", value: "حل فوري" },
                  { label: "اختبارات", value: "تقييم ذكي" },
                  { label: "لوحة طالب", value: "XP + تقدم" }
                ].map((it) => (
                  <div key={it.label} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <p className="text-xs text-white/60">{it.label}</p>
                    <p className="mt-1 text-sm font-semibold text-white/90">{it.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[62%] bg-gradient-to-r from-neonCyan via-neonViolet to-pink-500 animate-pulse" />
              </div>

              <p className="mt-3 text-xs text-white/60">
                واجهة Premium بزجاج نيوني ووميض علمي لطيف.
              </p>
            </div>
          </div>
        </div>

        <section className="relative mt-16 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "مساعد ذكي خطوة بخطوة",
              desc: "يشرح فكرة الكيمياء ثم يحل المسألة تدريجياً بالعربية."
            },
            {
              title: "أدوات تعليمية",
              desc: "جدول دوري تفاعلي + حساب مولات + موازنة معادلات."
            },
            {
              title: "تقدم وإنجازات",
              desc: "XP، سلسلة دراسة (Streak)، وتتبّع دقيق للنتائج."
            }
          ].map((f) => (
            <article key={f.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="mt-4 h-1 w-20 rounded-full bg-neonCyan/40" />
            </article>
          ))}
        </section>
      </section>

      <footer className="relative mx-auto max-w-6xl px-6 py-10 text-sm text-white/55">
        © {new Date().getFullYear()} As6yer El-Chemistry — مبني للتعلم بالعربية.
      </footer>
    </main>
  );
}
