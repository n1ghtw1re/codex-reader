import React, { useEffect, useState } from 'react';
import { Book, Part, Chapter } from './types/book';
import { loadBook } from './utils/bookLoader';
import { TableOfContents } from './components/TableOfContents';
import { ChapterContent } from './components/ChapterContent';
import { BookOpen } from 'lucide-react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { useTheme } from './contexts/ThemeContext';
import { themes } from './types/theme';

function BookReader() {
  const [book, setBook] = useState<Book | null>(null);
  const [currentPart, setCurrentPart] = useState<Part | null>(null);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  useEffect(() => {
    loadBook().then(setBook);
  }, []);

  const handleChapterSelect = (part: Part, chapter: Chapter) => {
    setCurrentPart(part);
    setCurrentChapter(chapter);
    if (window.innerWidth < 768) {
      setIsMenuCollapsed(true);
    }
  };

  if (!book) {
    return (
      <div className={`min-h-screen ${currentTheme.background} flex items-center justify-center`}>
        <div className={`animate-spin ${currentTheme.accent}`}>
          <BookOpen size={32} />
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${currentTheme.background} ${currentTheme.text}`}>
      <div className="mx-auto min-h-screen flex flex-col">
        <header className={`${currentTheme.header} ${currentTheme.border} border-b p-4`}>
          <div className="flex justify-between items-center">
            <div>
              <h1 className={`text-2xl md:text-3xl font-medium ${currentTheme.accent}`}>
                {book.title}
              </h1>
              <p className="text-sm opacity-75">by {book.author}</p>
            </div>
            <ThemeSwitcher />
          </div>
        </header>
        
        <div className="flex flex-1 relative">
          <TableOfContents
            book={book}
            onSelectChapter={handleChapterSelect}
            isCollapsed={isMenuCollapsed}
            onToggleCollapse={() => setIsMenuCollapsed(!isMenuCollapsed)}
          />
          <main className={`flex-1 ${currentTheme.background} overflow-y-auto`}>
            <ChapterContent
              currentPart={currentPart}
              currentChapter={currentChapter}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BookReader />
    </ThemeProvider>
  );
}

export default App;