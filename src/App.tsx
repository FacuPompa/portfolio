import { useState } from 'react'
import { ArrowUp, Check, ChevronDown, ChevronUp, Github, ExternalLink } from 'lucide-react'
import { SiAnthropic, SiPlatzi } from 'react-icons/si'
import { Header } from './components/Header'
import { ProjectGallery } from './components/ProjectGallery'
import { Starfield } from './components/Starfield'
import { TechnologyIcons } from './components/TechnologyIcons'
import { useLanguage } from './context/language-context'

const editorialCopy = {
  es: {
    building: 'En construcción',
    developmentNote:
      'Interfaz en desarrollo. Umbral todavía no tiene un frontend público.',
    objective: 'Objetivo del proyecto',
    umbralObjective:
      'Diseñar la lógica anti-spoiler en Spring para que cada lector reciba contenido acorde al progreso que alcanzó.',
    technologies: 'Tecnologías',
    evidence: 'Evidencia del proyecto',
    rawgMainCaption: 'Portada de RAWG Browser: búsqueda y juegos populares.',
    rawgTrendsCaption: 'Vista de tendencias.',
    rawgMobileCaption: 'Adaptación móvil.',
    cineSwaggerCaption: 'Documentación real de la API en Swagger/OpenAPI.',
    cineJsonCaption: 'Respuesta JSON real del catálogo de películas.',
    openDemo: 'Abrir proyecto',
    openCode: 'Ver código',
    gallery: {
      open: 'Ver galería',
      close: 'Cerrar galería',
      previous: 'Imagen anterior',
      next: 'Imagen siguiente',
      zoomControls: 'Controles de zoom',
      zoomIn: 'Acercar imagen',
      zoomOut: 'Alejar imagen',
      resetZoom: 'Restablecer zoom',
      zoomLevel: 'Nivel de zoom',
      loading: 'Cargando imagen…',
    },
    languagesParagraph:
      'Los idiomas también forman parte de mi perfil: el español es mi lengua nativa; sé inglés con nivel C1, aplicado en contextos profesionales, y japonés con nivel B1.',
    topicsLabel: 'Contenidos abordados',
    showMoreEducation: 'Ver más',
    showLessEducation: 'Ver menos',
    backToTop: 'Volver al inicio',
    techLabels: {
      frontend: 'Frontend',
      backend: 'Backend y datos',
      tools: 'Herramientas',
    },
  },
  en: {
    building: 'In progress',
    developmentNote:
      'Interface in development. Umbral does not have a public frontend yet.',
    objective: 'Project goal',
    umbralObjective:
      'Design the anti-spoiler logic in Spring so each reader receives content that matches the progress they have reached.',
    technologies: 'Technologies',
    evidence: 'Project evidence',
    rawgMainCaption: 'RAWG Browser home: search and popular games.',
    rawgTrendsCaption: 'Trending games view.',
    rawgMobileCaption: 'Mobile adaptation.',
    cineSwaggerCaption: 'Real API documentation in Swagger/OpenAPI.',
    cineJsonCaption: 'Real JSON response from the movie catalogue.',
    openDemo: 'Open project',
    openCode: 'View code',
    gallery: {
      open: 'View gallery',
      close: 'Close gallery',
      previous: 'Previous image',
      next: 'Next image',
      zoomControls: 'Zoom controls',
      zoomIn: 'Zoom in',
      zoomOut: 'Zoom out',
      resetZoom: 'Reset zoom',
      zoomLevel: 'Zoom level',
      loading: 'Loading image…',
    },
    languagesParagraph:
      'Languages are also part of my profile: Spanish is my native language; I have C1-level English, used in professional contexts, and B1-level Japanese.',
    topicsLabel: 'Topics covered',
    showMoreEducation: 'Show more',
    showLessEducation: 'Show less',
    backToTop: 'Back to top',
    techLabels: {
      frontend: 'Frontend',
      backend: 'Backend and data',
      tools: 'Tools',
    },
  },
} as const

