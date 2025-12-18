import { experiences } from "@/data/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Calendar, MapPin, ChevronRight, ExternalLink, Code, Award, CodeXml } from "lucide-react";

export function ExperienceTab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = experiences[activeIndex];

  return (
    <div className="min-h-full flex flex-col lg:flex-row gap-6 p-4 md:p-8 max-w-7xl mx-auto">
      {/* Company List */}
      <div className="lg:w-1/3">
        <div className="sticky top-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Experience</h1>
            <p className="text-muted-foreground text-sm mt-1">
              {experiences.length} roles, {experiences.reduce((acc, exp) => acc + exp.tech.length, 0)} technologies
            </p>
          </div>

          <div className="space-y-2">
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.company}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${activeIndex === index
                  ? 'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20'
                  : 'hover:bg-muted/50 border border-transparent'
                  }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{exp.role}</p>
                  </div>
                  <ChevronRight size={16} className={`transition-transform ${activeIndex === index ? 'rotate-90 text-primary' : 'text-muted-foreground'}`} />
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.period.split('–')[0]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Code size={12} />
                    {exp.tech.length} techs
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed View */}
      <div className="lg:w-2/3">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-2xl p-6 md:p-8"
        >
          {/* Header */}
          <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-start md:justify-between">
            {/* Left Content */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <Building2 size={22} className="text-primary" />
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-foreground">
                    {activeExp.company}
                  </h2>
                  <p className="text-base md:text-lg text-primary font-medium">
                    {activeExp.role}
                  </p>
                </div>
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground md:ml-12">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {activeExp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {activeExp.location}
                </span>
              </div>
            </div>

            {/* Period Badge */}
            <div className="self-start md:self-auto text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
              {activeExp.period.split("–")[0].trim()}
            </div>
          </div>


          {/* Description */}
          <div className="mb-8">
            <p className="text-foreground/80 leading-relaxed">{activeExp.description}</p>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Award size={18} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Key Achievements</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeExp.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg"
                >
                  <div className="mt-0.5 w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground/70">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CodeXml size={20} className="text-primary font-extrabold" />
              <h3 className="text-lg font-semibold text-foreground">Technologies Used</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeExp.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 text-[#ce9178] rounded-lg text-sm font-medium border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <span className="text-[#ce9178]">"</span>
                  {tech}
                  <span className="text-[#ce9178]">"</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}