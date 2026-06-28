import { Link } from "react-router-dom";

function MovieCard(props) {

    const movies = props.movies;
    const imgBaseUrl = "https://image.tmdb.org/t/p/w500/";

    return (
        <section className="text-white pt-[50px] pb-[50px] px-6">
            <div className="max-w-7xl mx-auto">
                <div>
                    <h2 className="text-[24px] text-black font-medium">{props.sectiontitle}</h2>
                </div>
                <div className="flex gap-5 overflow-x-scroll py-[20px]">
                    {movies.map((movie) => {
                        // console.log("movie id" ,movie.id);
                        return (
                            <Link to={`/movie/${movie.id}`} key={movie.id}>
                                <div key={movie.id} className="min-w-[200px]">
                                    <div className="relative">
                                        <img
                                            className="rounded-2xl hover:opacity-80 transition-opacity duration-300 bg-blend-overlay"
                                            src={`${imgBaseUrl}${movie.poster_path}`}
                                            alt="movie poster"
                                        />
                                        <div className="absolute top-1 right-2 flex gap-[5px] bg-neutral-950 px-2 py-1 rounded-lg items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#ff9f1a"><path d="m233-120 93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Z" /></svg>
                                            {movie.vote_average.toFixed(1)}
                                        </div>

                                    </div>
                                    <div className="pt-[10px]">
                                        <h1 className="text-black font-[600] text-[17px]">
                                            {movie.original_title}
                                        </h1>
                                        <h3 className="text-neutral-600 font-[400] text-[16px]">{movie.release_date}</h3>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}

export default MovieCard;