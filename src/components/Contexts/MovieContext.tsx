import { createContext, useState } from "react";

interface MovieContextProviderProps {
  children: React.ReactNode;
}
interface Movie {
  title: string;
  id: number;
}
interface MovieContext {
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: number) => void;
}

const movieDefault: MovieContext = {
  movies: [],
  addMovie: (title: string) => {},
  deleteMovie: (id: number) => {},
};

export const MovieContext = createContext(movieDefault);

export const MovieContextProvider = ({
  children,
}: MovieContextProviderProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const addMovie = (title: string) => {
    return setMovies([...movies, { title, id: Date.now() }]);
  };
  const deleteMovie = (id: number) => {
    return setMovies(movies.filter((item) => item.id !== id));
  };
  const movieContextValue = {
    movies,
    addMovie,
    deleteMovie,
  };
  return (
    <MovieContext.Provider value={movieContextValue}>
      {children}
    </MovieContext.Provider>
  );
};
