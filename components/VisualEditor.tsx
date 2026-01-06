import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Save, Edit3, Eye, Database, Code, CheckCircle } from 'lucide-react';

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

  // Load initial state from local storage
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
    }, 8000); // Cinematic save time for brutalist feel
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
                <span>SYNCING_WITH_FLOWEN_AI_OS...</span>
              </div>
            )}
            {status === 'saved' && (
              <div className="flex items-center space-x-2 text-green-400 text-[10px] font-black">
                <CheckCircle size={14} />
                <span>MANIFEST_COMMITTED</span>
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
                <span>COMMIT_EDITS</span>
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
  // Use React.ElementType instead of keyof JSX.IntrinsicElements to avoid namespace errors
  as?: React.ElementType;
}

export const Editable: React.FC<EditableProps> = ({ id, defaultText, className = '', as: Component = 'span' }) => {
  const { isEditing, getContent, updateContent } = useVisualEditor();
  const text = getContent(id, defaultText);

  // Use a capitalized variable for dynamic tag rendering and cast to any to satisfy JSX constraints for Dynamic Components
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
