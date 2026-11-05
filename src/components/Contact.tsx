import { Phone, Clock, MapPin, Mail, Send, MessageCircle, Instagram } from 'lucide-react';
import type { ReactNode } from 'react';
import { ContactForm } from '@/components/ContactForm';

interface CardProps {
  icon: ReactNode;
  title: string;
  lines: string[];
  href?: string;
}

function ContactCard({ icon, title, lines, href }: CardProps) {
  const content = (
    <>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-500/20 bg-primary-500/10 text-primary-400">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-bold text-white">{title}</h3>
        {lines.map((line) => (
          <p key={line} className="mt-0.5 text-sm text-slate-400">
            {line}
          </p>
        ))}
      </div>
    </>
  );

  const className =
    'flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-colors hover:border-primary-500/30';

  return href ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
  );
}

const MESSENGERS = [
  { icon: Send, label: 'Telegram', href: 'https://t.me/drevano' },
  { icon: MessageCircle, label: 'Viber', href: 'viber://chat?number=%2B380501234567' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/drevano' },
];

export function Contact() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-sm font-semibold text-primary-300">
            Контакти
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Зв&apos;яжіться з нами
          </h2>
          <p className="mt-4 text-slate-400">
            Телефонуйте, пишіть у месенджер або залишайте заявку — відповідаємо швидко.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                title="Телефон"
                lines={['+38 050 123 45 67']}
                href="tel:+380501234567"
              />
              <ContactCard
                icon={<Clock className="h-5 w-5" />}
                title="Графік роботи"
                lines={['Пн-Нд: 8:00—22:00']}
              />
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                title="Географія виїзду"
                lines={['Київ та область']}
              />
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                title="Email"
                lines={['info@drevano.ua']}
                href="mailto:info@drevano.ua"
              />
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <p className="text-sm font-semibold text-slate-300">Пишіть у месенджери:</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {MESSENGERS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-primary-500/40 hover:text-primary-300"
                  >
                    <Icon className="h-4 w-4" /> {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
