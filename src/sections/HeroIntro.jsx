import React from 'react'

const HeroIntro = () => {
  return (
    <div className="relative w-full">
      {/* waves */}
        <img 
        src="/images/wave.svg"
        alt="section intro"
        className="w-full h-[120px] md:h-[160px] object-cover block"
        />
        
        
        <h3 className="absolute left-1/2 -translate-x-1/2 bottom-4 text-xl md:text-2xl text-white font-semibold text-center">
          Start your adventure in the High Tatras
        </h3>
        
    
    </div>
  )
}

export default HeroIntro