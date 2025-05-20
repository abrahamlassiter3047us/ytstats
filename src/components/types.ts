export interface ColorModeType {
  colorMode: "dark" | "light";
}

export interface Snippet {
  title: string;
  country: string;
  description: string;
  customUrl: string;
  thumbnails: {
    medium: { url: string };
  };
}

export interface Statistics {
  viewCount: string;
  subscriberCount: string;
  videoCount: string;
}

export interface YoutubeData {
  snippet: Snippet;
  statistics: Statistics;
}
