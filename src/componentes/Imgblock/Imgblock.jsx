import React from 'react'
import img1 from "../../assets/img/dot.jpg"
// import { GiTransform } from 'react-icons/gi'
function Imgblock() {
  return (
    <div className='w-full min-h-screen grid place-content-center'>
        <div className='w-[400px] h-[590px] bg-transparent cursor-pointer group rounded-3xl' style={{perspective: "1000px"}}>
            <div className='relative w-full h-full group-hover:rotate-y-180 duration-500' style={{transformStyle: "preserve-3d"}}>
                <div className='w-full h-full absolute rounded-3xl overflow-hidden' style={{backfaceVisibility: "hidden"}}>
                    <img src={img1} alt="img1" className='w-full h-full'/>
                </div>
                <div className='absolute w-full h-full rotate-y-180
                             bg-[rgba(15,24,35,0.95)] 
                             rounded-3xl overflow-hidden 
                             p-10 text-neutral-300 space-y-5'
                             style={{backfaceVisibility: "hidden"}}>
                    <div>
                        <span className='font-bold text-3xl'>AGENT | OMEN</span>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <span className='font-semibold'>//ROle</span>
                        <span className='text-3xl font-bold'>
                            CONTROLLER
                        </span>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <span className='font-bold'>BIOGRAPHY</span>
                        <span>Lorem, ipsum dolor sit amet consectetur
                             adipisicing elit. Animi doloribus excepturi
                             possimus quod sunt quaerat nesciunt molestias 
                             magni repellendus ipsa. Lorem ipsum, dolor sit 
                             amet consectetur adipisicing elit. Consequuntur, saepe.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Imgblock
