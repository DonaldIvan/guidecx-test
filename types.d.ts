interface Result {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
}

interface SearchResult {
  query?: {
    pages?: Result[];
  };
}
