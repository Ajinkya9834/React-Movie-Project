

function FeatureSection({ movie }) {
  return (
   <section className=" py-16 px-6 ">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl font-bold mb-6">
          Movie Facts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left Column */}
          <div className="space-y-4">

            <div>
              <p className="text-black font-medium  text-[18px]">Original Title</p>
              <p className="font-[400] text-gray-600">
                {movie.original_title || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-black font-medium  text-[18px]">Status</p>
              <p className="font-[400] text-gray-600">
                {movie.status || "N/A"}
              </p>
            </div>

            <div>
              <p className="text-black font-medium  text-[18px]">Original Language</p>
              <p className="font-[400] text-gray-600">
                {movie.original_language?.toUpperCase() || "N/A"}
              </p>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-4">

            <div>
              <p className="text-black font-medium  text-[18px]">Budget</p>
              <p className="font-[400] text-gray-600">
                {movie.budget
                  ? `₹${movie.budget.toLocaleString()}`
                  : "Not available"}
              </p>
            </div>

            <div>
              <p className="text-black font-medium  text-[18px]">Revenue</p>
              <p className="font-[400] text-gray-600">
                {movie.revenue
                  ? `₹${movie.revenue.toLocaleString()}`
                  : "Not available"}
              </p>
            </div>

            <div>
              <p className="text-black font-medium  text-[18px]">Keywords</p>
              <p className="font-[400] text-gray-600">
                No keywords added
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeatureSection;
