import React, { useEffect, useState } from 'react';
import './index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const instagramUrl = "https://instagram.com/marina_vidente_";
  
  return (
    <>
      <header className="glass container" style={{ 
        position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        width: '90%', maxWidth: '1200px', zIndex: 1000, display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '0.8rem 2rem'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '2px' }}>
          MARINA <span className="text-gradient">ESPAÇO LUZ</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: '500', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <li><a href="#services" className="hover-gold">Serviços</a></li>
            <li><a href="#about" className="hover-gold">Marina</a></li>
            <li><a href="#gallery" className="hover-gold">Galeria</a></li>
            <li><a href="#contact" className="hover-gold">Contato</a></li>
          </ul>
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover-gold"
            style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-gold)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
        </nav>

        {/* Hamburger Menu Icon */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        <a href="https://wa.me/5548991912929" className="btn-primary header-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }}>Agendar</a>
      </header>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>Marina</a>
          <a href="#gallery" onClick={() => setIsMenuOpen(false)}>Galeria</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contato</a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', marginTop: '2rem' }}>Ver Instagram →</a>
          <div style={{ marginTop: 'auto', textAlign: 'center' }}>
            <a href="https://wa.me/5548991912929" className="btn-primary" style={{ fontSize: '1rem', width: '100%', display: 'block' }}>Falar com Marina</a>
          </div>
        </div>
      )}
    </>
  );
};

const Hero = () => (
  <section style={{ 
    minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden', background: '#050406', padding: '6rem 0'
  }}>
    <div style={{ 
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
      backgroundImage: 'url("/images/mystic_altar.png")', backgroundSize: 'cover',
      backgroundPosition: 'center', opacity: 0.25, zIndex: 0
    }}></div>
    
    <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', animation: 'fadeIn 1.5s ease-out' }}>
      <span className="section-tag" style={{ fontSize: 'clamp(0.6rem, 2vw, 0.85rem)' }}>25 Anos de Sabedoria Espiritual</span>
      <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 5.5rem)', lineHeight: '1.1', marginBottom: '1.5rem', fontWeight: '700' }}>
        O Destino <br /><span className="text-gradient">Em Suas Mãos</span>
      </h1>
      <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)', maxWidth: '800px', margin: '0 auto 3rem', color: 'rgba(255,255,255,0.7)', fontWeight: '300' }}>
        Pelos oráculos sagrados e Alta Magia, Marina Vidente desvenda o futuro e restaura seu equilíbrio.
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="https://wa.me/5548991912929" className="btn-primary" style={{ padding: '1rem 2rem' }}>
          Consultar Oráculos
        </a>
        <div style={{ textAlign: 'left', borderLeft: '1px solid var(--accent-gold)', paddingLeft: '1.5rem' }}>
          <div style={{ fontWeight: '700', color: '#fff', fontSize: '1.2rem' }}>R$ 200</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Sessão Privada</div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section style={{ padding: '4rem 0', background: '#0e0c12', borderY: '1px solid rgba(212, 175, 55, 0.1)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem' }}>
       {[
         { val: '25+', label: 'Anos de Mistério' },
         { val: '5000+', label: 'Vidas Guiadas' },
         { val: '100%', label: 'Discrição Total' },
         { val: '24h', label: 'Suporte' }
       ].map((f, i) => (
         <div key={i} style={{ textAlign: 'center' }}>
           <div className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800' }}>{f.val}</div>
           <div style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.65rem', letterSpacing: '2px' }}>{f.label}</div>
         </div>
       ))}
    </div>
  </section>
);

