import React, { useState, useEffect } from 'react';
import { words } from "../constants/index.js";


const Activities = () => {
  
  return (
    <section className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col">
                <div className="flex items-center space-x-4 mb-2">
                    <div className="h-px w-12 sm:w-20"></div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-gold mb-2">
                      Activities 
                    </p>
                </div>

                <div className="flex items-center gap-4 text-white text-3xl md:text-4xl font-bold mb-8">
            <span className="text-2xl md:text-3xl font-semibold">
              Enjoy
            </span>

            <span className="slide relative h-16 w-48 overflow-hidden">
              <span className="wrapper absolute flex flex-col">
                {[...words, ...words].map((word, index) => (
                  <span
                    key={index}
                    className="slide-item flex items-center gap-2 h-16"
                  >
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="w-6 h-6"
                    />
                    <span className="text-2xl md:text-3xl font-semibold">
                      {word.text}
                    </span>
                  </span>
                ))}
              </span>
            </span>

            <span className="text-xl md:text-2xl font-semibold">
              the Best Activities.
            </span>
           
          </div>
                <img 
                src="/images/winter.jpg" 
                alt="winter" 
                className="w-full h-[300px] md:h-[400px] object-cover rounded-md shadow mb-4" 
                />
                <h3 className="text-3xl text-white mb-2">Skiing for everybody 
                  <span className="text-1xl"></span>
                </h3>
                <p className="text-gray-300 text-sm mb-4 max-w-md [text-align:justify]">
                    The ski resorts of Tatranska Lomnica, Stary Smokovec and Strbske Pleso offer top-quality skiing on 24km of slopes. Enjoy 13 km of blue-easy slopes with your family, 10 km of red-more difficult slopes or the highest located 1.2 km long black track from Lomnicke sedlo (saddle) to Skalnate Pleso. 20 km of slopes with man-made snow guarantee 5 months of skiing per year.
                </p>
            </div>
            <div className="flex flex-col justify-between gap-8">
                <div>
                    <img 
                    src="/images/manHiking.jpg" 
                    alt="namHiking" 
                    className="w-full h-[300px] md:h-[300px] object-cover rounded-md mb-3" 
                    />
                    <h3 className="text-3xl text-white mb-1">Montains & Views</h3>
                    <p className="text-gray-300 text-sm">
                        Beautiful views of Tatras mountains attract tourists too.There are tourist trails to 12 alpine chalets opened for hiking. 
                    </p>
                    
                </div>
                <div>
                    <img 
                    src="/images/skiTouring.jpg" 
                    alt="skiTouring" 
                    className="w-full h-[300px] md:h-[300px] object-cover rounded-md shadow mb-3" 
                    />
                    <h3 className="text-3xl text-white mb-1">Top-Class Services</h3>
                    <p className="text-gray-300 text-sm [text-align:justify]">
                        Enjoy the best moments with the professional teams of instructors - try walking with snowshoes or ski touring. The ski resorts in the High Tatras offer popular products such as a rich daily apres-ski programms, a Fun zone, snow park and much more.
                    </p>
                    
                </div>
            </div>
        </div>
    </section>

  )
}

export default Activities