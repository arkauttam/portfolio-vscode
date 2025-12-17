import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Terminal } from "lucide-react";
import { TabId } from "../layout/VSCodeLayout";

const codeLines = [
  { lineNum: 1, content: "", type: "empty" },
  { lineNum: 2, content: "/**", type: "comment" },
  { lineNum: 3, content: " * @name Uttam Ghosh", type: "comment" },
  { lineNum: 4, content: " * @role AI Software Engineer", type: "comment" },
  { lineNum: 5, content: " * @location kolkata, IND", type: "comment" },
  { lineNum: 6, content: " * @experience 2+ years", type: "comment" },
  { lineNum: 7, content: " */", type: "comment" },
  { lineNum: 8, content: "", type: "empty" },
  { lineNum: 9, content: "import { passion, expertise, dedication } from '@core/values';", type: "import" },
  { lineNum: 10, content: "import { MachineLearning, DeepLearning, LLMs } from '@skills/ai';", type: "import" },
  { lineNum: 11, content: "", type: "empty" },
  { lineNum: 12, content: "interface Developer {", type: "interface" },
  { lineNum: 13, content: "  name: string;", type: "property" },
  { lineNum: 14, content: "  title: string;", type: "property" },
  { lineNum: 15, content: "  focus: string[];", type: "property" },
  { lineNum: 16, content: "  available: boolean;", type: "property" },
  { lineNum: 17, content: "}", type: "interface" },
  { lineNum: 18, content: "", type: "empty" },
  { lineNum: 19, content: "const developer: Developer = {", type: "const" },
  { lineNum: 20, content: '  name: "Uttam Ghosh",', type: "string" },
  { lineNum: 21, content: '  title: "Senior AI Engineer",', type: "string" },
  { lineNum: 22, content: '  focus: ["ML Systems", "LLMs", "Production AI"],', type: "array" },
  { lineNum: 23, content: "  available: true,", type: "boolean" },
  { lineNum: 24, content: "};", type: "const" },
  { lineNum: 25, content: "", type: "empty" },
  { lineNum: 26, content: "export default developer;", type: "export" },
];
function CodeLine({ line, isActive }: { line: typeof codeLines[0]; isActive: boolean }) {
  const renderContent = () => {
    const content = line.content;

    if (line.type === "empty") return null;

    if (line.type === "comment") {
      return <span style={{ color: "#6a9955" }}>{content}</span>;
    }

    if (line.type === "import") {
      const parts = content.match(/(import)(\s*\{)([^}]+)(\}\s*from\s*)('[^']+')(;)/);
      if (parts) {
        return (
          <>
            <span style={{ color: "#c586c0" }}>{parts[1]}</span>
            <span style={{ color: "#d4d4d4" }}>{parts[2]}</span>
            <span style={{ color: "#9cdcfe" }}>{parts[3]}</span>
            <span style={{ color: "#d4d4d4" }}>{parts[4]}</span>
            <span style={{ color: "#ce9178" }}>{parts[5]}</span>
            <span style={{ color: "#d4d4d4" }}>{parts[6]}</span>
          </>
        );
      }
    }

    if (line.type === "interface") {
      if (content.includes("interface")) {
        return (
          <>
            <span style={{ color: "#569cd6" }}>interface</span>
            <span style={{ color: "#4ec9b0" }}> Developer</span>
            <span style={{ color: "#d4d4d4" }}> {"{"}</span>
          </>
        );
      }
      return <span style={{ color: "#d4d4d4" }}>{content}</span>;
    }

    if (line.type === "property") {
      const match = content.match(/(\s+)(\w+)(:\s*)(\w+\[\]?)(;)/);
      if (match) {
        return (
          <>
            <span>{match[1]}</span>
            <span style={{ color: "#9cdcfe" }}>{match[2]}</span>
            <span style={{ color: "#d4d4d4" }}>{match[3]}</span>
            <span style={{ color: "#4ec9b0" }}>{match[4]}</span>
            <span style={{ color: "#d4d4d4" }}>{match[5]}</span>
          </>
        );
      }
    }

    if (line.type === "const") {
      if (content.includes("const")) {
        return (
          <>
            <span style={{ color: "#569cd6" }}>const</span>
            <span style={{ color: "#4fc1ff" }}> developer</span>
            <span style={{ color: "#d4d4d4" }}>: </span>
            <span style={{ color: "#4ec9b0" }}>Developer</span>
            <span style={{ color: "#d4d4d4" }}> = {"{"}</span>
          </>
        );
      }
      return <span style={{ color: "#d4d4d4" }}>{content}</span>;
    }

    if (line.type === "string") {
      const match = content.match(/(\s+)(\w+)(:\s*)("[^"]+")(,)/);
      if (match) {
        return (
          <>
            <span>{match[1]}</span>
            <span style={{ color: "#9cdcfe" }}>{match[2]}</span>
            <span style={{ color: "#d4d4d4" }}>{match[3]}</span>
            <span style={{ color: "#ce9178" }}>{match[4]}</span>
            <span style={{ color: "#d4d4d4" }}>{match[5]}</span>
          </>
        );
      }
    }

    if (line.type === "array") {
      return (
        <>
          <span>  </span>
          <span style={{ color: "#9cdcfe" }}>focus</span>
          <span style={{ color: "#d4d4d4" }}>: [</span>
          <span style={{ color: "#ce9178" }}>"ML Systems"</span>
          <span style={{ color: "#d4d4d4" }}>, </span>
          <span style={{ color: "#ce9178" }}>"LLMs"</span>
          <span style={{ color: "#d4d4d4" }}>, </span>
          <span style={{ color: "#ce9178" }}>"Production AI"</span>
          <span style={{ color: "#d4d4d4" }}>],</span>
        </>
      );
    }

    if (line.type === "boolean") {
      return (
        <>
          <span>  </span>
          <span style={{ color: "#9cdcfe" }}>available</span>
          <span style={{ color: "#d4d4d4" }}>: </span>
          <span style={{ color: "#569cd6" }}>true</span>
          <span style={{ color: "#d4d4d4" }}>,</span>
        </>
      );
    }

    if (line.type === "export") {
      return (
        <>
          <span style={{ color: "#c586c0" }}>export</span>
          <span style={{ color: "#569cd6" }}> default</span>
          <span style={{ color: "#4fc1ff" }}> developer</span>
          <span style={{ color: "#d4d4d4" }}>;</span>
        </>
      );
    }

    return <span style={{ color: "#d4d4d4" }}>{content}</span>;
  };

  return (
    <div
      className={`flex h-[19px] leading-[19px] transition-colors ${isActive ? 'bg-[#2a2d2e]' : ''}`}
    >
      {/* Line number */}
      <div
        className="w-[50px] text-right pr-4 select-none flex-shrink-0"
        style={{ color: isActive ? "#c6c6c6" : "#858585" }}
      >
        {line.lineNum}
      </div>
      {/* Content */}
      <div className="font-mono text-[18px] whitespace-pre">
        {renderContent()}
      </div>
    </div>
  );
}
interface WelcomeTabProps {
  onFileClick: (tabId: TabId) => void;
}
export function WelcomeTab({ onFileClick }: WelcomeTabProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [activeLine, setActiveLine] = useState(1);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setActiveLine(codeLines[visibleLines]?.lineNum || 1);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full p-6 md:p-12 flex flex-col">
      {/* Editor with line numbers */}
      <div className="flex-1 py-2 font-mono text-[13px] overflow-x-auto">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={line.lineNum}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <CodeLine line={line} isActive={line.lineNum === activeLine} />
          </motion.div>
        ))}

        {/* Cursor */}
        {visibleLines >= codeLines.length && (
          <div className="flex h-[19px] leading-[19px]">
            <div className="w-[50px] text-right pr-4 select-none flex-shrink-0" style={{ color: "#c6c6c6" }}>
              27
            </div>
            <div
              className={`w-[2px] h-[17px] mt-[1px] transition-opacity ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ background: "#aeafad" }}
            />
          </div>
        )}
      </div>
      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 0 30px hsl(var(--glow-blue) / 0.4)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onFileClick('projects')}

          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all glow-blue"
        >
          <Sparkles size={18} />
          View My Work
          <ArrowRight size={16} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onFileClick('contact')}

          className="flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-md font-medium hover:bg-muted transition-colors"
        >
          <Terminal size={18} />
          Open Terminal
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Years Experience", value: "8+" },
          { label: "Projects Delivered", value: "50+" },
          { label: "AI Models Deployed", value: "100+" },
          { label: "Client Satisfaction", value: "99%" },
        ].map((stat, i) => (
          <div key={stat.label} className="p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
