import { useState } from 'react'
import { useInView } from '../hooks/useInView'

type FormData = {
  name: string
  email: string
  whatsapp: string
  service: string
  message: string
}

const serviceOptions = [
  'Sistema Customizado',
  'Site Profissional',
  'Rotina & Automação',
  'Landing Page',
  'Outro',
]

export default function Contact() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá, Paulo! Me chamo *${form.name}*.\n\n` +
      `📧 E-mail: ${form.email}\n` +
      `📱 WhatsApp: ${form.whatsapp}\n` +
      `🛠️ Serviço: ${form.service}\n\n` +
      `💬 ${form.message}`
    )
    window.open(`https://wa.me/5535998471996?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contato" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-4">
              // Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Vamos construir
              <br />
              <span className="gradient-text">algo juntos?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Tem um projeto em mente ou uma dor no negócio que precisa resolver?
              Me conta o que você precisa — a conversa inicial é sempre gratuita e
              sem compromisso.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:paulohenriq.tech@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-sm">paulohenriq.tech@gmail.com</span>
              </a>

              <a
                href="https://wa.me/5535998471996"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.37a16 16 0 0 0 6.72 6.72l1.83-1.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-sm">WhatsApp (resposta rápida)</span>
              </a>
            </div>

            {/* Response time */}
            <div className="mt-10 p-4 border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-white text-sm font-medium">Disponível para novos projetos</span>
              </div>
              <p className="text-gray-500 text-xs ml-4">Respondo em até 24 horas</p>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center border border-white/10 p-12">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">Mensagem enviada!</h3>
                <p className="text-gray-400 text-sm">
                  Você foi redirecionado para o WhatsApp. Vou responder o mais rápido possível.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-gray-500 hover:text-white transition-colors underline underline-offset-4"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors duration-200"
                  />
                </div>

                {/* Email + WhatsApp */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 font-mono mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-mono mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2">
                    Tipo de serviço *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-600">Selecione o que você precisa</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-black">{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2">
                    Conte sobre seu projeto *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Descreva brevemente o que você precisa, qual problema quer resolver ou qual ideia tem em mente..."
                    className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-200 hover:scale-[1.01]"
                >
                  Enviar via WhatsApp
                </button>
                <p className="text-center text-xs text-gray-600">
                  Ao enviar, você será redirecionado ao WhatsApp com a mensagem preenchida
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
