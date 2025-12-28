import React from 'react'

const HeroIntro = () => {
  return (
    <section className="relative w-full overflow-hidden">
        <img 
        src="/images/wave.svg"
        alt="section intro"
        className="w-full h-[150px] md:h-[200px] object-cover"
        />
        
        <div className="relative -mt-16 text-center">
        <h3 className="text-xl md:text-2xl text-white font-semibold">
          Start your adventure in the High Tatras
        </h3>
        </div>
    
    </section>
  )
}

export default HeroIntro