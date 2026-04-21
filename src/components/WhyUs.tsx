import { useInView } from '../hooks/useInView'

const reasons = [
  {
    number: '01',
    title: 'Feito sob medida',
    description:
      'Nenhum projeto é igual ao outro. Desenvolvo cada solução do zero, pensada especificamente para a sua realidade, seu fluxo e seus objetivos.',
  },
  {
    number: '02',
    title: 'Comunicação direta',
    description:
      'Sem intermediários. Você fala direto comigo durante todo o projeto, com atualizações frequentes e total transparência no que está sendo desenvolvido.',
  },
  {
    number: '03',
    title: 'Tecnologia moderna',
    description:
      'Uso as ferramentas certas para cada situação — sem modismos, sem over-engineering. O foco é na solução que vai funcionar agora e crescer com você.',
  },
  {
    number: '04',
    title: 'Suporte pós-entrega',
    description:
      'A entrega não é o fim. Fico disponível para ajustes, melhorias e suporte depois que o projeto entra em produção.',
  },
  {
    number: '05',
    title: 'Prazo respeitado',
    description:
      'Cronograma definido com clareza desde o início. Organizo o desenvolvimento em etapas mensuráveis para garantir que as entregas aconteçam no tempo combinado.',
  },
  {
    number: '06',
    title: 'Preço justo',
    description:
      'Qualidade profissional com um investimento proporcional ao seu momento. Apresento orçamentos claros, sem cobranças ocultas ou surpresas no final.',
  },
]

export default function WhyUs() {
  const { ref, inView } = useInView()

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-4">
            // Por que escolher a phcode
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Mais do que código,
            <br />
            <span className="gradient-text">entrega de valor</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Trabalho com seriedade, comprometimento e foco total no resultado que importa
            para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className={`bg-black p-8 group hover:bg-white/[0.02] transition-all duration-500
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <span className="font-mono text-4xl font-bold text-white/5 block mb-4 group-hover:text-white/10 transition-colors duration-300">
                {reason.number}
              </span>
              <h3 className="text-lg font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
