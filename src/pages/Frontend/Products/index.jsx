import React from 'react'

const Products = () => {
  return (
    <main className='bg-gray-200 min-h-screen'>
      <h1 className='text-center text-2xl font-bold py-2'>All Products</h1>
      <div className="grid gap-4 p-4 max-w-screen-lg mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-64">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM895tGQRY_Ifq7RkoC0hv3pG6Xx261IIO5uG27-KWQQ&s=10)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div className="relative flex flex-col items-center text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
            <h2 className="text-lg font-bold">HTML & CSS</h2>
            <p className="mt-2 italic text-sm">
              Clear html tags and all Css properties for styling from Basic to Advance.
            </p>
            <button className="mt-4 px-4 py-2 bg-darklw text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-yellow-400">
              Book Now
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-64">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmnsjWZw-SapWpOxx4gn3UT8KO9RR97gx13tJAQL4-A&s=10)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div className="relative flex flex-col items-center text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
            <h2 className="text-lg font-bold">Javascript</h2>
            <p className="mt-2 italic text-sm">Clear all the fundamentals of the javascript.</p>
            <button className="mt-4 px-4 py-2 bg-darklw text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-yellow-400">
              Book Now
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-64">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFC-Wr75IluTXJnK7dEugIMH4eoGGfdkma3sI4J-XxQ&s=10)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div className="relative flex flex-col items-center text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
            <h2 className="text-lg font-bold">React.js</h2>
            <p className="mt-2 italic text-sm">React.js fundamentals form Basic to Advance.</p>
            <button className="mt-4 px-4 py-2 bg-darklw text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-yellow-400">
              Book Now
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg group h-64">
          <div
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkt23jNDfDNs8t6Ors_1jrtUC-H3hEyndPelhBycphhw&s=10)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          <div className="relative flex flex-col items-center text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out">
            <h2 className="text-lg font-bold">Into the MERN Stack</h2>
            <p className="mt-2 italic text-sm">Learning all the fundamentals MERN Stack from Basic to Advance.</p>
            <button className="mt-4 px-4 py-2 bg-darklw text-white font-bold text-xs uppercase tracking-wide rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-green-400">
              Book Now
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Products