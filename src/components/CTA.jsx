export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Tell us about your network</h2>
        <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Email us your requirements, and we’ll come back with a clear plan, timeline, and cost estimate.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:request@nabil.network" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">request@nabil.network</a>
          <a href="#services" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-transparent text-white font-medium ring-1 ring-white/20 hover:bg-white/10 transition-colors">View services</a>
        </div>
        <p className="mt-4 text-xs text-slate-400">Response within 24 hours • nabil.network</p>
      </div>
    </section>
  )
}
