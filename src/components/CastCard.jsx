import React, { useEffect, useState } from 'react';

function CastCard(props) {

    const [MovieCasts, setMovieCasts] = useState([]);
    const id = props.id;

    useEffect(() => {
        getCastOfMovie();
    }, []);

    async function getCastOfMovie() {
        try {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
            const data = await res.json();

            setMovieCasts(data.cast.slice(0, 10));

        } catch (error) {
            console.log(`Error fetching cast`, error);

        }
    }


    return (
        <section className="py-[55px] ">
            <div className="max-w-7xl px-6 mx-auto ">
                <div>
                    <h2 className="text-[24px] text-black font-medium">Top Billed Cast</h2>
                </div>
                <div className="flex gap-5 overflow-x-scroll overflow-y-auto py-[20px]">
                    {MovieCasts.map((MovieCast, index) => {
                        return (
                            <div key={MovieCast.cast_id} className='flex-shrink-0 w-[180px] h-auto border-1 border-neutral-400 rounded-lg'>
                                <img
                                    className="h-auto rounded-lg"
                                    src={`https://image.tmdb.org/t/p/w500/${MovieCast.profile_path}`}
                                    alt={MovieCast.name}
                                />
                                <p className='text-center pt-4 px-2'>{MovieCast.name}</p>
                                <p className='text-center'>{MovieCast.character}</p>
                            </div>

                        )
                    })}

                </div>
            </div>
        </section>
    )
}

export default CastCard