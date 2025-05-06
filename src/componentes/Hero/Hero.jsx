import React from "react";
import logo2 from "../../assets/linux2.svg"; // Asegúrate de que la imagen tenga la extensión correcta
import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
    return (
        <>
            <div className="py-12 sm:py-0 duration-300 overflow-hidden">
                <div className="mx-auto px-4 sm:px-12 min-h-[700px] flex relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
                        {/* Hero text section */}
                        <div className="order-2 sm:order-1 space-y-5 lg:pr-20">
                            <h1 className="text-4xl font-semibold">
                                GET READY TO ENJOY VR{" "}
                                <span
                                    style={{
                                        "--hover-text": "var(--primary)",
                                        "--hover-border": "var(--secondary)"
                                    }}
                                    className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--hover-text)] to-[var(--hover-border)]"
                                >
                                    GAMES WITH OUR PLATFORM
                                </span>
                            </h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic,
                                laudantium et! Hic unde modi corrupti laudantium rem dignissimos
                                deserunt omnis.
                            </p>
                            {/* buttons */}
                            <div className="flex gap-6">
                            <button
                                onClick={() => window.location.href = "https://www.dota2.com/home"}  // Redirige al hacer clic
                                style={{
                                    "--hover-text": "var(--primary)",
                                    "--hover-border": "var(--secondary)"
                                }}
                                className="bg-gradient-to-r from-[var(--hover-text)] to-[var(--hover-border)] duration-300 py-2 px-6 text-white rounded-full hover:scale-105 cursor-pointer"
                                >
                                Get Started
                                </button>

                                <button className="flex items-center gap-2 cursor-pointer">
                                    <BiPlayCircle className="text-3xl" />
                                    See Demo
                                </button>
                            </div>
                        </div>
                        {/* image section */}
                        <div className="order-1 sm:order-2">
                            <img src={logo2} alt="img 2" className="" />
                        </div>

                        {/* animated blob */}
                        <div
                        style={{
                            "--hover-text": "var(--primary)",
                            "--hover-border": "var(--secondary)"
                        }}
                         className="h-[300px] w-[300px] bg-gradient-to-r from-[var(--hover-text)] to-[var(--hover-border)] rounded-full absolute top-0 left-0 blur-3xl animated-wrapper">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
