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
  img: string;
}

export const projects: Project[] = [
  {
    id: "online-savaari",
    name: "Online Ticket Booking System",
    description:
      "Developed and scaled a comprehensive travel-tech platform offering Flights, Hotels, Visa services, Travel Insurance, eSIM, Airport Lounge access, Holidays, and Activities. Built multiple end-to-end user journeys including search, comparison, booking, and payment flows while integrating 5+ airline APIs and other third-party services, supporting 1000+ daily searches across modules.",
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Google OCR API",
      "Airline APIs",
      "ShadCN UI",
      "JavaScript",
      "REST APIs",
      "Razorpay",
      "Performance Optimization",
      "Reusable Components",
      "Responsive Design",
    ],
    problem:
      "Complex airline APIs and slow UI interactions caused a poor booking experience and high drop-offs during checkout.",
    solution:
      "Built a modular, scalable frontend with optimized search rendering, normalized API responses, and a smooth Razorpay payment flow with real-time UI feedback.",
    impact:
      "Improved booking completion rate by ~40% and reliably handled 1000+ daily searches with a fast, stable user experience.",
    github: "https://github.com",
    live: "https://onlinesavaari.com",
    img: "/savaari.webp",
  },
  {
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    description:
      "Full-featured e-commerce web application supporting complete shopping workflows including product listing, advanced filtering, product detail pages, cart management, and checkout experience. Built with a focus on performance, scalability, and responsive design to deliver a seamless shopping experience across mobile and desktop devices.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
      "ShadCN UI",
    ],
    problem:
      "Product discovery was slow and inconsistent due to inefficient filtering logic and unoptimized API calls, especially on mobile devices.",
    solution:
      "Implemented optimized client-side and server-side data handling, fast filtering and sorting mechanisms, reusable UI components, and a mobile-first checkout flow.",
    impact:
      "Improved page load and filtering performance by ~35%, increased session duration, and enhanced overall user engagement across all screen sizes.",
    github: "https://github.com",
    live: "https://next-e-commerce.onrender.com",
    img: "/ecommerce.svg",
  },
  {
    id: "grocery-bays",
    name: "Grocery Bays E-commerce",
    description:
      "End-to-end grocery e-commerce platform enabling users to browse products, search categories, manage carts, and place orders with a strong emphasis on mobile usability. Focused on improving conversion, performance, and accessibility for daily-use shoppers.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    problem:
      "The existing platform suffered from high bounce rates, poor mobile navigation, and slow page loads, negatively impacting conversions.",
    solution:
      "Redesigned the complete user interface with a modern layout, optimized product grids, improved navigation flow, responsive breakpoints, and optimized images and assets.",
    impact:
      "Reduced bounce rate by ~25%, improved mobile retention, and increased overall engagement and usability for repeat customers.",
    github: "https://github.com",
    live: "https://www.grocerybays.com/",
    img: "/grocery.png",
  },
  {
    id: "pdf-analyzer",
    name: "AI-Powered PDF Analyzer",
    description:
      "AI-powered document analysis tool that allows users to upload PDFs such as resumes, reports, and research papers and instantly receive structured insights. Uses LangChain with the Google Gemini API to generate summaries, extract key points, suggest actions, and perform advanced resume analysis.",
    tech: [
      "LangChain",
      "Google Gemini API",
      "TypeScript",
      "Next.js",
      "ShadCN UI",
    ],
    problem:
      "Manually reviewing long documents and resumes was time-consuming, inconsistent, and inefficient for quick decision-making.",
    solution:
      "Built an AI-driven pipeline using LangChain and Gemini to parse PDFs, generate concise summaries, extract key insights, and provide actionable recommendations through a clean, user-friendly interface.",
    impact:
      "Reduced document review time by ~30%, enabling analysis of 50+ PDFs daily in under 5 seconds. Includes a Resume Special Mode with AI-generated resume scores, improvement suggestions, job domain fit analysis, and one-click export of insights as PDF or DOC.",
    github: "https://github.com",
    live: "https://ai-powered-pdf-analyzer.onrender.com",
    img: "/pdf.png",
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
      "Developed and scaled a comprehensive travel-tech platform offering Flights, Hotels, Visa services, Travel Insurance, eSIM, Airport Lounge access, Holidays, and Activities. Built multiple end-to-end user journeys including search, comparison, booking, and payment flows while integrating 5+ airline APIs and other third-party services, supporting 1000+ daily searches across modules.",
    achievements: [
      "Built complete booking flows for Flights, Hotels, Visa, Insurance, eSIM, Lounge, Holidays, and Activities modules",
      "Integrated 5+ airline APIs enabling 100+ daily flight searches with optimized search and filter experiences",
      "Designed and implemented scalable, reusable UI components using React, Next.js, and ShadCN UI",
      "Improved booking completion rate by ~40% through UX improvements and performance optimizations",
      "Integrated secure Razorpay payment flow with robust error handling and edge-case coverage",
      "Collaborated closely with backend teams to optimize API contracts and reduce redundant network calls",
      "Implemented mobile-first, responsive designs across all major booking and checkout screens",
      "Enhanced overall application performance using code-splitting, memoization, and efficient state management",
    ],
    tech: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Google OCR API",
      "Airline APIs",
      "ShadCN UI",
      "JavaScript",
      "REST APIs",
      "Razorpay",
      "Performance Optimization",
      "Reusable Components",
      "Responsive Design",
    ],
  },
  {
    company: "GroceryBays",
    role: "Frontend Developer (Part-time)",
    period: "May 2023 - December 2023",
    location: "Kolkata, India",
    description:
      "Worked on a grocery e-commerce platform focused on improving usability, performance, and discoverability. Led UI redesign efforts to enhance customer experience across product listing, search, and checkout flows, resulting in higher engagement and improved mobile performance.",
    achievements: [
      "Redesigned core pages including Home, Product Listing, Product Detail, and Cart for better usability",
      "Made the entire website fully responsive across mobile, tablet, and desktop devices",
      "Reduced mobile bounce rate by ~25% through layout restructuring and performance improvements",
      "Optimized images, assets, and CSS to significantly improve page load times",
      "Improved SEO through semantic HTML, better heading structure, and optimized metadata",
      "Collaborated with product and business stakeholders to iterate on UI/UX based on real user feedback",
    ],
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "UI/UX Improvements",
      "SEO Optimization",
      "Performance Optimization",
    ],
  },
];

