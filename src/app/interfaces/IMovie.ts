export interface IMovie extends IMovieDisplayData {
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  original_title: string;
  original_language: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
}

export interface IMovieDisplayData {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
}
