import React, { useEffect } from 'react';
import './index.css';

const Header = () => {
  const instagramUrl = "https://instagram.com/marina_vidente_";
  
  return (
    <header className="glass container" style={{ 
      position: 'fixed', top: '2rem', left: '50%', transform: 'translateX(-50%)',
      width: '90%', maxWidth: '1200px', zIndex: 1000, display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '1rem 3rem'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
        MARINA <span className="text-gradient">ESPAÇO LUZ</span>
      </div>
      <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
        <ul style={{ display: 'flex', gap: '2.5rem', fontWeight: '500', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <li><a href="#services" className="hover-gold">Serviços</a></li>
          <li><a href="#about" className="hover-gold">Marina</a></li>
          <li><a href="#gallery" className="hover-gold">Galeria</a></li>
          <li><a href="#contact" className="hover-gold">Contato</a></li>
        </ul>
        {/* Instagram Icon */}
        <a 
          href={instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover-gold"
          style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-gold)' }}
          title={instagramUrl}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
      </nav>
      <a href="https://wa.me/5548991912929" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>Agendar</a>
    </header>
  );
};

const Hero = () => (
  <section style={{ 
    height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden', background: '#050406'
  }}>
    {/* Atmospheric Background Image */}
    <div style={{ 
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
      backgroundImage: 'url("/images/mystic_altar.png")', backgroundSize: 'cover',
      backgroundPosition: 'center', opacity: 0.3, zIndex: 0, filter: 'grayscale(20%)'
    }}></div>
    
    {/* Decorative Glows */}
    <div style={{ position: 'absolute', top: '15%', left: '5%', width: '500px', height: '500px', background: 'rgba(60, 9, 108, 0.4)', filter: 'blur(160px)', borderRadius: '50%', zIndex: 1 }}></div>
    <div style={{ position: 'absolute', bottom: '5%', right: '0%', width: '400px', height: '400px', background: 'rgba(212, 175, 55, 0.1)', filter: 'blur(140px)', borderRadius: '50%', zIndex: 1 }}></div>
    
    <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', animation: 'fadeIn 1.5s ease-out' }}>
      <span className="section-tag" style={{ opacity: 0.8 }}>Mistérios Revelados • Sabedoria Ancestral</span>
      <h1 style={{ fontSize: 'clamp(3.5rem, 9vw, 6rem)', lineHeight: '1', marginBottom: '1.5rem', fontWeight: '700' }}>
        O Destino <br /><span className="text-gradient">Em Suas Mãos</span>
      </h1>
      <p style={{ fontSize: '1.3rem', maxWidth: '850px', margin: '0 auto 3.5rem', color: 'rgba(255,255,255,0.7)', fontWeight: '300', letterSpacing: '0.5px' }}>
        Através dos oráculos sagrados e da Alta Magia, Marina Vidente desvenda os véus do futuro e restaura o equilíbrio da sua alma. 
      </p>
      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://wa.me/5548991912929" className="btn-primary">
          Consultar os Oráculos
        </a>
        <div style={{ textAlign: 'left', borderLeft: '1px solid var(--accent-gold)', paddingLeft: '1.5rem' }}>
          <div style={{ fontWeight: '700', color: '#fff', fontSize: '1.2rem' }}>R$ 200</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Sessão Privada</div>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.4 }}>
       <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>Descubra</p>
      <div style={{ width: '1px', height: '80px', background: 'linear-gradient(transparent, var(--accent-gold))', margin: '0 auto' }}></div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" style={{ padding: '12rem 0', background: 'linear-gradient(to bottom, #050406, #0e0c12)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <span className="section-tag">Caminhos da Luz</span>
        <h2 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Oráculos & <span className="text-gradient">Poder</span></h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem' }}>Domine seu destino com a orientação das ferramentas espirituais mais poderosas.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        {[
          { title: 'Jogo de Búzios', desc: 'A voz dos Orixás revelando segredos escondidos e soluções para seus dilemas terrenos.', icon: '🐚' },
          { title: 'Tarot de Marselha', desc: 'Mapas detalhados do seu destino amoroso e profissional com clareza absoluta.', icon: '🃏' },
          { title: 'Amarração Amorosa', desc: 'União espiritual definitiva para restaurar o amor e a paixão entre o casal.', icon: '❤️' },
          { title: 'Afastamento de Rivais', desc: 'Proteção contra energias intrusas e pessoas que desejam seu mal-estar.', icon: '✨' },
          { title: 'União de Anjos', desc: 'Harmonização das guardas espirituais para uma relação protegida e duradoura.', icon: '👼' },
          { title: 'Limpeza Espiritual', desc: 'Purificação profunda de ambientes e corpos contra inveja e feitiçaria.', icon: '🕯️' },
          { title: 'Abertura de Caminhos', desc: 'Rituais de Alta Magia para destravar sua vida financeira e profissional.', icon: '🌟' },
          { title: 'Borra do Café', desc: 'Visões místicas através da borra revelando eventos das próximas semanas.', icon: '☕' }
        ].map((s, i) => (
          <div key={i} className="glass" style={{ padding: '3.5rem', transition: 'var(--transition)', cursor: 'default', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '6rem', opacity: 0.03, transform: 'rotate(15deg)' }}>{s.icon}</div>
            
            <div style={{ fontSize: '3.5rem', marginBottom: '2rem', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' }}>{s.icon}</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.2rem' }}>{s.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>{s.desc}</p>
            <a href="https://wa.me/5548991912929" style={{ marginTop: '2.5rem', display: 'inline-block', color: 'var(--accent-gold)', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '1px' }}>REVELAR AGORA →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section style={{ padding: '6rem 0', background: '#0e0c12', borderY: '1px solid rgba(212, 175, 55, 0.1)' }}>
    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '4rem' }}>
       {[
         { val: '25+', label: 'Anos de Mistério' },
         { val: '5000+', label: 'Vidas Guiadas' },
         { val: '100%', label: 'Discrição Total' },
         { val: '24h', label: 'Suporte Espiritual' }
       ].map((f, i) => (
         <div key={i} style={{ textAlign: 'center', flex: '1', minWidth: '180px' }}>
           <div className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: '800' }}>{f.val}</div>
           <div style={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '3px', marginTop: '0.8rem' }}>{f.label}</div>
         </div>
       ))}
    </div>
  </section>
);

