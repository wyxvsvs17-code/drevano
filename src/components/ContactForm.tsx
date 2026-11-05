import { useState, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'sending' | 'success' | 'error';

const inputClass =
  'w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const booking = {
      name: String(data.get('name') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      car: String(data.get('car') || '').trim(),
      comment: String(data.get('comment') || '').trim(),
      created_at: new Date().toISOString(),
    };

    if (!booking.name || !booking.phone) {
      setErrorMsg("Заповніть, будь ласка, ім'я та телефон.");
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      if (!supabase) {
        throw new Error(
          'Форма тимчасово не працює. Зателефонуйте нам або напишіть у месенджер — ми на зв\u2019язку!',
        );
      }
      const { error } = await supabase.from('bookings').insert(booking);
      if (error) throw error;
      form.reset();
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Невідома помилка');
      setStatus('error');
    }
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
      <h3 className="font-display text-2xl font-bold text-white">Замовити хімчистку авто</h3>
      <p className="mt-2 text-sm text-slate-400">
        Залиште заявку — передзвонимо протягом 15 хвилин, відповімо на питання та узгодимо час.
      </p>

      {status === 'success' && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-success-500/30 bg-success-500/10 p-4">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-400" />
          <p className="text-sm font-bold text-success-300">
            Заявку прийнято! Ми зателефонуємо вам найближчим часом.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-error-500/30 bg-error-500/10 p-4">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-error-400" />
          <p className="text-sm font-bold text-error-300">Сталася помилка. {errorMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Field label="Ім'я">
          <input name="name" type="text" required placeholder="Ваше ім'я" className={inputClass} />
        </Field>
        <Field label="Телефон">
          <input
            name="phone"
            type="tel"
            required
            placeholder="+38 (0__) ___-__-__"
            className={inputClass}
          />
        </Field>
        <Field label="Авто">
          <input name="car" type="text" placeholder="Марка та модель, напр. Toyota Camry" className={inputClass} />
        </Field>
        <Field label="Комментар">
          <textarea
            name="comment"
            rows={3}
            placeholder="Яка послуга цікавить, адреса виїзду, зручний час…"
            className={`${inputClass} resize-none`}
          />
        </Field>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-4 text-base font-bold text-white shadow-xl shadow-primary-500/30 transition-all hover:bg-primary-600 hover:shadow-2xl hover:shadow-primary-500/40 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' && <Loader2 className="h-5 w-5 animate-spin" />}
          {status === 'sending' ? 'Надсилаємо…' : 'Надіслати заявку'}
        </button>
        <p className="text-center text-xs text-slate-500">
          Надсилаючи заявку, ви погоджуєтесь на обробку персональних даних.
        </p>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-300">{label}</span>
      {children}
    </label>
  );
}
