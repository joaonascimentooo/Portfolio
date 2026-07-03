import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const photos = [
  {
    src: "/foto1.jpg",
    alt: "Registro de atividade acadêmica ligada ao Grupo Inova e Lumina",
  },
  {
    src: "/foto2.jpg",
    alt: "Registro de iniciativa realizada no Grupo Inova",
  },
  {
    src: "/foto3.jpg",
    alt: "Registro de ação acadêmica da Lumina",
  },
  {
    src: "/foto4.jpg",
    alt: "Registro de liderança em evento acadêmico",
  },
  {
    src: "/foto5.jpg",
    alt: "Registro de projeto desenvolvido com grupos estudantis",
  },
];

export default function GalleryPage() {
  return (
    <main className="site-shell gallery-page">
      <header className="gallery-header">
        <Link className="back-link" href="/#experiencias">
          <ArrowLeft size={17} aria-hidden="true" />
          Voltar
        </Link>
        <div>
          <p className="eyebrow">Lumina e Grupo Inova</p>
          <h1>Registros de liderança acadêmica.</h1>
        </div>
        <p className="gallery-lead">
          Momentos de iniciativas, projetos e ações institucionais desenvolvidas como presidente
          do Grupo Inova e vice presidente da Lumina.
        </p>
      </header>

      <section className="photo-grid" aria-label="Fotos da Lumina e do Grupo Inova">
        {photos.map((photo, index) => (
          <figure className={index === 0 ? "photo-card photo-card-featured" : "photo-card"} key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={index === 0 ? 1180 : 580}
              height={index === 0 ? 720 : 680}
              sizes={index === 0 ? "(max-width: 860px) 100vw, 1180px" : "(max-width: 860px) 100vw, 580px"}
              priority={index === 0}
            />
          </figure>
        ))}
      </section>
    </main>
  );
}
