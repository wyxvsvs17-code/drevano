import { Sparkles, Clock, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router';

const HERO_IMG =
  'https://images.pexels.com/photos/6873103/pexels-photo-6873103.jpeg?auto=compress&cs=tinysrgb&w=1600';

const STATS = [
  { value: '1 500+', label: 'салонів очищено' },
  { value: '60 хв', label: 'середній час приїзду' },
  { value: '4.9', label: 'рейтинг клієнтів' },
  { value: '5 років', label: 'досвіду роботи' },
];

const CHIPS = [
  { icon: Clock, text: 'Виїзд за 60 хв' },
  { icon: ShieldCheck, text: 'Безпечні засоби' },
  { icon: Star, text: 'Гарантія якості' },
];

function Stat({ value, text }: { value: string; text: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="font-display text-2xl font-extrabold text-primary-400">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{text}</div>
    </div>
  );
}

function Chip({ icon: Icon, text }: { icon: typeof Clock; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
      <Icon className="h-4 w-4 text-primary-400" />
      <span className="text-sm font-semibold text-white">{text}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 md:pt-40 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 backdrop-blur-sm animate-fade-in">
          <Sparkles className="h-4 w-4 text-primary-400" />
          <span className="text-sm font-semibold text-primary-100">Виїзд по Києву за 60 хвилин</span>
        </span>

        <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white text-balance sm:text-5xl lg:text-6xl animate-fade-up">
          Виїзна хімчистка{' '}
          <span className="text-primary-400">салону автомобіля</span>{' '}
          у Києві
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg animate-fade-up">
          Професійне чищення сидінь, стелі, дверних карт, панелі приладів та багажника.
          Приїжджаємо до вас — додому, на роботу чи в паркінг. Безпечні засоби для шкіри,
          тканини та алькантари.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-up">
          <Link
            to="/contact"
            className="rounded-2xl bg-primary-500 px-8 py-4 text-center text-base font-bold text-white shadow-2xl shadow-primary-500/40 transition-all hover:bg-primary-600 hover:scale-105"
          >
            Замовити хімчистку
          </Link>
          <Link
            to="/pricing"
            className="rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 text-center text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
          >
            Переглянути ціни
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {CHIPS.map((chip) => (
            <Chip key={chip.text} icon={chip.icon} text={chip.text} />
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} text={s.label} />
          ))}
        </div>

        <div className="mt-12 hidden items-center gap-2 text-sm text-slate-400 sm:flex">
          <span>Дивіться наші послуги</span>
          <ArrowRight className="h-4 w-4 animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
}
