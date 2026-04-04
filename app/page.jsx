import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <main style={{ background: '#0a0906', color: '#f5f0e8' }}>

      {/* ── NAVBAR ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#0a0906dd', backdropFilter: 'blur(16px)', borderBottom: '1px solid #2a2418', height: '68px', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#d97706' }}>Barbearia em barueri LOS PATRONES</div>
          <div style={{ display: 'flex', gap: '32px', fontSize: '0.9rem', fontWeight: 500 }}>
            <a href="#servicos" style={{ color: '#a39070', transition: 'color .15s' }}>Serviços</a>
            <a href="#sobre" style={{ color: '#a39070', transition: 'color .15s' }}>Sobre</a>
            <a href="#avaliacoes" style={{ color: '#a39070', transition: 'color .15s' }}>Avaliações</a>
          </div>
          <a href="https://wa.me/555511950580026?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem', background: '#25d366', color: '#fff' }}>WhatsApp</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '68px' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0906ee 0%, #0a090699 50%, #0a090677 100%)' }} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1120px', margin: '0 auto', padding: '60px 24px' }}>
          <span className="section-label">barbearia • Barueri</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '24px', color: '#f5f0e8' }}>
            Barbearia em barueri LOS PATRONES
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', color: '#a39070', maxWidth: '580px', marginBottom: '40px', lineHeight: 1.7 }}>
            barbearia de qualidade em Barueri. Atendimento rápido e profissional.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://wa.me/555511950580026?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-primary">Agendar Agora →</a>
            <a href="#servicos" className="btn-outline">Nossos Serviços</a>
          </div>
          <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#d97706', fontSize: '1.4rem' }}>★★★★★</span>
            <span style={{ color: '#a39070', fontSize: '0.95rem' }}>5 no Google</span>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#111009', borderTop: '1px solid #2a2418', borderBottom: '1px solid #2a2418' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '48px 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#d97706', lineHeight: 1 }}>8+</div>
          <div style={{ fontSize: '0.875rem', color: '#a39070', marginTop: '6px' }}>Anos de experiência</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#d97706', lineHeight: 1 }}>5k+</div>
          <div style={{ fontSize: '0.875rem', color: '#a39070', marginTop: '6px' }}>Clientes mensais</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#d97706', lineHeight: 1 }}>4.9★</div>
          <div style={{ fontSize: '0.875rem', color: '#a39070', marginTop: '6px' }}>Google</div>
        </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">O que fazemos</span>
            <h2 className="section-title">Nossos Serviços</h2>
            <p style={{ color: '#a39070', maxWidth: '520px', margin: '0 auto', fontSize: '1.05rem' }}>
              Qualidade e excelência em cada atendimento. Confira tudo que oferecemos.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>✂️</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '8px' }}>Corte Masculino</h3>
          <p style={{ fontSize: '0.9rem', color: '#a39070', lineHeight: 1.6 }}>Estilo personalizado</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🪒</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '8px' }}>Barba Completa</h3>
          <p style={{ fontSize: '0.9rem', color: '#a39070', lineHeight: 1.6 }}>Navalha e acabamento</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💈</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '8px' }}>Corte + Barba</h3>
          <p style={{ fontSize: '0.9rem', color: '#a39070', lineHeight: 1.6 }}>Pacote completo</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🎨</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '8px' }}>Degradê</h3>
          <p style={{ fontSize: '0.9rem', color: '#a39070', lineHeight: 1.6 }}>Fade perfeito</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>💆</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '8px' }}>Pigmentação</h3>
          <p style={{ fontSize: '0.9rem', color: '#a39070', lineHeight: 1.6 }}>Cobertura de fios brancos</p>
        </div>
        <div className="card">
          <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🌿</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f5f0e8', marginBottom: '8px' }}>Tratamento Capilar</h3>
          <p style={{ fontSize: '0.9rem', color: '#a39070', lineHeight: 1.6 }}>Hidratação e nutrição</p>
        </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE + IMAGEM ── */}
      <section id="sobre" style={{ background: '#111009', padding: '96px 24px', borderTop: '1px solid #2a2418' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="grid-2-responsive">
          <div>
            <span className="section-label">Nossa história</span>
            <h2 className="section-title">Por que escolher a Barbearia em barueri LOS PATRONES?</h2>
            <p style={{ color: '#a39070', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '28px' }}>
              Referência em barbearia em Barueri, a <strong style={{ color: '#f5f0e8' }}>Barbearia em barueri LOS PATRONES</strong> se destaca pela qualidade no atendimento, 
              profissionais especializados e compromisso com a satisfação total dos nossos clientes.
               Com avaliação 5★ no Google, somos a escolha certa para quem busca resultado de verdade.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Profissionais certificados e experientes',
                'Atendimento rápido e personalizado',
                'Garantia em todos os serviços',
                'Preços justos e transparentes',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#d9770622', border: '1px solid #d9770655', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ color: '#a39070', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '36px' }}>
              <a href="https://wa.me/555511950580026?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-primary">Agendar Agora →</a>
            </div>
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', height: '480px', position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=80&auto=format&fit=crop" alt="Barbearia em barueri LOS PATRONES" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a090688, transparent)' }} />
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES ── */}
      <section id="avaliacoes" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label">O que nossos clientes dizem</span>
            <h2 className="section-title">Avaliações Reais</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="grid-responsive">
        <div className="card">
          <div style={{ color: '#d97706', fontSize: '1.1rem', marginBottom: '12px' }}>★★★★★</div>
          <p style={{ color: '#a39070', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>"Melhor barbearia que já fui! Atendimento excelente, rápido e preço justo. Super recomendo."</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#d9770622', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>👨</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#f5f0e8' }}>Carlos M.</div>
              <div style={{ fontSize: '0.75rem', color: '#a39070' }}>Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ color: '#d97706', fontSize: '1.1rem', marginBottom: '12px' }}>★★★★★</div>
          <p style={{ color: '#a39070', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>"Muito profissional e atencioso. Resolveram tudo na hora. Voltarei sempre com certeza!"</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#d9770622', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>👩</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#f5f0e8' }}>Ana L.</div>
              <div style={{ fontSize: '0.75rem', color: '#a39070' }}>Cliente verificado</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div style={{ color: '#d97706', fontSize: '1.1rem', marginBottom: '12px' }}>★★★★★</div>
          <p style={{ color: '#a39070', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>"5★ Serviço de primeira qualidade. Equipe qualificada e ambiente organizado. Recomendo a todos!"</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#d9770622', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🧑</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#f5f0e8' }}>Roberto F.</div>
              <div style={{ fontSize: '0.75rem', color: '#a39070' }}>Cliente verificado</div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ background: '#111009', borderTop: '1px solid #2a2418', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.12 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <span className="section-label">Pronto para começar?</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '20px', color: '#f5f0e8' }}>
            Fale com a <span style={{ color: '#d97706' }}>Barbearia em barueri LOS PATRONES</span> agora mesmo
          </h2>
          <p style={{ color: '#a39070', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.7 }}>
            Atendimento rápido, profissional e sem complicação. Estamos em Barueri para te atender.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://wa.me/555511950580026?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" className="btn-primary" style={{ fontSize: '1.1rem', padding: '18px 40px' }}>Agendar Agora →</a>
            
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: '#0a0906', borderTop: '1px solid #2a2418', padding: '48px 24px 32px' }}>
        <div style={{ maxWidth: '1120px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid #2a2418' }} className="grid-responsive">
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#d97706', marginBottom: '12px' }}>Barbearia em barueri LOS PATRONES</div>
              <p style={{ color: '#a39070', fontSize: '0.9rem', lineHeight: 1.7 }}>
                barbearia em Barueri. Qualidade e confiança em cada atendimento.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '16px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>Navegação</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Início', 'Serviços', 'Sobre', 'Avaliações', 'Contato'].map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#a39070', fontSize: '0.9rem', transition: 'color .15s' }}>{item}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: '#f5f0e8', marginBottom: '16px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>Contato</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://wa.me/555511950580026?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações." target="_blank" style={{ color: '#a39070', fontSize: '0.9rem' }}>📱 5511950580026</a>
                <div style={{ color: '#a39070', fontSize: '0.9rem' }}>📍 Barueri</div>
                
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: '#a39070', fontSize: '0.85rem' }}>© 2026 Barbearia em barueri LOS PATRONES. Todos os direitos reservados.</p>
            <p style={{ color: '#a39070', fontSize: '0.8rem', opacity: .5 }}>Site criado por Lead Machine</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </main>
  );
}
