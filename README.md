# 📚 Codex Reader

A modern, elegant book reader for the web that brings your content to life. Built with React and TypeScript, this reader offers a distraction-free reading experience with beautiful themes and responsive design.

![Book Reader Preview](https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&auto=format&fit=crop&q=80)

## ✨ Key Features

- 🎨 **Beautiful Themes** - Choose from four carefully crafted themes:
  - 📖 Classic Book
  - 🤖 Cyberpunk Robot
  - 💀 Dark Skull
  - 😺 Playful Cat

- 📱 **Fully Responsive** - Perfect reading experience on any device
- 📑 **Smart Navigation** - Intuitive table of contents with collapsible sections
- ⚡ **Lightning Fast** - Built with performance in mind
- ✍️ **Markdown Support** - Write content using simple Markdown syntax
- 🎯 **Distraction-Free Reading** - Clean, focused interface

## 🛠️ Built With

- ⚛️ React 18
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 📝 Marked (for Markdown rendering)
- 🎯 Vite
- 🖼️ Lucide Icons

## 📖 Adding Your Content

1. **Create Your Book Structure**

```
src/data/book/
├── introduction/
│   └── chapter1/
│       └── page_001.md
├── part1/
│   ├── chapter1/
│   │   └── page_001.md
│   └── chapter2/
│       └── page_001.md
└── part2/
    └── chapter1/
        └── page_001.md
```

2. **Write Your Content**

Create Markdown files for each chapter. Example:

```markdown
# Chapter Title

Your content goes here. You can use all standard Markdown syntax:

## Subheadings
- Lists
- **Bold text**
- *Italic text*

> Blockquotes and more!
```

3. **Update Book Structure**

Modify `src/utils/bookLoader.ts` to include your book's structure:

```typescript
const book: Book = {
  title: "Your Book Title",
  author: "Your Name",
  parts: [
    {
      title: "Introduction",
      path: "introduction",
      chapters: [
        {
          title: "Getting Started",
          path: "chapter1",
          pages: [...]
        }
      ]
    }
  ]
};
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/book-reader.git
```

2. Install dependencies:
```bash
cd book-reader
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customizing Themes

Add your own themes by modifying `src/types/theme.ts`:

```typescript
export const themes: Record<ThemeType, Theme> = {
  yourTheme: {
    background: 'bg-your-color',
    text: 'text-your-color',
    accent: 'text-your-accent',
    // ... other theme properties
  }
};
```

## 📱 Responsive Design

The Book Reader automatically adapts to different screen sizes:

- 📱 **Mobile**: Collapsible menu, optimized touch targets
- 📲 **Tablet**: Optional sidebar, balanced typography
- 💻 **Desktop**: Persistent navigation, optimal reading width

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License

Copyright (c) 2024 N1ghtw1re Studios

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🙏 Acknowledgments

- Designed by N1ghtw1re Studios
- Built with [Bolt.new](https://bolt.new)
- Icons by [Lucide](https://lucide.dev)