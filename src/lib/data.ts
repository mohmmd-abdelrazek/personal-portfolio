import mobiTrendImg from "../../public/mobitrend.png";
import koraImg from "../../public/kora.png";
import { IconType } from "react-icons";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiGit, SiTailwindcss, SiPrisma, SiMongodb, SiRedux, SiGraphql, SiApollographql, SiExpress, SiPostgresql, SiPython, SiDjango, SiFramer, SiDocker } from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
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
    title: "MobiTrend | Mobile Ecommerce",
    description:
      " Developed an e-commerce platform for mobile phones with features including User Authentication, Product Filtering, Product Pages with Slugs and Admin Dashboard for Inventory Management.",
    tags: ["React", "Next.js", "Tailwind", "Express.js", "MongoDB", "NGINX", "Docker", "Stripe"],
    imageUrl: mobiTrendImg,
    link: "https://mobitrend.onrender.com",
  },
  {
    title: "Kora | League Creation App",
    description:
      "Developed a web app to create and manage custom football leagues, featuring Stripe Payments with Webhooks, League Pages with Auto-Schedule, Multi-Language Support (Arabic/English) and Dashboard for Created Leagues",
    tags: ["TypeScript", "Next.js", "Tailwind", "Express.js", "PostgreSQL", "NGINX", "Docker"],
    imageUrl: koraImg,
    link: "https://kora-w5ux.onrender.com"
  },
] as const;

export const skillsData: { name: string; icon: IconType }[] = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker},
];
