import React from 'react'

const ScrollHome = () => {
  return (
    <a
     href="#hero"
     className="fixed bottom-6 right-6 z-50 w-12 h-12 
     rounded-full bg-amber-400 text-black hover:bg-cyan-600
     flex items-center justify-center shadow-lg transation"
     aria-label="ScrollHome"
    >
       ↑ 
    </a>
  )
}

export default ScrollHome