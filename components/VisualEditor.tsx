import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { Save, Edit3, Eye, Database, CheckCircle, Image as ImageIcon, Upload } from 'lucide-react';

interface VisualEditorContextType {
  isEditing: boolean;
  toggleEditing: () => void;
  saveChanges: () => void;
  updateContent: (id: string, value: string) => void;
  getContent: (id: string, defaultValue: string) => string;
}

const VisualEditorContext = createContext<VisualEditorContextType | undefined>(undefined);

export const useVisualEditor = () => {
  const context = useContext(VisualEditorContext);
  if (!context) throw new Error('useVisualEditor must be used within VisualEditorProvider');
  return context;
};

export const VisualEditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [contentMap, setContentMap] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  useEffect(() => {
    const saved = localStorage.getItem('nopropzz_edits');
    if (saved) setContentMap(JSON.parse(saved));
  }, []);

  const toggleEditing = () => setIsEditing(!isEditing);

  const updateContent = (id: string, value: string) => {
    setContentMap(prev => ({ ...prev, [id]: value }));
  };

  const getContent = (id: string, defaultValue: string) => {
    return contentMap[id] || defaultValue;
  };

  const saveChanges = () => {
    setStatus('saving');
    localStorage.setItem('nopropzz_edits', JSON.stringify(contentMap));
    setTimeout(() => {
      setStatus('saved');
      setTimeout(() => setStatus('idle'), 2000);
    }, 1000);
  };

  return (
    <VisualEditorContext.Provider value={{ isEditing, toggleEditing, saveChanges, updateContent, getContent }}>
      {children}
      
      {/* Floating Command Bar */}
      <div className="fixed bottom-0 left-0 w-full z-[100] px-4 py-4 pointer-events-none">
        <div className="max-w-4xl mx-auto bg-black text-white border-4 border-white brutalist-shadow p-4 pointer-events-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isEditing ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="text-[10px] font-black uppercase tracking-widest">BUILD_MODE: {isEditing ? 'ACTIVE' : 'READY'}</span>
            </div>
            {status === 'saving' && (
              <div className="flex items-center space-x-3 text-[10px] font-mono opacity-50">
                <Database size={14} className="animate-spin" />
                <span>SYNCING_STORAGE...</span>
              </div>
            )}
            {status === 'saved' && (
              <div className="flex items-center space-x-2 text-green-400 text-[10px] font-black">
                <CheckCircle size={14} />
                <span>CHANGES_COMMITTED</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleEditing}
              className={`px-6 py-2 text-[10px] font-black uppercase tracking-widest border-2 transition-all flex items-center space-x-2 ${
                isEditing ? 'bg-white text-black border-white' : 'border-white/20 hover:border-white'
              }`}
            >
              {isEditing ? <Eye size={14} /> : <Edit3 size={14} />}
              <span>{isEditing ? 'PREVIEW_SITE' : 'ENABLE_BUILDER'}</span>
            </button>
            
            {isEditing && (
              <button 
                onClick={saveChanges}
                className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest border-2 border-white hover:bg-zinc-200 transition-all flex items-center space-x-2"
              >
                <Save size={14} />
                <span>SAVE_ALL_EDITS</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </VisualEditorContext.Provider>
  );
};

interface EditableProps {
  id: string;
  defaultText: string;
  className?: string;
  as?: React.ElementType;
}

export const Editable: React.FC<EditableProps> = ({ id, defaultText, className = '', as: Component = 'span' }) => {
  const { isEditing, getContent, updateContent } = useVisualEditor();
  const text = getContent(id, defaultText);
  const Tag = Component as any;

  if (!isEditing) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      onBlur={(e: React.FocusEvent<HTMLElement>) => updateContent(id, e.currentTarget.textContent || '')}
      className={`${className} outline-none cursor-text hover:bg-zinc-100 transition-all border-2 border-dashed border-transparent hover:border-black/20 p-1 -m-1`}
    >
      {text}
    </Tag>
  );
};

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt?: string;
  className?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({ id, defaultSrc, alt = '', className = '' }) => {
  const { isEditing, getContent, updateContent } = useVisualEditor();
  const src = getContent(id, defaultSrc);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (e: React.MouseEvent) => {
    if (!isEditing) return;
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateContent(id, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleManualUrl = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newUrl = window.prompt('OR ENTER IMAGE URL:', src);
    if (newUrl !== null && newUrl.trim() !== '') {
      updateContent(id, newUrl.trim());
    }
  };

  return (
    <div className={`relative w-full h-full ${isEditing ? 'group' : ''}`}>
      <input 
        type="file" 
        ref={fileInputRef} 
        className="hidden" 
        accept="image/*" 
        onChange={handleFileChange}
      />
      <img 
        src={src} 
        alt={alt} 
        className={`${className} ${isEditing ? 'cursor-pointer ring-4 ring-dashed ring-black/30 ring-inset' : ''}`}
        onClick={handleImageClick}
      />
      {isEditing && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 gap-4">
          <div className="bg-white text-black p-4 brutalist-border flex items-center gap-3 brutalist-shadow pointer-events-auto">
            <Upload size={20} />
            <span className="text-[10px] font-black uppercase tracking-widest">UPLOAD_PHOTO</span>
          </div>
          <button 
            onClick={handleManualUrl}
            className="text-[9px] text-white font-mono uppercase underline tracking-widest pointer-events-auto hover:opacity-100 opacity-60 transition-opacity"
          >
            or_use_external_url
          </button>
        </div>
      )}
    </div>
  );
};