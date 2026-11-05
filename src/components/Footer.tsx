import { Phone, Clock, MapPin } from 'lucide-react';
import { Link } from '@/lib/router';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src="/logo-full.png"
              alt="DREVANO — Car Care & Detailing"
              className="h-24 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed max-w-md">
              Професійна виїзна хімчистка салонів автомобілів у Києві та області. Чищення сидінь, стелі, дверних карт, панелі приладів та багажника. Екологічні засоби, професійне обладнання, виїзд у будь-яке місце.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-200">Контакти</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="tel:+380501234567" className="flex items-center gap-2 text-sm hover:text-primary-400 transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0" /> +38 050 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 flex-shrink-0" /> Пн-Нд: 8:00—22:00
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" /> Київ та область
              </li>
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-200">Розділи</h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: 'Послуги', href: '/services' },
                { label: 'Ціни', href: '/pricing' },
                { label: 'Етапи роботи', href: '/process' },
                { label: 'Відгуки', href: '/reviews' },
                { label: 'Контакти', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} DREVANO. Усі права захищені.</p>
          <p className="text-xs text-slate-500">Безпечні засоби • Професійне обладнання • Гарантія якості</p>
        </div>
      </div>
    </footer>
  );
}
