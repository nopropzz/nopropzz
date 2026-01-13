
import React, { createContext, useContext, useState, useEffect, ReactNode, useRef, useCallback } from 'react';
import { Save, Edit3, Eye, CheckCircle, Upload, Download, FileJson, Sparkles, Loader2, Image as ImageIcon, Settings2, X, AlertCircle, Info, Database, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { GoogleGenAI } from "@google/genai";

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface VisualEditorContextType {
  isEditing: boolean;
  toggleEditing: () => void;
  saveChanges: () => void;
  updateContent: (id: string, value: string) => void;
  getContent: (id: string, defaultValue: string) => string;
  hasAuth: boolean;
  exportState: () => void;
  importState: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rewriteWithAI: (id: string, currentText: string) => Promise<void>;
  aiLoading: string | null;
  hasUnsavedChanges: boolean;
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  contentMapCount: number;
}

const VisualEditorContext = createContext<VisualEditorContextType | undefined>(undefined);

export const useVisualEditor = () => {
  const context = useContext(VisualEditorContext);
  if (!context) throw new Error('useVisualEditor must be used within VisualEditorProvider');
  return context;
};

const compressImage = (base64Str: string, maxWidth = 1200, maxHeight = 1200): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', 0.8));
    };
    img.onerror = () => resolve(base64Str);
  });
};

