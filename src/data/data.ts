import {
  GraduationCap,
  School,
  Code2,
  Layers,
  Globe,
  Layers2,
} from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    id: "online-savaari",
    name: "Online Ticket Booking System",
    description:
      "End-to-end flight booking platform integrating multiple airline APIs with secure payments and optimized UI performance.",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay API",
      "REST API",
      "ShadCN UI",
    ],
    problem:
      "Complex airline APIs and slow UI interactions caused poor booking experience and drop-offs during checkout.",
    solution:
      "Built a modular frontend with optimized search rendering, normalized API responses, and a smooth Razorpay payment flow with real-time UI feedback.",
    impact:
      "Improved booking completion rate by 40% and handled 100+ daily flight searches with a fast, reliable user experience.",
    github: "https://github.com",
    live: "https://onlinesavaari.com",
  },
  {
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    description:
      "Modern e-commerce application with fast filtering, responsive design, and optimized frontend performance.",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "API Integration",
      "ShadCN UI",
    ],
    problem:
      "Slow filtering and poor mobile responsiveness made product discovery difficult for users.",
    solution:
      "Implemented client-side filtering, optimized API calls, and reusable UI components with a mobile-first approach.",
    impact:
      "Improved page performance by 35% and increased user engagement across all screen sizes.",
    github: "https://github.com",
    live: "https://vercel.com",
  },
  {
    id: "grocery-bays",
    name: "Grocery Bays E-commerce",
    description:
      "Responsive grocery delivery website redesign focused on mobile users.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    problem:
      "High bounce rate caused by outdated layout and poor mobile usability.",
    solution:
      "Redesigned UI with a clean layout, better spacing, and improved mobile responsiveness.",
    impact: "Reduced bounce rate by 25% and improved mobile user retention.",
    github: "https://github.com",
    live: "https://netlify.com",
  },
  {
    id: "pdf-analyzer",
    name: "AI-Powered PDF Analyzer",
    description:
      "AI tool that analyzes PDFs and generates instant summaries using LangChain and Gemini.",
    tech: [
      "LangChain",
      "Google Gemini API",
      "TypeScript",
      "Next.js",
      "ShadCN UI",
    ],
    problem: "Manual PDF review was time-consuming and inefficient.",
    solution:
      "Integrated LangChain with Gemini API to generate fast, accurate summaries and insights.",
    impact:
      "Reduced document review time by 30%, processing 50+ PDFs daily in under 5 seconds.",
    github: "https://github.com",
    live: "https://vercel.com",
  },
];
export const educationData = [
  {
    id: 1,
    title: "Petbindhi D.K.M High School",
    subtitle: "12th Grade - WBCHSE",
    startDate: "01/2018",
    endDate: "03/2020",
    skills: [
      "Bengali",
      "English",
      "Nutrition",
      "Physical education",
      "Basic Computer Skills",
      "Logical Thinking",
      "Problem Solving",
    ],
    icon: School,
    link: "https://school.banglarshiksha.gov.in/ws/website/index/19230906602",
    gradient: "from-red-700 to-red-900",
  },
  {
    id: 2,
    startDate: "05/2020",
    endDate: "08/2023",
    skills: [
      "Critical Thinking",
      "Communication",
      "Problem Solving",
      "Research",
    ],
    title: "Jhargram Raj College",
    subtitle: "Bachelor of Arts (B.A.)",
    icon: GraduationCap,
    link: "https://jrc.ac.in/",
    gradient: "from-red-500 to-red-700",
  },
  {
    id: 3,
    startDate: "02/2022",
    endDate: "09/2022",
    title: "Code with Random",
    subtitle: "Web Development Basics",
    icon: Globe,
    link: "https://codewithrandom.com/",
    gradient: "from-yellow-500 to-yellow-700",
  },
  {
    id: 4,
    startDate: "12/2022",
    endDate: "03/2023",
    skills: ["React.js", "JavaScript", "UI Development"],
    title: "Masai School",
    subtitle: "React Development",
    icon: Layers2,
    link: "https://masaischool.com/",
    gradient: "from-green-500 to-green-700",
  },
  {
    id: 5,
    startDate: "06/2023",
    endDate: "11/2023",
    skills: [
      "Next.js",
      "React.js",
      "Server-Side Rendering",
      "Static Site Generation",
    ],
    title: "Get SDE Ready",
    subtitle: "Next.js Projects",
    icon: Layers,
    link: "https://getsderedy.com/",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    id: 6,
    startDate: "02/2024",
    endDate: "07/2024",
    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Full Stack Development",
    ],
    title: "Bengali Coding Academy",
    subtitle: "MERN Stack",
    icon: Code2,
    link: "https://bengalicodingacademy.com/",
    gradient: "from-blue-500 to-blue-700",
  },
];


export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "Online Savaari",
    role: "Frontend Developer",
    period: "January 2024 - Present",
    location: "Kolkata, India",
    description:
      "Built an end-to-end flight booking platform integrating 5+ airline APIs, handling 100+ daily searches. Implemented Razorpay payments and optimized UI flows, reducing booking drop-offs and improving overall performance.",
    achievements: [
      "Integrated 5+ airline APIs enabling 100+ daily flight searches",
      "Designed and implemented scalable, reusable UI components using React and ShadCN UI",
      "Improved booking completion rate by ~40% through UX and performance optimizations",
      "Integrated secure Razorpay payment flow with error handling and edge-case coverage",
      "Collaborated with backend teams to optimize API contracts and reduce redundant calls",
      "Ensured mobile-first responsiveness across all critical booking screens",
    ],
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "ShadCN UI",
      "JavaScript",
      "REST APIs",
      "Performance Optimization",
      "Reusable Components",
    ],
  },
  {
    company: "GroceryBays",
    role: "Frontend Developer (Part-time)",
    period: "May 2023 - December 2023",
    location: "Kolkata, India",
    description:
      "Redesigned and optimized the grocery e-commerce UI with a strong focus on responsiveness, accessibility, and SEO, leading to improved engagement and lower bounce rates.",
    achievements: [
      "Redesigned website layout to be fully responsive across mobile, tablet, and desktop",
      "Reduced mobile bounce rate by ~25% through layout and performance improvements",
      "Optimized images and assets to improve page load times",
      "Improved on-page SEO structure and semantic HTML usage",
      "Worked closely with product stakeholders to iterate on UI/UX feedback",
    ],
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "UI Components",
      "SEO Optimization",
      "Performance Improvement",
    ],
  },
];
