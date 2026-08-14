'use client';

import { useState } from "react";
import { ArrowRight, ChevronDown, HeartHandshake, MessageCircle, Search, Users, Workflow } from "lucide-react";
import Logo from "./Logo";
import ContactForm from "./ContactForm";
import { site } from "../lib/config";

const services = [
  { icon: HeartHandshake, title: "Asesoría laboral", text: "Apoyo práctico para ordenar procesos y tomar decisiones con mayor seguridad." },
  { icon: Search, title: "Reclutamiento y selección", text: "Procesos de búsqueda y selección enfocados en encontrar perfiles adecuados para tu empresa." },
  { icon: Users, title: "Gestión de personal", text: "Ordena y profesionaliza la gestión de tus colaboradores con una mirada cercana." },
  { icon: Workflow, title: "Consultoría de RR. HH.", text: "Detectamos necesidades y construimos soluciones adaptadas a la realidad de tu organización." }
];

const faqs = [
  ["¿LUCENTA trabaja con PYMES y startups?", "Sí. La propuesta está pensada para empresas que necesitan apoyo profesional sin necesariamente contar con un departamento interno de RR. HH."],
  ["¿Puedo solicitar una asesoría puntual?", "Sí. Puedes iniciar con una conversación para explicar tu situación y definir el siguiente paso."],
  ["¿Trabajan con empresas que ya tienen RR. HH.?", "Sí. LUCENTA puede complementar procesos específicos o apoyar a equipos internos."],
  ["¿Cómo se determina el valor del servicio?", "Cada caso se evalúa de forma personalizada. Primero entendemos la necesidad y luego proponemos una alternativa adecuada."]
];

