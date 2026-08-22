export type Language = 'es' | 'en'

type Project = {
  id: 'umbral' | 'rawg' | 'cine'
  title: string
  description: string
  outcome?: string
  technologies: string[]
  repository?: string
  demo?: string
}

const sharedProjects = {
  rawg: {
    technologies: ['React', 'Tailwind CSS', 'Context API'],
    repository: 'https://github.com/FacuPompa/rawg-browser',
    demo: 'https://rawg-browser.vercel.app/',
  },
  cine: {
    technologies: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JPA', 'Docker'],
    repository: 'https://github.com/FacuPompa/java-spring',
  },
}

export const translations = {
  es: {
    seo: {
      title: 'Facundo Pompa — Desarrollador de software',
      description:
        'Portfolio de Facundo Pompa, desarrollador de software enfocado en backend con Java y Spring Boot, con experiencia frontend en React.',
    },
    accessibility: {
      skip: 'Saltar al contenido',
      mainNav: 'Navegación principal',
      language: 'Cambiar idioma a inglés',
      socialLinks: 'Enlaces profesionales',
      portrait: 'Retrato de Facundo Pompa',
    },
    common: {
      downloadCv: 'Descargar CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    about: {
      title: 'Sobre mí',
      intro:
        'Soy desarrollador web de Argentina, con un enfoque cada vez más marcado en el backend. Construyo APIs y aplicaciones con Java y Spring Boot, trabajando con lógica de negocio, persistencia de datos y bases de datos relacionales. Me interesa comprender el recorrido completo de una aplicación, desde las reglas que la sostienen hasta la interfaz que la hace usable.',
      detail:
        'Mi recorrido empezó en el frontend, donde trabajo con React, JavaScript y TypeScript para construir interfaces responsive. Hoy esa base complementa mi perfil backend y me ayuda a pensar también en la experiencia de quien usa el producto.',
      philosophy:
        'Curso la Tecnicatura Universitaria en Desarrollo Web en la Universidad Nacional de San Luis y la complemento con capacitación por cuenta propia. Sigo incorporando conocimientos mediante proyectos de punta a punta y herramientas como Git, Docker y agentes de IA como Codex y OpenCode, que uso para investigar, revisar alternativas e iterar sin dejar de comprender lo que construyo.',
      stackTitle: 'Tecnologías y herramientas',
      stackGroups: [
        { items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
        { items: ['Java', 'Spring Boot', 'Python'] },
        { items: ['PostgreSQL'] },
        { items: ['Git', 'GitHub', 'Docker', 'Notion', 'Obsidian', 'Arch Linux', 'Codex', 'OpenCode'] },
      ],
    },
    projects: {
      title: 'Proyectos seleccionados',
      items: [
        {
          id: 'umbral',
          title: 'Umbral',
          description:
            'Aplicación full stack para compartir experiencias sobre videojuegos narrativos sin recibir spoilers de partes todavía no jugadas.',
          technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
        },
        {
          id: 'rawg',
          title: 'RAWG Browser',
          description:
            'Aplicación web para explorar videojuegos por consola, género, lanzamientos y popularidad, consumiendo la API de RAWG.',
          outcome: 'Búsqueda, filtros, favoritos persistentes y navegación responsive.',
          ...sharedProjects.rawg,
        },
        {
          id: 'cine',
          title: 'Cine Java API',
          description:
            'API REST de películas creada para practicar una arquitectura backend por capas y persistencia relacional.',
          outcome: 'Spring Web, JPA, mapeos y catálogo almacenado en PostgreSQL.',
          ...sharedProjects.cine,
        },
      ] satisfies Project[],
    },
    education: {
      title: 'Educación y certificaciones',
      timelineItems: [
        {
          period: '2024 — 2027 (estimado)',
          title: 'Tecnicatura Universitaria en Desarrollo Web',
          place: 'Universidad Nacional de San Luis',
          description: 'Formación universitaria orientada al desarrollo web.',
          status: 'En curso',
          logo: '/logo-unsl.webp',
          logoAlt: 'Universidad Nacional de San Luis',
        },
        {
          period: '2026',
          title: 'Java Spring Boot',
          place: 'Platzi',
          description: 'Curso finalizado de desarrollo backend con Java y Spring Boot.',
          status: 'Finalizado',
          logoAlt: 'Platzi',
        },
        {
          period: '2026',
          title: 'Java',
          place: 'Platzi',
          description: 'Formación complementaria en Java, finalizada en agosto de 2026.',
          status: 'Finalizado',
          logoAlt: 'Platzi',
        },
        {
          period: '2026',
          title: 'Fundamentos de Desarrollo Backend',
          place: 'Platzi',
          description: 'Curso complementario de fundamentos para el desarrollo backend.',
          status: 'Finalizado',
          logoAlt: 'Platzi',
        },
        {
          period: '2022 — 2023',
          title: 'React JS',
          place: 'CoderHouse',
          description: 'Curso independiente enfocado en desarrollo de interfaces con React.',
          status: 'Finalizado',
          logo: '/logo-coderhouse.webp',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022 — 2023',
          title: 'JavaScript',
          place: 'CoderHouse',
          description: 'Curso independiente de JavaScript.',
          status: 'Finalizado',
          logo: '/logo-coderhouse.webp',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022 — 2023',
          title: 'HTML y CSS',
          place: 'CoderHouse',
          description: 'Curso independiente de fundamentos para interfaces web.',
          status: 'Finalizado',
          logo: '/logo-coderhouse.webp',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022',
          title: 'Fundamentos de Programación',
          place: 'Universidad Tecnológica Nacional',
          description: 'Curso de base de programación realizado como formación complementaria.',
          status: 'Finalizado',
          logo: '/logo-utn.webp',
          logoAlt: 'Universidad Tecnológica Nacional',
        },
      ],
      languages: [
        { language: 'Español', level: 'Nativo' },
        { language: 'Inglés', level: 'C1 práctico - experiencia profesional' },
        { language: 'Japonés', level: 'B1' },
      ],
    },
    footer: {
      note: 'Diseñado y desarrollado con criterio, mate y música.',
    },
  },
  en: {
    seo: {
      title: 'Facundo Pompa — Software developer',
      description:
        'Portfolio of Facundo Pompa, a software developer focused on backend development with Java and Spring Boot, with frontend experience in React.',
    },
    accessibility: {
      skip: 'Skip to content',
      mainNav: 'Main navigation',
      language: 'Switch language to Spanish',
      socialLinks: 'Professional links',
      portrait: 'Portrait of Facundo Pompa',
    },
    common: {
      downloadCv: 'Download CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    about: {
      title: 'About me',
      intro:
        'I am a web developer from Argentina with an increasingly strong focus on backend development. I build APIs and applications with Java and Spring Boot, working with business logic, data persistence and relational databases. I am interested in understanding the complete path of an application, from the rules that support it to the interface that makes it usable.',
      detail:
        'My path started in frontend development, where I work with React, JavaScript and TypeScript to build responsive interfaces. Today, that foundation complements my backend profile and also helps me think about the experience of the person using the product.',
      philosophy:
        'I am pursuing a University Technical Degree in Web Development at Universidad Nacional de San Luis and complement it with self-directed learning. I continue expanding my knowledge through end-to-end projects and tools such as Git, Docker and AI agents like Codex and OpenCode, which I use to research, review alternatives and iterate while still understanding what I build.',
      stackTitle: 'Technologies and tools',
      stackGroups: [
        { items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
        { items: ['Java', 'Spring Boot', 'Python'] },
        { items: ['PostgreSQL'] },
        { items: ['Git', 'GitHub', 'Docker', 'Notion', 'Obsidian', 'Arch Linux', 'Codex', 'OpenCode'] },
      ],
    },
    projects: {
      title: 'Selected projects',
      items: [
        {
          id: 'umbral',
          title: 'Umbral',
          description:
            'A full-stack application for sharing experiences about narrative games without seeing spoilers from parts not yet played.',
          technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
        },
        {
          id: 'rawg',
          title: 'RAWG Browser',
          description:
            'A web application for exploring video games by platform, genre, releases and popularity using the RAWG API.',
          outcome: 'Search, filters, persistent favorites and responsive navigation.',
          ...sharedProjects.rawg,
        },
        {
          id: 'cine',
          title: 'Cine Java API',
          description:
            'A movie REST API created to practice layered backend architecture and relational persistence.',
          outcome: 'Spring Web, JPA, mappings and a PostgreSQL-backed catalogue.',
          ...sharedProjects.cine,
        },
      ] satisfies Project[],
    },
    education: {
      title: 'Education and certifications',
      timelineItems: [
        {
          period: '2024 — 2027 (estimated)',
          title: 'University Technical Degree in Web Development',
          place: 'Universidad Nacional de San Luis',
          description: 'University-level web development programme.',
          status: 'In progress',
          logo: '/logo-unsl.webp',
          logoAlt: 'Universidad Nacional de San Luis',
        },
        {
          period: '2026',
          title: 'Java Spring Boot',
          place: 'Platzi',
          description: 'Completed backend development course with Java and Spring Boot.',
          status: 'Completed',
          logoAlt: 'Platzi',
        },
        {
          period: '2026',
          title: 'Java',
          place: 'Platzi',
          description: 'Complementary Java training, completed in August 2026.',
          status: 'Completed',
          logoAlt: 'Platzi',
        },
        {
          period: '2026',
          title: 'Backend Development Fundamentals',
          place: 'Platzi',
          description: 'Complementary course on backend development fundamentals.',
          status: 'Completed',
          logoAlt: 'Platzi',
        },
        {
          period: '2022 — 2023',
          title: 'React JS',
          place: 'CoderHouse',
          description: 'Independent course focused on building interfaces with React.',
          status: 'Completed',
          logo: '/logo-coderhouse.webp',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022 — 2023',
          title: 'JavaScript',
          place: 'CoderHouse',
          description: 'Independent JavaScript course.',
          status: 'Completed',
          logo: '/logo-coderhouse.webp',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022 — 2023',
          title: 'HTML and CSS',
          place: 'CoderHouse',
          description: 'Independent course on web interface foundations.',
          status: 'Completed',
          logo: '/logo-coderhouse.webp',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022',
          title: 'Programming Fundamentals',
          place: 'Universidad Tecnológica Nacional',
          description: 'Complementary programming foundations course.',
          status: 'Completed',
          logo: '/logo-utn.webp',
          logoAlt: 'Universidad Tecnológica Nacional',
        },
      ],
      languages: [
        { language: 'Spanish', level: 'Native' },
        { language: 'English', level: 'Practical C1 - professional experience' },
        { language: 'Japanese', level: 'B1' },
      ],
    },
    footer: {
      note: 'Designed and built with judgement, mate and music.',
    },
  },
} as const

export type Translation = (typeof translations)[Language]
