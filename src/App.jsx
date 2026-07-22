import { useState } from 'react'
import {
  ArrowRight,
  Menu,
  X,
  Wrench,
  RefreshCw,
  Tag,
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react'
import garageHero from './assets/garage-hero.jpg'

const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Pneus Occasion', href: '#pneus-occasion' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  {
    icon: Wrench,
    label: 'Montage',
    description:
      'Montage professionnel de vos pneus, toutes dimensions et tous types de véhicules.',
  },
  {
    icon: RefreshCw,
    label: 'Démontage',
    description:
      'Démontage rapide et soigné, sans endommager vos jantes.',
  },
  {
    icon: Tag,
    label: 'Vente pneus neufs & occasion',
    description:
      'Large choix de pneus neufs et d’occasion contrôlés, pour tous les budgets.',
  },
]

const USED_TIRE_HIGHLIGHTS = [
  'Contrôlés avant la vente',
  'Toutes marques et dimensions',
  'Prix avantageux',
]

const PHONE_DISPLAY = '0470 87 78 04'
const PHONE_TEL = '+32470877804'
const PHONE_WHATSAPP = '32470877804'
const ADDRESS = 'Chaussée de Namur 148, 5310 Eghezée (Leuze)'
const EMAIL = 'tekerpneus@gmail.com'
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
const WHATSAPP_URL = `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent('Bonjour, je souhaite des informations sur vos pneus.')}`

const HOURS = [
  { day: 'Lundi - Vendredi', time: '9h00 - 17h30' },
  { day: 'Samedi', time: '10h00 - 17h00' },
  { day: 'Dimanche', time: 'Fermé' },
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full bg-black font-geist">
      <nav className="fixed inset-x-0 top-0 z-30 flex items-center justify-between bg-black/70 px-6 py-5 backdrop-blur-md md:px-12 lg:px-16">
        <div className="flex items-center gap-10">
          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Teker Pneus
          </span>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <a
          href={`tel:${PHONE_TEL}`}
          className="hidden rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105 md:block"
        >
          Nous Contacter
        </a>

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
        className={`fixed inset-0 z-20 overflow-hidden bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-medium text-white/90 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 w-fit rounded-full bg-white px-8 py-3.5 text-base font-medium text-black hover:scale-105"
          >
            Nous Contacter
          </a>
        </div>
      </div>

      <section
        id="accueil"
        className="relative h-screen w-full overflow-hidden"
      >
        <img
          src={garageHero}
          alt="Atelier Teker Pneus à Eghezée"
          className="absolute h-full w-full object-cover object-center"
        />
        <div className="absolute h-full w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(220,38,38,0.16),transparent_55%)]" />

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
            <a
              href="#services"
              className="inline-flex animate-[fadeSlideUp_0.8s_ease_0.9s_both] items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3"
            >
              Voir nos services
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative bg-neutral-950 px-6 py-20 pt-28 md:px-12 md:py-24 md:pt-28 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-xs text-white/60 sm:text-sm">
            Nos Services
          </div>
          <h2 className="mb-10 max-w-xl text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl md:mb-14 md:text-4xl">
            Tout pour vos pneus, au même endroit.
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {SERVICES.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <Icon size={22} className="mb-4 text-white" />
                <h3 className="mb-2 text-lg font-medium text-white">
                  {label}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pneus-occasion"
        className="relative bg-black px-6 py-20 md:px-12 md:py-24 lg:px-16"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 text-xs text-white/60 sm:text-sm">
            Pneus d'Occasion
          </div>
          <h2 className="mb-6 max-w-xl text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
            Une alternative fiable et économique.
          </h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base md:text-lg">
            Nous proposons une large sélection de pneus d'occasion contrôlés
            et en bon état, toutes marques et dimensions confondues. Une
            solution économique sans compromis sur la sécurité. Contactez-nous
            pour vérifier la disponibilité pour votre véhicule.
          </p>
          <div className="flex flex-wrap gap-4">
            {USED_TIRE_HIGHLIGHTS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                <CheckCircle2 size={16} className="text-white" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-neutral-950 px-6 py-20 md:px-12 md:py-24 lg:px-16"
      >
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <div className="mb-3 text-xs text-white/60 sm:text-sm">
              Contact
            </div>
            <h2 className="mb-8 text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              Passez nous voir ou contactez-nous.
            </h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-white/70" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/80 hover:text-white sm:text-base"
                >
                  {ADDRESS}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-white/70" />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-sm text-white/80 hover:text-white sm:text-base"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-0.5 shrink-0 text-white/70" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-white/80 hover:text-white sm:text-base"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-white/70" />
                <div className="text-sm text-white/80 sm:text-base">
                  {HOURS.map(({ day, time }) => (
                    <div key={day} className="flex gap-2">
                      <span className="text-white/60">{day} :</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105"
            >
              <MessageCircle size={18} />
              Nous écrire sur WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              <Phone size={18} />
              Appeler le garage
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              <MapPin size={18} />
              Voir sur Google Maps
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-xs text-white/40 md:px-12 lg:px-16">
        © {new Date().getFullYear()} Teker Pneus · Eghezée
      </footer>
    </div>
  )
}

export default App
