import React from 'react'
import Shop from '@/components/common/Shop.jsx'
function Menu() {
  return (
    <>

<Shop/>



<main className="border border-gray-200 w-full sm:w-1/2 md:w-1/3 rounded-2xl flex flex-col items-center p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
  {/* Product Image */}
  <div className="w-full flex justify-center mb-5">
  <img
  src="/product-pic/pr1.jpg"
  alt="Product"
  className="w-64 h-64 object-cover rounded-2xl transform transition-transform duration-500 hover:scale-105"
/>
  </div>

  {/* Product Info */}
  <h2 className="text-2xl font-semibold text-gray-800 text-center">Nike Air Zoom</h2>
  <p className="text-gray-500 text-center">Running Shoes</p>
  <h2 className="text-xl font-bold mt-3 text-red-600">$200</h2>

  {/* Buttons */}
  <div className="flex gap-4 mt-5">
    <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
      Add to Cart
    </button>
    <button className="border border-gray-400 px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
      Details
    </button>
  </div>
</main>



    </>
  )
}

export default Menu