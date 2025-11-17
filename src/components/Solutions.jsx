export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Solutions</h2>
          <p className="mt-3 text-slate-600">Practical outcomes aligned to your business objectives.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
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
          ].map((card) => (
            <div key={card.title} className="rounded-2xl p-6 bg-white ring-1 ring-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                {card.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
