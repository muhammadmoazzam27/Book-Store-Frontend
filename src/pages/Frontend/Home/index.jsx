import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const [stopScroll, setStopScroll] = useState(false);
  const cardData = [
    {
      title: "Design Your Digital Future",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM895tGQRY_Ifq7RkoC0hv3pG6Xx261IIO5uG27-KWQQ&s=10",
    },
    {
      title: "Unlock Your Creative Flow",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmnsjWZw-SapWpOxx4gn3UT8KO9RR97gx13tJAQL4-A&s=10",
    },
    {
      title: "Build with Passion, Ship with Pride",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFC-Wr75IluTXJnK7dEugIMH4eoGGfdkma3sI4J-XxQ&s=10",
    },
    {
      title: "Think Big, Code Smart",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkt23jNDfDNs8t6Ors_1jrtUC-H3hEyndPelhBycphhw&s=10",
    },
  ];


  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden w-full">

      <section className="relative w-full bg-black text-white py-20 lg:py-32 overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <span className="px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-indigo-400 bg-indigo-950/80 border border-indigo-800/50 rounded-full">
              📖 Your Next Favourite Book Is Just a Click Away.
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Best-Sellers, Coding Books, Novels, and Academic Books — All in <span className="text-indigo-500">One Place.</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              Explore thousands of titles, from timeless classics to modern bestsellers, delivered straight to your doorstep.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href='#imageGallery' className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-center transition shadow-lg shadow-indigo-600/20">
                Explore More
              </a>
              <Link to="/about" className="px-8 py-3 rounded-full bg-gray-900 hover:bg-gray-800 text-white border border-gray-700 font-medium text-center transition">
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="relative w-full max-w-md lg:max-w-lg flex justify-center">
            <div className="w-72 h-96 sm:w-80 sm:h-[420px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 rotate-2 hover:rotate-0 transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop"
                alt="Books stack"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
              />
            </div>
          </div>

        </div>
      </section>


      {/* Image Gallery */}
      <section id='imageGallery' className='py-4 bg-gray-100'>
        <div className='my-6'>
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">Our Latest Creations</h1>
          <p className=" text-center p-2 text-base sm:text-lg text-gray-600 leading-relaxed">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
        </div>
        <div className="overflow-hidden py-12 w-full relative max-w-6xl  mx-auto bg-gray-200" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
            <div className="flex">
              {[...cardData, ...cardData].map((card, index) => (
                <div key={index} className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300">
                  <img src={card.image} alt="card" className="w-full h-full object-cover" />
                  <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                    <p className="text-white text-lg font-semibold text-center">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      {/* FAQ'S Section  */}

    </main>
  );
};

export default Home;