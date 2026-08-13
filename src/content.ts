export type Language = 'es' | 'en'

export type Project = {
  id: 'rawg' | 'turnero' | 'cine'
  title: string
  description: string
  outcome: string
  technologies: string[]
  repository: string
  demo?: string
}

const sharedProjects = {
  rawg: {
    technologies: ['React', 'Tailwind CSS', 'REST API', 'Context API'],
    repository: 'https://github.com/FacuPompa/rawg-browser',
    demo: 'https://rawg-browser.vercel.app/',
  },
  turnero: {
    technologies: ['Java', 'POO', 'Streams', 'Archivos', 'Git'],
    repository: 'https://github.com/FacuPompa/turnero-java',
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
        'Portfolio de Facundo Pompa, desarrollador de software junior especializado en interfaces web con React y en formación backend con Java.',
    },
    accessibility: {
      skip: 'Saltar al contenido',
      mainNav: 'Navegación principal',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      language: 'Cambiar idioma a inglés',
      themeLight: 'Cambiar a tema claro',
      themeDark: 'Cambiar a tema oscuro',
      socialLinks: 'Enlaces profesionales',
      scrollTop: 'Volver al inicio',
      portrait: 'Retrato de Facundo Pompa',
      projectPreview: 'Vista conceptual del proyecto',
    },
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      journey: 'Trayectoria',
      projects: 'Proyectos',
      education: 'Formación',
      contact: 'Contacto',
    },
    common: {
      available: 'Disponible para oportunidades',
      repository: 'Código',
      demo: 'Ver proyecto',
      downloadCv: 'Descargar CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      external: 'Abre en una pestaña nueva',
    },
    hero: {
      eyebrow: 'Desarrollador de software junior · San Luis, Argentina',
      name: 'Facundo Pompa',
      description:
        'Desarrollo aplicaciones web con React y JavaScript, y profundizo en backend con Java. Me interesa convertir reglas y necesidades reales en experiencias simples, accesibles y mantenibles.',
      primary: 'Explorar proyectos',
      secondary: 'Hablemos',
      status: 'Web · React · Java',
      portraitNote: 'Retrato / Facundo',
    },
    about: {
      kicker: '01 / Perfil',
      title: 'Sobre mí',
      intro:
        'Soy estudiante de la Tecnicatura Universitaria en Desarrollo Web en la Universidad Nacional de San Luis. Mi práctica combina frontend, lógica de negocio y persistencia a través de proyectos web y de consola.',
      detail:
        'Trabajo con React, JavaScript y TypeScript para construir interfaces responsive. En paralelo, avanzo con Java y Spring para comprender el recorrido completo de una aplicación: desde la interacción del usuario hasta los datos y las reglas que la hacen funcionar.',
      philosophyLabel: 'Mi enfoque',
      philosophy:
        'Prefiero una solución clara que se pueda explicar, probar y mantener antes que complejidad sin propósito. Aprendo construyendo, revisando y mejorando cada entrega.',
      stackTitle: 'Tecnologías y herramientas',
      languagesTitle: 'Idiomas',
      stackGroups: [
        { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
        { label: 'Backend y fundamentos', items: ['Java', 'Spring Boot', 'C#', '.NET', 'Python', 'C', 'REST APIs', 'POO'] },
        { label: 'Bases de datos', items: ['PostgreSQL'] },
        { label: 'Herramientas de trabajo', items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Netlify', 'Notion', 'Obsidian', 'Arch Linux'] },
        { label: 'IA aplicada', items: ['Codex', 'OpenCode'] },
      ],
    },
    journey: {
      kicker: '02 / Recorrido',
      title: 'Trayectoria',
      intro:
        'Mi recorrido reúne desarrollo, formación y trabajos donde la comunicación, la precisión y la responsabilidad fueron parte central del día a día.',
      highlightsTitle: 'Aportes principales',
      items: [
        {
          period: 'Dic. 2025 — Feb. 2026',
          role: 'Intérprete español–inglés',
          company: 'LanguageLine Solutions',
          description:
            'Interpreté comunicaciones para hospitales y bancos en jornadas de ocho horas, sosteniendo claridad, confidencialidad y ritmo en conversaciones exigentes.',
          logo: '/logo-languageline.png',
          logoAlt: 'LanguageLine Solutions',
          highlights: [
            'Interpretación para hospitales y bancos en llamadas habituales de 30 a 40 minutos.',
            'Manejo de conversaciones extensas, incluida una interpretación de dos horas.',
            'Evaluación “Meeting Expectations” en servicio al cliente e interpretación.',
          ],
        },
        {
          period: 'Ene. — Mar. 2023',
          role: 'Desarrollador Jr. · Pasantía',
          company: 'DOUP!',
          description:
            'Relevé la lógica de bots de contacto para WhatsApp e Instagram y llevé a producción correcciones de bugs y ajustes responsive con CSS y JavaScript.',
          logo: '/logo-doup-clean.png',
          logoAlt: 'DOUP!',
          highlights: [
            'Relevamiento de la lógica de bots de contacto para WhatsApp e Instagram.',
            'Definición de clasificación, prioridad y mensajes junto al dueño y responsable del gimnasio.',
            'Correcciones de bugs y ajustes responsive llevados a producción con CSS y JavaScript.',
          ],
        },
        {
          period: 'Feb. 2022 — Ene. 2023',
          role: 'Vendedor y encargado',
          company: 'Veterinaria Dr. Vet',
          description:
            'Gestioné de forma autónoma el turno mañana, coordinando atención, ventas, turnos, proveedores y cierre de caja.',
          logo: '/logo-dr-vet.png',
          logoAlt: 'Veterinaria Dr. Vet',
          highlights: [
            'Gestión autónoma del turno mañana con aproximadamente 20 clientes por jornada.',
            'Coordinación de ventas, turnos y entregas de tres o más proveedores.',
            'Cierre nocturno de caja y atención cotidiana del local.',
          ],
        },
      ],
    },
    projects: {
      kicker: '03 / Trabajo',
      title: 'Proyectos seleccionados',
      intro:
        'Una selección centrada en decisiones de interfaz, integración de datos y reglas de negocio. Cada enlace aparece únicamente cuando el recurso está publicado.',
      visitLabel: 'Abrir demo de',
      codeLabel: 'Ver repositorio de',
      items: [
        {
          id: 'rawg',
          title: 'RAWG Browser',
          description:
            'Aplicación web para explorar videojuegos por consola, género, lanzamientos y popularidad, consumiendo la API de RAWG.',
          outcome: 'Búsqueda, filtros, favoritos persistentes y navegación responsive.',
          ...sharedProjects.rawg,
        },
        {
          id: 'turnero',
          title: 'Turnero para centro médico',
          description:
            'Aplicación de consola para gestionar médicos, pacientes y turnos con reglas de disponibilidad e historial de estados.',
          outcome: 'Validaciones, excepciones personalizadas y persistencia en archivos.',
          ...sharedProjects.turnero,
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
      kicker: '04 / Formación',
      title: 'Educación y certificaciones',
      intro:
        'Formación académica y cursos que acompañan una práctica constante en proyectos propios.',
      timelineTitle: 'Recorrido académico',
      languageTitle: 'Idiomas',
      timelineItems: [
        {
          period: '2024 — 2027 (estimado)',
          title: 'Tecnicatura Universitaria en Desarrollo Web',
          place: 'Universidad Nacional de San Luis',
          description: 'Formación universitaria orientada al desarrollo web, en curso.',
          type: 'Estudio universitario',
          status: 'En curso',
          logo: '/logo-unsl.png',
          logoAlt: 'Universidad Nacional de San Luis',
        },
        {
          period: '2026',
          title: 'Java Spring Boot',
          place: 'Platzi',
          description: 'Curso de Spring Boot actualmente en curso.',
          type: 'Curso',
          status: 'En curso',
          logo: '/logo-platzi.png',
          logoAlt: 'Platzi',
        },
        {
          period: '2026',
          title: 'Java',
          place: 'Platzi',
          description: 'Formación complementaria en Java, finalizada en agosto de 2026.',
          type: 'Curso',
          status: 'Finalizado',
          logo: '/logo-platzi.png',
          logoAlt: 'Platzi',
        },
        {
          period: '2026',
          title: 'Fundamentos de Desarrollo Backend',
          place: 'Platzi',
          description: 'Curso complementario de fundamentos para el desarrollo backend.',
          type: 'Curso',
          status: 'Finalizado',
          logo: '/logo-platzi.png',
          logoAlt: 'Platzi',
        },
        {
          period: '2022 — 2023',
          title: 'React JS',
          place: 'CoderHouse',
          description: 'Curso independiente enfocado en desarrollo de interfaces con React.',
          type: 'Curso',
          status: 'Finalizado',
          logo: '/logo-coderhouse.png',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022 — 2023',
          title: 'JavaScript',
          place: 'CoderHouse',
          description: 'Curso independiente de JavaScript.',
          type: 'Curso',
          status: 'Finalizado',
          logo: '/logo-coderhouse.png',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022 — 2023',
          title: 'HTML y CSS',
          place: 'CoderHouse',
          description: 'Curso independiente de fundamentos para interfaces web.',
          type: 'Curso',
          status: 'Finalizado',
          logo: '/logo-coderhouse.png',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022',
          title: 'Fundamentos de Programación',
          place: 'Universidad Tecnológica Nacional',
          description: 'Curso de base de programación realizado como formación complementaria.',
          type: 'Curso',
          status: 'Finalizado',
          logo: '/logo-utn.png',
          logoAlt: 'Universidad Tecnológica Nacional',
        },
      ],
      languages: [
        { language: 'Español', level: 'Nativo' },
        { language: 'Inglés', level: 'C1 práctico · experiencia profesional' },
        { language: 'Japonés', level: 'Nivel 6 de 9 · programa con egreso B1' },
      ],
    },
    contact: {
      kicker: '05 / Contacto',
      title: '¿Construimos algo claro y útil?',
      intro:
        'Estoy disponible para oportunidades junior, prácticas y colaboraciones donde pueda aportar en frontend y seguir creciendo como desarrollador.',
      direct: 'Contacto directo',
      emailLabel: 'Correo',
      locationLabel: 'Ubicación',
      location: 'San Luis, Argentina · presencial o remoto',
      formTitle: 'Escribime',
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
      placeholders: {
        name: 'Tu nombre',
        email: 'tu@email.com',
        subject: '¿En qué podemos trabajar?',
        message: 'Contame brevemente sobre la oportunidad o el proyecto.',
      },
      send: 'Preparar email',
      mailtoNote: 'Al enviar se abrirá tu aplicación de correo. No se almacenan datos en este sitio.',
      success: 'Listo. Se abrió tu aplicación de correo con el mensaje preparado.',
      errors: {
        name: 'Ingresá tu nombre.',
        email: 'Ingresá un correo válido.',
        subject: 'Ingresá un asunto.',
        message: 'El mensaje debe tener al menos 20 caracteres.',
      },
    },
    footer: {
      note: 'Diseñado y desarrollado con criterio, café y revisiones.',
    },
  },
  en: {
    seo: {
      title: 'Facundo Pompa — Software developer',
      description:
        'Portfolio of Facundo Pompa, a junior software developer focused on React interfaces and learning backend development with Java.',
    },
    accessibility: {
      skip: 'Skip to content',
      mainNav: 'Main navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Switch language to Spanish',
      themeLight: 'Switch to light theme',
      themeDark: 'Switch to dark theme',
      socialLinks: 'Professional links',
      scrollTop: 'Back to top',
      portrait: 'Portrait of Facundo Pompa',
      projectPreview: 'Conceptual project preview',
    },
    nav: {
      home: 'Home',
      about: 'About',
      journey: 'Journey',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact',
    },
    common: {
      available: 'Open to opportunities',
      repository: 'Code',
      demo: 'View project',
      downloadCv: 'Download CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      external: 'Opens in a new tab',
    },
    hero: {
      eyebrow: 'Junior software developer · San Luis, Argentina',
      name: 'Facundo Pompa',
      description:
        'I build web applications with React and JavaScript while deepening my backend skills with Java. I enjoy turning real requirements and business rules into simple, accessible and maintainable experiences.',
      primary: 'Explore projects',
      secondary: 'Let’s talk',
      status: 'Web · React · Java',
      portraitNote: 'Portrait / Facundo',
    },
    about: {
      kicker: '01 / Profile',
      title: 'About me',
      intro:
        'I am pursuing a University Technical Degree in Web Development at Universidad Nacional de San Luis. My hands-on work combines frontend development, business logic and persistence through web and console projects.',
      detail:
        'I use React, JavaScript and TypeScript to create responsive interfaces. In parallel, I am advancing with Java and Spring to understand the complete path of an application—from user interaction to the data and rules that make it work.',
      philosophyLabel: 'My approach',
      philosophy:
        'I prefer a clear solution that can be explained, tested and maintained over complexity without a purpose. I learn by building, reviewing and improving each delivery.',
      stackTitle: 'Technologies and tools',
      languagesTitle: 'Languages',
      stackGroups: [
        { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
        { label: 'Backend & foundations', items: ['Java', 'Spring Boot', 'C#', '.NET', 'Python', 'C', 'REST APIs', 'OOP'] },
        { label: 'Databases', items: ['PostgreSQL'] },
        { label: 'Work tools', items: ['Git', 'GitHub', 'Docker', 'Vercel', 'Netlify', 'Notion', 'Obsidian', 'Arch Linux'] },
        { label: 'Applied AI', items: ['Codex', 'OpenCode'] },
      ],
    },
    journey: {
      kicker: '02 / Path',
      title: 'Professional journey',
      intro:
        'My path brings together software development, education and roles where communication, precision and responsibility were central to the work.',
      highlightsTitle: 'Key contributions',
      items: [
        {
          period: 'Dec. 2025 — Feb. 2026',
          role: 'Spanish–English interpreter',
          company: 'LanguageLine Solutions',
          description:
            'Interpreted communications for hospitals and banks during eight-hour shifts, maintaining clarity, confidentiality and pace in demanding conversations.',
          logo: '/logo-languageline.png',
          logoAlt: 'LanguageLine Solutions',
          highlights: [
            'Interpretation for hospitals and banks, usually in 30 to 40 minute calls.',
            'Handled extended conversations, including a two-hour interpretation.',
            'Rated “Meeting Expectations” in customer service and interpretation.',
          ],
        },
        {
          period: 'Jan. — Mar. 2023',
          role: 'Junior developer · Internship',
          company: 'DOUP!',
          description:
            'Mapped contact-bot logic for WhatsApp and Instagram, and shipped bug fixes and responsive improvements using CSS and JavaScript.',
          logo: '/logo-doup-clean.png',
          logoAlt: 'DOUP!',
          highlights: [
            'Mapped contact-bot logic for WhatsApp and Instagram.',
            'Defined classification, priority and messages with the owner and gym manager.',
            'Shipped bug fixes and responsive improvements using CSS and JavaScript.',
          ],
        },
        {
          period: 'Feb. 2022 — Jan. 2023',
          role: 'Salesperson and shift manager',
          company: 'Veterinaria Dr. Vet',
          description:
            'Managed the morning shift independently, coordinating customer service, sales, appointments, suppliers and cash closing.',
          logo: '/logo-dr-vet.png',
          logoAlt: 'Veterinaria Dr. Vet',
          highlights: [
            'Independently managed the morning shift with approximately 20 customers per day.',
            'Coordinated sales, appointments and deliveries from three or more suppliers.',
            'Handled cash closing and day-to-day store operations.',
          ],
        },
      ],
    },
    projects: {
      kicker: '03 / Work',
      title: 'Selected projects',
      intro:
        'A selection focused on interface decisions, data integration and business rules. Links are shown only when the resource is actually published.',
      visitLabel: 'Open demo for',
      codeLabel: 'View repository for',
      items: [
        {
          id: 'rawg',
          title: 'RAWG Browser',
          description:
            'A web application for exploring video games by platform, genre, releases and popularity using the RAWG API.',
          outcome: 'Search, filters, persistent favorites and responsive navigation.',
          ...sharedProjects.rawg,
        },
        {
          id: 'turnero',
          title: 'Medical appointment manager',
          description:
            'A console application for managing doctors, patients and appointments with availability rules and status history.',
          outcome: 'Validation, custom exceptions and file-based persistence.',
          ...sharedProjects.turnero,
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
      kicker: '04 / Learning',
      title: 'Education and certifications',
      intro: 'Academic education and courses supported by consistent hands-on work in personal projects.',
      timelineTitle: 'Academic journey',
      languageTitle: 'Languages',
      timelineItems: [
        {
          period: '2024 — 2027 (estimated)',
          title: 'University Technical Degree in Web Development',
          place: 'Universidad Nacional de San Luis',
          description: 'University-level web development programme, currently in progress.',
          type: 'University studies',
          status: 'In progress',
          logo: '/logo-unsl.png',
          logoAlt: 'Universidad Nacional de San Luis',
        },
        {
          period: '2026',
          title: 'Java Spring Boot',
          place: 'Platzi',
          description: 'Spring Boot course currently in progress.',
          type: 'Course',
          status: 'In progress',
          logo: '/logo-platzi.png',
          logoAlt: 'Platzi',
        },
        {
          period: '2026',
          title: 'Java',
          place: 'Platzi',
          description: 'Complementary Java training, completed in August 2026.',
          type: 'Course',
          status: 'Completed',
          logo: '/logo-platzi.png',
          logoAlt: 'Platzi',
        },
        {
          period: '2026',
          title: 'Backend Development Fundamentals',
          place: 'Platzi',
          description: 'Complementary course on backend development fundamentals.',
          type: 'Course',
          status: 'Completed',
          logo: '/logo-platzi.png',
          logoAlt: 'Platzi',
        },
        {
          period: '2022 — 2023',
          title: 'React JS',
          place: 'CoderHouse',
          description: 'Independent course focused on building interfaces with React.',
          type: 'Course',
          status: 'Completed',
          logo: '/logo-coderhouse.png',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022 — 2023',
          title: 'JavaScript',
          place: 'CoderHouse',
          description: 'Independent JavaScript course.',
          type: 'Course',
          status: 'Completed',
          logo: '/logo-coderhouse.png',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022 — 2023',
          title: 'HTML and CSS',
          place: 'CoderHouse',
          description: 'Independent course on web interface foundations.',
          type: 'Course',
          status: 'Completed',
          logo: '/logo-coderhouse.png',
          logoAlt: 'CoderHouse',
        },
        {
          period: '2022',
          title: 'Programming Fundamentals',
          place: 'Universidad Tecnológica Nacional',
          description: 'Complementary programming foundations course.',
          type: 'Course',
          status: 'Completed',
          logo: '/logo-utn.png',
          logoAlt: 'Universidad Tecnológica Nacional',
        },
      ],
      languages: [
        { language: 'Spanish', level: 'Native' },
        { language: 'English', level: 'Practical C1 · professional experience' },
        { language: 'Japanese', level: 'Level 6 of 9 · B1 graduation programme' },
      ],
    },
    contact: {
      kicker: '05 / Contact',
      title: 'Shall we build something clear and useful?',
      intro:
        'I am open to junior opportunities, internships and collaborations where I can contribute to frontend work and keep growing as a developer.',
      direct: 'Direct contact',
      emailLabel: 'Email',
      locationLabel: 'Location',
      location: 'San Luis, Argentina · on-site or remote',
      formTitle: 'Write to me',
      name: 'Name',
      email: 'Email address',
      subject: 'Subject',
      message: 'Message',
      placeholders: {
        name: 'Your name',
        email: 'you@email.com',
        subject: 'What could we work on?',
        message: 'Tell me briefly about the opportunity or project.',
      },
      send: 'Prepare email',
      mailtoNote: 'Submitting opens your email app. No data is stored on this website.',
      success: 'Done. Your email app opened with the message ready.',
      errors: {
        name: 'Enter your name.',
        email: 'Enter a valid email address.',
        subject: 'Enter a subject.',
        message: 'Your message must be at least 20 characters long.',
      },
    },
    footer: {
      note: 'Designed and built with judgement, coffee and revisions.',
    },
  },
} as const

export type Translation = (typeof translations)[Language]
