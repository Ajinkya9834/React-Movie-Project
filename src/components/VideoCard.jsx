import trailerBgImg from "../assets/images/superwomen.webp";

function VideoCard(props){

    const trailers = props.trailers;

    return(
         <section
            className="relative px-5 md:px-6 md:py-[30px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${trailerBgImg})` }}
        >
            <div className="absolute inset-0 bg-[#032541]/85"></div>

            <div className="relative max-w-7xl mx-auto py-10">
                <h2 className="text-white font-[600] text-[24px] mb-6">
                    Latest Trailers
                </h2>

                <div className="flex gap-6 overflow-scroll overflow-y-auto">
                    {trailers.map((trailer) => (
                        <div key={trailer.id} className="min-w-[350px]">
                            <iframe
                                className="w-full h-60 rounded-lg"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title={trailer.title}
                                allowFullScreen
                            ></iframe>

                            <p className="text-white mt-2 text-sm">
                                {trailer.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default VideoCard;