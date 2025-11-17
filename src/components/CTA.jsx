import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold">Tell us about your network</motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-3 text-slate-300 max-w-2xl mx-auto">Email us your requirements, and we’ll come back with a clear plan, timeline, and cost estimate.</motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:request@nabil.network" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-slate-200 transition-colors">request@nabil.network</a>
          <a href="#services" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white/10 text-white font-medium ring-1 ring-white/10 hover:bg-white/20 transition-colors">View services</a>
        </motion.div>
        <p className="mt-4 text-xs text-slate-400">Response within 24 hours • nabil.network</p>
      </div>
    </section>
  )
}
