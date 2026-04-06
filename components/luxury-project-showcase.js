const luxuryProjects = [
  { category: "Commercial HVAC", title: "Corporate Climate Systems", description: "Advanced HVAC design and installation concepts for office towers and premium retail environments.", image: "/projects/hvac-commercial.jpg" },
  { category: "Industrial Ventilation", title: "Airflow Engineering for Industry", description: "Heavy-duty extraction, ventilation, and environmental control systems for factories and warehouses.", image: "/projects/hvac-industrial.jpg" },
  { category: "Solar Energy", title: "Solar Power Integration", description: "Sustainable solar panel installations integrated with modern building energy systems.", image: "/projects/solar-panels.jpg" }
];

export default function LuxuryProjectShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-12 max-w-3xl"><p className="text-sm uppercase tracking-[0.35em] text-orange-400">Signature Projects</p><h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">A premium project showcase designed to impress</h2></div>
      <div className="grid gap-8 lg:grid-cols-3">{luxuryProjects.map((project)=><div key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1321] shadow-[0_25px_70px_rgba(0,0,0,0.3)]"><div className="relative h-80 overflow-hidden"><img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(4,9,20,0.92),rgba(4,9,20,0.15))]" /><div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/75 backdrop-blur">{project.category}</div><div className="absolute bottom-0 left-0 right-0 p-6"><h3 className="text-2xl font-semibold text-white">{project.title}</h3></div></div><div className="p-6"><p className="text-sm leading-7 text-white/60">{project.description}</p></div></div>)}</div>
    </section>
  );
}
