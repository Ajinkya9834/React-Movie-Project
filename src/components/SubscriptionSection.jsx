import React from 'react'

function SubscriptionSection() {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center text-white">

        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Unlimited Movies, TV Shows & More
        </h2>

        <p className="text-gray-300 mb-8 text-lg">
          Watch anywhere. Cancel anytime. Dive into a world of entertainment.
        </p>

        <button className="bg-[#1cb8d7] px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-[#1cb8d7] transition">
          Join Now
        </button>

      </div>
    </section>
  );
}



export default SubscriptionSection;