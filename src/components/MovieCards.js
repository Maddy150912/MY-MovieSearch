import { Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const MovieCards = ({ movie }) => {
  return (
    <>
      <Heading fontSize="larger" >{movie.Title}</Heading>
      <Image
        width="100vw"
        height="50vh"
        src={
             movie.Poster === "N/A"
            ? "http://via.placeholder.com/300X400"
            : movie.Poster
        }
        alt={movie.Title}
        my={3}
      />
      <Text>Type: {movie.Type}</Text>
      <Text>Year: {movie.Year}</Text>
      <a
        href={`https://www.imdb.com/title/${movie.imdbID}/`}
        rel="noreferrer"
        target="_blank"
      >
        <Button my={3} position="relative" bottom="0" width="100%">
          Show Details
        </Button>
      </a>
    </>
  );
};

export default MovieCards;
