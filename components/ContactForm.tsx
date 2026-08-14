'use client';

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LockKeyhole, MessageCircle } from "lucide-react";
import { site } from "../lib/config";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("nombre") || "").trim();
    const email = String(form.get("email") || "").trim();
    const company = String(form.get("empresa") || "").trim();
    const message = String(form.get("mensaje") || "").trim();

    if (!name || !email || !message) return;

    const whatsappText =
      `Hola LUCENTA, soy ${name}.%0A%0A` +
      `Correo: ${email}%0A` +
      `Empresa: ${company || "No indicada"}%0A%0A` +
      `Necesidad:%0A${message}`;

    window.open(`https://wa.me/${site.whatsapp}?text=${whatsappText}`, "_blank", "noopener,noreferrer");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-luxe sm:p-8">
      {!sent ? (
        <>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-extrabold">Cuéntanos qué necesitas</h3>
              <p className="mt-2 text-sm leading-6 text-slate">
                Tu consulta se prepara y se envía directamente a LUCENTA por WhatsApp.
              </p>
            </div>
            <div className="rounded-2xl bg-[#eef8f7] p-3 text-teal"><LockKeyhole size={21}/></div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <input name="nombre" required placeholder="Tu nombre" className="w-full rounded-2xl border border-slate-200 bg-white p-4 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/10"/>
            <input name="email" required type="email" placeholder="Tu correo" className="w-full rounded-2xl border border-slate-200 bg-white p-4 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/10"/>
            <input name="empresa" placeholder="Tu empresa (opcional)" className="w-full rounded-2xl border border-slate-200 bg-white p-4 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/10"/>
            <textarea name="mensaje" required rows={5} placeholder="¿En qué podemos ayudarte?" className="w-full resize-none rounded-2xl border border-slate-200 bg-white p-4 outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/10"/>
            <button type="submit" className="w-full rounded-full bg-ink px-6 py-4 font-bold text-white transition hover:bg-teal">
              Enviar consulta por WhatsApp <ArrowRight className="ml-2 inline" size={17}/>
            </button>
          </form>

          <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate">
            <LockKeyhole size={14} className="mt-0.5 shrink-0 text-teal"/>
            <span>Este sitio no guarda tus datos en un servidor. Al enviar, se abrirá WhatsApp para continuar la conversación con LUCENTA.</span>
          </div>
        </>
      ) : (
        <div className="py-10 text-center">
          <CheckCircle2 className="mx-auto text-teal" size={52}/>
          <h3 className="mt-5 text-3xl font-extrabold">Consulta preparada</h3>
          <p className="mx-auto mt-3 max-w-md leading-7 text-slate">
            WhatsApp debería abrirse en una nueva ventana. Completa el envío allí para que Paola pueda responderte.
          </p>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 font-bold text-white">
            <MessageCircle size={18}/> Abrir WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
