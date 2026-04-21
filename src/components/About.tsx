import { useInView } from '../hooks/useInView'

const techStack = [
  'React', 'TypeScript', 'Node.js', 'Next.js',
  'PostgreSQL', 'MySQL', 'Python', 'Docker',
  'TailwindCSS', 'REST APIs', 'Git', 'Linux',
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="sobre" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase block mb-4">
              // Sobre mim
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Desenvolvedor focado em{' '}
              <span className="gradient-text">resultados reais</span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Sou Paulo Henrique, desenvolvedor de sistemas com foco em soluções customizadas
                que realmente fazem diferença no dia a dia do negócio. A <strong className="text-white">phcode</strong> nasceu
                da vontade de entregar tecnologia de qualidade para empresas que precisam de
                muito mais do que templates prontos.
              </p>
              <p>
                Cada projeto começa com uma conversa honesta: entendo o seu problema, mapeio
                o fluxo do negócio e desenvolvo exatamente o que faz sentido — sem tecnologias
                desnecessárias, sem custo inflado, sem surpresas.
              </p>
              <p>
                Seja um sistema interno, um site, uma automação ou uma landing page de alta
                conversão, meu compromisso é entregar algo que funcione de verdade e gere
                valor para o seu negócio.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Terminal card */}
            <div className="border border-white/10 rounded-sm overflow-hidden">
              <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <span className="ml-2 font-mono text-xs text-gray-500">stack.config</span>
              </div>
              <div className="p-6">
                <p className="font-mono text-xs text-gray-500 mb-4"># Tecnologias que utilizo</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 font-mono text-xs text-white border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cards de diferencial */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { icon: '⚡', title: 'Entrega rápida', desc: 'Sem burocracia, foco em resultado' },
                { icon: '🔒', title: 'Código limpo', desc: 'Seguro, testável e escalável' },
              ].map((item) => (
                <div key={item.title} className="border border-white/10 p-4 hover:border-white/20 transition-colors duration-200">
                  <span className="text-xl block mb-2">{item.icon}</span>
                  <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
