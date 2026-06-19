const education = [
  {
    title: "Formação acadêmica",
    items: [
      "Análise e Desenvolvimento de Sistemas — FATEC Guarulhos",
      "Administração — ETEC Guarulhos",
      "Inglês intermediário/avançado para leitura técnica",
    ],
  },
  {
    title: "Certificações e cursos",
    items: [
      "Networking Basics",
      "Network Addressing and Basic Troubleshooting",
      "Network Support and Security",
      "Cursos DIO em Linux, .NET, agilidade, LGPD e desenvolvimento de software",
    ],
  },
];

export default function Education() {
  return (
    <section id="formacao">
      <div className="container">
        <div className="section-head">
          <h2>Formação e certificações</h2>
          <p>
            Formação técnica e superior em tecnologia, com cursos complementares voltados a redes e desenvolvimento.
          </p>
        </div>

        <div className="education-grid">
          {education.map((block) => (
            <article className="panel" key={block.title}>
              <h3>{block.title}</h3>
              <ul className="cert-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}