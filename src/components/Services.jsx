import { Shield, Cloud, Network, Lock, Server, LineChart } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Shield,
    title: 'Zero‑Trust Security',
    desc: 'Identity‑driven access, segmentation, and continuous verification across users, apps, and devices.'
  },
  {
    icon: Network,
    title: 'Enterprise Networking',
    desc: 'LAN/WAN design, SD‑WAN, high‑availability routing, and campus networks built for scale.'
  },
  {
    icon: Cloud,
    title: 'Cloud Connectivity',
    desc: 'Secure interconnects to AWS, Azure, and GCP with policy‑based controls and monitoring.'
  },
  {
    icon: Lock,
    title: 'Secure Access',
    desc: 'SASE, VPN, and remote access solutions with MFA and device posture checks.'
  },
  {
    icon: Server,
    title: 'Data Center & Edge',
    desc: 'Resilient architectures, micro‑segmentation, and observability from core to edge.'
  },
  {
    icon: LineChart,
    title: 'Monitoring & Response',
    desc: '24/7 visibility, SIEM/SOAR integration, and incident response readiness.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">Services</h2>
          <p className="mt-3 text-slate-300">End‑to‑end delivery from architecture and implementation to managed operations.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl p-6 ring-1 ring-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-600 text-white grid place-items-center">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
