export type ThemeType = 'book' | 'robot' | 'skull' | 'cat';

export interface Theme {
  background: string;
  text: string;
  accent: string;
  border: string;
  header: string;
  sidebar: string;
  prose: string;
}

export const themes: Record<ThemeType, Theme> = {
  book: {
    background: 'bg-amber-50',
    text: 'text-stone-800',
    accent: 'text-amber-800',
    border: 'border-amber-200',
    header: 'bg-amber-100',
    sidebar: 'bg-amber-50',
    prose: 'prose-stone'
  },
  robot: {
    background: 'bg-gray-900',
    text: 'text-green-400',
    accent: 'text-amber-400',
    border: 'border-green-800',
    header: 'bg-gray-950',
    sidebar: 'bg-gray-900',
    prose: 'prose-invert prose-green'
  },
  skull: {
    background: 'bg-black',
    text: 'text-red-500',
    accent: 'text-red-700',
    border: 'border-red-900',
    header: 'bg-red-950',
    sidebar: 'bg-black',
    prose: 'prose-invert prose-red'
  },
  cat: {
    background: 'bg-pink-50',
    text: 'text-pink-400',
    accent: 'text-purple-400',
    border: 'border-pink-200',
    header: 'bg-pink-100',
    sidebar: 'bg-pink-50',
    prose: 'prose-pink'
  }
};