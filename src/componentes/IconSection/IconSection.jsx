import React from 'react';
import { cardItems } from '../constans';
import IconCard from '../IconCard/IconCard';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function IconSection() {
    useGSAP(() => {
        // Animación inicial del título (para todos los dispositivos)
        gsap.from(".iconstext", {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".iconstext",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        // Configuración responsive de ScrollTrigger
        ScrollTrigger.matchMedia({
            // Desktop (md en adelante)
            "(min-width: 768px)": function() {
                cardItems.forEach((_, index) => {
                    const direction = index % 2 === 0 ? 1 : -1;
                    gsap.fromTo(`.icon-card:nth-child(${index + 1})`, 
                        { x: 100 * direction, opacity: 0 },
                        {
                            x: 0,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: `.icon-card:nth-child(${index + 1})`,
                                start: "top 75%",
                                end: "top 25%",
                                scrub: 0.5,
                                markers: false
                            }
                        }
                    );
                });
            },
            
            // Mobile (menos de 768px)
            "(max-width: 767px)": function() {
                gsap.utils.toArray(".icon-card").forEach((card, index) => {
                    gsap.fromTo(card, 
                        { y: 50, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            scrollTrigger: {
                                trigger: card,
                                start: "top 85%",
                                end: "top 50%",
                                scrub: 0.3,
                                markers: false
                            }
                        }
                    );
                });
            }
        });
    }, []);

    return (
        <section className='icons-section w-full min-h-screen py-20 px-4 md:px-8 lg:px-12'>
            <div className='container mx-auto flex flex-col items-center'>
                <h2 className='iconstext pb-12 md:pb-16 font-bold text-3xl sm:text-4xl md:text-5xl text-center'>
                    Plenty of cool stuff
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full'>
                    {cardItems.map((item) => (
                        <div className='icon-card' key={item.id}>
                            <IconCard img={item.img} title={item.title} text={item.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default IconSection;