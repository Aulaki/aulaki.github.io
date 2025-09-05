import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = e.target.subject.value.trim();
    const body = e.target.body.value.trim();

    if (!subject || !body) {
      setStatus('error');
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    emailjs
      .sendForm(
        'service_e5pon2i',
        'template_bi1nrys',
        e.target,
        'YcLs1Ygn_yO1aGqSv'
      )
      .then(() => {
        setStatus('success');
        setMessage('Mensaje enviado con éxito.');
        e.target.reset();
      })
      .catch((error) => {
        setStatus('error');
        setMessage('Error al enviar el mensaje: ' + error.text);
      });
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto py-16 px-4 scroll-mt-20 animate-fade-in"
    >
      <h2 className="text-2xl font-bold mb-6 text-light-heading dark:text-dark-heading">
        Contacto
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-xl p-6 shadow-lg text-light-text dark:text-dark-text"
        aria-label="Formulario de contacto"
      >
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium mb-1 text-light-text dark:text-dark-text"
          >
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2 rounded-md bg-transparent border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-text dark:placeholder-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
            placeholder="¿Sobre qué quieres hablar?"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="body"
            className="block text-sm font-medium mb-1 text-light-text dark:text-dark-text"
          >
            Mensaje
          </label>
          <textarea
            id="body"
            name="body"
            required
            rows="6"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-light-border dark:border-dark-border text-light-text dark:text-dark-text placeholder-light-text dark:placeholder-dark-text focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary resize-none"
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-2 rounded-md bg-light-primary dark:bg-dark-primary text-white hover:bg-light-hover dark:hover:bg-dark-hover transition"
          aria-label="Enviar mensaje"
        >
          Enviar mensaje
        </button>

        {/* Mensaje de estado accesible */}
        <div className="mt-4" aria-live="polite">
          {status === 'success' && (
            <p className="text-sm text-green-600">{message}</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600">{message}</p>
          )}
        </div>
      </form>
    </section>
  );
}