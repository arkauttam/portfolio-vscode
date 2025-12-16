import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FolderOpen, FileCode, ExternalLink, Github, Star, GitFork } from "lucide-react";

interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  impact: string;
  github?: string;
  live?: string;
  stars?: number;
  forks?: number;
}

const projects: Project[] = [
  {
    id: "llm-orchestrator",
    name: "LLM Orchestrator",
    description: "Production-grade LLM orchestration framework",
    tech: ["Python", "FastAPI", "Redis", "Kubernetes", "OpenAI"],
    problem: "Managing multiple LLM providers with consistent interfaces, handling rate limits, fallbacks, and cost optimization at scale.",
    solution: "Built a unified orchestration layer with intelligent routing, automatic failover, semantic caching, and cost-aware load balancing.",
    impact: "Reduced LLM API costs by 40% and improved p99 latency from 2s to 200ms for 10M+ daily requests.",
    github: "https://github.com",
    stars: 2400,
    forks: 340,
  },
  {
    id: "neural-search",
    name: "Neural Search Engine",
    description: "Enterprise semantic search platform",
    tech: ["PyTorch", "FAISS", "Elasticsearch", "Go", "React"],
    problem: "Traditional keyword search failing to surface relevant documents across 50M+ enterprise documents.",
    solution: "Implemented hybrid search combining dense retrieval (custom embeddings) with BM25, using learned re-ranking for optimal results.",
    impact: "Increased search relevance by 65% and reduced time-to-find from 5min to 10s for 10K daily users.",
    github: "https://github.com",
    live: "https://example.com",
    stars: 1800,
    forks: 220,
  },
  {
    id: "ml-platform",
    name: "ML Platform",
    description: "End-to-end MLOps infrastructure",
    tech: ["Kubernetes", "Kubeflow", "MLflow", "Terraform", "Python"],
    problem: "Data scientists spending 60% of time on infrastructure instead of modeling.",
    solution: "Built self-service ML platform with one-click model training, automated hyperparameter tuning, and continuous deployment pipelines.",
    impact: "Reduced model deployment time from weeks to hours, enabling 5x more experiments per quarter.",
    github: "https://github.com",
    stars: 3200,
    forks: 450,
  },
  {
    id: "realtime-fraud",
    name: "Real-time Fraud Detection",
    description: "Sub-millisecond fraud scoring system",
    tech: ["Flink", "Kafka", "XGBoost", "Feature Store", "Redis"],
    problem: "Existing batch fraud detection missing fast-moving fraud patterns, causing $2M monthly losses.",
    solution: "Designed streaming ML pipeline with real-time feature engineering, online model serving, and automatic model updates.",
    impact: "Detected 40% more fraud while maintaining <5ms latency for 100K TPS.",
    github: "https://github.com",
    stars: 890,
    forks: 120,
  },
];

export function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["projects"]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folder) ? prev.filter((f) => f !== folder) : [...prev, folder]
    );
  };

  return (
    <div className="min-h-full flex flex-col md:flex-row">
      {/* File Tree */}
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border bg-sidebar p-4">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Projects Explorer
        </div>
        
        <button
          onClick={() => toggleFolder("projects")}
          className="w-full flex items-center gap-2 py-1 text-sm text-sidebar-foreground hover:text-foreground transition-colors"
        >
          {expandedFolders.includes("projects") ? (
            <FolderOpen size={16} className="text-syntax-function" />
          ) : (
            <Folder size={16} className="text-syntax-function" />
          )}
          <span>projects/</span>
        </button>

        <AnimatePresence>
          {expandedFolders.includes("projects") && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-4 mt-1 space-y-1 overflow-hidden"
            >
              {projects.map((project, index) => (
                <motion.button
                  key={project.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className={`w-full flex items-center gap-2 py-1 px-2 text-sm rounded transition-colors ${
                    selectedProject?.id === project.id
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  }`}
                >
                  <FileCode size={14} className="text-syntax-variable" />
                  <span className="truncate">{project.id}.tsx</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Details */}
      <div className="flex-1 p-6 overflow-y-auto">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    {selectedProject.name}
                  </h1>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-6">
                {selectedProject.stars && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star size={14} className="text-syntax-function" />
                    <span>{selectedProject.stars.toLocaleString()}</span>
                  </div>
                )}
                {selectedProject.forks && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <GitFork size={14} />
                    <span>{selectedProject.forks.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-muted text-sm text-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Code-style details */}
              <div className="font-mono text-sm space-y-6 bg-card p-6 rounded-lg border border-border">
                <div>
                  <span className="text-syntax-comment">// Problem Statement</span>
                  <p className="text-foreground mt-2">{selectedProject.problem}</p>
                </div>
                <div>
                  <span className="text-syntax-comment">// Solution</span>
                  <p className="text-foreground mt-2">{selectedProject.solution}</p>
                </div>
                <div>
                  <span className="text-syntax-comment">// Impact</span>
                  <p className="text-syntax-type mt-2 font-semibold">{selectedProject.impact}</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex items-center justify-center text-muted-foreground"
            >
              <div className="text-center">
                <Folder size={48} className="mx-auto mb-4 opacity-50" />
                <p>Select a project from the explorer to view details</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