export const VisualEditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [contentMap, setContentMap] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [hasAuth, setHasAuth] = useState(false);
  const [aiLoading, setAiLoading] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const importRef = useRef<HTMLInputElement>(null);

  // Initial load
  useEffect(() => {
    const init = async () => {
      let localMap: Record<string, string> = {};
      try {
        const saved = localStorage.getItem('nopropzz_edits');
        if (saved) {
          localMap = JSON.parse(saved);
          setContentMap(localMap);
        }
      } catch (err) {
        console.error('FAILED_TO_LOAD_LOCAL_STORAGE', err);
      }

      if (supabase) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          setHasAuth(!!session);
          
          const { data, error } = await supabase.from('site_content').select('*');
          if (!error && data && data.length > 0) {
            const cloudMap = data.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.content }), {});
            const mergedMap = { ...cloudMap, ...localMap };
            setContentMap(mergedMap);
            localStorage.setItem('nopropzz_edits', JSON.stringify(mergedMap));
          }
        } catch (e) {
          console.warn('SUPABASE_OFFLINE_OR_UNAVAILABLE');
        }
      }
    };
    init();
  }, []);

  const showToast = useCallback((message: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  }, []);

  const saveChanges = useCallback(async () => {
    setStatus('saving');
    try {
      localStorage.setItem('nopropzz_edits', JSON.stringify(contentMap));
    } catch (e) {}

    if (supabase && hasAuth) {
      const upserts = Object.entries(contentMap).map(([id, content]) => ({ id, content }));
      const { error } = await supabase.from('site_content').upsert(upserts, { onConflict: 'id' });
      if (error) {
        setStatus('error');
        showToast('SYNC_FAILED: CHECK_CLOUD_CONNECTION', 'error');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }
    }
    
    setStatus('saved');
    setHasUnsavedChanges(false);
    showToast('STATE_SYNCHRONIZED_SUCCESSFULLY', 'success');
    setTimeout(() => setStatus('idle'), 2000);
  }, [contentMap, hasAuth, showToast]);

  // Prevent accidental data loss
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        if (isEditing) saveChanges();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditing, saveChanges]);

  const toggleEditing = () => {
    const newState = !isEditing;
    setIsEditing(newState);
    showToast(newState ? 'BUILD_MODE_ACTIVE' : 'PREVIEW_MODE_ACTIVE', newState ? 'info' : 'success');
  };

  const updateContent = useCallback((id: string, value: string) => {
    if (!id) return;
    setContentMap(prev => {
      const next = { ...prev, [id]: value };
      try { 
        localStorage.setItem('nopropzz_edits', JSON.stringify(next)); 
      } catch (e) {
        console.error('LOCAL_STORAGE_SAVE_ERROR', e);
      }
      return next;
    });
    setHasUnsavedChanges(true);
  }, []);

  const getContent = useCallback((id: string, defaultValue: string) => {
    return contentMap[id] ?? defaultValue;
  }, [contentMap]);

  const exportState = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(contentMap));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `nopropzz_repo_snapshot.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    showToast('SNAPSHOT_DOWNLOADED: SAVE_TO_GITHUB', 'success');
  };

  const importState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        setContentMap(json);
        localStorage.setItem('nopropzz_edits', JSON.stringify(json));
        setHasUnsavedChanges(true);
        setStatus('saved');
        showToast('REPO_STATE_APPLIED', 'success');
        setTimeout(() => setStatus('idle'), 2000);
      } catch (err) {
        showToast('INVALID_STATE_FILE', 'error');
      }
    };
    reader.readAsText(file);
  };

  const rewriteWithAI = async (id: string, currentText: string) => {
    const apiKey = typeof process !== 'undefined' ? process.env?.API_KEY : undefined;
    if (!apiKey) {
      showToast('AI_ERROR: API_KEY_NOT_FOUND', 'error');
      return;
    }
    setAiLoading(id);
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Rewrite this text for a Nordic Brutalist creative agency called noPROPZZ. Tone: raw, honest, minimalist, uppercase. Current: "${currentText}"`,
      });
      if (response.text) {
        updateContent(id, response.text.trim());
        showToast('AI_CONTENT_REWRITTEN', 'success');
      }
    } catch (e) {
      showToast('AI_SERVICE_UNAVAILABLE', 'error');
    } finally {
      setAiLoading(null);
    }
  };

  return (
    <VisualEditorContext.Provider value={{ 
      isEditing, 
      toggleEditing, 
      saveChanges, 
      updateContent, 
      getContent, 
      hasAuth, 
      exportState, 
      importState, 
      rewriteWithAI, 
      aiLoading, 
      hasUnsavedChanges, 
      showToast, 
      contentMapCount: Object.keys(contentMap).length 
    }}>
      {children}
      <input type="file" ref={importRef} className="hidden" accept=".json" onChange={importState} />
      
      {/* Brutalist Toast Container */}
      <div className="fixed top-24 right-4 md:right-6 z-[200] flex flex-col items-end gap-3 md:gap-4 pointer-events-none">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-4 md:p-5 border-4 border-black bg-white text-black brutalist-shadow flex items-center gap-3 md:gap-4 pointer-events-auto min-w-[260px] md:min-w-[300px] relative"
            >
              <div className={`p-1.5 md:p-2 border-2 border-black ${
                toast.type === 'success' ? 'bg-green-500' : 
                toast.type === 'error' ? 'bg-red-600' : 'bg-black'
              }`}>
                {toast.type === 'success' && <CheckCircle size={14} className="text-white md:w-4 md:h-4" />}
                {toast.type === 'error' && <AlertCircle size={14} className="text-white md:w-4 md:h-4" />}
                {toast.type === 'info' && <Info size={14} className="text-white md:w-4 md:h-4" />}
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest leading-none mb-1 opacity-40">{toast.type}</span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-tight italic">{toast.message}</span>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-black/10 w-full overflow-hidden">
                <motion.div 
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-full bg-black"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Persistent Builder Toolbar */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[150] w-[92%] max-w-6xl pointer-events-none">
        <div className="bg-white text-black border-4 border-black brutalist-shadow p-2.5 md:p-5 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className={`w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-black ${isEditing ? 'bg-green-500 animate-pulse' : 'bg-red-600'}`} />
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] leading-none">
                  {isEditing ? 'BUILD_MODE' : 'BUILDER_READY'}
                </span>
                {isEditing && (
                  <span className="text-[7px] md:text-[8px] font-mono opacity-40 uppercase tracking-widest font-black italic mt-1 hidden sm:block">Alt + Click to navigate / Ctrl+S to save</span>
                )}
              </div>
            </div>
            {isEditing && (
              <div className="hidden lg:flex items-center space-x-6 border-l-2 border-black/10 pl-6">
                <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase opacity-40 mb-1">REGISTRY</span>
                  <div className="flex items-center gap-3">
                    <Database size={12} className="opacity-40" />
                    <span className="text-[10px] font-mono font-black">{Object.keys(contentMap).length}</span>
                  </div>
                </div>
                <button onClick={exportState} className="flex items-center space-x-2 text-[9px] font-black hover:bg-black hover:text-white border-2 border-black px-3 py-2 transition-all">
                  <Download size={12} />
                  <span>EXPORT_SNAP</span>
                </button>
                <button onClick={() => importRef.current?.click()} className="flex items-center space-x-2 text-[9px] font-black hover:bg-black hover:text-white border-2 border-black px-3 py-2 transition-all">
                  <Upload size={12} />
                  <span>IMPORT</span>
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button 
              onClick={toggleEditing}
              className={`flex-grow md:flex-none px-4 md:px-8 py-2.5 md:py-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest border-2 md:border-4 transition-all flex items-center justify-center space-x-2 md:space-x-3 ${
                isEditing ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-zinc-100'
              }`}
            >
              {isEditing ? <Eye size={12} /> : <Edit3 size={12} />}
              <span>{isEditing ? 'EXIT' : 'BUILD'}</span>
            </button>
            {isEditing && (
              <button 
                onClick={saveChanges}
                disabled={status === 'saving'}
                className={`flex-grow md:flex-none px-4 md:px-10 py-2.5 md:py-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest border-2 md:border-4 transition-all flex items-center justify-center space-x-2 md:space-x-3 ${
                  hasUnsavedChanges ? 'bg-red-600 border-red-600 text-white animate-pulse' : 'bg-white text-black border-black hover:bg-zinc-100'
                }`}
              >
                {status === 'saving' ? <Loader2 className="animate-spin" size={12} /> : (status === 'saved' ? <CheckCircle size={12} /> : <Save size={12} />)}
                <span>{status === 'saved' ? 'SYNCED' : 'SAVE_STATE'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </VisualEditorContext.Provider>
  );
};

export const Editable: React.FC<{ id: string; defaultText: string; className?: string; as?: React.ElementType }> = ({ id, defaultText, className = '', as: Component = 'span' }) => {
  const { isEditing, getContent, updateContent, rewriteWithAI, aiLoading } = useVisualEditor();
  const text = getContent(id, defaultText) || defaultText;
  const Tag = Component as any;

  if (!isEditing) return <Tag className={`${className} whitespace-pre-wrap`}>{text}</Tag>;

  return (
    <div className="relative group/edit inline-block pointer-events-auto w-full">
      <Tag
        contentEditable
        suppressContentEditableWarning
        onBlur={(e: React.FocusEvent<HTMLElement>) => {
          const newVal = e.currentTarget.innerText;
          if (newVal !== text) updateContent(id, newVal);
        }}
        className={`${className} outline-none cursor-text hover:bg-black/5 transition-all border-2 border-dashed border-transparent hover:border-black/30 p-1 -m-1 whitespace-pre-wrap block w-full`}
      >
        {text}
      </Tag>
      <button 
        onClick={() => rewriteWithAI(id, text)}
        className="absolute -top-6 -right-6 p-2 bg-black text-white rounded-full opacity-0 group-hover/edit:opacity-100 transition-opacity z-10 border-2 border-white"
        disabled={!!aiLoading}
      >
        {aiLoading === id ? <Loader2 size={12} className="animate-spin" /> : <Sparkles size={12} />}
      </button>
    </div>
  );
};

export const EditableImage: React.FC<{ id: string; defaultSrc: string; alt?: string; className?: string }> = ({ id, defaultSrc, alt = '', className = '' }) => {
  const { isEditing, getContent, updateContent } = useVisualEditor();
  const src = getContent(id, defaultSrc) || defaultSrc;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        if (typeof reader.result === 'string') {
          const compressed = await compressImage(reader.result);
          updateContent(id, compressed);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative w-full h-full ${isEditing ? 'group' : ''}`}>
      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
      <img 
        src={src} alt={alt} 
        className={`${className} ${isEditing ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}`}
        onClick={() => isEditing && fileInputRef.current?.click()}
      />
      {isEditing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div 
            className="bg-white text-black p-3 md:p-4 border-2 md:border-4 border-black flex items-center gap-2 md:gap-3 brutalist-shadow pointer-events-auto cursor-pointer hover:bg-black hover:text-white transition-all" 
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload size={16} className="md:w-5 md:h-5" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">SWAP_ASSET</span>
          </div>
        </div>
      )}
    </div>
  );
};

export const EditableMedia: React.FC<{ id: string; defaultSrc: string; className?: string }> = ({ id, defaultSrc, className = '' }) => {
  const { isEditing, getContent, updateContent } = useVisualEditor();
  const src = getContent(id, defaultSrc) || defaultSrc;
  const type = getContent(`${id}_type`, 'image'); 
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [showConfig, setShowConfig] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        if (typeof reader.result === 'string') {
          const compressed = await compressImage(reader.result);
          updateContent(id, compressed);
          updateContent(`${id}_type`, 'image');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative w-full h-full ${isEditing ? 'group/media' : ''} ${className}`}>
      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
      {type === 'video' ? (
        <video key={src} src={src} autoPlay muted loop playsInline className="w-full h-full object-cover grayscale opacity-40 transition-all group-hover/media:grayscale-0 group-hover/media:opacity-60" />
      ) : (
        <img key={src} src={src} className="w-full h-full object-cover grayscale opacity-40 transition-all group-hover/media:grayscale-0 group-hover/media:opacity-60" alt="Background" />
      )}

      {isEditing && (
        <div className="absolute top-24 md:top-32 right-6 md:right-10 flex flex-col gap-3 md:gap-4 opacity-0 group-hover/media:opacity-100 transition-opacity z-[90]">
          <button onClick={() => fileInputRef.current?.click()} className="bg-white text-black p-3 md:p-4 border-2 md:border-4 border-black brutalist-shadow flex items-center gap-2 md:gap-3 hover:translate-x-1 hover:translate-y-1 transition-all">
            <ImageIcon size={18} className="md:w-5 md:h-5" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">FILE</span>
          </button>
          <button onClick={() => setShowConfig(true)} className="bg-black text-white p-3 md:p-4 border-2 md:border-4 border-black brutalist-shadow flex items-center gap-2 md:gap-3 hover:translate-x-1 hover:translate-y-1 transition-all">
            <Settings2 size={18} className="md:w-5 md:h-5" />
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">CONFIG</span>
          </button>
        </div>
      )}

      {showConfig && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[200] p-4 md:p-6 backdrop-blur-md pointer-events-auto">
          <div className="bg-white text-black p-6 md:p-10 border-4 md:border-8 border-black brutalist-shadow w-full max-w-md relative">
            <button onClick={() => setShowConfig(false)} className="absolute top-2 md:top-4 right-2 md:right-4 p-2"><X size={20} className="md:w-6 md:h-6" /></button>
            <h4 className="text-lg md:text-xl font-black uppercase mb-6 md:mb-8 tracking-widest border-b-4 border-black pb-4 italic">ENGINE_CONFIG</h4>
            <div className="space-y-6 md:space-y-8">
              <div>
                <label className="text-[9px] md:text-[10px] font-black uppercase block mb-2 md:mb-3 opacity-40">Direct_Media_Link</label>
                <input type="text" value={src.startsWith('data:') ? '' : src} onChange={(e) => updateContent(id, e.target.value)} placeholder="HTTPS://ASSET.CLOUD/..." className="w-full border-2 md:border-4 border-black p-3 md:p-4 text-[10px] md:text-xs font-mono font-bold" />
              </div>
              <div className="flex gap-3 md:gap-4">
                <button onClick={() => updateContent(`${id}_type`, 'image')} className={`flex-1 p-3 md:p-4 text-[9px] md:text-[10px] font-black border-2 md:border-4 border-black ${type === 'image' ? 'bg-black text-white' : 'hover:bg-zinc-50'}`}>STILL</button>
                <button onClick={() => updateContent(`${id}_type`, 'video')} className={`flex-1 p-3 md:p-4 text-[9px] md:text-[10px] font-black border-2 md:border-4 border-black ${type === 'video' ? 'bg-black text-white' : 'hover:bg-zinc-50'}`}>VIDEO</button>
              </div>
              <button onClick={() => setShowConfig(false)} className="w-full p-4 md:p-6 bg-black text-white text-[10px] md:text-[11px] font-black uppercase tracking-widest hover:opacity-90">SAVE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
