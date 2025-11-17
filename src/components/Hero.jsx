export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0 -z-10 opacity-40" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-40 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold ring-1 ring-blue-200">
            Enterprise Networking & Security
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Build resilient, secure networks
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">for modern businesses</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            We design, implement, and manage high‑availability networks with zero‑trust security, cloud connectivity, and 24/7 monitoring.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="mailto:request@nabil.network" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">Request a proposal</a>
            <a href="#services" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-slate-900 font-medium ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">Explore services</a>
          </div>
          <p className="mt-3 text-sm text-slate-500">Response within 24 hours • request@nabil.network</p>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-1 shadow-xl">
            <div className="h-full w-full rounded-xl bg-slate-900 p-6 grid grid-cols-3 gap-4">
              <div className="col-span-2 rounded-lg bg-slate-800/60 ring-1 ring-white/10" />
              <div className="rounded-lg bg-slate-800/60 ring-1 ring-white/10" />
              <div className="rounded-lg bg-slate-800/60 ring-1 ring-white/10" />
              <div className="col-span-2 rounded-lg bg-slate-800/60 ring-1 ring-white/10" />
              <div className="rounded-lg bg-slate-800/60 ring-1 ring-white/10" />
              <div className="col-span-3 rounded-lg bg-gradient-to-r from-blue-600/40 to-indigo-600/40 ring-1 ring-white/10" />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-blue-500/20 blur-2xl"/>
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-xl bg-indigo-500/20 blur-2xl"/>
        </div>
      </div>
    </section>
  )
}
