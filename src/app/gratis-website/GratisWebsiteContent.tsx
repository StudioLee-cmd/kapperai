"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsGlobe, BsPerson, BsEnvelope, BsTelephone, BsGeoAlt, BsCheckCircleFill, BsArrowRight, BsLightning, BsPalette, BsPhone } from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const niche = siteDetails.niche || "Bedrijven";
const nicheLower = niche.toLowerCase();
const nicheSingular = nicheLower.endsWith("s") ? nicheLower.slice(0, -1) : nicheLower;
const brand = siteDetails.siteName;

const WEBHOOK_URL = "https://n8n.aireclamestudio.nl/webhook/freewebsite";

export default function GratisWebsiteContent() {
  const [formData, setFormData] = useState({
    clientName: "", domain: "", contactName: "", email: "", phone: "", city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!formData.clientName || !formData.domain || !formData.contactName || !formData.email) {
      setError("Vul alle verplichte velden in.");
      return;
    }
    setIsSubmitting(true);
    try {
      const payload = { ...formData, niche };
      const res = await fetch(WEBHOOK_URL, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Verzenden mislukt");
      setIsSubmitted(true);
    } catch {
      setError("Er ging iets mis. Mail tim@studiolee.nl en ik help je direct.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    { q: "Is het echt gratis?", a: "Ja, 100% gratis. Wij maken een professioneel website design op maat voor jouw bedrijf. Je ontvangt een live preview link. Geen kosten, geen verplichtingen." },
    { q: "Kan ik het bestand krijgen?", a: "Ja. De website bestanden zijn van jou. Vraag het aan en we sturen ze door." },
    { q: `Wat kost het als ik een website wil laten maken?`, a: `Een complete website laten maken kost €800 eenmalig plus €200 per jaar voor hosting, onderhoud en blogs. Geen abonnement nodig voor alleen de website. Een veel goedkopere optie dan de gebruikelijke €3.000–€10.000 die een traditioneel webbureau voor ${niche} vraagt.` },
    { q: "Wat is het 25-in-1 AI platform?", a: `Voor €79/maand krijg je naast de website ook een AI chatbot, Voice AI telefonist, SEO automatisering, review management, social media planner en meer. Alles wat je nodig hebt om je ${nicheSingular}sbedrijf te laten groeien. Maandelijks opzegbaar.` },
    { q: "Hoe snel is het klaar?", a: "Meestal binnen 48 uur. Uiterlijk binnen een week. Je ontvangt een live link naar je nieuwe website design." },
    { q: "Moet ik al een website hebben?", a: "Nee, ook als je nog geen website hebt kunnen wij een design maken. We vragen alleen je bedrijfsnaam en wat informatie over je diensten." },
    { q: `Is een website laten maken voor een ${nicheSingular} echt €800 waard?`, a: `Ja. Voor €800 krijg je een volledig op maat ontworpen website met SEO-optimalisatie, mobielvriendelijk design, contactformulier en alle bestanden. Een vergelijkbare website bij een lokaal webbureau kost €3.000 – €10.000. Wij kunnen het goedkoper aanbieden omdat we AI inzetten in het ontwerpproces.` },
  ];

  const benefits = [
    { icon: BsLightning, title: "Live binnen 48 uur", desc: `Geen wekenlange wachttijd. Je nieuwe website voor ${nicheLower} staat meestal binnen twee dagen klaar — uiterlijk een week.` },
    { icon: BsPalette, title: "Modern design op maat", desc: `Geen template. Elke website voor ${nicheLower} wordt op maat ontworpen — met jouw foto's, kleuren en sfeer.` },
    { icon: BsPhone, title: "Mobielvriendelijk + SEO", desc: `Geoptimaliseerd voor mobiel (waar 70% van je klanten komt) én voor Google. Vindbaar én snel.` },
    { icon: BsCheckCircleFill, title: "Bestanden zijn van jou", desc: `Geen lock-in. De website bestanden behoor je toe. Je kunt hem mee elders hosten als je dat wil.` },
  ];

  return (
    <main className="pt-24 md:pt-32">
      {/* Hero + Form */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Copy */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-green-500/10 text-green-500 text-sm font-bold px-4 py-1.5 rounded-full mb-4"
              >
                100% Gratis — Geen Verplichtingen
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 !leading-tight"
              >
                Gratis Website voor {niche}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-lg md:text-xl text-foreground-accent mb-4 font-medium"
              >
                Of een complete website laten maken vanaf <span className="text-foreground font-bold">€800 eenmalig</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-foreground-accent mb-6"
              >
                Wij maken eerst een volledig nieuw website design op maat voor jouw {nicheSingular}sbedrijf — gratis.
                Met moderne animaties, SEO optimalisatie en een live preview link. Meestal binnen 48 uur klaar.
                Bevalt het? Dan koop je hem voor €800 of kies je het complete AI platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 mb-8"
              >
                {["Live preview op eigen link", "SEO-geoptimaliseerd voor Google", "Professioneel design op maat", "Bestanden zijn van jou", `Website laten maken voor ${nicheLower}? Vanaf €800`].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <BsCheckCircleFill className="text-green-500 flex-shrink-0" />
                    <span className="text-foreground-accent">{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* Pricing after */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[var(--card-background)] border border-[var(--card-border)] rounded-xl p-5"
              >
                <p className="font-semibold mb-3">En daarna? Jij kiest:</p>
                <div className="space-y-2 text-sm text-foreground-accent">
                  <div className="flex justify-between">
                    <span>Website laten maken (eenmalig)</span>
                    <span className="font-semibold text-foreground">€800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hosting + onderhoud + blogs</span>
                    <span className="font-semibold text-foreground">€200/jaar</span>
                  </div>
                  <div className="flex justify-between border-t border-[var(--card-border)] pt-2 mt-2">
                    <span>Of: compleet AI platform (25-in-1)</span>
                    <span className="font-semibold text-primary">€79/mnd</span>
                  </div>
                </div>
                <Link href="/tarieven" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-3 hover:underline">
                  Bekijk alle tarieven <BsArrowRight />
                </Link>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[var(--card-background)] border border-[var(--card-border)] rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <BsCheckCircleFill className="text-green-500 text-5xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Aanvraag ontvangen!</h3>
                    <p className="text-foreground-accent mb-6">
                      We gaan direct voor je aan de slag. Je ontvangt je website design binnen 48 uur.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold mb-1">Vraag je gratis design aan</h3>
                    <p className="text-sm text-foreground-accent mb-4">Duurt minder dan een minuut</p>

                    {error && <div className="bg-red-500/10 text-red-500 text-sm p-3 rounded-lg">{error}</div>}

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Bedrijfsnaam <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <BsPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-accent" />
                        <input name="clientName" value={formData.clientName} onChange={handleChange} placeholder={`Bijv. ${niche === "Kappers" ? "Kapsalon Stijl" : "Jouw Bedrijf"}`} className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-[var(--card-border)] focus:border-primary focus:outline-none transition-colors" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Website URL <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <BsGlobe className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-accent" />
                        <input name="domain" value={formData.domain} onChange={handleChange} placeholder="https://jouwwebsite.nl" type="url" className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-[var(--card-border)] focus:border-primary focus:outline-none transition-colors" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Jouw naam <span className="text-red-500">*</span></label>
                        <input name="contactName" value={formData.contactName} onChange={handleChange} placeholder="Voornaam Achternaam" className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--card-border)] focus:border-primary focus:outline-none transition-colors" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">E-mail <span className="text-red-500">*</span></label>
                        <div className="relative">
                          <BsEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-accent" />
                          <input name="email" value={formData.email} onChange={handleChange} placeholder="jouw@email.nl" type="email" className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-[var(--card-border)] focus:border-primary focus:outline-none transition-colors" required />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Telefoon</label>
                        <div className="relative">
                          <BsTelephone className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-accent" />
                          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="06 12345678" type="tel" className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-[var(--card-border)] focus:border-primary focus:outline-none transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Stad</label>
                        <div className="relative">
                          <BsGeoAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-accent" />
                          <input name="city" value={formData.city} onChange={handleChange} placeholder="Bijv. Amsterdam" className="w-full pl-10 pr-4 py-3 rounded-xl bg-background border border-[var(--card-border)] focus:border-primary focus:outline-none transition-colors" />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-black py-3.5 rounded-xl font-bold hover:bg-primary-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Bezig met verzenden..." : "Vraag Gratis Design Aan"}
                    </button>

                    <p className="text-xs text-foreground-accent text-center">
                      100% gratis · Geen verplichtingen · Meestal binnen 48 uur
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-5xl mx-auto mt-16 px-4"
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-2xl">
            <Image
              src="/images/services/gratis-website-hero.jpg"
              alt={`Website laten maken voor ${nicheLower} — premium laptop met website design op kapsalon receptiebalie`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <p className="text-center text-sm text-foreground-accent mt-3 max-w-2xl mx-auto">
            Een professioneel website design op maat voor jouw {nicheSingular}sbedrijf — eerst gratis voorbeeld, dan beslis jij.
          </p>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Hoe werkt een website laten maken bij {brand}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Vul het formulier in", desc: "Deel je bedrijfsnaam en eventueel je huidige website URL. Duurt minder dan een minuut." },
              { step: "2", title: "Wij ontwerpen je website", desc: `Onze AI + designer analyseert je markt, je concurrenten en ontwerpt een professionele nieuwe website voor jouw ${nicheSingular}sbedrijf.` },
              { step: "3", title: "Ontvang je live preview", desc: "Binnen 48 uur ontvang je een link naar je nieuwe website. Bevalt het? Koop het voor €800 of kies het AI-platform vanaf €79/mnd." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-black font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-foreground-accent text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website laten maken section (targets second head term) + side image */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Website laten maken</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Een complete website laten maken voor je {nicheSingular}sbedrijf — vanaf €800
            </h2>
            <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
              <p>
                Liever direct een professionele website laten maken in plaats van eerst een gratis voorbeeld?
                Dat kan. Voor {niche} bouwen we een complete website op maat: modern design, mobielvriendelijk,
                SEO-geoptimaliseerd voor Google en met alle features die jouw klanten verwachten — denk aan
                een online afsprakenboeker, contactformulier en duidelijke prijslijst.
              </p>
              <p>
                Een traditioneel webbureau rekent €3.000 – €10.000 voor een vergelijkbare website. Wij doen het
                voor €800 eenmalig, met €200 per jaar voor hosting, onderhoud en SEO-blogs. Dat komt doordat we
                AI inzetten in het ontwerpproces — sneller, betaalbaarder, maar wel volledig op maat.
              </p>
              <p>
                Wil je meer dan alleen een website? Voor €79/maand krijg je ook een AI chatbot, Voice AI
                telefonist, automatische herinneringen, review management en SEO automatisering — agency-kwaliteit
                voor een tiende van de prijs.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/tarieven" className="inline-flex items-center justify-center gap-2 bg-primary text-black px-6 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all">
                Bekijk alle tarieven <BsArrowRight />
              </Link>
              <a href="https://calendly.com/tim-studiolee" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-foreground/20 px-6 py-3 rounded-xl font-semibold hover:bg-foreground/5 transition-all">
                Plan vrijblijvend gesprek
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-xl"
          >
            <Image
              src="/images/services/gratis-website-section.jpg"
              alt={`${nicheSingular === "kapper" ? "Kapsalon" : niche} eigenaar bekijkt nieuwe website op tablet`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Wat krijg je bij een website laten maken?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-2xl mx-auto">
            Een complete website voor je {nicheSingular}sbedrijf — eerst gratis voorbeeld, daarna kopen of platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <b.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{b.title}</h3>
                <p className="text-foreground-accent text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces / design image */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Het ontwerpproces — transparant en snel</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-2xl mx-auto">
            Geen wekenlange offerterondes. Geen wireframe-fase die nergens heen leidt. Wij ontwerpen, jij beoordeelt.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-xl mb-6"
          >
            <Image
              src="/images/services/gratis-website-workflow.jpg"
              alt={`Ontwerpproces voor een website voor ${nicheLower} — laptop met design en wireframe schetsen`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </motion.div>
          <p className="text-center text-foreground-accent max-w-2xl mx-auto">
            Eerst maken we kosteloos een live preview. Bevalt het? Dan kies je: website laten maken voor €800 of het complete platform vanaf €79/mnd.
          </p>
        </div>
      </section>

      {/* Why free section - SEO content */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Waarom bieden wij gratis website designs aan voor {niche}?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              De meeste {niche} hebben geen website, of een verouderde site die niet gevonden wordt in Google.
              Een traditioneel webbureau rekent al snel €3.000 tot €10.000 voor een nieuwe website — dat is voor
              veel {niche} simpelweg niet haalbaar.
            </p>
            <p>
              Wij geloven dat elk {nicheSingular}sbedrijf een professionele online aanwezigheid verdient, ongeacht
              het budget. Daarom maken wij het design gratis. Je ziet precies hoe je nieuwe website eruitziet
              voordat je een cent uitgeeft. Bevalt het? Dan koop je het voor €800 eenmalig — een fractie van wat
              een bureau vraagt voor een website laten maken.
            </p>
            <p>
              En wil je meer dan alleen een website? Met ons 25-in-1 AI platform voor €79/maand krijg je ook
              een chatbot, Voice AI telefonist, SEO automatisering, review management en social media tools.
              Agency-kwaliteit voor een tiende van de prijs — inclusief strategie en consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Combinatie met andere services */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Combineer met andere AI-tools
          </h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Een website is het beginpunt. Het platform doet de rest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { href: "/chatbot", title: "AI Chatbot", desc: "Vangt website-bezoekers op en plant afspraken via een slimme chat-widget op je nieuwe website." },
              { href: "/seo", title: "SEO Automatisering", desc: "Maandelijkse SEO-blogs en optimalisaties zodat je website daadwerkelijk gevonden wordt in Google." },
              { href: "/voice-ai", title: "Voice AI Telefonist", desc: "Vangt telefoontjes op die binnenkomen via je nieuwe website. 24/7 bereikbaar zonder personeel." },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-foreground-accent text-sm mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                  Bekijk <BsArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-[var(--card-border)] rounded-xl">
                <summary className="cursor-pointer p-5 font-semibold flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-foreground-accent">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vraag nu je gratis design aan</h2>
          <p className="text-foreground-accent mb-8">
            Vul het formulier bovenaan in en ontvang je nieuwe website design binnen 48 uur. Gratis, vrijblijvend.
          </p>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all inline-block"
          >
            Naar het formulier ↑
          </a>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question", name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
