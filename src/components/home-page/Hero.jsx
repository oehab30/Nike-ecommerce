import React from "react";

function HeroSection() {
  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1280px] mx-auto px-6 md:px-10 py-10 md:py-20">

      {/* Left Section */}
      <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2">
        <h1 className="font-extrabold text-4xl md:text-7xl lg:text-8xl leading-tight">
          YOUR FEET DESERVE THE BEST
        </h1>

        <p className="text-[var(--gray)] font-semibold max-w-md mx-auto md:mx-0 text-base md:text-lg">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
          <button className="bg-[var(--red)] text-white px-8 py-3 rounded font-medium text-lg hover:opacity-90">
            Shop Now
          </button>
          <button className="border border-gray-500 text-[var(--gray)] px-8 py-3 rounded font-medium text-lg hover:border-[var(--red)]">
            Category
          </button>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-2">Also Available On</p>
          <div className="flex justify-center md:justify-start gap-4">
            <img src="/public\home-pic/flipkart.png" alt="Flipkart" className="h-6" />
            <img src="/public\home-pic/amazon.png" alt="Amazon" className="h-6" />
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center md:justify-end md:w-1/2 mb-10 md:mb-0">
        <img
          src="/public\home-pic/shoe_image.png"
          alt="Shoe"
          className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-auto"
        />
      </div>
    </main>
  );
}

export default HeroSection;
