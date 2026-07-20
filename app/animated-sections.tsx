"use client";

import { ArrowUpRight, Images, Mail } from "lucide-react";
import { motion } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 34,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: easeOut,
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const headingReveal = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.62,
      ease: easeOut,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.58,
      ease: easeOut,
    },
  },
};

const tagReveal = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: easeOut,
    },
  },
};

const experiences = [
  {
    role: "Desenvolvedor Java Júnior",
    company: "ília",
    scope: "Desenvolvimento backend",
    period: "Jul 2026 – Atual",
    description:
      "Atuação no desenvolvimento e manutenção de soluções backend em Java e Spring Boot, participando de revisões de código, evolução de APIs, correção de problemas e colaboração com equipes multidisciplinares em ambiente corporativo.",
    tags: ["Java", "Spring Boot", "APIs", "Code Review"],
  },
  {
    role: "Arquiteto Backend e Desenvolvedor Full Stack",
    company: "Centra",
    scope: "Marketplace",
    period: "Jan 2025 - Abr 2026",
    description:
      "Arquitetei e desenvolvi o ecossistema de microsserviços de um marketplace, sustentando uma base de 150 usuários ativos. Liderei decisões técnicas de ponta a ponta, da modelagem de dados ao deploy em cloud, com Clean Architecture, SOLID e integração com Google Gemini.",
    tags: ["Microsserviços", "Spring Boot", "Clean Architecture", "Google Gemini"],
  },
  {
    role: "Desenvolvedor Full Stack & Instrutor Técnico",
    company: "CEST",
    scope: "Centro Universitário Santa Terezinha",
    period: "Mai 2023 - Jan 2026",
    description:
      "Desenvolvi aplicações web com Spring MVC, Hibernate e APIs REST para gestão institucional e automação de processos internos. Também ministrei minicursos de Java e Spring Boot, fortalecendo minha comunicação técnica e liderança em ambiente acadêmico.",
    tags: ["Java", "Spring MVC", "Hibernate", "Instrutoria"],
    photosHref: "/galeria-cest",
  },
  {
    role: "Desenvolvedor Backend Java",
    company: "StarColors",
    scope: "Solução de IA",
    period: "Mar 2024 - Ago 2024",
    description:
      "Desenvolvi e sustentei a API core de uma solução de Inteligência Artificial para 50 usuários ativos, com foco em segurança, autenticação JWT, Spring Security, modelagem relacional e integração com AWS EC2 e S3.",
    tags: ["Java", "Spring Security", "JWT", "AWS"],
  },
  {
    role: "Liderança Acadêmica em Inovação",
    company: "CEST",
    scope: "Presidente do Grupo Inova e Vice Presidente da Lumina",
    period: "Iniciativas acadêmicas",
    description:
      "Liderei frentes acadêmicas de inovação e tecnologia, organizando iniciativas, alinhando equipes e representando grupos estudantis em ações institucionais. Como presidente do Grupo Inova e vice presidente da Lumina, conectei visão técnica, comunicação e gestão para impulsionar projetos dentro da comunidade universitária.",
    tags: ["Liderança", "Inovação", "Comunicação", "Gestão"],
    photosHref: "/galeria",
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

export function AnimatedSections() {
  return (
    <>
      <motion.section
        id="projetos"
        className="section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.div className="section-heading" variants={headingReveal}>
          <p className="eyebrow">Projetos</p>
          <h2>Projetos em destaque.</h2>
        </motion.div>
        <motion.div className="project-grid" variants={sectionReveal}>
          {projects.map((project) => (
            <motion.article
              className="project-card"
              key={project.title}
              variants={cardReveal}
              whileHover={{ y: -7, scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              transition={{ duration: 0.22, ease: easeOut }}
            >
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div>
                <div className="project-links" aria-label={`Links do projeto ${project.title}`}>
                  {project.links.map((link) => (
                    <motion.a
                      href={link.href}
                      key={link.href}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {link.label}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
                <motion.div className="tag-row" aria-label="Tecnologias" variants={sectionReveal}>
                  {project.tags.map((tag) => (
                    <motion.span key={tag} variants={tagReveal}>
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="experiencias"
        className="section"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
      >
        <motion.div className="section-heading" variants={headingReveal}>
          <p className="eyebrow">Experiências</p>
          <h2>Trajetória técnica e liderança.</h2>
        </motion.div>
        <motion.div className="experience-grid" variants={sectionReveal}>
          {experiences.map((experience) => (
            <motion.article
              className="experience-card"
              key={experience.role}
              variants={cardReveal}
              whileHover={{ y: -7, scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              transition={{ duration: 0.22, ease: easeOut }}
            >
              <motion.div className="experience-context" variants={tagReveal}>
                <strong>{experience.company}</strong>
                <span>{experience.scope}</span>
                <time>{experience.period}</time>
              </motion.div>
              <div>
                <h3>{experience.role}</h3>
                <p>{experience.description}</p>
              </div>
              {experience.photosHref ? (
                <motion.a
                  className="photo-link"
                  href={experience.photosHref}
                  variants={tagReveal}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Images size={16} aria-hidden="true" />
                  Ver fotos
                  <ArrowUpRight size={16} aria-hidden="true" />
                </motion.a>
              ) : null}
              <motion.div className="tag-row" aria-label="Competências" variants={sectionReveal}>
                {experience.tags.map((tag) => (
                  <motion.span key={tag} variants={tagReveal}>
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.footer
        id="contato"
        className="footer"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.42 }}
      >
        <motion.div variants={headingReveal}>
          <p className="eyebrow">Contato</p>
          <h2>Vamos criar algo?</h2>
        </motion.div>
        <motion.a
          className="primary-action"
          href="mailto:joaonascimento197@gmail.com"
          variants={cardReveal}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Mail size={18} aria-hidden="true" />
          Enviar email
        </motion.a>
      </motion.footer>
    </>
  );
}
