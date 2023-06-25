import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  Flex,
  Heading,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Footer from "./Footer";
import MovieCards from "./MovieCards";
// http://via.placeholder.com/400 -null image

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovie = async (title) => {
    const apiKey = '328d3e4e';
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;
    try {
      const response = await fetch(`${apiUrl}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.log("Error in fetching movies", error);
    }
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      searchMovie(search);
    }
  };

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <>
      <Flex
        minH="100vh"
        flexDir="column"
        align="center"
        justify="center"
        bg="black"
        color="white"
      >
        <Heading my={3}>MY-Movies</Heading>
        <Box p={4} bg="gray.900" maxW="100vw" w="80%">
          <Input
            type="text"
            placeholder="Search..."
            w="70%"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={handleEnterSearch}
          />
          <Button
            bg="gray.900"
            ms={2}
            mb={1}
            color="white"
            _hover={{ bg: "white", color: " Black" }}
            border="1px "
            onClick={() => {
              searchMovie(search);
            }}
          >
            <FaSearch />{" "}
          </Button>
          {Array.isArray(movies) ? (
            <>
              <Box p={4}>
                {movies?.length > 0 ? (
                  <>
                    {" "}
                    <SimpleGrid columns={[1, 2, 3, 4]} spacing={4}>
                      {movies.map((movie) => (
                        <Box
                          key={movie.imdbID}
                          borderRadius="2xl"
                          bg="blackAlpha.500"
                          p={4}
                        >
                          <MovieCards movie={movie} />
                        </Box>
                      ))}
                    </SimpleGrid>
                  </>
                ) : (
                  <>
                    <Box textAlign="center">
                      <Heading my={4} fontSize="large">
                        No movies found
                      </Heading>
                    </Box>
                  </>
                )}
              </Box>
            </>
          ) : (
            <>
              <Box textAlign="center">
                <Heading my={4} fontSize="large">
                  No movies found
                </Heading>
              </Box>
            </>
          )}
          <Footer />
        </Box>
      </Flex>
    </>
  );
};

export default MoviesPage;
