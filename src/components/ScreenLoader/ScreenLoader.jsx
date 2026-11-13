import React from 'react';

const ScreenLoader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl sm:p-12  min-h-screen">
        
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
          
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-500 border-r-indigo-500 animate-spin"></div>
          
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-purple-500 border-l-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-indigo-400 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-lg sm:text-xl font-semibold tracking-wide text-white animate-pulse">
            Loading . . .
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400">
            Please wait while we prepare things for you ...
          </p>
        </div>

      </div>
    </div>
  );
};

export default ScreenLoader;