export default function LucentaPage() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hola LUCENTA, me gustaría agendar una asesoría. Vi su página web y quisiera conversar sobre una necesidad de Recursos Humanos."
  )}`;

  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
        <div className="container-lc flex h-20 items-center justify-between">
          <a href="#inicio"><Logo/></a>
          <nav className="hidden items-center gap-7 md:flex">
            {["Servicios","Nosotros","Proceso","Diagnóstico","FAQ"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-slate hover:text-ink">{item}</a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white hover:bg-teal">Agendar asesoría</a>
          </nav>
          <button className="rounded-xl p-2 md:hidden" onClick={() => setMenu(!menu)} aria-label="Menú">{menu ? "✕" : "☰"}</button>
        </div>
        {menu && <div className="border-t border-slate-100 bg-white p-5 md:hidden">{["Servicios","Nosotros","Proceso","Diagnóstico","FAQ"].map(item => <a key={item} onClick={()=>setMenu(false)} href={`#${item.toLowerCase()}`} className="block border-b border-slate-100 py-4 font-semibold">{item}</a>)}</div>}
      </header>

      <section id="inicio" className="gradient-hero overflow-hidden pt-32">
        <div className="container-lc grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div>
            <p className="section-label">RECURSOS HUMANOS · PUERTO MONTT</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-[1.03] sm:text-6xl lg:text-7xl">
              Tu empresa crece. Nosotros ayudamos a que tu <span className="text-gold">personal</span> también.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate">
              Acompañamos a PYMES, emprendedores y startups en la gestión de su personal, con soluciones prácticas, cercanas y profesionales.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 font-bold text-white hover:bg-teal"><MessageCircle size={18}/> Agendar asesoría</a>
              <a href="#servicios" className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-4 font-bold hover:border-gold">Ver servicios <ArrowRight size={18}/></a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate">
              <span>✓ Atención personalizada</span><span>✓ Respuesta ágil</span><span>✓ Experiencia práctica</span>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-8 shadow-luxe">
            <div className="flex items-center justify-between"><Logo/><span className="rounded-full bg-[#eef8f7] px-3 py-1 text-xs font-bold text-teal">LUCENTA</span></div>
            <div className="mt-10 rounded-[2rem] bg-ink p-8 text-white">
              <p className="text-sm font-bold text-gold">Más de 20 años de experiencia</p>
              <h2 className="mt-3 text-3xl font-extrabold">Gestión de personal con criterio humano.</h2>
              <p className="mt-4 leading-7 text-white/65">Experiencia en administración, manejo de personal, subcontratación, DT, PreviRed, AFC, finiquitos y desvinculaciones.</p>
              <div className="mt-7 grid gap-3">
                {["Diagnóstico", "Solución personalizada", "Acompañamiento"].map((item, i) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"><span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-xs font-bold text-ink">{i+1}</span>{item}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24">
        <div className="container-lc">
          <p className="section-label">SOLUCIONES LUCENTA</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">Tu empresa no tiene que resolver sola sus desafíos de personal.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">{services.map(({icon:Icon,title,text}) => <article key={title} className="rounded-[2rem] border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-luxe"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fbf4e7] text-gold"><Icon/></div><h3 className="mt-7 text-2xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate">{text}</p><a href="#contacto" className="mt-6 inline-flex items-center gap-2 font-bold hover:text-teal">Hablemos de tu caso <ArrowRight size={17}/></a></article>)}</div>
        </div>
      </section>

      <section id="diagnóstico" className="bg-ink py-24 text-white">
        <div className="container-lc grid gap-10 lg:grid-cols-2">
          <div><p className="section-label">DIAGNÓSTICO</p><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">¿Qué necesita hoy tu empresa?</h2><p className="mt-5 max-w-xl text-lg leading-8 text-white/65">Una primera orientación para identificar el desafío de personal que más necesita atención.</p></div>
          <div className="rounded-[2rem] bg-white p-7 text-ink sm:p-9">
            <p className="text-sm font-bold text-slate">1. ¿Qué necesitas resolver?</p>
            <div className="mt-5 grid gap-3">{["Contratar personal","Gestionar personal","Resolver un proceso laboral","Ordenar RR. HH."].map(o => <a key={o} href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 font-semibold hover:border-teal">{o}<ArrowRight size={17}/></a>)}</div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-24">
        <div className="container-lc grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="rounded-[2.5rem] bg-cream p-8"><div className="grid aspect-square place-items-center rounded-[2rem] bg-white shadow-luxe"><Logo/></div></div>
          <div><p className="section-label">QUIÉN ESTÁ DETRÁS</p><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Experiencia real. Atención directa.</h2><p className="mt-6 text-lg leading-8 text-slate">LUCENTA es liderada por <strong>Paola Margarita Valdes Llanten</strong>, profesional con más de 20 años de experiencia en el mundo del buceo y las navieras, además de trayectoria en administración, manejo de personal, atención a clientes, subcontratación y procesos laborales.</p><p className="mt-5 text-lg leading-8 text-slate">La propuesta es simple: entender primero la realidad de cada empresa y acompañar con responsabilidad, cercanía y rapidez.</p></div>
        </div>
      </section>

      <section id="proceso" className="bg-cream py-24">
        <div className="container-lc"><p className="section-label">CÓMO TRABAJAMOS</p><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Simple para ti. Serio en el resultado.</h2><div className="mt-12 grid gap-5 md:grid-cols-4">{[["01","Te escuchamos"],["02","Analizamos"],["03","Proponemos"],["04","Acompañamos"]].map(([n,t]) => <article key={n} className="rounded-[2rem] bg-white p-7 shadow-sm"><span className="font-extrabold text-gold">{n}</span><h3 className="mt-8 text-xl font-bold">{t}</h3></article>)}</div></div>
      </section>

      <section id="faq" className="py-24">
        <div className="container-lc grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="section-label">PREGUNTAS FRECUENTES</p><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Lo esencial, antes de conversar.</h2></div><div className="space-y-3">{faqs.map(([q,a],i) => <div key={q} className="rounded-2xl border border-slate-200"><button onClick={()=>setFaq(faq===i?null:i)} className="flex w-full items-center justify-between p-5 text-left font-bold">{q}<ChevronDown className={faq===i ? "rotate-180" : ""}/></button>{faq===i && <p className="px-5 pb-5 leading-7 text-slate">{a}</p>}</div>)}</div></div>
      </section>

      <section id="contacto" className="bg-cream py-24">
        <div className="container-lc grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div><p className="section-label">CONTACTO</p><h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Hablemos de lo que tu empresa necesita.</h2><p className="mt-5 text-lg leading-8 text-slate">No tienes que resolverlo solo. Déjanos tu contexto y continuamos la conversación directamente por WhatsApp.</p><div className="mt-8 space-y-3 text-sm font-semibold text-slate"><p>📍 {site.city}</p><p>✉ {site.email}</p><p>☎ +56 9 3252 1182</p></div></div>
          <ContactForm/>
        </div>
      </section>

      <footer className="bg-ink py-12 text-white">
        <div className="container-lc flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><Logo light/><p className="mt-4 max-w-sm text-white/55">{site.tagline}</p></div><div className="text-sm text-white/55"><p>{site.city}</p><p className="mt-1">{site.email}</p></div></div>
        <div className="container-lc mt-10 border-t border-white/10 pt-5 text-xs text-white/40">© {new Date().getFullYear()} LUCENTA. Todos los derechos reservados.</div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contactar a LUCENTA por WhatsApp" className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-teal text-white shadow-luxe hover:scale-105"><MessageCircle/></a>
    </main>
  );
}
