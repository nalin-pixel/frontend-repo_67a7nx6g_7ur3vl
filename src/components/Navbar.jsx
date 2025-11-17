import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-600 flex items-center justify-center text-white font-bold">N</div>
          <span className="font-semibold text-white">nabil.network</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8 text-sm text-slate-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#solutions" className="hover:text-white">Solutions</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="mailto:request@nabil.network" className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors ring-1 ring-white/10">Get a Quote</a>
        <button className="md:hidden p-2 text-slate-200" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