const Services = () => (
  <section id="services" style={{ padding: '8rem 0', background: 'linear-gradient(to bottom, #050406, #0e0c12)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <span className="section-tag">Caminhos da Luz</span>
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1.5rem' }}>Oráculos & <span className="text-gradient">Poder</span></h2>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {[
          { title: 'Jogo de Búzios', desc: 'A voz dos Orixás revelando segredos escondidos para seus dilemas.', icon: '🐚' },
          { title: 'Tarot de Marselha', desc: 'Mapas detalhados do seu destino amoroso com clareza absoluta.', icon: '🃏' },
          { title: 'Amarração Amorosa', desc: 'União espiritual definitiva para restaurar a paixão no casal.', icon: '❤️' },
          { title: 'Afastamento de Rivais', desc: 'Proteção contra energias intrusas e pessoas negativas.', icon: '✨' },
          { title: 'União de Anjos', desc: 'Harmonização espiritual para uma relação protegida.', icon: '👼' },
          { title: 'Limpeza Espiritual', desc: 'Purificação profunda contra inveja e feitiçaria.', icon: '🕯️' },
          { title: 'Abertura de Caminhos', desc: 'Alta Magia para destravar sua vida financeira e profissional.', icon: '🌟' },
          { title: 'Borra do Café', desc: 'Visões místicas através da borra revelando seu destino.', icon: '☕' }
        ].map((s, i) => (
          <div key={i} className="glass" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>{s.icon}</div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{s.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{s.desc}</p>
            <a href="https://wa.me/5548991912929" style={{ marginTop: '2rem', display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '600', fontSize: '0.85rem' }}>REVELAR AGORA →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" style={{ padding: '8rem 0' }}>
    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div className="glass" style={{ width: '100%', height: 'clamp(400px, 60vh, 600px)', overflow: 'hidden', borderRadius: '30px' }}>
            <img src="/images/gypsy_tarot.png" alt="Marina Vidente" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', top: '30px', left: '-20px', width: '100%', height: '100%', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '30px', zIndex: -1 }}></div>
        </div>
        <div>
          <span className="section-tag">O Dom Revelado</span>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '2rem' }}>Marina <span className="text-gradient">Vidente</span></h2>
          <div style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.9' }}>
            <p style={{ marginBottom: '1.5rem' }}>Sensitiva por natureza e Cigana por alma, Marina é o canal entre o mundo espiritual e sua realidade física.</p>
            <p style={{ marginBottom: '1.5rem' }}>Dominando a Alta Magia, ela oferece uma transformação completa do seu campo energético e destino.</p>
          </div>
          <a href="https://wa.me/5548991912929" className="btn-primary" style={{ marginTop: '2.5rem' }}>Agendar Momento Sagrado</a>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" style={{ padding: '8rem 0', background: '#050406' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>Galeria <span className="text-gradient">Mística</span></h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {[
          "/images/gypsy_tarot.png",
          "/images/mystic_altar.png",
          "/images/crystal_ball.png",
          "/images/mystic_altar.png"
        ].map((img, i) => (
          <div key={i} className="glass" style={{ height: '300px', overflow: 'hidden' }}>
             <img src={img} alt="Mística" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" style={{ padding: '8rem 0' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>Vozes de <span className="text-gradient">Luz</span></h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {[
          { text: "Consegui ter ela de volta em meu lar. Gratidão eterna.", author: "R. Silva" },
          { text: "Meu marido passou a me procurar dias depois. Hoje somos felizes.", author: "M. Oliveira" },
          { text: "Obrigada por me ajudar a reconquistar meu amor com magia cigana.", author: "P. Santos" }
        ].map((t, i) => (
          <div key={i} className="glass" style={{ padding: '2.5rem' }}>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', fontStyle: 'italic' }}>"{t.text}"</p>
            <div style={{ fontWeight: '700', fontSize: '0.85rem', color: 'var(--accent-gold)', letterSpacing: '1px' }}>{t.author}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" style={{ padding: '8rem 0 3rem', background: '#020202' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '2rem' }}>MARINA <span className="text-gradient">ESPAÇO LUZ</span></div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>Revelando o futuro e protegendo seu presente através da sabedoria mística.</p>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Localização</h4>
          <p style={{ color: 'var(--text-muted)' }}>Itapema - SC, 88220-000<br />Brasil</p>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contato</h4>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <a href="https://wa.me/5548991912929" style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>(48) 99191-2929</a>
            <a href="https://wa.me/5547996965020" style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>(47) 99696-5020</a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '3rem', color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem' }}>
        © 2024 MARINA ESPAÇO LUZ. ✅
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5548991912929" 
    target="_blank" rel="noopener noreferrer"
    style={{
      position: 'fixed', bottom: '2rem', right: '2rem',
      width: '60px', height: '60px', borderRadius: '50%',
      background: '#25d366', color: '#fff', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: '2rem',
      boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)', zIndex: 1001
    }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.77 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
  </a>
);

function App() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glass, section h2, .section-tag').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
