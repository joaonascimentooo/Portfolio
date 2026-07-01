"use client";

import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export function HeroDetails() {
  return (
    <div className="hero-details">
      <motion.p
        className="lead"
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
      >
        Desenvolvedor FullStack focado e apaixonado por criar arquiteturas de
        software robustas e soluções escaláveis. Com forte especialização no
        ecossistema Java e Spring Boot, construo desde APIs e microsserviços
        seguros até interfaces dinâmicas utilizando React e Next.js.
      </motion.p>
      <motion.div
        className="hero-actions"
        aria-label="Links principais"
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="primary-action" href="#projetos">
          Ver projetos
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <a className="icon-action" href="https://github.com/" aria-label="GitHub">
          <Github size={20} aria-hidden="true" />
        </a>
        <a className="icon-action" href="https://www.linkedin.com/" aria-label="LinkedIn">
          <Linkedin size={20} aria-hidden="true" />
        </a>
      </motion.div>
    </div>
  );
}
