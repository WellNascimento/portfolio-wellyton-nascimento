import { useEffect, useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark" aria-hidden="true">WN</span>
          <span className="brand-copy">
            <strong>Wellyton Nascimento</strong>
            <span>Dados, automação e sistemas</span>
          </span>
        </a>

        <nav className="nav" aria-label="Primária">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#formacao">Formação</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"}
            type="button"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <a className="link-chip" href="mailto:wellyton1297@gmail.com">E-mail</a>
          <a className="link-chip primary" href="#projetos">Ver projetos</a>
        </div>
      </div>
    </header>
  );
}