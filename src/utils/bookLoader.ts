import { Book, Part, Chapter, Page } from '../types/book';

export async function loadBook(): Promise<Book> {
  const book: Book = {
    title: "The Codex Reader Guide",
    author: "The N1ghtw1re Collective",
    parts: []
  };

  // Load parts and chapters
  const parts: Part[] = [
    {
      title: "Introduction",
      path: "introduction",
      chapters: [
        {
          title: "Getting Started",
          path: "chapter1",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/introduction/chapter1/page_001.md?raw').then(m => m.default)
            }
          ]
        }
      ]
    },
    {
      title: "Reader Features",
      path: "part1",
      chapters: [
        {
          title: "Navigation and Layout",
          path: "chapter1",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part1/chapter1/page_001.md?raw').then(m => m.default)
            }
          ]
        },
        {
          title: "Responsive Design",
          path: "chapter2",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part1/chapter2/page_001.md?raw').then(m => m.default)
            }
          ]
        }
      ]
    },
    {
      title: "Content Creation",
      path: "part2",
      chapters: [
        {
          title: "File Structure",
          path: "chapter3",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part2/chapter3/page_001.md?raw').then(m => m.default)
            }
          ]
        },
        {
          title: "Markdown Support",
          path: "chapter4",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part2/chapter4/page_001.md?raw').then(m => m.default)
            }
          ]
        }
      ]
    },
    {
      title: "Customization",
      path: "part3",
      chapters: [
        {
          title: "Styling Guide",
          path: "chapter5",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part3/chapter5/page_001.md?raw').then(m => m.default)
            }
          ]
        },
        {
          title: "Theme Customization",
          path: "chapter6",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part3/chapter6/page_001.md?raw').then(m => m.default)
            }
          ]
        }
      ]
    },
    {
      title: "Integration",
      path: "part4",
      chapters: [
        {
          title: "Website Integration",
          path: "chapter7",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part4/chapter7/page_001.md?raw').then(m => m.default)
            }
          ]
        },
        {
          title: "Advanced Configuration",
          path: "chapter8",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part4/chapter8/page_001.md?raw').then(m => m.default)
            }
          ]
        }
      ]
    }
  ];

  book.parts = parts;
  return book;
}