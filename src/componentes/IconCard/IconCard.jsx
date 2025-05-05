import React from 'react'

function IconCard({img, title, text}) {
  return (
    <div className='flex flex-col items-center gap-2'>
        <img src={img} alt={title} className="w-30 h-30 " />
        <h3 className='font-semibold text-3xl'>{title}</h3>
        <p className='text-lg max-w-60 text-center'>{text}</p>
        <button
        style={{
                "--hover-text": "var(--primary)",
                "--hover-border": "var(--secondary)"
                                    }}
                                    className="bg-gradient-to-r from-[var(--hover-text)] to-[var(--hover-border)] duration-300 py-2 px-6 text-white rounded-full hover:scale-105 cursor-pointer"
                                >
                                    Get Started
                                </button>
    </div>
  )
}

export default IconCard