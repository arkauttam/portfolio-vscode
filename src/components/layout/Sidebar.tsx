import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  FileCode,
  FileText,
  FolderOpen,
  FolderClosed,
  FileJson,
} from "lucide-react";
import type { Tab, TabId } from "./VSCodeLayout";
import { Project } from "@/data/data";

interface SidebarProps {
  tabs: Tab[];
  activeTab: TabId;
  onFileClick: (tabId: TabId) => void;
  projects: Project[];
  selectedProject: Project | null;
  setSelectedProject: (project: Project) => void;
}

const getFileIcon = (icon: string, isOpen = true) => {
  switch (icon) {
    case "tsx":
    case "ts":
      return <FileCode className="w-4 h-4 text-syntax-variable" />;
    case "md":
      return <FileText className="w-4 h-4 text-syntax-string" />;
    case "json":
      return <FileJson className="w-4 h-4 text-syntax-function" />;
    case "folder":
      return isOpen ? (
        <FolderOpen className="w-4 h-4 text-syntax-function" />
      ) : (
        <FolderClosed className="w-4 h-4 text-syntax-function" />
      );
    default:
      return <FileCode className="w-4 h-4 text-syntax-variable" />;
  }
};

export function Sidebar({
  tabs,
  activeTab,
  onFileClick,
  projects,
  selectedProject,
  setSelectedProject,
}: SidebarProps) {
  const [explorerOpen, setExplorerOpen] = useState(true);
  const [srcOpen, setSrcOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [publicOpen, setPublicOpen] = useState(false);
  const [nodeModulesOpen, setNodeModulesOpen] = useState(false);

  return (
    <div className="h-full bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* HEADER */}
      <div className="h-9 px-4 flex items-center text-[11px] font-medium uppercase tracking-wider text-sidebar-foreground/70">
        Explorer
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* ROOT */}
        <motion.button
          onClick={() => setExplorerOpen((prev) => !prev)}
          className="w-full px-2 py-1 flex items-center gap-1 text-[13px] font-semibold text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <motion.span animate={{ rotate: explorerOpen ? 90 : 0 }}>
            <ChevronRight className="w-4 h-4" />
          </motion.span>
          <span className="uppercase text-[11px]">portfolio</span>
        </motion.button>

        <AnimatePresence>
          {explorerOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pl-4">
                {/* SRC FOLDER */}
                <motion.button
                  onClick={() => setSrcOpen((prev) => !prev)}
                  className="w-full flex items-center gap-1 px-2 py-1 text-[13px] hover:bg-sidebar-accent/50"
                >
                  {srcOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  {getFileIcon("folder", srcOpen)}
                  <span>src</span>
                </motion.button>

                <AnimatePresence>
                  {srcOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 overflow-hidden"
                    >
                      {tabs.map((tab, index) => {
                        const isProjects = tab.id === "projects";

                        return (
                          <div key={tab.id}>
                            <motion.button
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.04 }}
                              onClick={() =>
                                isProjects
                                  ? setProjectsOpen((prev) => !prev)
                                  : onFileClick(tab.id)
                              }
                              className={`
                                w-full px-2 py-1 flex items-center gap-2 text-[13px]
                                ${activeTab === tab.id
                                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                  : "hover:bg-sidebar-accent/50"
                                }
                              `}
                            >
                              {isProjects && (
                                <motion.span animate={{ rotate: projectsOpen ? 90 : 0 }}>
                                  <ChevronRight className="w-4 h-4" />
                                </motion.span>
                              )}

                              {isProjects
                                ? getFileIcon("folder", projectsOpen)
                                : getFileIcon(tab.icon)}

                              <span>{tab.filename}</span>
                            </motion.button>

                            {/* PROJECT FILES */}
                            <AnimatePresence>
                              {isProjects && projectsOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="pl-6 overflow-hidden"
                                >
                                  {projects.map((project) => (
                                    <button
                                      key={project.id}
                                      onClick={() => {
                                        setSelectedProject(project);
                                        onFileClick("projects");
                                      }}
                                      className={`
                                        w-full flex items-center gap-2 px-2 py-1 text-[13px]
                                        ${selectedProject?.id === project.id
                                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                          : "hover:bg-sidebar-accent/50"
                                        }
                                      `}
                                    >
                                      <FileCode className="w-4 h-4" />
                                      {project.id}.tsx
                                    </button>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* PUBLIC FOLDER */}


                {/* ROOT FILES */}
                <div className="pl-4 mt-2 opacity-60">
                  <button
                    className="w-full px-2 py-1 flex items-center gap-2 text-[13px]"
                  >
                    {getFileIcon("folder", publicOpen)}
                    <span>public</span>
                  </button>
                  <button className="w-full px-2 py-1 flex items-center gap-2 text-[13px]">
                    <FileJson className="w-4 h-4" />
                    <span>package.json</span>
                  </button>
                  <button className="w-full px-2 py-1 flex items-center gap-2 text-[13px]">
                    <FileJson className="w-4 h-4" />
                    <span>tsconfig.json</span>
                  </button>
                  <button className="w-full px-2 py-1 flex items-center gap-2 text-[13px]">
                    <FileCode className="w-4 h-4" />
                    <span>vite.config.ts</span>
                  </button>
                  <button className="w-full px-2 py-1 flex items-center gap-2 text-[13px]">
                    <FileCode className="w-4 h-4" />
                    <span>index.html</span>
                  </button>

                  {/* NODE_MODULES */}
                  <button
                    className="w-full px-2 py-1 flex items-center gap-2 text-[13px]"
                  >
                    {getFileIcon("folder", nodeModulesOpen)}
                    <span>node_modules</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