const educationDrafts = {
  es: [
    {
      focus: 'Ingeniería y desarrollo de aplicaciones web',
      topics: [
        'Estrategias, modelos y métodos de Ingeniería Web',
        'Desarrollo y mantenimiento de sitios y aplicaciones web',
        'Evaluación de atributos de calidad en productos web',
        'Programación, bases de datos, sistemas operativos y redes',
        'Diseño de sitios web, Ingeniería de Software y programación avanzada',
        'Seguridad, legislación y Práctica Técnica Supervisada',
      ],
      note: 'Formación universitaria para abordar de forma disciplinada y sistemática el análisis, desarrollo, evaluación e implantación de aplicaciones web.',
    },
    {
      focus: 'Diseño de Skills para Claude Code',
      topics: [
        'Estructura de SKILL.md, frontmatter y coincidencia semántica',
        'Skills personales, de proyecto y jerarquía de prioridad',
        'Descripciones efectivas y restricción de herramientas con allowed-tools',
        'Divulgación progresiva con referencias, scripts y assets',
        'Distribución mediante Git, plugins y configuración administrada',
        'Integración con subagentes y diagnóstico de problemas',
      ],
      note: 'Creación de flujos reutilizables para mantener a Claude consistente, eficiente en contexto y alineado con los estándares de un proyecto o equipo.',
    },
    {
      focus: 'Desarrollo de APIs con Spring Boot',
      topics: [
        'Configuración, perfiles y dependencias de Spring Boot',
        'Arquitectura por capas e inyección de dependencias',
        'Endpoints REST, HTTP y ResponseEntity',
        'Entidades JPA, repositorios y mapeos con MapStruct',
        'PostgreSQL y Docker Compose',
        'Validación, manejo de errores y documentación con OpenAPI',
      ],
      note: 'Recorrido práctico para construir, documentar y desplegar una API REST con Java y Spring Boot.',
    },
    {
      focus: 'Fundamentos y orientación a objetos en Java',
      topics: [
        'Tipos de datos, casting y miembros estáticos',
        'Encapsulamiento y relaciones entre clases',
        'Colecciones con List y Map',
        'Streams, lambdas, transformaciones y ordenamiento',
        'Excepciones, enums y records',
        'Lectura y escritura de archivos',
      ],
      note: 'Fundamentos del lenguaje aplicados mediante ejercicios y programas de consola.',
    },
    {
      focus: 'Arquitectura y fundamentos backend',
      topics: [
        'Roles y responsabilidades en el desarrollo web',
        'APIs, endpoints y comunicación cliente-servidor',
        'HTTP: solicitudes, respuestas, headers y códigos de estado',
        'Principios REST y operaciones CRUD',
        'Bases de datos SQL, NoSQL y ORMs',
        'Escalabilidad: caché, colas y balanceo de carga',
      ],
      note: 'Base conceptual sobre cómo se organizan, comunican y escalan las aplicaciones backend.',
    },
    {
      focus: 'Aplicaciones SPA con React',
      topics: [
        'Componentes, JSX y Virtual DOM',
        'Props, estado y hooks como useState y useEffect',
        'Promesas, asincronía y consumo de APIs REST',
        'Routing, navegación dinámica y useParams',
        'Context API y técnicas de renderizado',
        'Firebase, Firestore y proyecto final integrador',
      ],
      note: 'Desarrollo de interfaces interactivas y aplicaciones de página única con React.',
    },
    {
      focus: 'Programación web con JavaScript',
      topics: [
        'Variables, tipos de datos y control de flujo',
        'Funciones, scope y retorno de valores',
        'Arrays, objetos y clases en ES6',
        'Funciones de orden superior: find, filter, map y reduce',
        'DOM, eventos y Web Storage',
        'Asincronía, Fetch API y respuestas JSON',
      ],
      note: 'Fundamentos para construir aplicaciones web interactivas y consumir servicios externos.',
    },
    {
      focus: 'Fundamentos de desarrollo web',
      topics: [
        'HTML5 semántico, enlaces y contenido multimedia',
        'CSS, especificidad, cascada y tipografía',
        'Box Model, Flexbox y CSS Grid',
        'Pseudoclases, Bootstrap y diseño responsive',
        'Git, GitHub y control de versiones',
        'SCSS, SEO, dominios y servidores',
      ],
      note: 'Construcción progresiva de un sitio web estático responsive como proyecto final.',
    },
    {
      focus: 'Lógica y programación orientada a objetos',
      topics: [
        'Lógica, resolución de problemas y algoritmos',
        'Pseudocódigo, convenciones y documentación',
        'Variables, tipos de datos y estructuras de control',
        'Arreglos, funciones y flujo de ejecución',
        'Clases, objetos, abstracción y encapsulamiento',
        'Herencia, polimorfismo, interfaces y clases abstractas',
      ],
      note: 'Fundamentos de programación y orientación a objetos, integrados en ejercicios prácticos.',
    },
  ],
  en: [
    {
      focus: 'Web engineering and application development',
      topics: [
        'Web Engineering strategies, models and methods',
        'Development and maintenance of web sites and applications',
        'Evaluation of quality attributes in web products',
        'Programming, databases, operating systems and networks',
        'Web design, Software Engineering and advanced programming',
        'Security, legislation and supervised technical practice',
      ],
      note: 'University programme for approaching the analysis, development, evaluation and implementation of web applications in a disciplined and systematic way.',
    },
    {
      focus: 'Skill design for Claude Code',
      topics: [
        'SKILL.md structure, frontmatter and semantic matching',
        'Personal and project Skills, and their priority hierarchy',
        'Effective descriptions and tool restrictions with allowed-tools',
        'Progressive disclosure through references, scripts and assets',
        'Distribution through Git, plugins and managed settings',
        'Custom subagent integration and troubleshooting',
      ],
      note: 'Creation of reusable workflows that keep Claude consistent, context-efficient and aligned with project or team standards.',
    },
    {
      focus: 'API development with Spring Boot',
      topics: [
        'Spring Boot configuration, profiles and dependencies',
        'Layered architecture and dependency injection',
        'REST endpoints, HTTP and ResponseEntity',
        'JPA entities, repositories and mappings with MapStruct',
        'PostgreSQL and Docker Compose',
        'Validation, error handling and OpenAPI documentation',
      ],
      note: 'Practical path for building, documenting and deploying a REST API with Java and Spring Boot.',
    },
    {
      focus: 'Java foundations and object-oriented programming',
      topics: [
        'Data types, casting and static members',
        'Encapsulation and relationships between classes',
        'Collections with List and Map',
        'Streams, lambdas, transformations and sorting',
        'Exceptions, enums and records',
        'Reading and writing files',
      ],
      note: 'Language foundations applied through exercises and console programs.',
    },
    {
      focus: 'Backend architecture and foundations',
      topics: [
        'Roles and responsibilities in web development',
        'APIs, endpoints and client-server communication',
        'HTTP requests, responses, headers and status codes',
        'REST principles and CRUD operations',
        'SQL, NoSQL databases and ORMs',
        'Scalability: caching, queues and load balancing',
      ],
      note: 'Conceptual foundations on how backend applications are organised, communicate and scale.',
    },
    {
      focus: 'Single-page applications with React',
      topics: [
        'Components, JSX and the Virtual DOM',
        'Props, state and hooks such as useState and useEffect',
        'Promises, asynchronous work and REST API consumption',
        'Routing, dynamic navigation and useParams',
        'Context API and rendering techniques',
        'Firebase, Firestore and a final integrative project',
      ],
      note: 'Development of interactive interfaces and single-page applications with React.',
    },
    {
      focus: 'Web programming with JavaScript',
      topics: [
        'Variables, data types and control flow',
        'Functions, scope and return values',
        'Arrays, objects and ES6 classes',
        'Higher-order functions: find, filter, map and reduce',
        'DOM, events and Web Storage',
        'Asynchronous work, Fetch API and JSON responses',
      ],
      note: 'Foundations for building interactive web applications and consuming external services.',
    },
    {
      focus: 'Web development foundations',
      topics: [
        'Semantic HTML5, links and multimedia content',
        'CSS, specificity, the cascade and typography',
        'Box Model, Flexbox and CSS Grid',
        'Pseudo-classes, Bootstrap and responsive design',
        'Git, GitHub and version control',
        'SCSS, SEO, domains and servers',
      ],
      note: 'Progressive construction of a responsive static website as the final project.',
    },
    {
      focus: 'Logic and object-oriented programming',
      topics: [
        'Logic, problem solving and algorithms',
        'Pseudocode, conventions and documentation',
        'Variables, data types and control structures',
        'Arrays, functions and execution flow',
        'Classes, objects, abstraction and encapsulation',
        'Inheritance, polymorphism, interfaces and abstract classes',
      ],
      note: 'Programming and object-oriented foundations integrated through practical exercises.',
    },
  ],
} as const

