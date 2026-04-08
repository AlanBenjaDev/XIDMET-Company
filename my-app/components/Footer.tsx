export default function Footer() {
  return (
    <footer className="py-12 bg-[#020617] text-center border-t border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Marca en el Footer */}
        <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-[#10b981] to-[#0ea5e9] bg-clip-text text-transparent uppercase mb-4 block">
          XIDMET
        </span>
        
        {/* Info Técnica de Contacto */}
        <div className="space-y-2 mb-8">
          <p className="text-slate-300 font-medium">
            Sistemas de Seguridad y Automatización
          </p>
          <a 
            href="https://wa.me" 
            className="text-[#34d399] hover:underline block text-lg font-semibold"
          >
            +54 9 3541 628322
          </a>
        </div>

        {/* Créditos Legales */}
        <div className="text-slate-500 text-xs tracking-widest uppercase">
          <p>© 2026 Xidmet Company. Tanti, Córdoba, Argentina.</p>
          <p className="mt-1">Sistemas automatizados, seguros y simples.</p>
        </div>
      </div>
    </footer>
  )
}
