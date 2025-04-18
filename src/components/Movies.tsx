import { Box, Button, Chip, TextField } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { MovieContext } from "../Contexts/MovieContext";

const Movies = () => {
  const { theme } = useContext(ThemeContext);
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const [title, setTitle] = useState<string>("");
  const handleGetTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleAddMovie = () => {
    if (title) {
      addMovie(title);
      setTitle("");
    }
  };
  const handleDeleteMovie = (id: number) => {
    deleteMovie(id);
  };
  return (
    <Fragment>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favourite movie..."
          variant="outlined"
          onChange={handleGetTitle}
          value={title}
        />
        <Button variant="contained" color={theme} onClick={handleAddMovie}>
          Add
        </Button>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        flexDirection={"column"}
        gap={2}
        mx={5}
      >
        {movies.map((movie) => (
          <Chip
            color={theme}
            key={movie.id}
            label={movie.title}
            clickable
            onDelete={() => handleDeleteMovie(movie.id)}
            sx={{
              width: "fit-content",
              alignSelf: "center",
            }}
          />
        ))}
      </Box>
    </Fragment>
  );
};

export default Movies;
