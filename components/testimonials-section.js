const testimonials = [
  { name: "Cliente commerciale", role: "Sviluppo uffici", quote: "Esecuzione professionale, comunicazione tecnica chiara e un risultato di alto livello dall'inizio alla consegna." },
  { name: "Cliente industriale", role: "Stabilimento produttivo", quote: "La strategia di ventilazione ha migliorato la qualità dell'aria e reso l'ambiente operativo più affidabile ed efficiente." },
  { name: "Cliente residenziale", role: "Progetto privato", quote: "Integrazione elegante, funzionamento silenzioso e una presentazione capace di trasmettere fiducia immediatamente." }
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-12 max-w-3xl"><p className="text-sm uppercase tracking-[0.35em] text-sky-400">Testimonianze</p><h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Fiducia costruita con immagine, tecnica e performance</h2></div>
      <div className="grid gap-8 lg:grid-cols-3">{testimonials.map((item)=><div key={item.quote} className="rounded-[2rem] border border-white/10 bg-white/5 p-8"><p className="text-white/70 leading-8">“{item.quote}”</p><div className="mt-6 text-white font-semibold">{item.name}</div><div className="text-sm text-white/45">{item.role}</div></div>)}</div>
    </section>
  );
}
