import { motion, AnimatePresence } from "framer-motion";
import type { TabId } from "./VSCodeLayout";
import { WelcomeTab } from "../tabs/WelcomeTab";
import { AboutTab } from "../tabs/AboutTab";
import { ProjectsTab } from "../tabs/ProjectsTab";
import { ExperienceTab } from "../tabs/ExperienceTab";
import { ContactTab } from "../tabs/ContactTab";
import { Project } from "@/data/data";


interface EditorContentProps {
  activeTab: TabId;
  onFileClick: (tabId: TabId) => void;
  selectedProject: Project | null;
}

interface TabComponentProps {
  onFileClick?: (tabId: TabId) => void;
  selectedProject?: Project | null;
}

const tabComponents: Record<TabId, React.ComponentType<TabComponentProps>> = {
  welcome: WelcomeTab,
  about: AboutTab,
  projects: ProjectsTab,
  experience: ExperienceTab,
  contact: ContactTab,
};

export function EditorContent({
  activeTab,
  onFileClick,
  selectedProject,
}: EditorContentProps) {
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="flex-1 bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="h-full overflow-y-auto"
        >
          {activeTab === "welcome" ? (
            <ActiveComponent onFileClick={onFileClick} />
          ) : activeTab === "projects" ? (
            <ActiveComponent selectedProject={selectedProject} />
          ) : (
            <ActiveComponent />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
