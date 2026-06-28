import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function PopularMovies() {

    const [PopularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=0740d693f0240a102ea253d01f68909c`);
            const data = await res.json();
            setPopularMovies(data.results);
        } catch (error) {
            console.log("Error  in fetching latest trailers", error);
        }
    }

    return (
        <>
            <MovieCard
                movies={PopularMovies}
                sectiontitle = "Popular Movies"
            />
        </>
    );
}

export default PopularMovies;