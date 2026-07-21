import { useState } from 'react'
import { ArrowRight, Menu, X, Disc3, Wrench, RefreshCw, Tag } from 'lucide-react'

const NAV_LINKS = ['Accueil', 'Services', 'Pneus Occasion', 'Contact']

const SERVICES = [
  { icon: Wrench, label: 'Montage' },
  { icon: RefreshCw, label: 'Démontage' },
  { icon: Tag, label: 'Vente pneus neufs & occasion' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-geist">
      <div className="absolute h-full w-full bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,0.18),transparent_55%),linear-gradient(160deg,#0a0a0a_0%,#000000_60%)]">
        <Disc3
          className="absolute -right-[15%] top-1/2 h-[130vh] w-[130vh] -translate-y-1/2 animate-[spin_40s_linear_infinite] text-white/[0.05] sm:-right-[10%]"
          strokeWidth={0.5}
        />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(115deg,transparent,transparent_38px,rgba(255,255,255,0.03)_38px,rgba(255,255,255,0.03)_40px)]" />
      </div>

      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <div className="flex items-center gap-10">
          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Teker Pneus
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:block"
        >
          Nous Contacter
        </button>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="relative z-50 flex h-10 w-10 items-center justify-center active:scale-90 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu
            size={24}
            className={`absolute text-white transition-all duration-300 ${
              mobileMenuOpen
                ? 'rotate-90 scale-0 opacity-0'
                : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <X
            size={24}
            className={`absolute text-white transition-all duration-300 ${
              mobileMenuOpen
                ? 'rotate-0 scale-100 opacity-100'
                : '-rotate-90 scale-0 opacity-0'
            }`}
          />
        </button>
      </nav>

      <div
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'h-screen opacity-100'
            : 'pointer-events-none h-0 opacity-0'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center px-8 transition-all delay-100 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-medium text-white/90 hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 w-fit rounded-full bg-white px-8 py-3.5 text-base font-medium text-black hover:scale-105"
          >
            Nous Contacter
          </button>
        </div>
      </div>

      <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        <div className="max-w-3xl">
          <div className="mb-4 animate-[fadeSlideUp_0.8s_ease_0.2s_both] text-xs text-white/90 sm:mb-6 sm:text-sm">
            Montage & Vente de Pneus · Eghezée
          </div>
          <h1 className="animate-[fadeSlideUp_0.8s_ease_0.4s_both] text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Vos pneus,
            <br />
            notre expertise,
            <br />à Eghezée.
          </h1>
        </div>

        <div>
          <div className="mb-5 flex animate-[fadeSlideUp_0.8s_ease_0.6s_both] flex-wrap gap-3 sm:mb-6">
            {SERVICES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm sm:text-sm"
              >
                <Icon size={14} />
                {label}
              </span>
            ))}
          </div>
          <p className="mb-5 max-w-sm animate-[fadeSlideUp_0.8s_ease_0.7s_both] text-sm leading-relaxed text-white/60 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
            Montage, démontage et vente de pneus neufs et d'occasion. Un
            service rapide et de qualité pour tous les véhicules.
          </p>
          <button
            type="button"
            className="inline-flex animate-[fadeSlideUp_0.8s_ease_0.9s_both] items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3"
          >
            Voir nos services
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
