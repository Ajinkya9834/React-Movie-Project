import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <header className="bg-[#032541] fixed w-full hidden md:block z-[1000]">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 ">
          <div className="text-[#1cb8d7] font-bold text-2xl"><Link to="/">CINEMAX</Link></div>
          <div className="gap-[25px] flex">
            <Link to="/" className="text-white hover:text-[#c5c5c5] transition-colors">Home</Link>
            <Link to="#" className="text-white hover:text-[#c5c5c5] transition-colors">Movies</Link>
            <Link to="#" className="text-white hover:text-[#c5c5c5] transition-colors">TV Shows</Link>
            <Link to="#" className="text-white hover:text-[#c5c5c5] transition-colors">New Releases</Link>
            <Link to="#" className="text-white hover:text-[#c5c5c5] transition-colors">My List</Link>
          </div>
          <Link to="/login-page" className="bg-[#1cb8d7] px-5 py-2 rounded-lg hover:bg-white hover:text-[#1cb8d7] font-medium transition-all">
                Sign in
              </Link>
        </nav>
      </header>

      <header className="bg-[#032541] fixed w-full md:hidden z-[1000]">
        <nav className="container mx-auto px-5 py-3 ">
          <div className="flex items-center justify-between">
            <div className="text-[#1cb8d7] font-bold text-2xl">
              <Link to="/">CINEMAX</Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ?
                (<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" className="bi bi-x-square-fill" viewBox="0 0 16 16">
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
                </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                )}
            </button>

          </div>
          {isOpen && (
            <div className="mobile-menu pt-6 flex flex-col gap-[15px] items-center">
              <Link to="/" className="text-white hover:text-[#c5c5c5] transition-colors">Home</Link>
              <Link to="#" className="text-white hover:text-[#c5c5c5] transition-colors">Movies</Link>
              <Link to="#" className="text-white hover:text-[#c5c5c5] transition-colors">TV Shows</Link>
              <Link to="#" className="text-white hover:text-[#c5c5c5] transition-colors">New Releases</Link>
              <Link to="#" className="text-white hover:text-[#c5c5c5] transition-colors">My List</Link>
              <Link to="/login-page" className="bg-[#1cb8d7] px-5 py-2 rounded-lg hover:bg-white hover:text-[#1cb8d7] font-medium transition-all">
                Sign in
              </Link>
            </div>

          )}
        </nav>
      </header >
    </>


  );
}
export default Header;