import { useNavigateCountdown } from "@/hooks/useNavigateCoutdown";
import { useState } from "react";

export default function ContactFormBasic() {
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState('');

    const { startCountdown } = useNavigateCountdown();

    const endpoint = '/echo/post';

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        setError('');

        const form = e.currentTarget;
        const fd = new FormData(form);

        try {
            const res = await fetch(endpoint, {method: "POST", body: fd});

            if (!res.ok) {
                const errJson = await res.json().catch(() => ({})) as { message?: string };
                throw new Error(errJson?.message || `HTTP ${res.status}`);
            }

            const json = await res.json();
            console.log("Success:", json);
            setStatus('success');
            form.reset();

            startCountdown(5, "/", {
                replace: true,
                state: { from: "contact-success" },
            });

        } catch (err) {
            const message = err instanceof Error ? err.message : 'Network error';
            setError(message);
            setStatus('error');
        }
    }

    return (
        <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="contact-form__item">
                <label htmlFor="name" className="contact-form__label">ПІБ</label>
                <input id="name" name="name" className="contact-form__input" placeholder="Ваше ПІБ" />
            </div>

            <div className="contact-form__item">
                <label htmlFor="email" className="contact-form__label">Email</label>
                <input id="email" name="email" type="email" className="contact-form__input" placeholder="Ваш Email" />
            </div>

            <div className="contact-form__item">
                <label htmlFor="message" className="contact-form__label">Повідомлення</label>
                <textarea id="message" name="message" className="contact-form__input" placeholder="Ваше повідомлення" rows={4}></textarea>
            </div>

            <button className="contact-form__button" disabled={status === 'loading'}>Надіслати</button>

            {status === 'loading' && <small className="text-blue-400">Надсилання...</small>}
            {status === 'success' && <small className="text-green-600">Відправлено! Перевір відповідь у консолі</small>}
            {status === 'error' && <small className="text-red-600">Помилка: {error}</small>}
        </form>
    );
}