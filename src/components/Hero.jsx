import HeroImg from "../assets/images/banner-img.webp";
import { useState, useEffect } from "react";

function Hero() {

    const [searchedMovieName, setSearchedMovieName] = useState([]);
    const [searchedInput, setSearchedInput] = useState("");
    // const [userSearchedMovie, setUserSearchedMovie] = useState(false); 

    async function handleSearchClick() {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchedInput}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const data = await res.json();
        setSearchedMovieName(data.results);
    }

    async function handleSearchMovieInput(e) {
        
        if(searchedInput === "") {
            setSearchedMovieName([]);    
        }
        setSearchedInput(e.target.value);
    }

    return (
        <>
            <section
                className="bg-center pt-[55px] md:pt-[72px] bg-no-repeat"
                style={{ backgroundImage: `url(${HeroImg})`, backgroundSize: "cover" }}
            >
                <div className="max-w-7xl mx-auto p-5 md:py-[60px]">
                    <div className="animate-slide">
                        <h1 className="text-[55px] font-bold">Welcome</h1>
                        <h2 className="text-[24px] md:text-[32px] font-medium">Millions of movies, TV shows and people to discover. Explore now.</h2>
                    </div>
                    <div className="max-w-7xl pt-[30px] ">
                        <input
                            value={searchedInput}
                            onChange={handleSearchMovieInput}
                            type="text"
                            name="searchBar"
                            placeholder="Search for Movie..."
                            className="md:w-[90%] bg-white text-gray-700 py-2 px-5 rounded-l-[20px]" />
                        <button
                            onClick={handleSearchClick}
                            className="md:w-[10%] bg-[#1cb8d7] rounded-r-[20px] hover:bg-white hover:text-[#1cb8d7] py-2 px-5 transition-colors">Search</button>
                    </div>
              
                    {searchedInput ?
                        (
                            <div  className="bg-white md:w-[81%] overflow-y-scroll h-[300px] absolute z-10 px-[20px] py-[14px] rounded-[5px] ">
                                <ul className="text-gray-700">
                                    {searchedMovieName.map((name, index) => {
                                        return (
                                            <li key={index} className="py-[6px] border-b border-gray-400">{name.original_title}</li>
                                        )
                                    })}
                                    
                                    {/* <li className="py-[6px] border-b border-gray-400">move</li>
                                    <li className="not-last:border-b not-last:border-gray-300">move</li> */}
                                </ul>
                            </div>
                        )
                        : null}

                </div>

            </section>
        </>
    );
}


export default Hero;
