export default function Hero() {
  return (
    <section id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Análise de Dados | Automação | Indicadores</span>
          <h1>Transformo dados e rotinas manuais em soluções mais rápidas, claras e úteis.</h1>
          <p>
            Sou Wellyton Nascimento, profissional de TI com foco em análise de dados,
            automação de processos e criação de dashboards para apoiar a tomada de decisão.
          </p>

          <div className="hero-stack">
            <span className="tag">Python</span>
            <span className="tag">SQL</span>
            <span className="tag">Pandas</span>
            <span className="tag">Power BI</span>
            <span className="tag">Flask</span>
            <span className="tag">Streamlit</span>
          </div>
        </div>

        <aside className="hero-side">
          <article className="profile-card panel">
            <div className="profile-top">
              <div className="avatar">WN</div>
              <div>
                <strong>Guarulhos - SP</strong>
                <p className="availability">Disponibilidade imediata</p>
              </div>
            </div>

            <div className="profile-links">
              <a href="mailto:wellyton1297@gmail.com">
                <span>
                  <small>E-mail</small>
                  <strong>wellyton1297@gmail.com</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>

              <a href="https://linkedin.com/in/wellynascimento/" target="_blank" rel="noopener noreferrer">
                <span>
                  <small>LinkedIn</small>
                  <strong>Wellyton Nascimento</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>

              <a href="https://github.com/WellNascimento" target="_blank" rel="noopener noreferrer">
                <span>
                  <small>GitHub</small>
                  <strong>github.com/WellNascimento</strong>
                </span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}