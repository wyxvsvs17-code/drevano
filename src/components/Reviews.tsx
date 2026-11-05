import { Quote, Star } from 'lucide-react';

interface Review {
  name: string;
  service: string;
  text: string;
  rating: number;
}

const REVIEWS: Review[] = [
  {
    name: 'Олександр К.',
    service: 'Комплексна хімчистка',
    text: 'Купив авто з пробігом — салон був жахливий. Хлопці приїхали на паркінг біля офісу, за 4 години зробили магію. Виглядає як з салону, запаху тютюну немає взагалі.',
    rating: 5,
  },
  {
    name: 'Марина В.',
    service: 'Хімчистка сидінь',
    text: 'Діти розмалювали задні сидіння фломастерами, я вже думала міняти обшивку. Після чистки жодного сліда не залишилось! Дуже уважний майстер, усе пояснив.',
    rating: 5,
  },
  {
    name: 'Дмитро С.',
    service: 'Видалення запахів',
    text: 'Перевозив собаку, салон виблискував «ароматом». Озонація + чистка кондиціонера — запах зник повністю. Ціна як домовлялись, без сюрпризів.',
    rating: 5,
  },
  {
    name: 'Ірина П.',
    service: 'Хімчистка стелі',
    text: 'Боялась, що стіля провисне після чистки — у багатьох так буває. Тут зробили акуратно, стіля ідеальна, нікотиновий наліт зник. Рекомендую!',
    rating: 5,
  },
  {
    name: 'Володимир Т.',
    service: 'Комплексна хімчистка',
    text: 'Другий раз замовляю. Приїхали вчасно, зробили все за один день, сушіння швидке. Окремий респект за чисту підлогу та багажник.',
    rating: 5,
  },
  {
    name: 'Катерина М.',
    service: 'Хімчистка багажника',
    text: 'Після перевезення розсади багажник був у землі. Відчистили до ідеалу, обробили ущільнювачі. Дуже зручно, що приїхали до мене додому.',
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-warning-400 text-warning-400" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-warning-500/20 bg-warning-500/10 px-4 py-1.5 text-sm font-semibold text-warning-300">
            Відгуки
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Що кажуть наші клієнти
          </h2>
          <p className="mt-4 text-slate-400">
            Понад 1 500 автовласників у Києві вже скористались нашою виїзною хімчисткою.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-colors hover:border-slate-700"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary-500/20" />
              <Stars count={review.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-300">
                «{review.text}»
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-800 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">
                  {review.name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{review.name}</div>
                  <span className="mt-1 inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-300">
                    {review.service}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
