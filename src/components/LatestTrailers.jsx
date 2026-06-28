
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

function LatestTrailers() {

    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        getLatestTrailers();
    }, []);

    async function getLatestTrailers() {
        try {
            // 1. Get now playing movies
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/now_playing?api_key=0740d693f0240a102ea253d01f68909c`
            );
            const data = await res.json();

            // 2. Take only first 5 movies (performance)
            const movies = data.results;

            // 3. Fetch trailers for each movie
            const trailerPromises = movies.map(async (movie) => {
                const videoRes = await fetch(
                    `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=0740d693f0240a102ea253d01f68909c`
                );
                const videoData = await videoRes.json();

                // 4. Find YouTube trailer
                const trailer = videoData.results.find(
                    (vid) =>
                        vid.type === "Trailer" && vid.site === "YouTube"
                );

                if (trailer) {
                    return {
                        id: movie.id,
                        title: movie.title,
                        key: trailer.key,
                    };
                }

                return null;
            });

            const trailersData = await Promise.all(trailerPromises);

            // 5. Remove null values
            const validTrailers = trailersData.filter(Boolean);

            setTrailers(validTrailers);

        } catch (error) {
            console.log("Error fetching trailers:", error);
        }
    }

    return (
       <VideoCard trailers={trailers}/>
    );
}

export default LatestTrailers;