import { useEffect } from "react";
import useMovies from "../hooks/api/useMovies";
import Title from "../components/Title";
import Footer from "../components/Footer";
import Movie from "../components/Movie";

export default function Home() {
  const { movies, moviesLoading, moviesError, getMovies } = useMovies();

  useEffect(() => {
     getMovies;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (moviesLoading) {
    return <p>Loading</p>;
  }
  
  if (moviesError) {
    return <p>An error occurred: {moviesError.message}</p>;
  }
  

  if (movies) {
    return (
      <>
        <main>
          <Title subTitle="Selecione o filme" />
          <section className="movies">
            {movies.map((movie) => {
              
              return (
                <Movie key={movie.id} movie={movie}/> 
              );
            })}
          </section>
        </main>
        <Footer situation="desativado" />
      </>
    );
  }

  return null;
}
