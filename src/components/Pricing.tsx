import { Phone, Check } from 'lucide-react';
import { Link } from '@/lib/router';

interface PriceItem {
  name: string;
  price: string;
}

interface Category {
  title: string;
  note: string;
  items: PriceItem[];
}

const CATEGORIES: Category[] = [
  {
    title: 'Комплексна хімчистка',
    note: 'Найпопулярніше — весь салон під ключ',
    items: [
      { name: 'Седан', price: 'від 3 500 ₴' },
      { name: 'Кросовер / SUV', price: 'від 4 000 ₴' },
      { name: 'Мінівен / універсал', price: 'від 4 500 ₴' },
      { name: 'Бізнес-клас', price: 'від 5 000 ₴' },
    ],
  },
  {
    title: 'Окремі зони',
    note: 'Коли потрібно оновити щось одне',
    items: [
      { name: 'Хімчистка сидінь', price: 'від 1 500 ₴' },
      { name: 'Хімчистка стелі', price: 'від 800 ₴' },
      { name: 'Дверні карти та панель', price: 'від 900 ₴' },
      { name: 'Хімчистка багажника', price: 'від 700 ₴' },
      { name: 'Підлога та килимки', price: 'від 600 ₴' },
    ],
  },
  {
    title: 'Додаткові послуги',
    note: 'Для ідеального результату',
    items: [
      { name: 'Видалення запахів (озонація)', price: 'від 1 200 ₴' },
      { name: 'Хімчистка дитячого крісла', price: 'від 500 ₴' },
      { name: 'Кондиціонування шкіри', price: 'від 700 ₴' },
      { name: 'Полірування пластику', price: 'від 400 ₴' },
    ],
  },
];

const INCLUDED = [
  'Виїзд майстра у будь-яку точку Києва та найближчих передмість',
  'Професійна хімія Karcher, Koch Chemie та Grass — безпечна для шкіри й тканини',
  'Экстракторна чистка з глибокою екстракцією бруду',
  'Сушка салону та фінальний огляд разом з вами',
  'Гарантія на роботи — перечистимо безкоштовно, якщо щось не сподобається',
];

export function Pricing() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5 text-sm font-semibold text-accent-300">
            Ціни
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Прозорі ціни без сюрпризів
          </h2>
          <p className="mt-4 text-slate-400">
            Остаточна вартість залежить від ступеня забруднення — озвучуємо її до початку робіт
            і не змінюємо в процесі.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <h3 className="font-display text-lg font-bold text-white">{category.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{category.note}</p>
              <ul className="mt-5 space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 border-b border-slate-800/60 pb-3 text-sm"
                  >
                    <span className="text-slate-300">{item.name}</span>
                    <span className="whitespace-nowrap font-bold text-primary-400">{item.price}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 block rounded-xl bg-primary-500 px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-400"
              >
                Замовити
              </Link>
            </div>
          ))}
        </div>

        {/* What is included */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-primary-950 to-slate-900">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Що входить у вартість</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Ви платите один раз — усе необхідне вже включено. Прихованих платежів та
                доплат «за складність» у нас не буває.
              </p>
              <div className="mt-8 rounded-2xl border border-primary-500/20 bg-primary-500/10 p-6">
                <div className="font-display text-3xl font-extrabold text-white">
                  Безкоштовна консультація
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  Не знаєте, що саме потрібно вашому авто? Зателефонуйте — підкажемо та
                  відразу назвемо ціну.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+380501234567"
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-400"
                  >
                    <Phone className="h-4 w-4" /> Зателефонувати
                  </a>
                  <Link
                    to="/contact"
                    className="rounded-xl border border-slate-600 bg-slate-800/60 px-6 py-3.5 text-center text-sm font-bold text-white transition-all hover:bg-slate-700/60 hover:border-slate-500"
                  >
                    Написати нам
                  </Link>
                </div>
              </div>
            </div>
            <ul className="space-y-4 self-center">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/20">
                    <Check className="h-3 w-3 text-accent-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
