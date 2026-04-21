export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-mono font-bold text-xs">ph</span>
            </div>
            <span className="text-white font-mono font-semibold tracking-tight">code</span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-6">
            {[
              { label: 'Serviços', href: '#servicos' },
              { label: 'Sobre', href: '#sobre' },
              { label: 'Processo', href: '#processo' },
              { label: 'Contato', href: '#contato' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-600 font-mono">
            © {year} phcode. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
