import React from 'react'

const Attractions = () => {
  return (
     <section className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-12 xl:px-12 py-16">
        <div className="mb-12 xl:px-12">
            <div className="flex items-center space-x-4 mb-2">
                <div className="h-px w-12 sm:w-20"></div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
                    Top Attractions
                </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-white">
                Spend an unforgettable winter holiday in the <span className="italic font-serif">Tatras</span>,  
                with piles of mountain experiences!
            </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="w-full md:w-1/3 border border-white-300 p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-20 mb-5 rounded-sm self-start ">
                    <img 
                    src="/images/ski.svg" 
                    alt="ski" 
                    className="rounded-full bg-white"
                    />
                </div>
                <h3 className=" text-gold text-lg md:text-xl mb-2 ">Lomnicky Peak 
                    <span className="block md:hidden"><br /></span>
                    <span className="hidden md:inline"></span>
                    </h3>
                <p className="text-gray-200 [text-align:justify] text-sm">
                    Mt Lomnický štít is a peak in the eastern part of the High Tatras.On its summit there is a cable car station, an observatory and a café.
                </p>
            </div>

            <div className="w-full md:w-1/3 border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-20 mb-5 rounded-sm self-start">
                    <img 
                    src="/images/trees.svg" 
                    alt="trees" 
                    className="items-start bg-white rounded-full"
                    />
                </div>
                <h3 className="text-gold text-xl mb-2">Tatranska Lomnica
                    <span className="block md:hidden"><br /></span>
                    <span className="hidden md:inline"></span>
                </h3>
                <p className="text-gray-200 [text-align:justify] text-sm">
                    The most modern ski resort in Slovakia – Tatranská Lomnica offers 12 ski slopes of various levels of difficulty. You can enjoy great skiing on the highest located and steepest slope in Slovakia
                </p>
            </div>

            <div className="w-full md:w-1/3 border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-20 mb-5 rounded-sm self-start">
                    <img 
                    src="/images/snowboard.svg" 
                    alt="snowboard" 
                    className="items-start bg-white rounded-full"
                    />
                </div>
                <h3 className="text-gold text-xl mb-2">Strbske Pleso
                    <span className="block md:hidden"><br /></span>
                    <span span className="hidden md:inline"></span>
                </h3>
                <p className="text-gray-200 [text-align:justify] text-sm">
                    The resort of Štrbské Pleso is the highest located ski resort and the longest ski season Slovakia. It attracts skiers due to great snow conditions, excellent tracks for slalom, downhill, cross-country skiing and top-quality services.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Attractions