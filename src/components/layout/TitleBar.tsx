import { Minus, Square, X, Circle } from "lucide-react";

export function TitleBar() {
  return (
    <div 
      className="h-8 flex bg-background border-b border-border items-center justify-between px-2 select-none"
    >
      {/* macOS-style window controls */}
      <div className="flex items-center gap-2 pl-1">
        <button className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-90 transition-all flex items-center justify-center group">
          <X size={8} className="text-[#4a0002] opacity-0 group-hover:opacity-100" />
        </button>
        <button className="w-3 h-3 rounded-full bg-[#febc2e] hover:brightness-90 transition-all flex items-center justify-center group">
          <Minus size={8} className="text-[#5a4200] opacity-0 group-hover:opacity-100" />
        </button>
        <button className="w-3 h-3 rounded-full bg-[#28c840] hover:brightness-90 transition-all flex items-center justify-center group">
          <Square size={6} className="text-[#006500] opacity-0 group-hover:opacity-100" />
        </button>
      </div>

      {/* Title */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-[#cccccc]">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#0078d4]">
          <path d="M21.998 5.866L12.9 0.166c-0.556-0.348-1.245-0.349-1.8 0L2.002 5.866C1.447 6.215 1.1 6.826 1.1 7.478v9.044c0 0.652 0.347 1.263 0.902 1.612l9.098 5.7c0.556 0.348 1.245 0.348 1.8 0l9.098-5.7c0.555-0.349 0.902-0.96 0.902-1.612V7.478c0-0.652-0.347-1.263-0.902-1.612zM12 17.5L5.5 12 12 6.5l6.5 5.5-6.5 5.5z" fill="currentColor"/>
        </svg>
        <span>kaushik_rana_portfolio - Visual Studio Code</span>
      </div>

      {/* Spacer */}
      <div className="w-16" />
    </div>
  );
}
