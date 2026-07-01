"use client";

import type { PointerEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const spring = {
  stiffness: 130,
  damping: 24,
  mass: 0.35,
};

const titleReveal = {
  hidden: {
    opacity: 0,
    y: 42,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export function HeroArt() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, spring);
  const smoothY = useSpring(pointerY, spring);

  const portraitX = useTransform(smoothX, (value) => value * 24);
  const portraitY = useTransform(smoothY, (value) => 24 + value * 18);
  const glowX = useTransform(smoothX, (value) => value * 42);
  const glowY = useTransform(smoothY, (value) => value * 32);
  const rotateX = useTransform(smoothY, (value) => value * -7);
  const rotateY = useTransform(smoothX, (value) => value * 8);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    pointerX.set(x);
    pointerY.set(y);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      className="hero-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <h1 className="hero-title-back" aria-label="Oi, sou o João Nascimento">
        <span className="title-line title-line-top">
          <motion.span
            className="title-copy"
            variants={titleReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            Oi, sou o
          </motion.span>
        </span>
        <span className="title-line title-line-bottom">
          <motion.span
            className="title-copy"
            variants={titleReveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            João Nascimento
          </motion.span>
        </span>
      </h1>
      <motion.div
        className="portrait-wrap"
        aria-label="Avatar em desenho de João Nascimento"
        style={{ x: portraitX, y: portraitY, rotateX, rotateY }}
      >
        <motion.div className="portrait-glow" style={{ x: glowX, y: glowY }} />
        <Image
          src="/joao-avatar.png?v=transparent"
          alt="Avatar em desenho de João Nascimento"
          width={1080}
          height={1350}
          className="portrait"
          priority
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
}
