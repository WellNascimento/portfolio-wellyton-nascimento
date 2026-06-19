const projects = [
  {
    title: "ETL Selic e Dólar Dashboard",
    text: "Pipeline em Python com dados públicos do Banco Central, tratamento com Pandas e dashboard em Streamlit para análise de indicadores.",
    tags: ["Python", "Pandas", "Streamlit", "Plotly", "ETL", "API"],
    link: "https://github.com/WellNascimento/etl-selic-dollar-dashboard",
  },
  {
    title: "Dashboards e relatórios automatizados",
    text: "Soluções voltadas à redução de esforço manual e geração automática de KPIs, com apoio à decisão em ambiente operacional.",
    tags: ["SQL", "Python", "Excel VBA", "Openpyxl", "Power BI", "Flask"],
    link: "mailto:wellyton1297@gmail.com",
  },
];

export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <div className="section-head">
          <h2>Projetos em destaque</h2>
          <p>Projetos que mostram meu foco em dados, automação e entrega prática.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.text}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a className="link-chip primary" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    Ver mais
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}