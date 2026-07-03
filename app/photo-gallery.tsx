"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

const pageReveal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
      staggerChildren: 0.1,
    },
  },
};

const revealUp = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: easeOut,
    },
  },
};

const photoReveal = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.985,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.68,
      ease: easeOut,
    },
  },
};

export type GalleryPhoto = {
  src: string;
  alt: string;
  title: string;
  detail: string;
  featured?: boolean;
  wide?: boolean;
};

type PhotoGalleryProps = {
  eyebrow: string;
  title: string;
  lead: string;
  countLabel: string;
  ariaLabel: string;
  photos: GalleryPhoto[];
};

export function PhotoGallery({
  eyebrow,
  title,
  lead,
  countLabel,
  ariaLabel,
  photos,
}: PhotoGalleryProps) {
  const [coverPhoto, ...galleryPhotos] = photos;

  return (
    <motion.main
      className="site-shell gallery-page"
      variants={pageReveal}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="gallery-header" variants={revealUp}>
        <Link className="back-link" href="/#experiencias">
          <ArrowLeft size={17} aria-hidden="true" />
          Voltar
        </Link>
        <div className="gallery-hero">
          <div className="gallery-copy">
            <div className="gallery-title-wrap">
              <p className="eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
            </div>
            <div className="gallery-intro">
              <p className="gallery-lead">{lead}</p>
              <div className="gallery-note" aria-label="Resumo da galeria">
                <Sparkles size={17} aria-hidden="true" />
                <span>{countLabel}</span>
              </div>
            </div>
          </div>
          <motion.figure
            className="gallery-cover"
            variants={photoReveal}
            whileHover={{ y: -6, scale: 1.006 }}
            transition={{ duration: 0.24, ease: easeOut }}
          >
            <Image
              src={coverPhoto.src}
              alt={coverPhoto.alt}
              width={1180}
              height={720}
              sizes="(max-width: 860px) 100vw, 560px"
              priority
            />
            <figcaption>
              <strong>{coverPhoto.title}</strong>
              <span>{coverPhoto.detail}</span>
            </figcaption>
          </motion.figure>
        </div>
      </motion.header>

      <motion.section
        className="photo-grid"
        aria-label={ariaLabel}
        variants={pageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {galleryPhotos.map((photo) => (
          <motion.figure
            className={[
              "photo-card",
              photo.featured ? "photo-card-featured" : "",
              photo.wide ? "photo-card-wide" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            key={photo.src}
            variants={photoReveal}
            whileHover={{ y: -6, scale: 1.006 }}
            transition={{ duration: 0.24, ease: easeOut }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.featured ? 1180 : 620}
              height={photo.featured ? 720 : 700}
              sizes={
                photo.featured || photo.wide
                  ? "(max-width: 860px) 100vw, 1180px"
                  : "(max-width: 860px) 100vw, 580px"
              }
            />
            <figcaption>
              <strong>{photo.title}</strong>
              <span>{photo.detail}</span>
            </figcaption>
          </motion.figure>
        ))}
      </motion.section>
    </motion.main>
  );
}
