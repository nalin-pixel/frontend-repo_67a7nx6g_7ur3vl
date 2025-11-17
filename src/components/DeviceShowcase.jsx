import { motion } from 'framer-motion'

const floatTransition = {
  duration: 6,
  ease: 'easeInOut',
  repeat: Infinity,
  repeatType: 'reverse'
}

export default function DeviceShowcase() {
  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-900 to-black p-1 ring-1 ring-white/10 shadow-[0_0_120px_-40px_rgba(56,189,248,0.35)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>
      <div className="h-full w-full rounded-xl bg-gradient-to-b from-black/60 to-black/80 overflow-hidden relative">
        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />

        {/* Glow lines */}
        <motion.div
          className="absolute left-10 top-10 h-1 w-36 bg-gradient-to-r from-cyan-400/70 to-transparent rounded-full"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-12 bottom-16 h-1 w-48 bg-gradient-to-r from-fuchsia-400/70 to-transparent rounded-full"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Devices */}
        <motion.img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop"
          alt="Laptop"
          className="absolute left-6 bottom-8 w-48 md:w-64 rounded-lg ring-1 ring-white/10 shadow-2xl"
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [-4, 6, -4], rotate: [-1, 1, -1] }}
          transition={floatTransition}
        />

        <motion.img
          src="https://images.unsplash.com/photo-1581091014542-7c1cc3a0047e?q=80&w=1200&auto=format&fit=crop"
          alt="Server rack"
          className="absolute right-8 bottom-6 w-40 md:w-56 rounded-lg ring-1 ring-white/10 shadow-2xl"
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [6, -6, 6], rotate: [0.5, -0.5, 0.5] }}
          transition={{ ...floatTransition, duration: 7.5 }}
        />

        <motion.img
          src="https://images.unsplash.com/photo-1587202372775-98927b2656d7?q=80&w=1200&auto=format&fit=crop"
          alt="Network router"
          className="absolute left-1/2 -translate-x-1/2 top-10 w-44 md:w-56 rounded-lg ring-1 ring-white/10 shadow-2xl"
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [-8, 4, -8], rotate: [-2, 2, -2] }}
          transition={{ ...floatTransition, duration: 8.5 }}
        />

        {/* Ambient ring */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>
      </div>
    </div>
  )
}
