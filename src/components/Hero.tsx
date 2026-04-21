import { useState, useEffect } from 'react'

const typingWords = [
  'Sistemas Customizados',
  'Sites Profissionais',
  'Automações & Rotinas',
  'Landing Pages',
]

function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % words.length)
    }

    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

export default function Hero() {
  const typed = useTypingEffect(typingWords)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full text-xs text-gray-400 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 bg-white rounded-full inline-block" />
          Desenvolvimento de Software sob medida
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-in-up anim-delay-100">
          <span className="text-white">Transformo ideias</span>
          <br />
          <span className="text-white">em</span>{' '}
          <span className="gradient-text">soluções digitais</span>
        </h1>

        {/* Typing effect */}
        <div className="h-10 mb-6 flex items-center justify-center animate-fade-in anim-delay-200">
          <span className="font-mono text-lg md:text-xl text-gray-400">
            &gt;{' '}
            <span className="text-white">{typed}</span>
            <span className="animate-blink text-white">|</span>
          </span>
        </div>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up anim-delay-300">
          Desenvolvo sistemas, sites e automações que resolvem problemas reais do seu negócio.
          Sem templates prontos — cada projeto é construído do zero para atender exatamente
          o que você precisa.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up anim-delay-400">
          <a
            href="#contato"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-sm hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]"
          >
            Solicitar orçamento
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto px-8 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-sm hover:border-white/50 hover:bg-white/5 transition-all duration-200"
          >
            Ver serviços
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in anim-delay-500">
          {[
            { label: 'Projetos entregues', value: '10+' },
            { label: 'Clientes atendidos', value: '8+' },
            { label: 'Anos de experiência', value: '3+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in anim-delay-600">
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent mx-auto mb-2" />
        <p className="text-xs text-gray-600 tracking-widest uppercase">scroll</p>
      </div>
    </section>
  )
}
