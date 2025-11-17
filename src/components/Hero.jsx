import { motion } from 'framer-motion'
import DeviceShowcase from './DeviceShowcase'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 bg-black text-white">
      {/* Futuristic gradient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute top-40 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-[80%] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-cyan-300 text-xs font-semibold ring-1 ring-white/10 backdrop-blur">
            Enterprise Networking & Security
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight">
            Build resilient, secure networks
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-400">for modern businesses</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-slate-300 max-w-2xl">
            We design, implement, and manage high‑availability networks with zero‑trust security, cloud connectivity, and 24/7 monitoring.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="mailto:request@nabil.network" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-slate-200 transition-colors">Request a proposal</a>
            <a href="#services" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white/10 text-white font-medium ring-1 ring-white/10 hover:bg-white/20 transition-colors">Explore services</a>
          </motion.div>
          <p className="mt-3 text-sm text-slate-400">Response within 24 hours • request@nabil.network</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.25 }}
          className="relative">
          <DeviceShowcase />
        </motion.div>
      </div>
    </section>
  )
}
