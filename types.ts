export interface StreamSource {
  id: string;
  name: string;
  url: string;
  quality?: string;
  type?: 'hls' | 'direct' | 'iframe';
}

export interface MediaItem {
  id: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
  media_type: 'movie' | 'tv' | 'sports' | 'tv_live';
  genres: string[];
  duration: string;
  streams?: StreamSource[] | Record<string, string>;
}