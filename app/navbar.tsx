"use client";

import { motion } from "motion/react";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#contato", label: "Contato" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const navContainer = {
  hidden: {
    opacity: 0,
    y: -14,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      delay: 0.08,
      ease: easeOut,
      staggerChildren: 0.07,
      delayChildren: 0.18,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
};

export function Navbar() {
  return (
    <motion.nav
      className="nav-links"
      aria-label="Navegação principal"
      variants={navContainer}
      initial="hidden"
      animate="visible"
    >
      {links.map((link) => (
        <motion.a href={link.href} key={link.href} variants={navItem}>
          {link.label}
        </motion.a>
      ))}
    </motion.nav>
  );
}
