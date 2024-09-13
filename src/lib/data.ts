import corpcommentImg from "../../public/img1.png";
import rmtdevImg from "../../public/img1.png";
import wordanalyticsImg from "../../public/img1.png";
import { IconType } from "react-icons";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiGit, SiTailwindcss, SiPrisma, SiMongodb, SiRedux, SiGraphql, SiApollographql, SiExpress, SiPostgresql, SiPython, SiDjango, SiFramer, SiDocker } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData: { name: string; icon: IconType }[] = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Git", icon: SiGit },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Docker", icon: SiDocker},
];
