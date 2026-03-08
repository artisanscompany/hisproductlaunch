import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({ component: App })

/* ── Logo ── */
function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const s = size === 'lg' ? 'w-12 h-12 text-[18px]' : size === 'md' ? 'w-9 h-9 text-[14px]' : 'w-7 h-7 text-[11px]'
  return (
    <div className={`${s} relative bg-accent rounded-[4px] flex items-center justify-center overflow-hidden`}>
      {/* Inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <span className="relative font-serif font-normal text-white tracking-[0.02em]">h</span>
    </div>
  )
}

/* ── Section label ── */
function Tag({ children, center }: { children: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${center ? 'justify-center' : ''}`}>
      <span className="w-5 h-px bg-accent/30" />
      <span className="font-sans text-[10px] font-500 tracking-[0.35em] uppercase text-accent-soft/70">{children}</span>
      {center && <span className="w-5 h-px bg-accent/30" />}
    </div>
  )
}

/* ── Section heading ── */
function H2({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2 className={`font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] text-white ${center ? 'text-center' : ''}`}>
      {children}
    </h2>
  )
}

/* ── Accent italic ── */
function A({ children }: { children: string }) {
  return <i className="accent-text">{children}</i>
}

function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.rv').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-base">

      {/* ━━━━ HERO ━━━━ */}
      <header className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="absolute -top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.025] blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[15%] -left-[5%] w-[300px] h-[300px] rounded-full bg-accent/[0.015] blur-[100px] pointer-events-none" />

        {/* Nav */}
        <nav className="in relative z-10 flex items-center justify-between px-8 sm:px-14 lg:px-20 pt-10">
          <div className="flex items-center gap-3.5">
            <Logo />
            <span className="font-sans text-[13px] font-500 tracking-[0.2em] uppercase text-bright">His</span>
          </div>
          <div className="hidden sm:flex items-center gap-2.5 font-sans text-[10px] font-500 tracking-[0.2em] uppercase text-muted">
            <span className="w-[5px] h-[5px] rounded-full bg-accent" style={{ animation: 'glow 3s ease-in-out infinite' }} />
            Partner Kit · 2026
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-14 lg:px-20 max-w-[820px] py-20">
          <p className="in in-2 font-sans text-[10px] font-500 tracking-[0.4em] uppercase text-accent-soft/60 mb-12">
            Exclusive Partner Programme
          </p>
          <h1 className="in in-3 font-serif text-[clamp(3rem,7vw,6.2rem)] leading-[0.9] text-white mb-10">
            Men's Wellness,<br />
            <i className="accent-text">Reimagined</i>
          </h1>
          <p className="in in-5 font-sans text-[16px] font-300 text-body max-w-[420px] mb-16 leading-[1.8]">
            Be the first to introduce East Africa's premier men's health brand to your audience.
          </p>
          <div className="in in-6 flex items-center gap-10">
            <div>
              <p className="font-sans text-[9px] font-500 tracking-[0.2em] uppercase text-dim mb-2">Launch</p>
              <p className="font-serif text-[24px] text-white tracking-wide">April 15, 2026</p>
            </div>
            <div className="w-px h-8 bg-rule" />
            <div>
              <p className="font-sans text-[9px] font-500 tracking-[0.2em] uppercase text-dim mb-2">Status</p>
              <div className="flex items-center gap-2">
                <span className="w-[5px] h-[5px] rounded-full bg-accent-soft" style={{ animation: 'glow 2s ease-in-out infinite' }} />
                <span className="font-sans text-[13px] font-400 text-accent-soft">Onboarding</span>
              </div>
            </div>
          </div>
        </div>

        <div className="in in-8 px-8 sm:px-14 lg:px-20 pb-10 flex items-center gap-3">
          <div className="w-7 h-px bg-accent/25" />
          <span className="font-sans text-[8px] font-500 tracking-[0.4em] uppercase text-dim">Scroll</span>
        </div>
      </header>


      {/* ━━━━ ABOUT ━━━━ */}
      <section className="px-8 sm:px-14 lg:px-20 py-28 lg:py-36">
        <div className="max-w-[960px] mx-auto rv">
          <div className="border-t border-rule pt-16">
            <Tag>About</Tag>
            <H2>Health, <A>delivered differently.</A></H2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 mt-10">
              <p className="font-sans text-[14px] font-300 text-body leading-[1.95]">
                East Africa's first clinically-credible men's health platform. Doctor consultations paired with wellness products built for men.
              </p>
              <p className="font-sans text-[14px] font-300 text-body leading-[1.95]">
                Not another supplement brand — a <span className="text-bright font-400">health movement</span>. Clinician-reviewed and formulated for what Kenyan men actually need.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ━━━━ PRODUCTS ━━━━ */}
      <section className="px-8 sm:px-14 lg:px-20 py-28 lg:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-base via-surface/40 to-base pointer-events-none" />
        <div className="relative max-w-[960px] mx-auto">
          <div className="rv mb-14">
            <Tag>Collection</Tag>
            <H2>Six products. <A>Zero filler.</A></H2>
            <p className="font-sans text-[14px] font-300 text-body max-w-sm mt-4">Purposeful, clean, built to work.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              ['01', '🌿', 'T-Support', 'Supplements', 'Ashwagandha, tongkat ali & maca for hormonal balance and natural energy.'],
              ['02', '💊', 'Daily Multi', 'Supplements', 'Men\'s multivitamin built for the Kenyan diet and lifestyle.'],
              ['03', '☕', 'Energy Tea', 'Herbal', 'Clean energy infusion. No crash — just sustained vitality.'],
              ['04', '✨', 'Skin Essentials', 'Grooming', 'Face wash, moisturiser & SPF trio. Simple and effective.'],
              ['05', '🧴', 'Beard & Body', 'Grooming', 'Premium beard oil and body wash for our climate.'],
              ['06', '💪', 'Recovery Balm', 'Fitness', 'Natural muscle recovery for active men.'],
            ].map(([num, icon, name, cat, desc], i) => (
              <div key={num} className={`rv rv-${Math.min((i % 3) + 1, 3)} group bg-surface rounded-md p-7 relative overflow-hidden card-hover cursor-default`}>
                <span className="absolute top-2 right-4 font-serif text-[48px] text-white/[0.015] group-hover:text-accent/[0.03] transition-colors duration-500 pointer-events-none">{num}</span>
                <span className="text-base block mb-4">{icon}</span>
                <h3 className="font-serif text-[19px] text-white mb-1">{name}</h3>
                <p className="font-sans text-[9px] font-500 tracking-[0.25em] uppercase text-accent-soft/40 mb-3">{cat}</p>
                <p className="font-sans text-[13px] font-300 text-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━ PROCESS ━━━━ */}
      <section className="px-8 sm:px-14 lg:px-20 py-28 lg:py-36">
        <div className="max-w-[960px] mx-auto">
          <div className="rv mb-16">
            <Tag>Process</Tag>
            <H2>Three steps. <A>That's it.</A></H2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-t border-rule pt-16">
            {[
              ['01', 'Receive Your Box', 'Curated launch box shipped to you — premium packaged, yours to keep.'],
              ['02', 'Create Content', 'Unboxing, routine, honest review. Your voice, your style.'],
              ['03', 'Share Your Code', 'Your audience gets 20% off. You earn on every sale.'],
            ].map(([num, title, desc], i) => (
              <div key={num} className={`rv rv-${i + 1}`}>
                <span className="font-serif text-[64px] leading-none text-accent/[0.04] block mb-[-4px]">{num}</span>
                <span className="font-sans text-[9px] font-500 tracking-[0.2em] uppercase text-accent-soft/50 border border-rule-accent px-3 py-1 rounded-full inline-block mb-5">Step {num}</span>
                <h3 className="font-serif text-[22px] text-white mb-3">{title}</h3>
                <p className="font-sans text-[13px] font-300 text-body leading-[1.8]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━ PLAYBOOK ━━━━ */}
      <section className="px-8 sm:px-14 lg:px-20 pb-28 lg:pb-36">
        <div className="max-w-[960px] mx-auto">
          <div className="rv mb-12">
            <Tag>Playbook</Tag>
            <H2>What to <A>post.</A></H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {[
              ['01', 'The Unboxing', 'Film it. React. Share each product.', ['Open the box on camera', 'First impressions per product', 'Tag @his + your code']],
              ['02', 'Wellness Day', 'Products woven into your routine.', ['Morning: Skin Essentials + Multi', 'Workout: T-Support or Balm', 'Keep it natural and honest']],
              ['03', 'Code Drop', 'Shot. Take. Code. Done.', ['Quality flatlay or lifestyle shot', 'Why you back the brand', 'Code + link in bio']],
              ['✦', 'Brand Guide', 'Premium. Not salesy. Health-forward.', ['Clean backgrounds, natural light', 'No hype — real talk only', '"How I take care of myself"']],
            ].map(([num, title, desc, items], i) => (
              <div key={num as string} className={`rv rv-${(i % 2) + 1} group bg-surface rounded-md p-7 lg:p-8 relative overflow-hidden card-hover`}>
                <span className="absolute -bottom-2 right-3 font-serif text-[90px] text-white/[0.01] pointer-events-none">{num}</span>
                <p className="font-sans text-[9px] font-500 tracking-[0.3em] uppercase text-accent-soft/30 mb-4">
                  {num === '✦' ? 'Guidelines' : `Type ${num}`}
                </p>
                <h3 className="font-serif text-[22px] text-white mb-1">{title as string}</h3>
                <p className="font-sans text-[13px] font-300 text-steel mb-5">{desc as string}</p>
                <ul className="space-y-1.5">
                  {(items as string[]).map((item, j) => (
                    <li key={j} className="font-sans text-[12px] text-light/50 flex items-start gap-2">
                      <span className="text-accent/20 mt-0.5 shrink-0">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━ CODE ━━━━ */}
      <section className="px-8 sm:px-14 lg:px-20 py-28 lg:py-36 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-base to-surface/30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/[0.02] blur-[100px] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rule-accent to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rule-accent to-transparent" />

        <div className="relative max-w-md mx-auto">
          <div className="rv">
            <Tag center>Your Code</Tag>
            <H2 center>20% off <A>at launch.</A></H2>
          </div>

          <div className="rv rv-1 inline-block mt-12 mb-8">
            <div className="relative border border-accent/15 bg-accent/[0.02] rounded-md px-12 py-7" style={{ boxShadow: '0 0 40px rgba(29,78,216,0.04)' }}>
              <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border border-accent/20 rounded-[1px] bg-base" />
              <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border border-accent/20 rounded-[1px] bg-base" />
              <p className="font-sans text-[9px] font-500 tracking-[0.3em] uppercase text-muted mb-2">Partner Code</p>
              <p className="font-serif text-[clamp(1.6rem,4vw,2.6rem)] accent-text tracking-[0.06em]">[YOURNAME]26</p>
            </div>
          </div>

          <p className="rv rv-2 font-sans text-[13px] font-300 text-body max-w-xs mx-auto mb-10">
            Valid 30 days from launch. Commission on every sale.
          </p>

          <div className="rv rv-3 flex flex-wrap gap-2 justify-center">
            {['#HisDoctor', '#HisLaunch', '#MensWellnessKE', '#KenyanWellness', '#HisPartner'].map((t) => (
              <span key={t} className="font-sans text-[10px] font-500 text-accent-soft/30 border border-rule-accent/30 px-3.5 py-1 rounded-full hover:bg-accent/[0.03] hover:text-accent-soft/50 transition-all duration-300 cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━ TIMELINE ━━━━ */}
      <section className="px-8 sm:px-14 lg:px-20 py-28 lg:py-32 text-center">
        <div className="max-w-[700px] mx-auto">
          <div className="rv">
            <Tag center>Timeline</Tag>
            <H2 center>Countdown to <A>April 15.</A></H2>
          </div>

          <div className="grid grid-cols-3 gap-2.5 mt-14">
            {[['Now', 'Receive Kit'], ['Apr 8', 'Embargo Lifts'], ['Apr 15', 'Go Live']].map(([num, label], i) => (
              <div key={num} className={`rv rv-${i + 1} bg-surface rounded-md py-10 px-4 card-hover`}>
                <span className="font-serif text-[clamp(1.6rem,3.5vw,2.6rem)] text-accent-soft block mb-2">{num}</span>
                <span className="font-sans text-[9px] font-500 tracking-[0.2em] uppercase text-dim">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━ COMMITMENTS ━━━━ */}
      <section className="px-8 sm:px-14 lg:px-20 pb-28 lg:pb-36">
        <div className="max-w-[960px] mx-auto border-t border-rule pt-16">
          <div className="rv mb-12">
            <Tag>What You Get</Tag>
            <H2>Our commitment <A>to you.</A></H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {[
              ['01', 'Free Product Box', 'Premium launch box delivered. No cost, no strings.'],
              ['02', 'Sales Commission', 'Earn on every purchase through your code.'],
              ['03', 'Creative Freedom', 'Your voice, your style. We trust your audience.'],
              ['04', 'Long-Term Deal', 'Top partners become campaign faces.'],
            ].map(([num, title, desc], i) => (
              <div key={num} className={`rv rv-${Math.min(i + 1, 4)} flex gap-5 p-6 bg-surface rounded-md border-l-2 border-l-accent/12 hover:border-l-accent/25 card-hover`}>
                <span className="font-serif text-[28px] text-accent/10 shrink-0 w-7 leading-none">{num}</span>
                <div>
                  <h4 className="font-serif text-[17px] text-white mb-1">{title}</h4>
                  <p className="font-sans text-[13px] font-300 text-body">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━━ FOOTER ━━━━ */}
      <footer className="px-8 sm:px-14 lg:px-20 py-16 border-t border-rule">
        <div className="max-w-[960px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo size="sm" />
                <span className="font-serif text-[28px] text-white">His</span>
              </div>
              <p className="font-sans text-[13px] font-300 text-dim max-w-[280px] leading-relaxed">
                Men's Health. Delivered Differently.<br />Launching April 15, 2026.
              </p>
            </div>
            <div className="lg:text-right">
              <p className="font-sans text-[13px] font-300 text-dim leading-[2.2]">
                <a href="https://his.doctor" className="text-accent-soft hover:text-accent-bright">his.doctor</a><br />
                <a href="mailto:partnerships@his.doctor" className="text-accent-soft hover:text-accent-bright">partnerships@his.doctor</a><br />
                @his
              </p>
            </div>
          </div>
          <div className="border-t border-rule pt-6 flex justify-between items-center">
            <span className="font-sans text-[9px] font-500 tracking-[0.12em] uppercase text-dim/25">© 2026 His</span>
            <span className="w-1 h-1 rounded-full bg-accent/15" />
            <span className="font-sans text-[9px] font-500 tracking-[0.12em] uppercase text-dim/25">Confidential</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
