export interface Page {
  content: string;
  path: string;
}

export interface Chapter {
  title: string;
  pages: Page[];
  path: string;
}

export interface Part {
  title: string;
  chapters: Chapter[];
  path: string;
}

export interface Book {
  title: string;
  author: string;
  parts: Part[];
}