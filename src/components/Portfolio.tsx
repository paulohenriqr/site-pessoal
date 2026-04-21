import { useInView } from '../hooks/useInView'

export default function Portfolio() {
  const { ref, inView } = useInView()

  return (
    <section id="portfolio" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-4">
            // Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Projetos em destaque
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Novos projetos chegando em breve. Se quiser ver como trabalho, entre em contato — posso te mostrar o que já desenvolvi de forma privada.
          </p>
        </div>

        {/* Placeholder grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`bg-black p-8 min-h-[220px] flex flex-col justify-between group
                transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              <div>
                <div className="w-8 h-8 border border-white/10 flex items-center justify-center mb-6">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4M12 16h.01" />
                  </svg>
                </div>
                <p className="font-mono text-xs text-gray-600 mb-2">Em breve</p>
                <h3 className="text-white/20 font-semibold text-lg">Projeto {i}</h3>
              </div>
              <div className="flex gap-2 mt-8">
                <span className="w-16 h-1 bg-white/5 rounded-full" />
                <span className="w-10 h-1 bg-white/5 rounded-full" />
                <span className="w-8 h-1 bg-white/5 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gray-500 text-sm mb-4">
            Quer saber mais sobre meus projetos anteriores?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-white text-sm border-b border-white/20 pb-0.5 hover:border-white transition-colors duration-200"
          >
            Entre em contato
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
