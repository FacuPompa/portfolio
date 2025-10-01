import {
  Github,
  Linkedin,
  Mail,
  Code,
  Server,
  Database,
  TerminalSquare,
  type LucideIcon,
} from "lucide-react";
import { PlaceHolderImages } from "./placeholder-images";
import type { Language } from "@/context/language-context";

export const navLinks = (lang: Language) => [
  { name: lang === 'en' ? "Home" : "Inicio", href: "#home" },
  { name: lang === 'en' ? "About Me" : "Sobre Mí", href: "#about" },
  { name: lang === 'en' ? "Work" : "Proyectos", href: "#projects" },
  { name: lang === 'en' ? "Contact" : "Contacto", href: "#contact" },
];

export const skills = [
  { name: "TypeScript", icon: Code },
  { name: "React", icon: Code },
  { name: "Next.js", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Code },
  { name: "SQL", icon: Database },
  { name: "C#", icon: Code },
  { name: ".NET", icon: Server },
];

const projectImage1 = PlaceHolderImages.find(p => p.id === 'project-1');
const projectImage2 = PlaceHolderImages.find(p => p.id === 'project-2');
const projectImage3 = PlaceHolderImages.find(p => p.id === 'project-3');
const projectImage4 = PlaceHolderImages.find(p => p.id === 'project-4');


export const projects = (lang: Language) => [
  {
    title: "Hangman Game",
    description: lang === 'en'
    ? "A word guessing game where players try to guess a hidden word by suggesting letters within a certain number of guesses."
    : "Un juego de adivinanza de palabras donde los jugadores intentan adivinar una palabra oculta sugiriendo letras dentro de un cierto número de intentos.",
    technologies: ["C"],
    imageUrl: projectImage1?.imageUrl ?? "",
    imageHint: projectImage1?.imageHint ?? "",
    githubUrl: "https://github.com/FacuPompa/Ahorcado",
  },
  {
    title: "Nier Invaders",
    description: lang === 'en' 
    ? "A Space Invaders-style game with a Nier: Automata theme, built with vanilla HTML, CSS, and JavaScript."
    : "Un juego estilo Space Invaders con temática de Nier: Automata, construido con HTML, CSS y JavaScript vainilla.",
    technologies: ["HTML", "CSS", "JavaScript"],
    imageUrl: projectImage2?.imageUrl ?? "",
    imageHint: projectImage2?.imageHint ?? "",
    githubUrl: "https://github.com/FacuPompa/Nier-Invaders",
    liveUrl: "https://nier-invaders-824r2vb34-facupompas-projects.vercel.app/",
  },
  {
    title: "Chess Game",
    description: lang === 'en'
    ? "A fully functional chess game built with Python, showcasing object-oriented programming and game logic."
    : "Un juego de ajedrez completamente funcional construido con Python, que demuestra la programación orientada a objetos y la lógica del juego.",
    technologies: ["Python", "Pygame"],
    imageUrl: projectImage3?.imageUrl ?? "",
    imageHint: projectImage3?.imageHint ?? "",
    githubUrl: "https://github.com/FacuPompa/ChessGame",
    liveUrl: "#",
  },
  {
    title: "RAWG Browser",
    description: lang === 'en'
    ? "A game browser application that consumes the RAWG API to display and search for video games."
    : "Una aplicación de navegador de juegos que consume la API de RAWG para mostrar y buscar videojuegos.",
    technologies: ["React", ["Tailwind CSS"], "API"],
    imageUrl: projectImage4?.imageUrl ?? "",
    imageHint: projectImage4?.imageHint ?? "",
    githubUrl: "https://github.com/FacuPompa/rawg-browser",
    liveUrl: "https://rawg-browser-olmkrzymk-facupompas-projects.vercel.app/",
  },
];

export const contactLinks: { name: string; url: string; icon: LucideIcon }[] = [
  {
    name: "GitHub",
    url: "https://github.com/FacuPompa",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/facundo-pompa-a25570357/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:pompafacundo4@gmail.com",
    icon: Mail,
  },
];

export const translations = {
  en: {
    hero: {
      greeting: "Facundo Pompa",
      bio: "A passionate developer and creator, building innovative solutions with a keen eye for design and a drive for excellence.",
      contactButton: "Get in Touch",
      projectsButton: "View My Work"
    },
    about: {
      title: "About Me",
      p1: "I am a dedicated and passionate developer with a strong foundation in both front-end and back-end technologies. My journey in software development is driven by a desire to solve complex problems and create meaningful, user-centric applications.",
      p2: "From personal passion projects to academic coursework, I have consistently pushed the boundaries of my knowledge, embracing new challenges and technologies. I thrive in collaborative environments and am committed to writing clean, efficient, and scalable code.",
      skillsetTitle: "My Skillset"
    },
    projects: {
      title: "My Projects",
      liveDemo: "Visit"
    },
    contact: {
      title: "Let's Connect",
      description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out."
    },
    footer: {
      copyright: "All rights reserved."
    }
  },
  es: {
    hero: {
      greeting: "Facundo Pompa",
      bio: "Un desarrollador y creador apasionado, construyendo soluciones innovadoras con un buen ojo para el diseño y un impulso por la excelencia.",
      contactButton: "Contáctame",
      projectsButton: "Ver Mis Proyectos"
    },
    about: {
      title: "Sobre Mí",
      p1: "Soy un desarrollador dedicado y apasionado con una sólida base en tecnologías tanto de front-end como de back-end. Mi viaje en el desarrollo de software está impulsado por el deseo de resolver problemas complejos y crear aplicaciones significativas y centradas en el usuario.",
      p2: "Desde proyectos personales por pasión hasta trabajos académicos, he superado constantemente los límites de mi conocimiento, aceptando nuevos desafíos y tecnologías. Prospero en entornos colaborativos y estoy comprometido a escribir código limpio, eficiente y escalable.",
      skillsetTitle: "Mis Habilidades"
    },
    projects: {
      title: "Mis Proyectos",
      liveDemo: "Visitar"
    },
    contact: {
      title: "Conectemos",
      description: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de un equipo increíble. No dudes en contactarme."
    },
    footer: {
      copyright: "Todos los derechos reservados."
    }
  }
};
