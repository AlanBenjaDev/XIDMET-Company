import './globals.css'

export const metadata = {
  title: 'XIDMET - Soluciones Técnicas en Seguridad y Automatización',
  description: 'Agencia de automatizaciones electrónicas, eléctricas y seguridad integral. Sistemas de alta calidad, simples de usar y diseñados para crecer con vos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0a0a0a] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  )
}
