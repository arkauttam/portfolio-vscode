import { motion } from "framer-motion";
import { User, MapPin, Mail, Calendar, Award, BookOpen, Layers2 } from "lucide-react";
import { GraduationCap, School, Code2, Layers, Globe } from "lucide-react";
const content = `
# Uttam Ghosh

## AI Software Engineer



Building scalable web applications with the MERN stack. Specializing in high-performance frontend experiences, 
robust Node.js backends, and production-ready full-stack solutions using MongoDB, Express, React, and Next.js.

## About Me

Hi, I am Uttam Ghosh, a problem-solving oriented MERN Stack Developer with 2+ years of hands-on experience building scalable, 
high-performance web applications. I enjoy working on unique, real-world projects that solve meaningful problems.

My expertise spans the full full-stack development lifecycle—from crafting responsive React interfaces to designing robust Node.js 
& Express APIs and optimizing MongoDB databases for scale and performance.I believe in building applications that are not just functional, 
but also maintainable, reliable, and production-ready.

---

## Philosophy

> "The best code is no code at all. The best AI is one that solves real problems elegantly."

I approach every project with a focus on impact. Before writing a single line of code, 
I ask: What problem are we solving? Who benefits? How do we measure success?

---

## Education

- **Petbindhi D.K.M High School** — 12th Grade - WBCHSE
- **Jhargram Raj College** — Bachelor of Arts (B.A.)
- **Code with Random** — Web Development Basics
- **Masai School** — React Development
- **Get SDE Ready** — Next.js Projects
- **Bengali Coding Academy** — MERN Stack
---

## Certifications

- AWS Certified Machine Learning Specialty
- Google Cloud Professional ML Engineer
- TensorFlow Developer Certificate
`;

const educationData = [
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
    skills: [
      "React.js",
      "JavaScript",
      "UI Development",
    ],
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
const formatDate = (date) => {
  if (!date) return "";
  if (/^\d{4}$/.test(date)) return date;

  const [month, year] = date.split("/");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return `${months[Number(month) - 1]} ${year}`;
};

export function AboutTab() {
  const lines = content.trim().split("\n");

  return (
    <div className="min-h-full flex">
      {/* Line numbers */}
      <div className="hidden md:flex flex-col items-end pr-4 pl-4 py-6 select-none text-muted-foreground/50 font-mono text-sm border-r border-border">
        {lines.map((_, i) => (
          <div key={i} className="h-7 leading-7">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 max-w-4xl">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-6 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-glow-cyan flex items-center justify-center text-3xl font-bold text-primary-foreground"
          >
            <img src="/uttam.png" alt="Uttam Ghosh" className="w-24 h-24 rounded-full object-cover" />
          </motion.div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground mb-2">Uttam Ghosh</h1>
            <p className="text-lg text-syntax-type mb-3">Software Engineer</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                Kolkata, IND
              </span>
              <span className="flex items-center gap-1">
                <Mail size={14} />
                uttamghosh7215@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                2+ years
              </span>
            </div>
          </div>
        </motion.div>

        {/* Markdown Content */}
        <div className="prose prose-invert max-w-none">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground/90 leading-relaxed mb-8"
          >
            Building scalable web applications with the MERN stack. Specializing in high-performance frontend experiences, robust Node.js backends,
            and production-ready full-stack solutions using MongoDB, Express, React, and Next.js.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border-t border-border pt-6 mb-6"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <User size={20} className="text-primary" />
              About Me
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Hi, I am Uttam Ghosh, a problem-solving oriented MERN Stack Developer with 2+ years of hands-on experience building scalable,
              high-performance web applications. I enjoy working on unique, real-world projects that solve meaningful problems.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My expertise spans the full full-stack development lifecycle—from crafting responsive React interfaces to designing robust Node.js
              & Express APIs and optimizing MongoDB databases for scale and performance.I believe in building applications that are not just functional,
              but also maintainable, reliable, and production-ready.
            </p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="border-l-4 border-primary pl-4 py-2 my-6 text-muted-foreground italic"
          >
            "The best code is no code at all. The best AI is one that solves real
            problems elegantly."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-t border-border pt-6 mb-6"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-primary" />
              Education
            </h2>
            <div className="relative space-y-6">
              <div className="absolute left-5 top-0 h-full w-px bg-border" />


              {educationData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative flex gap-4"
                  >
                    <div
                      className={`z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                    >
                      <Icon size={18} />
                    </div>


                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="w-full rounded-xl border border-border bg-card p-4 shadow-sm backdrop-blur transition-all"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-foreground">
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {item.title}
                            </a>
                          ) : (
                            item.title
                          )}
                        </h4>
                        {item.startDate && item.endDate && (
                          <span className="text-xs rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                            {formatDate(item.startDate)} – {formatDate(item.endDate)}
                          </span>
                        )}

                      </div>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-t border-border pt-6"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award size={20} className="text-primary" />
              Certifications
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Development",
                "React Development",
                "Next.js",
                "MERN Stack",
              ].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
