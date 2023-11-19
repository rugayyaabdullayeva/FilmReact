import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack, Button } from "@mui/material";

const Form = ({ addMovie }) => {
  const [titleInput, setTitleInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [imdbInput, setImdbInput] = useState("");

  const handleAddMovie = () => {
    addMovie(imdbInput, titleInput, imageInput);
    setImdbInput("");
    setTitleInput("");
    setImageInput("");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Title</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Name"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">Image</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Image"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="component-outlined">IMDB</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Imdb"
          value={imdbInput}
          onChange={(e) => setImdbInput(e.target.value)}
        />
      </FormControl>

      <Button variant="contained" onClick={handleAddMovie} style={{ margin: '10px', width:'100' }}>
        Add
      </Button>
    </Box>
  );
};

export default Form;