import { MessageSquare, CarFront, Droplets, BadgeCheck } from 'lucide-react';

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Заявка',
    description:
      'Телефонуєте або пишете нам у месенджер. Уточнюємо марку авто, стан салону та зручний час.',
  },
  {
    icon: CarFront,
    title: 'Виїзд майстра',
    description:
      'Приїжджаємо за 60-90 хвилин у будь-яку точку Києва — додому, на роботу чи в паркінг. Все обладнання з собою.',
  },
  {
    icon: Droplets,
    title: 'Хімчистка',
    description:
      'Розбираємо салон, виводимо плями, робимо екстракторну чистку кожної поверхні. Використовуємо лише сертифіковану хімію.',
  },
  {
    icon: BadgeCheck,
    title: 'Приймання роботи',
    description:
      'Сушимо салон, збираємо та показуємо результат. Ви приймаєте роботу — і тільки потім розраховуєтесь.',
  },
];

export function Process() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-sm font-semibold text-primary-300">
            Етапи
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Як ми працюємо
          </h2>
          <p className="mt-4 text-slate-400">
            Від заявки до чистого салону — чотири прості кроки. Ви завжди знаєте, що
            відбувається з вашим авто.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Connector line */}
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary-500/40 via-primary-500/40 to-transparent md:block lg:left-1/2"
            aria-hidden="true"
          />
          <div className="space-y-10 md:space-y-14">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const even = index % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    even ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 md:px-12">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-primary-500/30">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900">
                          <Icon className="h-6 w-6 text-primary-400" />
                        </div>
                        <span className="font-display text-4xl font-extrabold text-slate-800">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-primary-500 shadow-lg shadow-primary-500/40 md:block"
                    aria-hidden="true"
                  />
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
