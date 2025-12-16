import { motion, AnimatePresence } from "framer-motion";
import type { TabId } from "./VSCodeLayout";
import { WelcomeTab } from "../tabs/WelcomeTab";
import { AboutTab } from "../tabs/AboutTab";
import { ProjectsTab } from "../tabs/ProjectsTab";
import { ExperienceTab } from "../tabs/ExperienceTab";
import { ContactTab } from "../tabs/ContactTab";

interface EditorContentProps {
  activeTab: TabId;
  onFileClick: (tabId: TabId) => void;
}

// Optional prop for tabs that need onFileClick
interface TabComponentProps {
  onFileClick?: (tabId: TabId) => void;
}

// Map of tab components
const tabComponents: Record<TabId, React.ComponentType<TabComponentProps>> = {
  welcome: WelcomeTab,
  about: AboutTab,
  projects: ProjectsTab,
  experience: ExperienceTab,
  contact: ContactTab,
};

export function EditorContent({ activeTab, onFileClick }: EditorContentProps) {
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="flex-1 bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="h-full overflow-y-auto"
        >
          {/* Only WelcomeTab uses onFileClick */}
          {activeTab === "welcome" ? (
            <ActiveComponent onFileClick={onFileClick} />
          ) : (
            <ActiveComponent />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
