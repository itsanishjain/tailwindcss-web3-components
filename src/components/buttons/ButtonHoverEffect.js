import React from 'react'

function ButtonHoverEffect({text, onClick}) {
  return (
    <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div
            className="relative px-7 py-4 bg-black rounded-lg leading-none divide-x divide-gray-600 cursor-pointer"
            onClick={onClick}
        >
            <span className="block px-7 py-4 rounded-lg text-center text-xl pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200 ">
            {text}
            </span>
        </div>
    </div>


  )
}

export default ButtonHoverEffect