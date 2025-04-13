import React from 'react';
import { marked } from 'marked';
import { Part, Chapter } from '../types/book';
import { useTheme } from '../contexts/ThemeContext';
import { themes } from '../types/theme';

interface ChapterContentProps {
  currentPart: Part | null;
  currentChapter: Chapter | null;
}

export function ChapterContent({ currentPart, currentChapter }: ChapterContentProps) {
  const { theme } = useTheme();
  const currentTheme = themes[theme];

  if (!currentPart || !currentChapter) {
    return (
      <div className="p-4 md:p-8 text-center opacity-75">
        <h2 className={`text-xl md:text-2xl mb-4 ${currentTheme.accent}`}>
          Welcome to the Book Reader
        </h2>
        <p>Select a chapter from the table of contents to begin reading</p>
      </div>
    );
  }

  const content = currentChapter.pages[0]?.content || '';
  const htmlContent = marked(content);

  return (
    <div className="p-4 md:p-8 max-w-prose mx-auto">
      <div
        className={`prose ${currentTheme.prose} max-w-none`}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}