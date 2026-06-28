import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetailHero from "./MovieDetailHero";
import CastCard from "./CastCard";
import Header from "./header/Header";
import Footer from "./Footer";
import SubscriptionSection from "./SubscriptionSection";
import FeatureSection from "./FeatureSection";
import PopularMovies from "./PopularMovies";

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    console.log(movie);

    useEffect(() => {
        getMovieDetails();
    }, [id]);

    async function getMovieDetails() {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=0740d693f0240a102ea253d01f68909c`
            );

            const data = await res.json();
            setMovie(data);
        } catch (error) {
            console.log("Error fetching movie details:", error);
        }
    }

    if (!movie) return <p>Loading...</p>;

    return (
        <>
            <Header />

            <main>
                <MovieDetailHero movie={movie} />
                <CastCard id={id} />
                <FeatureSection movie={movie} />
                <PopularMovies/>
                <SubscriptionSection />

            </main>

            <Footer />
        </>
    );
}

export default MovieDetails;