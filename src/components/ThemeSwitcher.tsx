import React from 'react';
import { Book, Bot, Skull, Cat } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeType } from '../types/theme';

interface ThemeButtonProps {
  type: ThemeType;
  icon: React.ReactNode;
  isActive: boolean;
}

function ThemeButton({ type, icon, isActive }: ThemeButtonProps) {
  const { setTheme } = useTheme();
  
  return (
    <button
      onClick={() => setTheme(type)}
      className={`p-2 rounded-full transition-colors ${
        isActive ? 'bg-opacity-20 bg-white' : 'hover:bg-opacity-10 hover:bg-white'
      }`}
      aria-label={`Switch to ${type} theme`}
    >
      {icon}
    </button>
  );
}

export function ThemeSwitcher() {
  const { theme } = useTheme();
  
  return (
    <div className="flex gap-2">
      <ThemeButton
        type="book"
        icon={<Book size={20} />}
        isActive={theme === 'book'}
      />
      <ThemeButton
        type="robot"
        icon={<Bot size={20} />}
        isActive={theme === 'robot'}
      />
      <ThemeButton
        type="skull"
        icon={<Skull size={20} />}
        isActive={theme === 'skull'}
      />
      <ThemeButton
        type="cat"
        icon={<Cat size={20} />}
        isActive={theme === 'cat'}
      />
    </div>
  );
}