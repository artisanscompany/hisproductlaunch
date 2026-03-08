import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({ component: App })

/* ── Logo ── */
function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const s = size === 'lg' ? 'h-11 px-3.5 text-[17px]' : size === 'md' ? 'h-9 px-3 text-[14px]' : 'h-7 px-2 text-[11px]'
  return (
    <div className={`${s} relative bg-accent rounded-[5px] flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent" />
      <span className="relative font-serif font-normal text-white tracking-[0.06em]">his</span>
    </div>
  )
}

/* ── Section label ── */
function Label({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3.5 mb-6">
      <span className="w-6 h-px bg-accent/40" />
      <span className="font-sans text-[12px] font-500 tracking-[0.25em] uppercase text-accent-soft">{children}</span>
    </div>
  )
}

/* ── Center label ── */
function CenterLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3.5 mb-6 justify-center">
      <span className="w-6 h-px bg-accent/40" />
      <span className="font-sans text-[12px] font-500 tracking-[0.25em] uppercase text-accent-soft">{children}</span>
      <span className="w-6 h-px bg-accent/40" />
    </div>
  )
}

/* ── Data ── */
const products = [
  { id: '01', icon: '🌿', name: 'T-Support', cat: 'Supplements & Nutrition', desc: 'Ashwagandha, tongkat ali & maca blend for natural hormonal balance, energy, and vitality. For men who want to feel like themselves again.' },
  { id: '02', icon: '💊', name: 'Daily Multi', cat: 'Supplements & Nutrition', desc: "A comprehensive men's multivitamin formulated specifically for the Kenyan diet — covering the gaps that most men never know they have." },
  { id: '03', icon: '☕', name: 'Energy Tea', cat: 'Herbal Infusions', desc: 'A natural energy-boosting herbal infusion for daily vitality. No crash. No compromise. Just clean, sustained energy from nature.' },
  { id: '04', icon: '✨', name: 'Skin Essentials', cat: 'Personal Care & Grooming', desc: "Men's face wash, moisturiser & SPF trio. Simple, effective, premium. Because great skin isn't complicated — it just needs the right system." },
  { id: '05', icon: '🧴', name: 'Beard & Body', cat: 'Personal Care & Grooming', desc: 'Premium beard oil and body wash. Formulated for our climate, our skin tones, our lifestyle. Grooming that actually makes sense for the Kenyan man.' },
  { id: '06', icon: '💪', name: 'Recovery Balm', cat: 'Recovery & Fitness', desc: "Natural muscle recovery rub for active men. Whether you're at the gym, on the pitch, or just back from a long day — this is your reset." },
]

const steps = [
  { num: '01', title: 'Receive Your Box', desc: "We send you a curated His launch box — beautifully packaged, full of our debut products. Yours to experience, keep, and share. No strings, just great products." },
  { num: '02', title: 'Create & Post', desc: "Drop your content on or before April 15th — unboxing, a wellness day, a review, your morning routine. Authentic is everything. Show your audience why you rate it." },
  { num: '03', title: 'Share Your Code', desc: "Every partner gets a unique discount code for your followers. They save on their first order. You earn on every sale. It's a win for your community, and for you." },
]

const playbook = [
  {
    id: '01', title: 'The Unboxing & First Impression', type: 'Content Type 01',
    desc: "Let your audience experience the opening with you. Show the packaging, the products, your reaction. No script needed — just you and the box.",
    tips: ['Film the moment you open the box', 'Share your first impressions of each product', 'Talk to what problem it solves for you', 'Tag @his on Instagram and use your discount code in caption'],
  },
  {
    id: '02', title: 'Day in My Life — Wellness Edition', type: 'Content Type 02',
    desc: "Weave His into your daily rhythm. Morning skincare, pre-workout supplement, wind-down tea. Show what intentional men's wellness looks like in real life.",
    tips: ['Morning routine with Skin Essentials & Daily Multi', 'Pre or post workout with T-Support or Recovery Balm', 'Evening wind-down with Energy Tea', 'Voiceover or text overlay — keep it clean and real'],
  },
  {
    id: '03', title: 'The Discount Drop Post', type: 'Content Type 03',
    desc: "Give your followers an exclusive on launch day. A clean product shot, your honest endorsement, your code. Simple, effective, trusted.",
    tips: ["High-quality flatlay or product shot (we'll send tips)", 'Your personal reason for backing the brand', 'Your unique discount code prominently featured', 'Link to his.doctor in bio or swipe-up'],
  },
  {
    id: '✦', title: 'Keeping It On Brand', type: 'Creative Guidelines',
    desc: "We're a premium, health-first brand. Your content should feel elevated — not salesy. Here's what works with our aesthetic:",
    tips: ['Clean backgrounds — white, linen, dark marble or wood', 'Natural lighting where possible', 'Honest captions — real talk, no hype language', 'Health-forward narrative: "this is how I take care of myself"'],
  },
]

const commitments = [
  { title: 'Your Products, Delivered Free', desc: 'A curated His launch box sent to you — premium packaged, ready to shoot. Everything you need to create great content, at no cost to you.' },
  { title: 'Commission on Every Sale', desc: 'Every purchase made using your unique discount code earns you a commission. The more your audience engages, the more you earn. Transparent. No games.' },
  { title: 'Creative Freedom', desc: "We're not here to dictate your content. We trust you because you built your audience. Use your voice — we just ask that you keep it honest and on-brand." },
  { title: 'Long-Term Partnership', desc: "This isn't a one-post arrangement. Our best-performing partners will become the faces of His campaigns. Think of this as the beginning of something bigger." },
]

function App() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target) }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.rv').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-base max-w-4xl mx-auto">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded">Skip to content</a>

      {/* ━━━ HERO ━━━ */}
      <header className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="absolute -top-[30%] right-[5%] w-[600px] h-[600px] rounded-full bg-accent/[0.025] blur-[180px] pointer-events-none" />
        <div className="absolute bottom-[10%] -left-[8%] w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[120px] pointer-events-none" />

        <nav aria-label="Main navigation" className="in relative z-10 flex items-center justify-between px-8 sm:px-14 pt-10">
          <Logo />
          <div className="hidden sm:block font-sans text-[11px] font-500 tracking-[0.2em] uppercase text-accent-soft border border-rule-accent px-5 py-2 rounded-sm">
            Influencer Kit · 2026
          </div>
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 sm:px-14 py-16">
          <p className="in in-1 font-sans text-[11px] font-500 tracking-[0.3em] uppercase text-accent-soft mb-8">
            Exclusive · Confidential · For Our Partners
          </p>

          <h1 className="in in-2 font-serif text-[clamp(3.2rem,7vw,6rem)] leading-[0.92] text-white mb-10">
            Men's Wellness.<br />
            <i className="accent-text">Reimagined.</i><br />
            For Kenya.
          </h1>

          <p className="in in-4 text-[16px] font-300 text-body max-w-[520px] leading-[1.8] mb-14">
            You've been selected to be among the first voices to introduce His's inaugural wellness product line to your audience — a collection built for the modern Kenyan man who takes his health seriously.
          </p>

          <div className="in in-5 flex items-center gap-5">
            <span className="w-10 h-px bg-accent/40" />
            <span className="font-sans text-[12px] tracking-[0.2em] uppercase text-light">Official Launch</span>
            <span className="font-serif text-[22px] text-accent-soft tracking-wide">April 15, 2026</span>
            <span className="w-10 h-px bg-accent/40" />
          </div>
        </div>
      </header>


      <main id="main-content" tabIndex={-1}>

      {/* ━━━ ABOUT ━━━ */}
      <section aria-label="About His" className="px-8 sm:px-14 py-28 lg:py-36 border-t border-rule">
        <div className="mx-auto rv">
          <Label>Who We Are</Label>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-white mb-8">
            Health. <i className="accent-text">Delivered Differently.</i>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-10">
            <p className="text-[15px] font-300 text-body leading-[1.9]">
              His is East Africa's first clinically-credible men's health platform — combining real doctor consultations with a curated range of wellness products built specifically for men.
            </p>
            <div>
              <p className="text-[15px] font-300 text-body leading-[1.9] mb-5">
                We're not another supplement brand. We're a <span className="text-bright font-400">health movement</span>. Every product in our line is reviewed by our clinical team and formulated to address what real Kenyan men actually face — from energy and hormonal balance to skin health and recovery.
              </p>
              <p className="text-[15px] font-300 text-body leading-[1.9]">
                On <span className="text-bright font-400">April 15th</span>, we launch our first product collection. And we want your voice to be part of that moment.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ━━━ PRODUCTS ━━━ */}
      <section aria-label="Product collection" className="px-8 sm:px-14 py-28 lg:py-36 border-t border-rule relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-base to-surface/60 pointer-events-none" />

        <div className="relative mx-auto">
          <div className="rv mb-14">
            <Label>The Collection</Label>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-white mb-4">
              Products Built <i className="accent-text">For the Modern Man.</i>
            </h2>
            <p className="text-[15px] font-300 text-body max-w-[520px] leading-[1.8]">
              Every item in the His line is purposeful, clean, and crafted to actually work. Here's what you'll be introducing your audience to:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
            {products.map((p, i) => (
              <div key={p.id} className={`rv rv-${Math.min((i % 3) + 1, 3)} group card top-accent rounded-sm p-10 relative overflow-hidden cursor-default`}>
                <span className="absolute top-4 right-6 font-serif text-[72px] text-accent/[0.04] group-hover:text-accent/[0.08] transition-colors duration-600 pointer-events-none select-none leading-none">{p.id}</span>

                <div className="w-11 h-11 border border-rule-accent flex items-center justify-center mb-7 text-[20px]">{p.icon}</div>
                <h3 className="font-serif text-[24px] text-white mb-2">{p.name}</h3>
                <p className="font-sans text-[11px] font-500 tracking-[0.2em] uppercase text-accent-soft mb-5">{p.cat}</p>
                <p className="text-[14px] font-300 text-body leading-[1.8]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━ HOW IT WORKS ━━━ */}
      <section aria-label="How it works" className="px-8 sm:px-14 py-28 lg:py-36">
        <div className="mx-auto">
          <div className="rv mb-6">
            <Label>Your Role</Label>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-white">
              How We're <i className="accent-text">Doing This Together.</i>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 pt-14 border-t border-rule">
            {steps.map((s, i) => (
              <div key={s.num} className={`rv rv-${i + 1} relative`}>
                <span className="font-serif text-[100px] leading-none text-accent/[0.05] block mb-[-20px] pointer-events-none select-none">{s.num}</span>
                <span className="inline-block font-sans text-[11px] font-500 tracking-[0.2em] uppercase text-accent-soft border border-rule-accent px-3 py-1 mb-5">Step {s.num}</span>
                <h3 className="font-serif text-[26px] text-white mb-4">{s.title}</h3>
                <p className="text-[14px] font-300 text-body leading-[1.85]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━ PLAYBOOK ━━━ */}
      <section aria-label="Content playbook" className="px-8 sm:px-14 pb-28 lg:pb-36">
        <div className="mx-auto">
          <div className="rv mb-6">
            <Label>Content Playbook</Label>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-white">
              Three Ways to <i className="accent-text">Drop the Brand.</i>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] mt-14 border-t border-rule pt-14">
            {playbook.map((p, i) => (
              <div key={p.id} className={`rv rv-${(i % 2) + 1} group card rounded-sm p-10 lg:p-12 relative overflow-hidden`}>
                <span className="absolute -bottom-5 right-5 font-serif text-[160px] leading-none text-accent/[0.025] pointer-events-none select-none">{p.id}</span>

                <p className="font-sans text-[11px] font-500 tracking-[0.25em] uppercase text-accent-soft mb-6">{p.type}</p>
                <h3 className="font-serif text-[28px] leading-[1.15] text-white mb-4">{p.title}</h3>
                <p className="text-[14px] font-300 text-body leading-[1.8] mb-7">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.tips.map((tip, j) => (
                    <li key={j} className="text-[13px] text-light/70 flex items-start gap-3">
                      <span className="text-accent-soft/40 shrink-0 mt-0.5">—</span>{tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━ DISCOUNT CODE ━━━ */}
      <section aria-label="Discount code" className="px-8 sm:px-14 py-28 lg:py-36 text-center border-t border-b border-rule relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface/60 via-base to-surface/60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.025] blur-[160px] pointer-events-none" />

        <div className="relative max-w-md mx-auto">
          <div className="rv">
            <CenterLabel>Your Exclusive Code</CenterLabel>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-white">
              Give Your Audience <i className="accent-text">20% Off at Launch.</i>
            </h2>
          </div>

          <div className="rv rv-1 inline-block mt-12 mb-8">
            <div className="relative border border-accent bg-accent/[0.04] px-14 py-8" style={{ boxShadow: '0 0 60px rgba(29,78,216,0.06)' }}>
              <div className="absolute -top-1 -left-1 w-2 h-2 border border-accent bg-base" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-accent bg-base" />
              <p className="font-sans text-[11px] font-500 tracking-[0.25em] uppercase text-steel mb-2">Your Partner Code</p>
              <p className="font-serif text-[clamp(2rem,5vw,3.2rem)] text-accent-soft tracking-[0.12em]">[YOURNAME]26</p>
              <p className="font-sans text-[11px] text-steel mt-2">e.g. AMINA26, BRIAN26</p>
            </div>
          </div>

          <p className="rv rv-2 text-[14px] font-300 text-body max-w-[480px] mx-auto leading-[1.8] mb-10">
            Each partner receives a personalised code before launch. Share it with your audience from April 15th onwards — valid for 30 days. You earn commission on every sale made through your code.
          </p>

          <div className="rv rv-3 flex flex-wrap gap-3 justify-center">
            {['#His', '#HisLaunch', '#MensWellnessKE', '#HealthDeliveredDifferently', '#KenyanWellness', '#HisPartner'].map((t) => (
              <span key={t} className="font-sans text-[13px] tracking-[0.05em] text-accent-soft/60 border border-rule-accent px-5 py-2 hover:bg-accent/[0.05] hover:border-accent/40 hover:text-accent-soft transition-all duration-300 cursor-default">{t}</span>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━ TIMELINE ━━━ */}
      <section aria-label="Launch timeline" className="px-8 sm:px-14 py-28 lg:py-36 text-center">
        <div className="mx-auto">
          <div className="rv">
            <CenterLabel>Timeline</CenterLabel>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-white">
              The Countdown <i className="accent-text">to April 15th.</i>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[2px] mt-14">
            {[
              { date: 'Now', label: 'Receive Your Kit', active: true },
              { date: 'Apr 8', label: 'Embargo Lifts — Pre-Tease Content', active: false },
              { date: 'Apr 15', label: 'Official Launch — Go Live', active: false },
            ].map((m, i) => (
              <div key={m.date} className={`rv rv-${i + 1} card rounded-sm py-12 px-8 border-t-2 ${m.active ? 'border-t-accent' : 'border-t-transparent'} hover:border-t-accent transition-colors duration-300`}>
                {m.active && <div className="flex justify-center mb-3"><span className="w-2 h-2 rounded-full bg-accent-soft" style={{ animation: 'glow 2s ease-in-out infinite' }} /></div>}
                <span className={`font-serif text-[clamp(2rem,4vw,4.5rem)] block mb-2 ${m.active ? 'text-accent-soft' : 'text-white'}`}>{m.date}</span>
                <span className="font-sans text-[11px] font-500 tracking-[0.15em] uppercase text-steel">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━ COMMITMENTS ━━━ */}
      <section aria-label="Our commitments" className="px-8 sm:px-14 pb-28 lg:pb-36 border-t border-rule pt-28 lg:pt-36">
        <div className="mx-auto">
          <div className="rv mb-14">
            <Label>Our Commitment to You</Label>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.1] text-white">
              What You Can <i className="accent-text">Expect From Us.</i>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {commitments.map((c, i) => (
              <div key={c.title} className={`rv rv-${Math.min(i + 1, 4)} flex gap-6 p-8 bg-surface border-l-2 border-l-accent/30 hover:border-l-accent hover:bg-surface-2 transition-all duration-300`}>
                <span className="font-serif text-[42px] text-accent/15 shrink-0 leading-none w-10">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-[20px] text-white mb-3">{c.title}</h3>
                  <p className="text-[14px] font-300 text-body leading-[1.8]">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━ CTA ━━━ */}
      <section aria-label="Get started" className="px-8 sm:px-14 py-20 lg:py-28 text-center border-t border-rule relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-base to-base pointer-events-none" />
        <div className="relative max-w-[600px] mx-auto rv">
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-white mb-4">
            Ready to <i className="accent-text">join the launch?</i>
          </h2>
          <p className="text-[15px] font-300 text-body mb-10 leading-[1.8]">
            Confirm your spot, ask questions, or request your personalised code — reach out via WhatsApp or email.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/254700000000?text=Hi%2C%20I%27m%20interested%20in%20the%20His%20Influencer%20Launch%20Kit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-accent hover:bg-accent-soft text-white font-sans text-[14px] font-500 tracking-[0.05em] px-8 py-4 rounded-sm transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.33 0-4.484-.768-6.223-2.065l-.435-.338-2.633.882.882-2.633-.338-.435A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Us
            </a>
            <a href="mailto:partnerships@his.doctor" className="inline-flex items-center gap-2 border border-rule-accent text-accent-soft hover:text-accent-bright hover:border-accent/40 font-sans text-[14px] font-500 tracking-[0.05em] px-8 py-4 rounded-sm transition-all duration-300">
              Email Partnership Team
            </a>
          </div>
        </div>
      </section>

      </main>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="px-8 sm:px-14 py-20 border-t border-rule">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-16">
            <div>
              <p className="text-[14px] font-300 text-steel max-w-[380px] leading-[1.8]">
                Men's Health. Delivered Differently.<br />
                East Africa's first clinically-credible men's wellness brand, launching April 15, 2026.
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-[14px] font-300 text-steel leading-[2]">
                Website: <a href="https://his.doctor" target="_blank" rel="noopener noreferrer" className="text-accent-soft hover:text-accent-bright">his.doctor</a><br />
                Partnerships: <a href="mailto:partnerships@his.doctor" className="text-accent-soft hover:text-accent-bright">partnerships@his.doctor</a><br /><br />
                Instagram: <a href="https://instagram.com/his" target="_blank" rel="noopener noreferrer" className="text-accent-soft hover:text-accent-bright">@his</a><br />
                Prepared: March 2026 · Confidential
              </p>
            </div>
          </div>

          <div className="border-t border-rule pt-8 flex flex-wrap justify-between items-center gap-4">
            <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-muted">© 2026 His · All Rights Reserved</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            <span className="font-sans text-[11px] tracking-[0.12em] uppercase text-muted">Influencer Partner Kit · Confidential</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
