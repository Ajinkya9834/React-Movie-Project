import React from 'react';

function MovieDetailHero(props) {

    const movie = props.movie;
    
    return (
        <section className=" md:pt-[72px] relative bg-no-repeat bg-cover bg-center py-[55px] px-5"
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}
        >
            <div className="absolute inset-0 bg-blue-950/80"></div>
            <div className="relative max-w-7xl flex flex-col md:flex-row gap-[25px] items-center justify-between mxa-w-7xl mx-auto py-[50px]">
                <div className="w-full md:w-1/4">
                    <img className="w-full md:w-75 rounded-2xl" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                </div>
                <div className="w-full md:w-3/4">
                    <div>
                        <h2 className="text-white text-[35px] font-[700]">{movie.title}</h2>
                        <div className="flex items-center gap-7 pt-2.5">
                            <p className="text-white text-[18px]">{movie.release_date}</p>
                            <p className="text-white text-[18px] bg-amber-600 py-0.5 px-3 rounded-3xl">{movie.genres[0].name}</p>
                        </div>
                    </div>
                    <p className="text-white pt-6"><b className="text-[22px]">OverView: </b><br />{movie.overview}</p>
                    <div className="flex gap-7 pt-6">
                        <svg className="bg-[#6394bc] hover:bg-neutral-400  p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm-56.5-263.5Q120-687 120-720t23.5-56.5Q167-800 200-800t56.5 23.5Q280-753 280-720t-23.5 56.5Q233-640 200-640t-56.5-23.5Z" /></svg>
                        <svg className="bg-[#6394bc] hover:bg-neutral-400 p-2 rounded-full" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M451.5-152q-14.5-5-25.5-16l-69-63q-106-97-191.5-192.5T80-634q0-94 63-157t157-63q53 0 100 22.5t80 61.5q33-39 80-61.5T660-854q94 0 157 63t63 157q0 115-85 211T602-230l-68 62q-11 11-25.5 16t-28.5 5q-14 0-28.5-5ZM442-690q-29-41-62-62.5T300-774q-60 0-100 40t-40 100q0 52 37 110.5T285.5-410q51.5 55 106 103t88.5 79q34-31 88.5-79t106-103Q726-465 763-523.5T800-634q0-60-40-100t-100-40q-47 0-80 21.5T518-690q-7 10-17 15t-21 5q-11 0-21-5t-17-15Zm38 189Z" /></svg>
                        <svg className="bg-[#6394bc] p-2 rounded-full hover:bg-neutral-400" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v245q0 12-10 17.5t-20-.5l-49-30q-10-6-20.5-6t-20.5 6l-49 30q-10 6-20.5.5T440-555v-245H240v640Zm0 0v-640 640Zm200-395q0 12 10.5 17.5t20.5-.5l49-30q10-6 20.5-6t20.5 6l49 30q10 6 20 .5t10-17.5q0 12-10 17.5t-20-.5l-49-30q-10-6-20.5-6t-20.5 6l-49 30q-10 6-20.5.5T440-555Z" /></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieDetailHero