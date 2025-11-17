import { motion } from 'framer-motion'

export default function Solutions() {
  const cards = [
    {
      title: 'Secure Branch Connectivity',
      points: ['SD‑WAN design and rollout', 'Zero‑touch provisioning', 'Unified policy & observability']
    },
    {
      title: 'Cloud‑Ready Networks',
      points: ['Private interconnects', 'Hybrid mesh architectures', 'Least‑privilege access']
    },
    {
      title: 'Security Operations',
      points: ['Log aggregation & SIEM', 'SOAR automation', 'Threat detection & response']
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-[#0b0b0b] text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Solutions</h2>
          <p className="mt-3 text-slate-300">Practical outcomes aligned to your business objectives.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.07 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              <h3 className="relative text-xl font-semibold">{card.title}</h3>
              <ul className="relative mt-4 space-y-2 text-slate-300">
                {card.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
