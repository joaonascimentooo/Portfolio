import { GalleryPhoto, PhotoGallery } from "../photo-gallery";

const photos: GalleryPhoto[] = [
  {
    src: "/foto6.jpg",
    alt: "Registro de atuação técnica e acadêmica no CEST",
    title: "Vivência técnica no CEST",
    detail:
      "Registros de uma trajetória conectando desenvolvimento de software, ambiente acadêmico e colaboração com estudantes.",
    featured: true,
  },
  {
    src: "/foto7.jpg",
    alt: "Registro de atividade de instrutoria técnica",
    title: "Instrutoria técnica",
    detail:
      "Apoio ao aprendizado de Java, Spring Boot e práticas de desenvolvimento em atividades formativas.",
  },
  {
    src: "/foto8.jpg",
    alt: "Registro de experiência com estudantes e projetos acadêmicos",
    title: "Recepção dos calouros",
    detail:
      "Boas-vindas aos novos estudantes do curso, apresentando caminhos da área, vivências acadêmicas e possibilidades de crescimento na tecnologia.",
  },
  {
    src: "/foto9.jpg",
    alt: "Registro de colaboração técnica no ambiente universitário",
    title: "Integração dos novos alunos",
    detail:
      "Participação na recepção dos calouros, fortalecendo a conexão entre turma, curso e comunidade acadêmica desde os primeiros passos.",
  },
  {
    src: "/foto10.jpg",
    alt: "Registro de formação e comunicação técnica",
    title: "Comunicação técnica",
    detail:
      "Experiências de ensino, orientação e compartilhamento de conhecimento em tecnologia.",
  },
  {
    src: "/foto11.jpg",
    alt: "Registro de trajetória no CEST",
    title: "Trajetória no CEST",
    detail:
      "Atuação como desenvolvedor e instrutor, unindo entrega técnica, formação de pessoas e liderança no ambiente acadêmico.",
    wide: true,
  },
];

export default function CestGalleryPage() {
  return (
    <PhotoGallery
      eyebrow="CEST"
      title="Experiência técnica no CEST."
      lead="Momentos da minha atuação no Centro Universitário Santa Terezinha, entre desenvolvimento full stack, atividades de instrutoria e colaboração em projetos acadêmicos."
      countLabel="6 registros selecionados"
      ariaLabel="Fotos de atuação técnica e acadêmica no CEST"
      photos={photos}
    />
  );
}
