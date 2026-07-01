import { ArrowUpRight, Mail } from "lucide-react";
import { HeroDetails } from "./hero-details";
import { HeroArt } from "./hero-art";
import { Navbar } from "./navbar";

const experiences = [
  {
    role: "Backend Architect & Full Stack Developer",
    context: "Centra | Marketplace | Jan 2025 - Abr 2026",
    description:
      "Arquitetei e desenvolvi o ecossistema de microsserviços de um marketplace, sustentando uma base de 150 usuários ativos. Liderei decisões técnicas de ponta a ponta, da modelagem de dados ao deploy em cloud, com Clean Architecture, SOLID e integração com Google Gemini.",
    tags: ["Microsserviços", "Spring Boot", "Clean Architecture", "Google Gemini"],
  },
  {
    role: "Desenvolvedor Full Stack & Instrutor Técnico",
    context: "CEST | Centro Universitário Santa Terezinha | Mai 2023 - Jan 2026",
    description:
      "Desenvolvi aplicações web com Spring MVC, Hibernate e APIs REST para gestão institucional e automação de processos internos. Também ministrei minicursos de Java e Spring Boot, fortalecendo minha comunicação técnica e liderança em ambiente acadêmico.",
    tags: ["Java", "Spring MVC", "Hibernate", "Instrutoria"],
  },
  {
    role: "Desenvolvedor Backend Java",
    context: "StarColors | Solução de IA | Mar 2024 - Ago 2024",
    description:
      "Desenvolvi e sustentei a API core de uma solução de Inteligência Artificial para 50 usuários ativos, com foco em segurança, autenticação JWT, Spring Security, modelagem relacional e integração com AWS EC2 e S3.",
    tags: ["Java", "Spring Security", "JWT", "AWS"],
  },
  {
    role: "Liderança Acadêmica em Inovação",
    context: "CEST | Escritório Escola e Grupo Inova",
    description:
      "Atuei em iniciativas acadêmicas ligadas à inovação, colaboração e desenvolvimento profissional, conectando visão técnica, organização de projetos e protagonismo dentro da comunidade universitária.",
    tags: ["Liderança", "Inovação", "Comunicação", "Gestão"],
  },
];

const projects = [
  {
    title: "Organizze",
    description:
      "Aplicação web de finanças pessoais feita para responder uma pergunta simples: posso comprar isso agora sem bagunçar meu mês? Combina salário, vale-alimentação, despesas, compras planejadas e parcelamentos em uma visão mensal clara.",
    tags: ["React", "Next.js", "Vercel"],
    links: [
      {
        label: "Ver app",
        href: "https://organizze-seven.vercel.app",
      },
      {
        label: "GitHub",
        href: "https://github.com/joaonascimentooo/Organizze",
      },
    ],
  },
  {
    title: "Salutis",
    description:
      "Backend profissional de saúde desenvolvido com Spring Boot 4.0.6 e Java 21, focado em segurança, escalabilidade e boas práticas.",
    tags: ["Java 21", "Spring Boot", "Backend"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/joaonascimentooo/Salutis",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Navbar />
      </header>

      <section id="inicio" className="hero">
        <HeroArt />
        <HeroDetails />
      </section>

      <section id="projetos" className="section">
        <div className="section-heading">
          <p className="eyebrow">Projetos</p>
          <h2>Projetos já no ar.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div>
                <div className="project-links" aria-label={`Links do projeto ${project.title}`}>
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <div className="tag-row" aria-label="Tecnologias">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencias" className="section">
        <div className="section-heading">
          <p className="eyebrow">Experiências</p>
          <h2>Trajetória técnica e liderança.</h2>
        </div>
        <div className="experience-grid">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.role}>
              <p className="experience-context">{experience.context}</p>
              <h3>{experience.role}</h3>
              <p>{experience.description}</p>
              <div className="tag-row" aria-label="Competências">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contato" className="footer">
        <div>
          <p className="eyebrow">Contato</p>
          <h2>Vamos criar algo?</h2>
        </div>
        <a className="primary-action" href="mailto:joao@email.com">
          <Mail size={18} aria-hidden="true" />
          Enviar email
        </a>
      </footer>
    </main>
  );
}