const About = () => (
  <section id="about" style={{ padding: '12rem 0', background: 'radial-gradient(circle at 70% 30%, #161a1d, #050406)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <div className="glass" style={{ width: '100%', height: '650px', overflow: 'hidden', position: 'relative', zIndex: 1, borderRadius: '30px' }}>
          <img src="/images/gypsy_tarot.png" alt="Marina Vidente - Cigana" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        {/* Frame decorator */}
        <div style={{ position: 'absolute', top: '40px', left: '-40px', width: '100%', height: '100%', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '30px', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20px', left: '20%', width: '60%', height: '2px', background: 'var(--gold-gradient)', zIndex: 2 }}></div>
      </div>
      <div>
        <span className="section-tag">O Dom Revelado</span>
        <h2 style={{ fontSize: '4rem', marginBottom: '2.5rem', lineHeight: '1.1' }}>Marina <br /><span className="text-gradient">Vidente</span></h2>
        <div style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '2.1' }}>
          <p style={{ marginBottom: '2rem' }}>
            Sensitiva por natureza e Cigana por alma, Marina dedica sua existência a ser o canal entre o mundo espiritual e a sua realidade física.
          </p>
          <p style={{ marginBottom: '2rem' }}>
            Dominando as artes da Alta Magia e os segredos milenares do povo cigano, ela oferece muito mais que uma consulta; ela oferece uma transformação completa do seu campo energético.
          </p>
          <p>
            Seja para unir corações apaixonados ou para abrir os cadeados da sua prosperidade, cada ritual é único, sagrado e realizado com a máxima seriedade.
          </p>
        </div>
        <a href="https://wa.me/5548991912929" className="btn-primary" style={{ marginTop: '4rem' }}>Agendar Momento Sagrado</a>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" style={{ padding: '12rem 0', background: '#050406' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
        <span className="section-tag">Visões do Invisível</span>
        <h2 style={{ fontSize: '4rem' }}>Galeria <span className="text-gradient">Mística</span></h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {[
          { img: "/images/gypsy_tarot.png", label: "Cigana lendo o destino" },
          { img: "/images/mystic_altar.png", label: "O Altar Sagrado" },
          { img: "/images/crystal_ball.png", label: "O Oráculo de Cristal" },
          { img: "/images/mystic_altar.png", label: "Rituais de Alta Magia" }
        ].map((item, i) => (
          <div key={i} className="glass" style={{ height: '400px', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
             <img 
              src={item.img} 
              alt={item.label} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.15)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.9))', color: '#fff', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" style={{ padding: '12rem 0', background: 'linear-gradient(to top, #050406, #161a1d)' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '7rem' }}>
        <span className="section-tag">Testemunhos</span>
        <h2 style={{ fontSize: '4rem' }}>Vozes de <span className="text-gradient">Luz</span></h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem' }}>
        {[
          { text: "Graças ao seu trabalho de amarração, consegui ter ele de volta em meu lar. Nossa filha está muito feliz. Gratidão eterna.", author: "R. Silva" },
          { text: "Fiz o trabalho mesmo sem fé e para minha surpresa meu marido passou a me procurar dias depois. Hoje ele voltou para casa regenerado.", author: "M. Oliveira" },
          { text: "Marina, venho aqui agradecer por me ajudar a reconquistar meu grande amor. Hoje somos muito felizes graças à sua magia cigana.", author: "P. Santos" }
        ].map((t, i) => (
          <div key={i} className="glass" style={{ padding: '4rem', position: 'relative', borderLeft: i % 2 === 0 ? '2px solid var(--accent-gold)' : '2px solid var(--mystic-purple)' }}>
            <div style={{ color: 'rgba(212, 175, 55, 0.1)', fontSize: '8rem', position: 'absolute', top: '1rem', left: '2rem', fontFamily: 'serif', zIndex: 0 }}>“</div>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', position: 'relative', zIndex: 1, lineHeight: '1.8' }}>"{t.text}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '50px', height: '1px', background: 'var(--gold-gradient)' }}></div>
              <div style={{ fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>{t.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" style={{ padding: '10rem 0 4rem', background: '#020202' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem', marginBottom: '10rem' }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '2.5rem', letterSpacing: '2px' }}>MARINA <span className="text-gradient">ESPAÇO LUZ</span></div>
          <p style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '1.1rem' }}>
            Revelando o futuro, protegendo o presente e restaurando o equilíbrio através da sabedoria mística milenar.
          </p>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '2.5rem', fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Localização</h4>
          <p style={{ color: 'var(--text-muted)', lineHeight: '2.2', fontSize: '1.1rem' }}>
            Rua 252 nº 425, Andorinha<br />
            Itapema - SC, 88220-000<br />
            Brasil
          </p>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '2.5rem', fontSize: '1.3rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Conecte-se</h4>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <a href="https://instagram.com/marina_vidente_" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontSize: '1.1rem' }}>
              Instagram
            </a>
            <a href="https://facebook.com/profile.php?id=100093557504524" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-main)', fontSize: '1.1rem' }}>
              Facebook
            </a>
            <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
              <a href="https://wa.me/5548991912929" style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem' }}>
                (48) 99191-2929
              </a>
              <a href="https://wa.me/5547996965020" style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '1.1rem', display: 'block' }}>
                (47) 99696-5020
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '4rem', color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
        © 2024 MARINA ESPAÇO LUZ. SOB A PROTEÇÃO DO ORIENTE.
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/5548991912929" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{
      position: 'fixed', bottom: '3rem', right: '3rem',
      width: '70px', height: '70px', borderRadius: '50%',
      background: '#25d366', color: '#fff', display: 'flex',
      alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem',
      boxShadow: '0 15px 40px rgba(37, 211, 102, 0.4)', zIndex: 1001,
      animation: 'float 4s infinite ease-in-out'
    }}
  >
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.77 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
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

    document.querySelectorAll('.glass, section h2, .section-tag, .text-gradient').forEach(el => {
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
