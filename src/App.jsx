import React from 'react';

const NAV_LINKS = [
  { label: 'Categorieën', href: '#categories' },
  { label: 'Producten', href: '#products' },
  { label: 'Over ons', href: '#about' },
  { label: 'Locatie', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const CATEGORIES = [
  { icon: '🥫', label: 'Sauzen & Kruiden' },
  { icon: '🍜', label: 'Rijst & Noedels' },
  { icon: '🥬', label: 'Verse Groenten' },
  { icon: '🧊', label: 'Diepvries' },
  { icon: '🍡', label: 'Internationale Snacks' },
  { icon: '🧹', label: 'Huishoudelijk' },
];

const PRODUCTS = [
  { name: 'Japanse Sojasaus', origin: 'Japan', desc: 'Klassieke umami voor elke wok of marinade.' },
  { name: 'Jasmijnrijst 5kg', origin: 'Thailand', desc: 'Geurige langkorrelige rijst, dagelijks vers.' },
  { name: 'Miso Pasta', origin: 'Japan', desc: 'Authentieke witte miso voor soepen en dressings.' },
  { name: 'Ramen Noedels', origin: 'Korea', desc: 'Springerige tarwenoedels voor een stevige kom.' },
  { name: 'Kokosnootmelk', origin: 'Thailand', desc: 'Romig en vol voor curries en desserts.' },
  { name: 'Kimchi', origin: 'Korea', desc: 'Pittig gefermenteerd — een Koreaans must-have.' },
];

const TESTIMONIALS = [
  { name: 'Sophie V.', stars: 5, text: 'Altijd verse groenten en een geweldige keuze aan sauzen. Ik vind hier alles wat ik nodig heb voor mijn Aziatische keuken.' },
  { name: 'Thomas D.', stars: 4, text: 'Vriendelijke bediening en een ruim aanbod. De rijst en noedels zijn van topkwaliteit — gevonden bij Li Qun!' },
  { name: 'Nathalie P.', stars: 5, text: 'Een echte buurtwinkel met een wereld aan smaken. Elke week een nieuwe ontdekking in de rekken.' },
];

export default function LiQunSupermarkt() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleForm = e => {
    e.preventDefault();
    alert('Bedankt! We nemen zo snel mogelijk contact op.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-[#FAFAF7] text-[#1C1C1A]">
      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="#hero" style={{ fontFamily: "'Noto Serif', serif" }} className="text-2xl font-bold text-[#C8392B]">Li Qun</a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-[#1C1C1A] hover:text-[#C8392B] transition-colors duration-200">{l.label}</a>
            ))}
          </div>
          <a href="#location" className="hidden md:inline-flex bg-[#C8392B] hover:bg-[#a82e22] text-white font-medium text-sm tracking-wide px-7 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">Bezoek ons</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] p-2">
            <span className={`block h-0.5 w-6 bg-[#1C1C1A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#1C1C1A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#1C1C1A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#F0F0EC] px-6 pb-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-[#1C1C1A] hover:text-[#C8392B] transition-colors duration-200">{l.label}</a>
            ))}
            <a href="#location" className="bg-[#C8392B] text-white text-sm font-medium px-6 py-3 rounded-full text-center">Bezoek ons</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center py-28 px-6 md:px-12">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=85" alt="Li Qun Supermarkt" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1A]/75 via-[#1C1C1A]/40 to-transparent" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-[#F0A500] text-sm font-medium tracking-widest uppercase mb-4">Van Iseghemlaan 50, Oostende</p>
          <h1 style={{ fontFamily: "'Noto Serif', serif" }} className="text-4xl md:text-6xl font-bold text-white leading-tight mb-2">Aziatische smaken in het hart van Oostende</h1>
          <div className="w-16 h-1 bg-[#F0A500] rounded-full mb-6 mt-4" />
          <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">Vers en dagelijks aangevuld — meer dan 1.000 producten uit heel Azië, voor elke keuken en elk recept.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#categories" className="bg-[#C8392B] hover:bg-[#a82e22] text-white font-medium text-sm tracking-wide px-7 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">Ontdek ons aanbod</a>
            <a href="#location" className="border-2 border-white text-white hover:bg-white hover:text-[#1C1C1A] font-medium text-sm px-7 py-3 rounded-full transition-all duration-300">Route plannen</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-[#F0F0EC] py-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[['⭐', '4.2 op Google Reviews'], ['🌿', 'Vers en dagelijks aangevuld'], ['🏪', 'Meer dan 1.000 producten'], ['📍', 'Centraal in Oostende']].map(([icon, text]) => (
            <div key={text} className="flex items-center justify-center gap-2 text-sm text-[#6B6B60] font-medium">
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <section id="categories" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: "'Noto Serif', serif" }} className="text-3xl md:text-4xl font-semibold text-[#1C1C1A] mb-2">Alles voor jouw keuken</h2>
          <div className="w-12 h-1 bg-[#C8392B] rounded-full mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map(cat => (
              <div key={cat.label} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#F0F0EC] border-t-4 border-t-[#F0A500] p-6 flex flex-col items-center gap-3 cursor-pointer hover:scale-[1.02] transition-all duration-300">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-medium text-center text-[#1C1C1A]">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="products" className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: "'Noto Serif', serif" }} className="text-3xl md:text-4xl font-semibold mb-2">Gevonden bij Li Qun</h2>
          <div className="w-12 h-1 bg-[#C8392B] rounded-full mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map(p => (
              <div key={p.name} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#F0F0EC] p-6 md:p-8 hover:scale-[1.02]">
                <span className="inline-block bg-[#FDF3F2] text-[#C8392B] text-xs font-medium px-3 py-1 rounded-full mb-3">{p.origin}</span>
                <h3 style={{ fontFamily: "'Noto Serif', serif" }} className="text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-[#6B6B60] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&w=900&q=85" alt="Li Qun winkel" className="rounded-2xl aspect-[4/3] object-cover shadow-md w-full" />
          <div>
            <p className="text-[#F0A500] text-xs font-medium tracking-widest uppercase mb-3">Ons verhaal</p>
            <h2 style={{ fontFamily: "'Noto Serif', serif" }} className="text-3xl md:text-4xl font-semibold mb-4">Al jaren een vertrouwd gezicht in Oostende</h2>
            <div className="w-12 h-1 bg-[#C8392B] rounded-full mb-6" />
            <p className="text-[#6B6B60] leading-relaxed mb-4">Li Qun Supermarkt is meer dan een winkel — het is een ontmoetingsplek voor iedereen die van smaken uit heel Azië houdt. Van de Aziatische gemeenschap in Oostende tot nieuwsgierige thuiskoks: bij ons in de winkel vind je altijd iets nieuws.</p>
            <p className="text-[#6B6B60] leading-relaxed">We vullen dagelijks aan, zoeken zorgvuldig onze leveranciers uit en staan altijd klaar om te helpen. Of je nu op zoek bent naar miso, palmsuiker of gewoon goede rijst — je bent hier altijd welkom.</p>
          </div>
        </div>
      </section>

      {/* FRESH PRODUCE */}
      <section className="py-20 px-6 md:px-12 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#F0A500] text-xs font-medium tracking-widest uppercase mb-3">Verse keuze elke dag</p>
            <h2 style={{ fontFamily: "'Noto Serif', serif" }} className="text-3xl md:text-4xl font-semibold mb-4">Verse groenten recht van bij de bron</h2>
            <div className="w-12 h-1 bg-[#C8392B] rounded-full mb-6" />
            <ul className="space-y-4">
              {[['🌿', 'Dagelijks vers aangevuld, ook op zaterdag'], ['🥦', 'Groenten die je elders zelden vindt'], ['🍋', 'Citroengras, taro, bittermeloen en meer'], ['🛒', 'Voor elke keuken, elk recept, elk budget']].map(([icon, text]) => (
                <li key={text} className="flex items-start gap-3 text-[#6B6B60]">
                  <span className="text-xl mt-0.5">{icon}</span>
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85" alt="Verse groenten" className="rounded-2xl aspect-[4/3] object-cover shadow-md w-full" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: "'Noto Serif', serif" }} className="text-3xl md:text-4xl font-semibold mb-2">Wat klanten zeggen</h2>
          <div className="w-12 h-1 bg-[#C8392B] rounded-full mb-10" />
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#F0F0EC] p-6 md:p-8">
                <div className="flex gap-1 mb-4">{Array.from({ length: t.stars }).map((_, i) => <span key={i} className="text-[#F0A500] text-lg">★</span>)}</div>
                <p style={{ fontFamily: "'Noto Serif', serif" }} className="italic text-[#1C1C1A] leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-sm font-medium text-[#6B6B60]">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <iframe title="Li Qun Locatie" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.123!2d2.916!3d51.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2f2e2e2e2e2e2%3A0x0!2sVan%20Iseghemlaan%2050%2C%208400%20Oostende!5e0!3m2!1snl!2sbe!4v1234567890" className="w-full h-80 rounded-2xl border-0 shadow-md" allowFullScreen loading="lazy" />
          <div>
            <h2 style={{ fontFamily: "'Noto Serif', serif" }} className="text-3xl font-semibold mb-6">Kom langs in de winkel</h2>
            <p className="text-[#6B6B60] mb-2">📍 Van Iseghemlaan 50, 8400 Oostende</p>
            <p className="text-[#6B6B60] mb-6">📞 059 80 13 68</p>
            <table className="w-full text-sm mb-8 border-collapse">
              <tbody>
                {[['Maandag – vrijdag', '9:00 – 19:00'], ['Zaterdag', '9:00 – 18:00'], ['Zondag', '10:00 – 16:00']].map(([day, hours]) => (
                  <tr key={day} className="border-b border-[#F0F0EC]">
                    <td className="py-3 font-medium text-[#1C1C1A]">{day}</td>
                    <td className="py-3 text-[#6B6B60] text-right">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a href="https://maps.google.com/?q=Van+Iseghemlaan+50+Oostende" target="_blank" rel="noopener noreferrer" className="inline-flex bg-[#C8392B] hover:bg-[#a82e22] text-white font-medium text-sm tracking-wide px-7 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">Route plannen</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 md:px-12 bg-[#FDF3F2]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 style={{ fontFamily: "'Noto Serif', serif" }} className="text-3xl font-semibold mb-4">Stel je vraag</h2>
            <p className="text-[#6B6B60] mb-6">We helpen je graag verder — of het nu gaat om een product dat je zoekt of een vraag over onze openingstijden.</p>
            <p className="flex items-center gap-2 text-[#1C1C1A] font-medium mb-2">📞 <a href="tel:059801368" className="hover:text-[#C8392B] transition-colors">059 80 13 68</a></p>
            <p className="flex items-center gap-2 text-[#1C1C1A] font-medium">✉️ <a href="mailto:info@liqun.be" className="hover:text-[#C8392B] transition-colors">info@liqun.be</a></p>
          </div>
          <form onSubmit={handleForm} className="flex flex-col gap-4">
            <input required placeholder="Jouw naam" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-[#D9D9D0] bg-white px-4 py-3 text-[#1C1C1A] placeholder-[#6B6B60] focus:outline-none focus:ring-2 focus:ring-[#C8392B]/30 focus:border-[#C8392B] transition-all duration-200 text-sm" />
            <input required type="email" placeholder="E-mailadres" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-[#D9D9D0] bg-white px-4 py-3 text-[#1C1C1A] placeholder-[#6B6B60] focus:outline-none focus:ring-2 focus:ring-[#C8392B]/30 focus:border-[#C8392B] transition-all duration-200 text-sm" />
            <textarea required rows={4} placeholder="Je bericht…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full rounded-xl border border-[#D9D9D0] bg-white px-4 py-3 text-[#1C1C1A] placeholder-[#6B6B60] focus:outline-none focus:ring-2 focus:ring-[#C8392B]/30 focus:border-[#C8392B] transition-all duration-200 text-sm resize-none" />
            <button type="submit" className="bg-[#C8392B] hover:bg-[#a82e22] text-white font-medium text-sm tracking-wide px-7 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 self-start">Verstuur bericht</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1C1C1A] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 style={{ fontFamily: "'Noto Serif', serif" }} className="text-2xl font-bold text-[#C8392B] mb-4">Li Qun</h3>
            <p className="text-white/60 text-sm leading-relaxed">Aziatische smaken voor elke keuken. Altijd welkom in Oostende.</p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#6B6B60] mb-4">Navigatie</p>
            <ul className="space-y-2">
              {NAV_LINKS.map(l => (
                <li key={l.href}><a href={l.href} className="text-sm text-white/70 hover:text-[#F0A500] transition-colors duration-200">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#6B6B60] mb-4">Openingstijden</p>
            <p className="text-sm text-white/70 mb-1">Ma – Vr: 9:00 – 19:00</p>
            <p className="text-sm text-white/70 mb-1">Zaterdag: 9:00 – 18:00</p>
            <p className="text-sm text-white/70 mb-4">Zondag: 10:00 – 16:00</p>
            <p className="text-sm text-white/70">📍 Van Iseghemlaan 50, Oostende</p>
            <p className="text-sm text-white/70">📞 059 80 13 68</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Li Qun Supermarkt — Van Iseghemlaan 50, 8400 Oostende
        </div>
      </footer>
    </div>
  );
}