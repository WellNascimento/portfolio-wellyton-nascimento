export default function Contact() {
  return (
    <section id="contato">
      <div className="container">
        <div className="contact-panel">
          <div>
            <h2>Vamos conversar</h2>
            <p>
              Estou disponível para oportunidades em análise de dados, BI, indicadores,
              automação e funções técnicas que unam dados, operação e melhoria contínua.
            </p>
          </div>

          <div className="contact-actions">
            <a className="link-chip primary" href="mailto:wellyton1297@gmail.com">
              Enviar e-mail
            </a>
            <a
              className="link-chip"
              href="https://linkedin.com/in/wellynascimento/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="link-chip"
              href="https://github.com/WellNascimento"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}