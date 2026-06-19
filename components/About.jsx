export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="section-head">
          <h2>Sobre</h2>
          <p>
            Minha trajetória une suporte técnico, desenvolvimento e análise de dados,
            com foco em soluções práticas e bem organizadas.
          </p>
        </div>

        <div className="about-grid">
          <article className="panel">
            <h3>Como trabalho</h3>
            <p>
              Gosto de soluções que reduzem trabalho manual, organizam processos e tornam
              os indicadores mais claros.
            </p>
          </article>

          <article className="panel">
            <h3>Onde gero valor</h3>
            <p>
              Em automação de rotinas, consolidação de dados, dashboards e integração entre
              análise técnica e necessidade de negócio.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}