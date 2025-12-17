import { motion } from "framer-motion";
import {
  Files,
  Search,
  GitBranch,
  Bug,
  Blocks,
  User,
  Settings,
} from "lucide-react";
import { useEffect, useRef } from "react";

interface ActivityBarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  onFileClick: (tabId: string) => void;
}

export function ActivityBar({
  sidebarOpen,
  onToggleSidebar,
  onFileClick,
}: ActivityBarProps) {
  const wasMobile = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 720;

      if (isMobile && !wasMobile.current && sidebarOpen) {
        onToggleSidebar();
      }

      wasMobile.current = isMobile;
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen, onToggleSidebar]);

  const topIcons = [
    { icon: Files, label: "Explorer", id: "explorer" },
    { icon: Search, label: "Search", id: "search" },
    { icon: GitBranch, label: "Source Control", id: "source-control" },
    { icon: Bug, label: "Run and Debug", id: "debug" },
    { icon: Blocks, label: "Extensions", id: "extensions" },
  ];

  const bottomIcons = [
    { icon: User, label: "Account" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="border-r border-border bg-activityBar w-12 flex flex-col items-center py-1 flex-shrink-0">
      {/* Top icons */}
      <div className="flex flex-col items-center gap-1">
        {topIcons.map((item) => {
          const isExplorer = item.id === "explorer";
          const isActive = isExplorer;

          return (
            <motion.button
              key={item.label}
              onClick={() => {
                if (isExplorer) {
                  onToggleSidebar(); 
                }
              }}
              className={`
                relative w-12 h-12 flex items-center justify-center
                transition-colors duration-150
                ${isActive && sidebarOpen
                  ? "text-white"
                  : "text-[#858585] hover:text-white"
                }
              `}
              whileTap={{ scale: 0.95 }}
              title={item.label}
            >
              <item.icon size={24} strokeWidth={1.5} />
              {isActive && sidebarOpen && (
                <motion.div
                  layoutId="activityIndicator"
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      <div className="flex-1" />

      {/* Bottom icons */}
      <div className="flex flex-col items-center gap-1">
        {bottomIcons.map((item) => (
          <motion.button
            key={item.label}
            onClick={() => onFileClick("about")}
            className="w-12 h-12 flex items-center justify-center text-[#858585] hover:text-white transition-colors duration-150"
            whileTap={{ scale: 0.95 }}
            title={item.label}
          >
            <item.icon size={24} strokeWidth={1.5} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}