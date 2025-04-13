import React from 'react';
import { Book, Part, Chapter } from '../types/book';
import { ChevronDown, ChevronRight, BookOpen, ChevronLeft, Menu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../types/theme';

interface TOCProps {
  book: Book;
  onSelectChapter: (part: Part, chapter: Chapter) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export function TableOfContents({ book, onSelectChapter, isCollapsed, onToggleCollapse }: TOCProps) {
  const [expandedParts, setExpandedParts] = React.useState<Set<string>>(new Set());
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  const togglePart = (partPath: string) => {
    const newExpanded = new Set(expandedParts);
    if (newExpanded.has(partPath)) {
      newExpanded.delete(partPath);
    } else {
      newExpanded.add(partPath);
    }
    setExpandedParts(newExpanded);
  };

  if (isCollapsed) {
    return (
      <div className="absolute top-4 left-4 z-10 md:relative md:top-0 md:left-0">
        <button
          onClick={onToggleCollapse}
          className={`${currentTheme.header} p-2 rounded-md ${currentTheme.accent} transition-colors`}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-20 ${currentTheme.sidebar} md:relative md:w-64 md:min-w-64 ${currentTheme.border} border-r`}>
      <div className="h-full overflow-y-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className={`${currentTheme.accent} font-medium`}>Contents</h2>
          <button
            onClick={onToggleCollapse}
            className={`${currentTheme.accent} transition-colors`}
            aria-label="Close menu"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="space-y-2">
          {book.parts.map((part) => (
            <div key={part.path}>
              <button
                className={`w-full flex items-center ${currentTheme.text} transition-colors`}
                onClick={() => togglePart(part.path)}
              >
                {expandedParts.has(part.path) ? (
                  <ChevronDown size={16} className="mr-2 flex-shrink-0" />
                ) : (
                  <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                )}
                <span className="text-left">{part.title}</span>
              </button>
              {expandedParts.has(part.path) && (
                <div className="ml-6 mt-2 space-y-1">
                  {part.chapters.map((chapter) => (
                    <button
                      key={chapter.path}
                      className={`w-full text-left text-sm opacity-75 hover:opacity-100 transition-opacity`}
                      onClick={() => onSelectChapter(part, chapter)}
                    >
                      {chapter.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}