function App() {
  const { language, t } = useLanguage()
  const [showAllEducation, setShowAllEducation] = useState(false)
  const copy = editorialCopy[language]
  const umbral = t.projects.items.find((project) => project.id === 'umbral')!
  const rawg = t.projects.items.find((project) => project.id === 'rawg')!
  const cine = t.projects.items.find((project) => project.id === 'cine')!
  const frontend = t.about.stackGroups[0].items
  const backend = [...t.about.stackGroups[1].items, ...t.about.stackGroups[2].items]
  const tools = t.about.stackGroups[3].items
  const educationDetails = educationDrafts[language]
  const visibleEducation = showAllEducation ? t.education.timelineItems : t.education.timelineItems.slice(0, 3)
  const rawgImages = [
    {
      src: '/assets/projects/rawg-browser-home-desktop.webp',
      alt: language === 'es' ? 'Portada de RAWG Browser con buscador y juegos populares' : 'RAWG Browser home with search and popular games',
      caption: copy.rawgMainCaption,
    },
    {
      src: '/assets/projects/rawg-browser-trending-desktop.webp',
      alt: language === 'es' ? 'Pantalla de tendencias de RAWG Browser' : 'RAWG Browser trending games screen',
      caption: copy.rawgTrendsCaption,
    },
    {
      src: '/assets/projects/rawg-browser-home-mobile.webp',
      alt: language === 'es' ? 'Versión móvil de RAWG Browser' : 'Mobile version of RAWG Browser',
      caption: copy.rawgMobileCaption,
    },
  ] as const
  const cineImages = [
    {
      src: '/assets/projects/cine-java-swagger-openapi.webp',
      alt: language === 'es' ? 'Documentación Swagger de Cine Java' : 'Cine Java Swagger documentation',
      caption: copy.cineSwaggerCaption,
    },
    {
      src: '/assets/projects/cine-java-json-response.webp',
      alt: language === 'es' ? 'Respuesta JSON de Cine Java' : 'Cine Java JSON response',
      caption: copy.cineJsonCaption,
    },
  ] as const

  return (
    <div className="editorial-page">
      <a className="skip-link" href="#main-content">{t.accessibility.skip}</a>
      <Starfield />
      <Header />

      <main id="main-content" className="editorial-shell">
        <section id="about" className="editorial-section" aria-labelledby="about-title">
          <header className="section-heading">
            <h2 id="about-title">{t.about.title}</h2>
          </header>
          <div className="prose">
            <p className="prose-lead">{t.about.intro}</p>
            <p>{t.about.detail}</p>
            <p>{t.about.philosophy}</p>
            <div className="about-languages">
              <p>{copy.languagesParagraph}</p>
            </div>
          </div>
        </section>

        <section id="technologies" className="editorial-section" aria-labelledby="technologies-title">
          <header className="section-heading">
            <h2 id="technologies-title">{t.about.stackTitle}</h2>
          </header>
          <div className="technology-groups">
            <section aria-labelledby="frontend-title">
              <h3 id="frontend-title">{copy.techLabels.frontend}</h3>
              <TechnologyIcons items={frontend} label={copy.techLabels.frontend} />
            </section>
            <section aria-labelledby="backend-title">
              <h3 id="backend-title">{copy.techLabels.backend}</h3>
              <TechnologyIcons items={backend} label={copy.techLabels.backend} />
            </section>
            <section aria-labelledby="tools-title">
              <h3 id="tools-title">{copy.techLabels.tools}</h3>
              <TechnologyIcons items={tools} label={copy.techLabels.tools} />
            </section>
          </div>
        </section>

        <section id="projects" className="editorial-section" aria-labelledby="projects-title">
          <header className="section-heading">
            <h2 id="projects-title">{t.projects.title}</h2>
          </header>
          <div className="project-list">
            <article className="project-entry project-entry--umbral" aria-labelledby="umbral-title">
              <header className="project-heading">
                <div>
                  <span className="project-status">{copy.building}</span>
                  <h3 id="umbral-title">{umbral.title}</h3>
                </div>
              </header>
              <p className="project-description">{umbral.description}</p>
              <p className="project-outcome"><strong>{copy.objective}.</strong> {copy.umbralObjective}</p>
              <p className="development-note">{copy.developmentNote}</p>
              <TechnologyIcons items={umbral.technologies} label={`${copy.technologies}: ${umbral.title}`} variant="project" />
            </article>

            <article className="project-entry" aria-labelledby="rawg-title">
              <header className="project-heading">
                <div>
                  <h3 id="rawg-title">{rawg.title}</h3>
                  <p className="project-description">{rawg.description}</p>
                </div>
                <div className="project-links">
                  {rawg.demo && (
                    <a href={rawg.demo} target="_blank" rel="noreferrer">
                      <ExternalLink size={17} aria-hidden="true" />
                      {copy.openDemo}
                    </a>
                  )}
                  {rawg.repository && (
                    <a href={rawg.repository} target="_blank" rel="noreferrer">
                      <Github size={17} aria-hidden="true" />
                      {copy.openCode}
                    </a>
                  )}
                </div>
              </header>
              <p className="project-outcome">{rawg.outcome}</p>
              <TechnologyIcons items={rawg.technologies} label={`${copy.technologies}: ${rawg.title}`} variant="project" />

              <div className="project-evidence" aria-label={`${copy.evidence}: ${rawg.title}`}>
                <ProjectGallery title={rawg.title} images={rawgImages} labels={copy.gallery} />
              </div>
            </article>

            <article className="project-entry" aria-labelledby="cine-title">
              <header className="project-heading">
                <div>
                  <h3 id="cine-title">{cine.title}</h3>
                  <p className="project-description">{cine.description}</p>
                </div>
                {cine.repository && (
                  <div className="project-links">
                    <a href={cine.repository} target="_blank" rel="noreferrer">
                      <Github size={17} aria-hidden="true" />
                      {copy.openCode}
                    </a>
                  </div>
                )}
              </header>
              <p className="project-outcome">{cine.outcome}</p>
              <TechnologyIcons items={cine.technologies} label={`${copy.technologies}: ${cine.title}`} variant="project" />

              <div className="project-evidence" aria-label={`${copy.evidence}: ${cine.title}`}>
                <ProjectGallery title={cine.title} images={cineImages} labels={copy.gallery} />
              </div>
            </article>
          </div>
        </section>

        <section id="education" className="editorial-section" aria-labelledby="education-title">
          <header className="section-heading">
            <h2 id="education-title">{t.education.title}</h2>
          </header>
          <ul id="education-list" className="education-cards">
            {visibleEducation.map((item, index) => (
              <li className={index >= 3 ? 'education-card-reveal' : undefined} key={`${item.period}-${item.title}`}>
                <article className="education-card">
                  <header className="education-card-header">
                    <span className={`education-logo${item.place === 'Platzi' ? ' education-logo--platzi' : item.place === 'Anthropic' ? ' education-logo--anthropic' : ''}`} role={item.place === 'Platzi' || item.place === 'Anthropic' ? 'img' : undefined} aria-label={item.place === 'Platzi' || item.place === 'Anthropic' ? item.logoAlt : undefined}>
                      {item.place === 'Platzi'
                        ? <SiPlatzi size={34} aria-hidden="true" />
                        : item.place === 'Anthropic'
                          ? <SiAnthropic size={34} aria-hidden="true" />
                          : <img src={item.logo} alt={item.logoAlt} loading="lazy" decoding="async" />}
                    </span>
                    <div className="education-card-heading">
                      <div className="education-card-title-row">
                        <h3>{item.title}</h3>
                        <p className="education-card-meta">{item.period} · {item.status}</p>
                      </div>
                      <p className="education-provider-line">
                        <span>{educationDetails[index].focus}</span>
                        <span className="education-provider-entity">
                          <span className="education-divider" aria-hidden="true">|</span>
                          <strong>{item.place}</strong>
                        </span>
                      </p>
                    </div>
                  </header>

                  <p className="education-summary">{item.description}</p>

                  <div className="education-topics">
                    <p className="education-topics-label">{copy.topicsLabel}</p>
                    <ul>
                      {educationDetails[index].topics.map((topic) => (
                        <li key={topic}>
                          <Check size={15} aria-hidden="true" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="education-note">
                    {educationDetails[index].note}
                  </p>
                </article>
              </li>
            ))}
          </ul>
          {t.education.timelineItems.length > 3 && (
            <button
              className="education-toggle"
              type="button"
              onClick={() => setShowAllEducation((current) => !current)}
              aria-expanded={showAllEducation}
              aria-controls="education-list"
            >
              {showAllEducation ? copy.showLessEducation : copy.showMoreEducation}
              {showAllEducation ? <ChevronUp size={17} aria-hidden="true" /> : <ChevronDown size={17} aria-hidden="true" />}
            </button>
          )}
        </section>
      </main>

      <footer className="editorial-footer">
        <div className="editorial-shell">
          <p>{t.footer.note}</p>
          <a href="#top">
            {copy.backToTop}
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
