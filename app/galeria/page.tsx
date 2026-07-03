import { GalleryPhoto, PhotoGallery } from "../photo-gallery";

const photos: GalleryPhoto[] = [
  {
    src: "/foto1.jpg",
    alt: "Registro de atividade acadêmica ligada ao Grupo Inova e Lumina",
    title: "Maratona Hackathon",
    detail:
      "Uma imersão de inovação organizada pelo CEST e pela Lumina, reunindo estudantes para criar soluções, colaborar em equipe e transformar ideias em projetos.",
    featured: true,
  },
  {
    src: "/foto2.jpg",
    alt: "Registro de iniciativa realizada no Grupo Inova",
    title: "Parceria Lumina e IEMA Rio Anil",
    detail:
      "Formalização de uma parceria voltada a aproximar estudantes, educação e tecnologia, abrindo espaço para novas iniciativas de impacto acadêmico e social.",
  },
  {
    src: "/foto3.jpg",
    alt: "Registro de ação acadêmica da Lumina",
    title: "Lumina presente no PISIM",
    detail:
      "Presença no Programa de Incubação de Startups, iniciativa do Governo do Maranhão com SECTI e FAPEMA para impulsionar negócios inovadores e de base tecnológica no estado.",
  },
  {
    src: "/foto4.jpg",
    alt: "Registro de liderança em evento acadêmico",
    title: "Lumina no marketing da Kadoo",
    detail:
      "Apoio às ações de comunicação e divulgação da Kadoo durante o PISIM, contribuindo para fortalecer a presença da marca e registrar a experiência do evento.",
  },
  {
    src: "/foto12.jpg",
    alt: "Registro adicional de iniciativa acadêmica da Lumina e do Grupo Inova",
    title: "Nova turma do Escritório Escola",
    detail:
      "Início de uma nova etapa no Escritório Escola, reunindo estudantes em torno de projetos, colaboração e das primeiras articulações que deram origem ao Grupo Inova.",
  },
  {
    src: "/foto5.jpg",
    alt: "Registro de projeto desenvolvido com grupos estudantis",
    title: "Lumina no lançamento da Kadoo",
    detail:
      "Presença da Lumina no lançamento do projeto Kadoo, acompanhando uma iniciativa de inovação que conecta educação, tecnologia e oportunidades para novos talentos.",
    wide: true,
  },
];

export default function GalleryPage() {
  return (
    <PhotoGallery
      eyebrow="Lumina e Grupo Inova"
      title="Registros de liderança acadêmica."
      lead="Momentos de iniciativas, projetos e ações institucionais desenvolvidas como presidente do Grupo Inova e vice presidente da Lumina."
      countLabel="6 registros selecionados"
      ariaLabel="Fotos da Lumina e do Grupo Inova"
      photos={photos}
    />
  );
}
