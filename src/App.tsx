import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Services, ServiceCard } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { Process } from '@/components/Process';
import { Reviews } from '@/components/Reviews';
import { Contact } from '@/components/Contact';
import { Link, navigate, usePathname } from '@/lib/router';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <section className="border-t border-slate-800/60 bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Не знайшли потрібну послугу?
            </h2>
            <p className="mt-4 text-slate-400">
              Подивіться повний прайс або зателефонуйте — підберемо рішення під ваше авто
              та бюджет.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/pricing"
                className="rounded-xl bg-primary-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-400"
              >
                Дивитись ціни
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-slate-600 bg-slate-800/60 px-8 py-4 text-base font-bold text-white transition-all hover:bg-slate-700/60"
              >
                Замовити консультацію
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesPage() {
  return <Services />;
}

function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-slate-950 px-4 text-center">
      <div className="font-display text-8xl font-extrabold text-primary-500/20">404</div>
      <h1 className="mt-4 font-display text-4xl font-extrabold text-white">Сторінку не знайдено</h1>
      <p className="mt-3 max-w-md text-slate-400">
        Схоже, такої сторінки не існує. Перейдіть на головну або замовте хімчистку прямо зараз.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-8 rounded-xl bg-primary-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-600"
      >
        На головну
      </button>
    </section>
  );
}

export default function App() {
  const pathname = usePathname();
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    setBooted(true);
  }, []);

  let page;
  switch (pathname) {
    case '/':
      page = <Home />;
      break;
    case '/services':
      page = <ServicesPage />;
      break;
    case '/pricing':
      page = <Pricing />;
      break;
    case '/process':
      page = <Process />;
      break;
    case '/reviews':
      page = <Reviews />;
      break;
    case '/contact':
      page = <Contact />;
      break;
    default:
      page = <NotFound />;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className={booted ? 'animate-fade-in' : ''}>{page}</main>
      <Footer />

      {/* Floating call button */}
      <a
        href="tel:+380501234567"
        aria-label="Зателефонувати"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white shadow-2xl shadow-primary-500/40 transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

// re-export for potential reuse
export { ServiceCard };
