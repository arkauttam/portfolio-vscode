import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown, FileCode, FileText, FolderOpen, FileJson } from "lucide-react";
import type { Tab, TabId } from "./VSCodeLayout";

interface SidebarProps {
  tabs: Tab[];
  activeTab: TabId;
  onFileClick: (tabId: TabId) => void;
}

const getFileIcon = (icon: string) => {
  switch (icon) {
    case "tsx":
    case "ts":
      return <FileCode className="w-4 h-4 text-syntax-variable" />;
    case "md":
      return <FileText className="w-4 h-4 text-syntax-string" />;
    case "json":
      return <FileJson className="w-4 h-4 text-syntax-function" />;
    case "folder":
      return <FolderOpen className="w-4 h-4 text-syntax-function" />;
    default:
      return <FileCode className="w-4 h-4 text-syntax-variable" />;
  }
};

export function Sidebar({ tabs, activeTab, onFileClick }: SidebarProps) {
  const [explorerOpen, setExplorerOpen] = useState(true);

  return (
    <div className="h-full bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* Header */}
      <div className="h-9 px-4 flex items-center text-[11px] font-medium uppercase tracking-wider text-sidebar-foreground/70">
        Explorer
      </div>

      {/* Project Tree */}
      <div className="flex-1 overflow-y-auto">
        {/* Project Root */}
        <motion.button
          onClick={() => setExplorerOpen(!explorerOpen)}
          className="w-full px-2 py-1 flex items-center gap-1 text-[13px] font-semibold text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
        >
          <motion.span
            animate={{ rotate: explorerOpen ? 90 : 0 }}
            transition={{ duration: 0.15 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.span>
          <span className="uppercase text-[11px] tracking-wide">portfolio</span>
        </motion.button>

        <AnimatePresence>
          {explorerOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {/* src folder */}
              <div className="pl-4">
                <button className="w-full px-2 py-1 flex items-center gap-1 text-[13px] text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
                  <ChevronDown className="w-4 h-4" />
                  <FolderOpen className="w-4 h-4 text-syntax-function" />
                  <span>src</span>
                </button>

                {/* Files */}
                <div className="pl-4">
                  {tabs.map((tab, index) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => onFileClick(tab.id)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`
                        w-full px-2 py-1 flex items-center gap-2 text-[13px] transition-colors
                        ${activeTab === tab.id
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                        }
                      `}
                    >
                      {getFileIcon(tab.icon)}
                      <span className="truncate">{tab.filename}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Other common files */}
              <div className="pl-4 mt-2 opacity-50">
                <button className="w-full px-2 py-1 flex items-center gap-2 text-[13px] text-sidebar-foreground">
                  <FileJson className="w-4 h-4 text-syntax-function" />
                  <span>package.json</span>
                </button>
                <button className="w-full px-2 py-1 flex items-center gap-2 text-[13px] text-sidebar-foreground">
                  <FileJson className="w-4 h-4 text-syntax-function" />
                  <span>tsconfig.json</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer hint */}
      <div className="p-3 border-t border-sidebar-border">
        <p className="text-[10px] text-muted-foreground text-center">
          Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono">⌘P</kbd> to search files
        </p>
      </div>
    </div>
  );
}
