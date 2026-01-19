import { X, Download } from 'lucide-react';

const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl animate-in zoom-in duration-300">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
          <h3 className="text-xl font-bold">My Resume</h3>
          <div className="flex gap-3">
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Download size={18} /> Download
            </a>
            <button onClick={onClose} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content - Viewing Area */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-800 overflow-auto p-4">
          <iframe 
            src="/resume.pdf" 
            className="w-full h-full rounded shadow-lg"
            title="Resume Preview"
          />
          {/* Note: Ensure resume.pdf is in your /public folder */}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;