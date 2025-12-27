import React from 'react'
import Button from '../components/Button'

const Contact = () => {
  return (
    
    <section className=" text-gray-400 px-6 py-10 max-w-6xl mx-auto">
        <div className="w-full h-px bg-gray-200 my-16"></div>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="md:w-[40%]">
                <h1 className="text-3xl font-serif md:text-3xl text-left text-white">Planning your trip or have questions? </h1>
                <p className="italic text-gold text-3xl font-serif underline mt-4">Send us a hi</p>
                <Button
                className="md:w-80 md:h-16 w-60 h-12" 
                id="button"
                text="contact"
                />
            </div>
            <div className="mt-10 md:mt-0 md:w-[40%] space-y-6">
                <div>
                    <h5 className="text-lg font-serif text-gray-200">High Tatras, Slovakia</h5>
                    <p className="text-sm text-gray-200">Starý Smokovec 1</p>
                    <p className="text-sm  text-gray-200">062 01 High Tatras, Slovakia</p>
                    
                </div>
                <div>
                    <p className="font-medium text-xs text-gray-200">Email us at</p>
                    <p className="text-gold text-sm">info@hightatras.sk</p>
                </div>
                <div>
                    <p className="font-medium text-xs  text-gray-200">If you´re hurry, quick call for us.</p>
                    <h4 className="text-gold font-medium text-lg">+421 944-508-509</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact