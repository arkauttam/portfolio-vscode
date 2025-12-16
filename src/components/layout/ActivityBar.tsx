


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

interface ActivityBarProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  onFileClick: (tabId: string) => void;
}

export function ActivityBar({ sidebarOpen, onToggleSidebar, onFileClick }: ActivityBarProps) {
  const topIcons = [
    { icon: Files, label: "Explorer", active: true, onClick: onToggleSidebar },
    { icon: Search, label: "Search", active: false },
    { icon: GitBranch, label: "Source Control", active: false },
    { icon: Bug, label: "Run and Debug", active: false },
    { icon: Blocks, label: "Extensions", active: false },
  ];

  const bottomIcons = [
    { icon: User, label: "Account", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div
      className="border-r border-border bg-activityBar w-12 flex flex-col items-center py-1 flex-shrink-0"
    >
      {/* Top icons */}
      <div className="flex flex-col items-center">
        {topIcons.map((item, index) => (
          <motion.button
            key={item.label}
            onClick={item.onClick}
            className={`
              relative w-12 h-12 flex items-center justify-center
              transition-colors duration-150
              ${item.active && sidebarOpen
                ? "text-white"
                : "text-[#858585] hover:text-white"
              }
            `}
            whileTap={{ scale: 0.95 }}
            title={item.label}
          >
            <item.icon size={24} strokeWidth={1.5} />
            {item.active && sidebarOpen && (
              <motion.div
                layoutId="activityIndicator"
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="flex-1" />

      {/* Bottom icons */}
      <div className="flex flex-col items-center">
        {bottomIcons.map((item) => (
          <motion.button
            key={item.label}
            className="w-12 h-12 flex items-center justify-center text-[#858585] hover:text-white transition-colors duration-150"
            whileTap={{ scale: 0.95 }}
            title={item.label}
            onClick={() => onFileClick('about')}

          >
            <item.icon size={24} strokeWidth={1.5} />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
