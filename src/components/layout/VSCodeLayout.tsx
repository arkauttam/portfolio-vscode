import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ActivityBar } from "./ActivityBar";
import { Sidebar } from "./Sidebar";
import { TabBar } from "./TabBar";
import { StatusBar } from "./StatusBar";
import { EditorContent } from "./EditorContent";
import { CommandPalette } from "./CommandPalette";
import { TitleBar } from "./TitleBar";
import { Project, projects } from "@/data/data";

export type TabId = "welcome" | "about" | "projects" | "experience" | "contact";



export interface Tab {
  id: TabId;
  label: string;
  icon: string;
  filename: string;
}

const tabs: Tab[] = [
  { id: "welcome", label: "Welcome", icon: "tsx", filename: "welcome.tsx" },
  { id: "about", label: "About", icon: "md", filename: "README.md" },
  { id: "projects", label: "Projects", icon: "folder", filename: "projects/" },
  { id: "experience", label: "Experience", icon: "json", filename: "experience.json" },
  { id: "contact", label: "Contact", icon: "tsx", filename: "contact.tsx" },
];


export function VSCodeLayout() {
  const [activeTab, setActiveTab] = useState<TabId>("welcome");
  const [openTabs, setOpenTabs] = useState<TabId[]>(["welcome"]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const handleFileClick = (tabId: TabId) => {
    if (!openTabs.includes(tabId)) {
      setOpenTabs([...openTabs, tabId]);
    }
    setActiveTab(tabId);
  };

  const handleTabClose = (tabId: TabId) => {
    const newTabs = openTabs.filter((t) => t !== tabId);
    setOpenTabs(newTabs);
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "p") {
      e.preventDefault();
      setCommandPaletteOpen(true);
    }
  };

  return (
    <div
      className="h-screen w-screen flex flex-col bg-background overflow-hidden"
      onKeyDown={handleKeyDown}
      tabIndex={0}

    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Title Bar */}
        <TitleBar />
        {/* Command Palette */}
        <AnimatePresence>
          {commandPaletteOpen && (
            <CommandPalette
              tabs={tabs}
              onSelect={(id) => {
                handleFileClick(id);
                setCommandPaletteOpen(false);
              }}
              onClose={() => setCommandPaletteOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Activity Bar */}
          <ActivityBar
            sidebarOpen={sidebarOpen}
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            onFileClick={handleFileClick}

          />

          {/* Sidebar */}
          <AnimatePresence>
            {sidebarOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 260, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <Sidebar
                  tabs={tabs}
                  activeTab={activeTab}
                  onFileClick={handleFileClick}
                  projects={projects}
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                />

              </motion.div>
            )}
          </AnimatePresence>

          {/* Editor Area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Tab Bar */}
            <TabBar
              tabs={tabs.filter((t) => openTabs.includes(t.id))}
              activeTab={activeTab}
              onTabClick={setActiveTab}
              onTabClose={handleTabClose}
              onCommandPalette={() => setCommandPaletteOpen(true)}
            />

            {/* Editor Content */}
            <EditorContent activeTab={activeTab} onFileClick={handleFileClick} selectedProject={selectedProject} />
          </div>
        </div>

        {/* Status Bar */}
        <StatusBar activeTab={activeTab} />
      </div>
    </div>
  );
}
