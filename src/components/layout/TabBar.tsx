import { motion } from "framer-motion";
import { X, FileCode, FileText, FolderOpen, FileJson, Search } from "lucide-react";
import type { Tab, TabId } from "./VSCodeLayout";

interface TabBarProps {
  tabs: Tab[];
  activeTab: TabId;
  onTabClick: (tabId: TabId) => void;
  onTabClose: (tabId: TabId) => void;
  onCommandPalette: () => void;
}

const getFileIcon = (icon: string, size = 14) => {
  switch (icon) {
    case "tsx":
    case "ts":
      return <FileCode size={size} className="text-syntax-variable" />;
    case "md":
      return <FileText size={size} className="text-syntax-string" />;
    case "json":
      return <FileJson size={size} className="text-syntax-function" />;
    case "folder":
      return <FolderOpen size={size} className="text-syntax-function" />;
    default:
      return <FileCode size={size} className="text-syntax-variable" />;
  }
};

export function TabBar({
  tabs,
  activeTab,
  onTabClick,
  onTabClose,
  onCommandPalette,
}: TabBarProps) {
  return (
    <div className="h-9 bg-muted flex items-center border-b border-border">
      {/* Tabs */}
      <div className="flex-1 flex items-center h-full overflow-x-auto">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`
              group relative h-full flex items-center gap-2 px-3 cursor-pointer
              border-r border-border transition-colors
              ${activeTab === tab.id
                ? "bg-background text-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
              }
            `}
            onClick={() => onTabClick(tab.id)}
          >
            {/* Active indicator */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute top-0 left-0 right-0 h-[2px] bg-primary"
              />
            )}

            {getFileIcon(tab.icon)}
            <span className="text-[13px] whitespace-nowrap">{tab.filename}</span>

            {/* Close button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                onTabClose(tab.id);
              }}
              className="opacity-0 group-hover:opacity-100 hover:bg-muted-foreground/20 rounded p-0.5 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={14} />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Command Palette Button */}
      <motion.button
        onClick={onCommandPalette}
        className="h-full px-4 flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10 transition-colors border-l border-border"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Search size={14} />
        <span className="text-[12px] hidden sm:inline">Search files...</span>
        <kbd className="hidden sm:inline px-1.5 py-0.5 bg-muted-foreground/20 rounded text-[10px] font-mono">
          ⌘P
        </kbd>
      </motion.button>
    </div>
  );
}
