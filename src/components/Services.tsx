import { Armchair, Square, DoorOpen, Package, Droplets, Wind, Check } from 'lucide-react';
import { Link } from '@/lib/router';

export interface Service {
  id: string;
  icon: typeof Armchair;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'seats',
    icon: Armchair,
    title: 'Хімчистка сидінь',
    description:
      'Глибоке чищення передніх та задніх сидінь. Виводимо плями, прибираємо запахи, відновлюємо колір тканини та шкіри.',
    price: 'від 1 500 ₴',
    features: ['Плямовивід без розводів', 'Безпечні засоби для шкіри', 'Сушка 1-2 години'],
    image:
      'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'ceiling',
    icon: Square,
    title: 'Хімчистка стелі',
    description:
      'Дбайливе чищення стельового покриття без провисань та пошкоджень клею. Прибираємо нікотин, жир та плями.',
    price: 'від 800 ₴',
    features: ['Без провисання матеріалу', 'Прибираємо нікотиновий наліт', 'Свіжий вигляд салону'],
    image:
      'https://images.pexels.com/photos/6873028/pexels-photo-6873028.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'doors',
    icon: DoorOpen,
    title: 'Дверні карти та панель',
    description:
      'Чищення дверних карт, панелі приладів та кнопок. Акуратно з електронікою, з подальшою поліровкою пластику.',
    price: 'від 900 ₴',
    features: ['Акуратно з електронікою', 'Матовый фініш пластику', 'Чисті шви та ручки'],
    image:
      'https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'trunk',
    icon: Package,
    title: 'Хімчистка багажника',
    description:
      'Чищення багажника та ниші під запаску. Прибираємо сліди від перевезень, плями та запахи.',
    price: 'від 700 ₴',
    features: ['Повне прибирання ниші', 'Видалення плям та запахів', 'Обробка ущільнювачів'],
    image:
      'https://images.pexels.com/photos/6720449/pexels-photo-6720449.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'complex',
    icon: Droplets,
    title: 'Комплексна хімчистка',
    description:
      'Повне чищення салону: стеля, сидіння, двері, панель, підлога та багажник. Найпопулярніша послуга.',
    price: 'від 3 500 ₴',
    features: ['Усе салон за 3-5 годин', 'Кондиціонер пластику в подарунок', 'Найвигідніша ціна'],
    image:
      'https://images.pexels.com/photos/6872167/pexels-photo-6872167.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'odor',
    icon: Wind,
    title: 'Видалення запахів',
    description:
      'Озонація та дезінфекція системи вентиляції. Позбуваємось запаху тютюну, вологи, тварин назавжди.',
    price: 'від 1 200 ₴',
    features: ['Озонування салону', 'Чистка кондиціонера', 'Заміна салонного фільтра'],
    image:
      'https://images.pexels.com/photos/3807054/pexels-photo-3807054.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/10">
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-4 right-4 rounded-full bg-primary-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg">
          {service.price}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-500/20 bg-primary-500/10">
          <Icon className="h-5 w-5 text-primary-400" />
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-white">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
        <ul className="mt-4 space-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-400" />
              {f}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="mt-6 block w-full rounded-xl border border-primary-500/30 bg-primary-500/10 px-5 py-3 text-center text-sm font-bold text-primary-300 transition-all hover:border-primary-500 hover:bg-primary-500 hover:text-white"
        >
          Замовити
        </Link>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-sm font-semibold text-primary-300">
            Послуги
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Чистий салон — за 1-2 години
          </h2>
          <p className="mt-4 text-slate-400">
            Обирайте потрібну послугу або замовляйте комплекс — приїдемо в будь-яку точку Києва
            та області.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
