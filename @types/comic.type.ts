export interface IComicDetails {
  id: string;
  categories: string[];
  description: string;
  poster: string;
  title: string;
  rating: number;
  chapters: IChapter[];
  slug: string;
}

export interface IChapterDetails {
  name: string;
  images: string[];
  createdAt: ICreatedAt;
}

export interface IChapter {
  id: string;
  createdAt: ICreatedAt;
  name: string;
}

export interface ICreatedAt {
  seconds: number;
  nanoseconds: number;
}
