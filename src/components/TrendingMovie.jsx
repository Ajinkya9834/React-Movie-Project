import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
function Trending() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    async function getMovies() {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0740d693f0240a102ea253d01f68909c`);
            const data = await response.json();            
            setMovies(data.results)
        } catch (error) {
            console.log("Error in fetching data", error);

        }
    }

    return (
       <MovieCard
           movies={movies}
           sectiontitle = "Trending"
       />
    );
}

export default Trending;