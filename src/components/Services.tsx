import { useInView } from '../hooks/useInView'

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="m9 8 2 2 4-4" />
      </svg>
    ),
    title: 'Sistemas Customizados',
    description:
      'Sistemas web completos, do zero, adaptados à sua operação. CRMs, ERPs, dashboards, painéis administrativos e muito mais — desenvolvidos para funcionar exatamente como você precisa.',
    tags: ['Web App', 'Dashboard', 'CRM', 'ERP'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Sites Profissionais',
    description:
      'Sites institucionais, portfólios e plataformas web com design moderno, performance otimizada e foco em conversão. Construídos para representar sua empresa com profissionalismo.',
    tags: ['Institucional', 'Portfólio', 'E-commerce', 'Blog'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: 'Rotinas & Automações',
    description:
      'Automatize processos repetitivos e ganhe tempo. Scripts, integrações entre sistemas, bots, webhooks e pipelines que executam tarefas automaticamente, sem intervenção humana.',
    tags: ['Scripts', 'Bots', 'Integrações', 'APIs'],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Landing Pages',
    description:
      'Páginas de conversão de alta performance, focadas em capturar leads e vender. Design persuasivo, carregamento ultrarrápido e otimização para dispositivos móveis.',
    tags: ['Conversão', 'Lead Gen', 'Campanha', 'Mobile'],
  },
]

export default function Services() {
  const { ref, inView } = useInView()

  return (
    <section id="servicos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={ref} className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-4">
            // Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            O que eu faço
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Cada projeto é único. Trabalho com tecnologias modernas para entregar soluções
            robustas, escaláveis e com excelência.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-black p-8 group hover:bg-white/[0.03] transition-all duration-300
                ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-white/30 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono text-gray-500 border border-white/10 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
