import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

  <header class="header">
    <div class="container header-inner">
      <a class="brand" href="https://linkedin.com/in/wellynascimento/" target="_blank" rel="noopener noreferrer" aria-label="Abrir LinkedIn de Wellyton Nascimento">
        <span class="brand-mark" aria-hidden="true">WN</span>
        <span class="brand-copy">
          <strong>Wellyton Nascimento</strong>
          <span>Dados, automação e sistemas</span>
        </span>
      </a>

      <nav class="nav" aria-label="Primária">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#formacao">Formação</a>
        <a href="#contato">Contato</a>
      </nav>

      <div class="header-actions">
        <button class="theme-toggle" type="button" aria-label="Alternar tema">☀️</button>
        <a class="link-chip" href="mailto:wellyton1297@gmail.com">E-mail</a>
        <a class="link-chip primary" href="#projetos">Ver projetos</a>
      </div>
    </div>
  </header>

  <main id="conteudo">
    <section id="inicio">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow">Análise de Dados | Automação | Indicadores</span>
          <h1>Transformo dados e rotinas manuais em soluções mais rápidas, claras e úteis.</h1>
          <p>Sou Wellyton Nascimento, profissional de TI com foco em análise de dados, automação de processos e criação de dashboards para apoiar a tomada de decisão.</p>

          <div class="hero-stack">
            <span class="tag">Python</span>
            <span class="tag">SQL</span>
            <span class="tag">Pandas</span>
            <span class="tag">Power BI</span>
            <span class="tag">Flask</span>
            <span class="tag">Streamlit</span>
          </div>
        </div>

        <aside class="hero-side">
          <article class="profile-card panel">
            <div class="profile-top">
              <div class="avatar">WN</div>
              <div>
                <strong>Guarulhos - SP</strong>
                <p class="availability">Disponibilidade imediata</p>
              </div>
            </div>

            <div class="profile-links">
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

    <section id="sobre">
      <div class="container">
        <div class="section-head">
          <h2>Sobre</h2>
          <p>Minha trajetória une suporte técnico, desenvolvimento e análise de dados, com foco em soluções práticas e bem organizadas.</p>
        </div>

        <div class="about-grid">
          <article class="panel">
            <h3>Como trabalho</h3>
            <p>Gosto de soluções que reduzem trabalho manual, organizam processos e tornam os indicadores mais claros.</p>
          </article>

          <article class="panel">
            <h3>Onde gero valor</h3>
            <p>Em automação de rotinas, consolidação de dados, dashboards e integração entre análise técnica e necessidade de negócio.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="projetos">
      <div class="container">
        <div class="section-head">
          <h2>Projetos em destaque</h2>
          <p>Projetos que mostram meu foco em dados, automação e entrega prática.</p>
        </div>

        <div class="projects-grid">
          <article class="project-card">
            <div class="project-copy">
              <h3>ETL Selic e Dólar Dashboard</h3>
              <p>Pipeline em Python com dados públicos do Banco Central, tratamento com Pandas e dashboard em Streamlit para análise de indicadores.</p>
              <div class="tag-row">
                <span class="tag">Python</span><span class="tag">Pandas</span><span class="tag">Streamlit</span><span class="tag">Plotly</span><span class="tag">ETL</span><span class="tag">API</span>
              </div>
              <div class="project-links"><a class="link-chip primary" href="https://github.com/WellNascimento/etl-selic-dollar-dashboard" target="_blank" rel="noopener noreferrer">Ver repositório</a></div>
            </div>
          </article>

          <article class="project-card">
            <div class="project-copy">
              <h3>Dashboards e relatórios automatizados</h3>
              <p>Soluções voltadas à redução de esforço manual e geração automática de KPIs, com apoio à decisão em ambiente operacional.</p>
              <div class="tag-row">
                <span class="tag">SQL</span><span class="tag">Python</span><span class="tag">Excel VBA</span><span class="tag">Openpyxl</span><span class="tag">Power BI</span><span class="tag">Flask</span>
              </div>
              <div class="project-links"><a class="link-chip" href="mailto:wellyton1297@gmail.com">Solicitar detalhes</a></div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="habilidades">
      <div class="container">
        <div class="section-head">
          <h2>Habilidades</h2>
          <p>Base técnica híbrida entre infraestrutura, desenvolvimento e dados.</p>
        </div>

        <div class="skills-grid">
          <article class="mini-card">
            <h3>Automação e dados</h3>
            <div class="stack-list"><span class="tag">Python</span><span class="tag">SQL</span><span class="tag">Pandas</span><span class="tag">Power BI</span><span class="tag">Flask</span><span class="tag">Openpyxl</span><span class="tag">APIs REST</span><span class="tag">Relatórios</span></div>
          </article>

          <article class="mini-card">
            <h3>Desenvolvimento</h3>
            <div class="stack-list"><span class="tag">C#/.NET</span><span class="tag">PHP</span><span class="tag">HTML5</span><span class="tag">CSS3</span><span class="tag">JavaScript</span><span class="tag">SQL Server</span><span class="tag">MySQL</span></div>
          </article>

          <article class="mini-card">
            <h3>Suporte e operação</h3>
            <div class="stack-list"><span class="tag">Linux</span><span class="tag">Windows Server</span><span class="tag">Redes TCP/IP</span><span class="tag">CISCO</span><span class="tag">Troubleshooting</span><span class="tag">Hardware</span><span class="tag">Documentação</span></div>
          </article>
        </div>
      </div>
    </section>

    <section id="formacao">
      <div class="container">
        <div class="section-head">
          <h2>Formação e certificações</h2>
          <p>Formação técnica e superior em tecnologia, com cursos complementares voltados a redes e desenvolvimento.</p>
        </div>

        <div class="education-grid">
          <article class="panel">
            <h3>Formação acadêmica</h3>
            <ul class="cert-list">
              <li><strong>Tecnólogo em Análise e Desenvolvimento de Sistemas</strong><br>FATEC Guarulhos — Ago/2021 a Dez/2025</li>
              <li><strong>Técnico em Administração</strong><br>ETEC Guarulhos — Ago/2021 a Dez/2022</li>
              <li><strong>Inglês</strong><br>Intermediário / Avançado com leitura técnica avançada</li>
            </ul>
          </article>
          <article class="panel">
            <h3>Certificações e cursos</h3>
            <ul class="cert-list">
              <li>Networking Basics</li>
              <li>Network Addressing and Basic Troubleshooting</li>
              <li>Network Support and Security</li>
              <li>Cursos DIO em Linux, .NET, agilidade, LGPD e desenvolvimento de software</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section id="contato">
      <div class="container">
        <div class="contact-panel">
          <div>
            <h2>Vamos conversar</h2>
            <p>Estou disponível para oportunidades em análise de dados, BI, indicadores, automação e funções técnicas que unam dados, operação e melhoria contínua.</p>
          </div>
          <div class="contact-actions">
            <a class="link-chip primary" href="mailto:wellyton1297@gmail.com">Enviar e-mail</a>
            <a class="link-chip" href="https://linkedin.com/in/wellynascimento/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a class="link-chip" href="https://github.com/WellNascimento" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer-bar">
    <div class="container footer-bar-inner">
      <p>© 2026 Wellyton Nascimento. Todos os direitos reservados.</p>
      <nav class="footer-links" aria-label="Rodapé">
        <a href="#sobre">Sobre</a>
      </nav>
    </div>
  </footer>
`;

const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let theme = storedTheme || (prefersDark ? 'dark' : 'light');

function updateTheme() {
  root.setAttribute('data-theme', theme);
  toggle.textContent = theme === 'light' ? '🌙' : '☀️';
  toggle.setAttribute('aria-label', theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro');
  localStorage.setItem('theme', theme);
}

toggle.addEventListener('click', () => {
  theme = theme === 'light' ? 'dark' : 'light';
  updateTheme();
});

updateTheme();