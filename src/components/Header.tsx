import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Link, navigate, usePathname } from '@/lib/router';

const NAV_LINKS = [
  { label: 'Послуги', href: '/services' },
  { label: 'Ціни', href: '/pricing' },
  { label: 'Етапи', href: '/process' },
  { label: 'Відгуки', href: '/reviews' },
  { label: 'Контакти', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === '/';
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `text-sm font-semibold transition-colors hover:text-primary-400 ${
      pathname === href
        ? 'text-primary-400'
        : solid
          ? 'text-slate-300'
          : 'text-white/90'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-black shadow-lg shadow-black/40">
              <img src="/logo-d.png" alt="Логотип DREVANO" className="h-6 w-auto" />
            </div>
            <div className="text-left">
              <span className="block font-sans text-base font-extrabold uppercase tracking-[0.22em] leading-none text-white">
                Drevano
              </span>
              <span className={`block text-[10px] uppercase tracking-[0.18em] leading-none mt-1 ${solid ? 'text-slate-400' : 'text-white/70'}`}>
                Car Care &amp; Detailing
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+380501234567"
              className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                solid ? 'text-slate-200 hover:text-primary-400' : 'text-white hover:text-primary-200'
              }`}
            >
              <Phone className="h-4 w-4" />
              +38 050 123 45 67
            </a>
            <Link
              to="/contact"
              className="rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/40"
            >
              Замовити
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${solid ? 'text-slate-200' : 'text-white'}`}
            aria-label={mobileOpen ? 'Закрити меню' : 'Відкрити меню'}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-slate-800 bg-slate-950 py-4 md:hidden animate-fade-in">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`rounded-lg px-4 py-2.5 text-left text-sm font-semibold hover:bg-primary-500/10 hover:text-primary-400 ${
                    pathname === link.href ? 'bg-primary-500/10 text-primary-400' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 px-4">
                <a href="tel:+380501234567" className="flex items-center gap-2 text-sm font-bold text-slate-200">
                  <Phone className="h-4 w-4" /> +38 050 123 45 67
                </a>
                <button
                  onClick={() => navigate('/contact')}
                  className="rounded-xl bg-primary-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/30"
                >
                  Замовити хімчистку
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
