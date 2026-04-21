import { useInView } from '../hooks/useInView'

const steps = [
  {
    step: '1',
    title: 'Conversa inicial',
    description:
      'Você me conta o problema ou a ideia. Entendo o contexto do negócio, o público e o que precisa ser resolvido. Sem formulários genéricos — uma conversa de verdade.',
    duration: 'Gratuito',
  },
  {
    step: '2',
    title: 'Proposta detalhada',
    description:
      'Com base no que entendi, apresento uma proposta com escopo claro, tecnologias, prazo estimado e investimento. Sem surpresas depois.',
    duration: '1-2 dias',
  },
  {
    step: '3',
    title: 'Desenvolvimento',
    description:
      'Começo o desenvolvimento com atualizações frequentes. Você acompanha o progresso e pode dar feedback em cada etapa — sem ter que esperar até o final.',
    duration: 'Varia por projeto',
  },
  {
    step: '4',
    title: 'Entrega & Lançamento',
    description:
      'Testamos tudo juntos antes do lançamento. Faço o deploy, configuro o ambiente e entrego o projeto funcionando com documentação de uso.',
    duration: '1-3 dias',
  },
  {
    step: '5',
    title: 'Suporte contínuo',
    description:
      'Após o lançamento, continuo disponível para ajustes, melhorias e novas funcionalidades. Evoluímos o projeto junto com o crescimento do seu negócio.',
    duration: 'Ongoing',
  },
]

export default function Process() {
  const { ref, inView } = useInView()

  return (
    <section id="processo" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-4">
            // Como funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Do briefing ao{' '}
            <span className="gradient-text">ar em produção</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Um processo simples, transparente e focado em entregar o que realmente importa para você.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute left-[28px] top-0 bottom-0 w-px bg-white/5" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`relative flex gap-8 md:gap-12 group transition-all duration-500
                  ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
                `}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {/* Number */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center font-mono font-bold text-white text-sm group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300 bg-black z-10 relative">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <div className={`pb-12 flex-1 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <span className="px-2.5 py-0.5 font-mono text-xs text-gray-500 border border-white/10">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
