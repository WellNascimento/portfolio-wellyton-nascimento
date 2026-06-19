const skillGroups = [
  {
    title: "Automação e dados",
    items: ["Python", "SQL", "Pandas", "Power BI", "Flask", "Openpyxl", "APIs REST", "Relatórios"],
  },
  {
    title: "Desenvolvimento",
    items: ["C#/.NET", "PHP", "HTML5", "CSS3", "JavaScript", "SQL Server", "MySQL"],
  },
  {
    title: "Suporte e operação",
    items: ["Linux", "Windows Server", "Redes TCP/IP", "CISCO", "Troubleshooting", "Hardware", "Documentação"],
  },
];

export default function Skills() {
  return (
    <section id="habilidades">
      <div className="container">
        <div className="section-head">
          <h2>Habilidades</h2>
          <p>
            Base técnica híbrida entre infraestrutura, desenvolvimento e dados.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="mini-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="stack-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}