import React, { useState } from 'react';
import { Download, CheckCircle, Terminal, X, Archive, FileCode, Play, Copy, Check } from 'lucide-react';
import { generateProjectZip } from '../utils/zipGenerator';

interface ZipDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZipDownloadModal: React.FC<ZipDownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setDownloading(true);
      setProgress(10);
      
      const blob = await generateProjectZip((percent) => {
        setProgress(Math.round(percent));
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'shoxrux-maxmudjonov-portfolio.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadComplete(true);
    } catch (err) {
      console.error('Failed to generate zip:', err);
    } finally {
      setDownloading(false);
    }
  };

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(cmd);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl rounded-2xl glass-panel bg-[#080B18]/95 border border-[#00E5FF]/40 p-6 sm:p-8 shadow-2xl text-left my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close download modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#8B5CF6] flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
            <Archive className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase text-[#00E5FF] tracking-wider font-semibold">
                Source Code Export
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                v1.0.0
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Download Complete Project ZIP
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          This archive contains the full production React & Three.js source code, components, SVG logos, assets, and configurations ready to run locally or customize in VS Code.
        </p>

        {/* Action Button & Progress */}
        <div className="p-5 rounded-xl bg-[#0D1326] border border-cyan-500/20 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-white text-sm flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#8B5CF6]" />
                shoxrux-maxmudjonov-portfolio.zip
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Full React 19 + Three.js + Tailwind CSS Vite Architecture
              </p>
            </div>

            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[#00E5FF] via-[#3867FF] to-[#8B5CF6] text-slate-950 hover:brightness-110 active:scale-95 disabled:opacity-50 font-display tracking-wide shadow-lg shadow-cyan-500/25"
            >
              <Download className="w-4 h-4 text-slate-950" />
              <span>{downloading ? `Exporting (${progress}%)` : 'Download Source ZIP'}</span>
            </button>
          </div>

          {downloading && (
            <div className="mt-4">
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#00E5FF] to-[#FF3CAC] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[11px] font-mono text-cyan-400 mt-2 text-right">
                Compressing source modules... {progress}%
              </p>
            </div>
          )}

          {downloadComplete && (
            <div className="mt-4 flex items-center gap-2 text-emerald-400 text-xs font-mono bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Archive downloaded successfully! Check your browser downloads folder.</span>
            </div>
          )}
        </div>

        {/* Local Setup Instructions */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#00E5FF]" />
            How to Run in VS Code / Locally
          </h4>

          <div className="space-y-2.5 text-xs font-mono">
            {/* Step 1 */}
            <div className="p-3 rounded-lg bg-black/40 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">
                <span className="text-[#00E5FF] mr-2">1.</span>
                Extract the ZIP archive and open the directory in VS Code or Terminal.
              </span>
            </div>

            {/* Step 2 */}
            <div className="p-3 rounded-lg bg-black/40 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">
                <span className="text-[#8B5CF6] mr-2">2.</span>
                <span className="text-cyan-300 font-semibold">npm install</span>
              </span>
              <button
                type="button"
                onClick={() => copyCommand('npm install')}
                className="p-1 rounded text-slate-400 hover:text-white"
                title="Copy command"
              >
                {copiedCmd === 'npm install' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Step 3 */}
            <div className="p-3 rounded-lg bg-black/40 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">
                <span className="text-[#FF3CAC] mr-2">3.</span>
                <span className="text-cyan-300 font-semibold">npm run dev</span>
              </span>
              <button
                type="button"
                onClick={() => copyCommand('npm run dev')}
                className="p-1 rounded text-slate-400 hover:text-white"
                title="Copy command"
              >
                {copiedCmd === 'npm run dev' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>License: MIT · Personal Developer Portfolio</span>
          <button
            type="button"
            onClick={onClose}
            className="text-[#00E5FF] hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
