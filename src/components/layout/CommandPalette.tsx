import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Search, FileCode, FileText, FolderOpen, FileJson } from "lucide-react";
import type { Tab, TabId } from "./VSCodeLayout";

interface CommandPaletteProps {
  tabs: Tab[];
  onSelect: (tabId: TabId) => void;
  onClose: () => void;
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

export function CommandPalette({ tabs, onSelect, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredTabs = tabs.filter(
    (tab) =>
      tab.filename.toLowerCase().includes(query.toLowerCase()) ||
      tab.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredTabs.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredTabs.length) % filteredTabs.length);
      } else if (e.key === "Enter" && filteredTabs[selectedIndex]) {
        onSelect(filteredTabs[selectedIndex].id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredTabs, selectedIndex, onSelect, onClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Palette */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-xl z-50 glass rounded-lg overflow-hidden shadow-2xl gradient-border"
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search files by name..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-[14px]"
          />
          <kbd className="px-2 py-1 bg-muted rounded text-[10px] font-mono text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[300px] overflow-y-auto py-2">
          {filteredTabs.length === 0 ? (
            <div className="px-4 py-8 text-center text-muted-foreground">
              <p>No files found</p>
            </div>
          ) : (
            filteredTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => onSelect(tab.id)}
                className={`
                  w-full px-4 py-2 flex items-center gap-3 text-left transition-colors
                  ${selectedIndex === index
                    ? "bg-primary/20 text-foreground"
                    : "text-muted-foreground hover:bg-muted"
                  }
                `}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {getFileIcon(tab.icon)}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] truncate">{tab.filename}</p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    src/{tab.filename}
                  </p>
                </div>
                {selectedIndex === index && (
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px] font-mono text-muted-foreground">
                    ↵
                  </kbd>
                )}
              </motion.button>
            ))
          )}
        </div>
      </motion.div>
    </>
  );
}
