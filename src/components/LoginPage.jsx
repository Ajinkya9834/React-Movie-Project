function Loginpage() {
    return (
        <>
            <div className="min-h-screen flex">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8">
                    <div className="w-full max-w-md">
                        <h1 className="text-4xl flex items-end gap-2 font-bold mb-2"><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#1C398E"><path d="m380-300 280-180-280-180v360ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg> MovieHub </h1>

                        <h2 className="text-3xl font-semibold mt-10 mb-3">
                            Welcome Back!
                        </h2>

                        <p className="text-gray-500 mb-8">
                            Sign in to continue exploring your favorite movies and TV shows.
                        </p>

                        <form className="space-y-5">
                            <div>
                                <label className="block mb-2 text-sm font-medium">
                                    Email
                                </label>

                                <input
                                    type="email" required
                                    placeholder="Enter your email"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium">
                                    Password
                                </label>

                                <input
                                    type="password" required
                                    placeholder="Enter your password"
                                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>

                            <div className="text-right">
                                <a href="#" className="text-red-500 text-sm">
                                    Forgot Password?
                                </a>
                            </div>

                            <button
                                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
                            >
                                Sign In
                            </button>
                        </form>

                        <p className="text-center mt-8 text-gray-600">
                            Don't have an account?
                            <span className="text-red-500 cursor-pointer ml-1">
                                Sign Up
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-black via-blue-900 to-black text-white items-center justify-center px-16">
                    <div>
                        <h2 className="text-5xl font-bold leading-tight mb-8">
                            Discover Movies <br />
                            Like Never Before
                        </h2>

                        <p className="text-xl text-gray-300 mb-10">
                            Browse trending movies, build watchlists,
                            rate your favorites, and never miss a blockbuster.
                        </p>

                        <div className="border-l-4 border-red-500 pl-4">
                            <p className="italic text-lg">
                                "The best place to track movies and
                                discover what to watch next."
                            </p>

                            <p className="mt-4 text-gray-400">
                                — MovieHub Community
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginpage;