import { experiences } from "@/data/data";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";


export function ExperienceTab() {
  return (
    <div className="min-h-full flex">
      {/* Line numbers */}
      <div className="hidden md:flex flex-col items-end pr-4 pl-4 py-6 select-none text-muted-foreground/50 font-mono text-sm border-r border-border">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="h-6 leading-6">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-8 font-mono text-sm">
        {/* JSON-style header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <span className="text-foreground">{"{"}</span>
          <div className="ml-4">
            <span className="text-syntax-variable">"experience"</span>
            <span className="text-foreground">: [</span>
          </div>
        </motion.div>

        {/* Experiences */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="ml-8 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
            >
              {index < experiences.length && (
                <div className="text-foreground mt-2 -mb-2">{"{"}</div>
              )}
              {/* Header */}
              <div className="flex mt-4 flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-sans flex items-center gap-2">
                    <Building2 size={18} className="text-primary" />
                    {exp.company}
                  </h3>
                  <p className="text-syntax-type">{exp.role}</p>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-xs">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/80 font-sans text-sm mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-4">
                <span className="text-syntax-comment text-xs">// Key Achievements</span>
                <ul className="mt-2 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-foreground/70 font-sans text-xs"
                    >
                      <ChevronRight size={12} className="mt-0.5 text-syntax-type" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-muted text-syntax-string rounded text-xs"
                  >
                    "{tech}"
                  </span>
                ))}
              </div>

              {/* JSON comma */}
              {index < experiences.length && (
                <div className="text-foreground mt-2 -mb-2">{"},"}</div>
              )}
            </motion.div>
          ))}
        </div>

        {/* JSON-style footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <div className="ml-4">
            <span className="text-foreground">]</span>
          </div>
          <span className="text-foreground">{"}"}</span>
        </motion.div>
      </div>
    </div>
  );
}
