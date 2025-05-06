import React from 'react'

function Imgblock() {
  const agents = [
    {
      id: 1,
      img: "https://clan.cloudflare.steamstatic.com/images//3703047/e11198d52372bf87ada1c5495fe8ec9539716096.png",
      name: "AGENT | OMEN",
      role: "CONTROLLER",
      bio: "Un fantasma de memoria, Omen caza entre las sombras, ciega a los enemigos y se transporta a través del campo de batalla."
    },
    {
      id: 2,
      img: "https://assets.xboxservices.com/assets/20/38/203850f5-1bed-4912-b25f-193ee890c97f.jpg?n=Fortnite_GLP-Page-Hero-1084_876951_1920x1080.jpg",
      name: "AGENT | JETT",
      role: "DUELIST",
      bio: "Representando a Corea del Sur, el estilo de lucha ágil y evasivo de Jett le permite asumir riesgos que nadie más puede."
    },
    {
      id: 3,
      img: "https://clan.cloudflare.steamstatic.com/images/3703047/9b31369bd6f6b1fa85fe08fa6cd34338adc5b58b.jpg",
      name: "AGENT | SAGE",
      role: "SENTINEL",
      bio: "La fortaleza de China, Sage crea seguridad para sí misma y su equipo dondequiera que vaya."
    },
    {
      id: 4,
      img: "https://i.ytimg.com/vi/rH-eZd01NEQ/maxresdefault.jpg",
      name: "AGENT | PHOENIX",
      role: "DUELIST",
      bio: "Originario del Reino Unido, el poder estelar de Phoenix brilla en su estilo de lucha."
    },
    {
        id: 5,
        img: "https://i.blogs.es/ff4f41/elqk-v1wmauw09m/1366_2000.jpg",
        name: "AGENT | PHOENIX",
        role: "DUELIST",
        bio: "Originario del Reino Unido, el poder estelar de Phoenix brilla en su estilo de lucha."
      },
      {
        id: 6,
        img: "https://img.redbull.com/images/c_crop,w_1280,h_640,x_0,y_0/c_auto,w_1200,h_600/f_auto,q_auto/redbullcom/2018/01/12/96e483fe-3b4b-4fee-a7ff-ada04cb9113e/league-of-legends",
        name: "AGENT | PHOENIX",
        role: "DUELIST",
        bio: "Originario del Reino Unido, el poder estelar de Phoenix brilla en su estilo de lucha."
      },
      {
        id: 7,
        img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/5864aa60c33cd753d15b2c91ccada76908205796-1920x1080.jpg",
        name: "AGENT | PHOENIX",
        role: "DUELIST",
        bio: "Originario del Reino Unido, el poder estelar de Phoenix brilla en su estilo de lucha."
      },
      {
        id: 4,
        img: "https://1884403144.rsc.cdn77.org/foto/lol-hra/OTgweDU1MS9maWx0ZXJzOm5vX3Vwc2NhbGUoKS9pbWc/6706679.jpg?v=0&st=d4UpcQcgEDuPg8x3TD1VxHaMLs4KuzdpmRlPwfwH_Po&ts=1600812000&e=0",
        name: "AGENT | PHOENIX",
        role: "DUELIST",
        bio: "Originario del Reino Unido, el poder estelar de Phoenix brilla en su estilo de lucha."
      }
  ];

  return (
    <div className='w-full min-h-screen p-4 md:p-8 '>
      <div className='max-w-7xl mx-auto'>
        {/* Título responsivo */}
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center  mb-6 md:mb-12'>
          NUESTROS AGENTES
        </h1>
        
        {/* Grid responsivo con ajustes para móviles */}
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
          {agents.map((agent) => (
            <div 
              key={agent.id} 
              className='w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-transparent cursor-pointer group'
              style={{ perspective: "1000px" }}
            >
              {/* Contenedor de tarjeta con ajustes responsivos */}
              <div 
                className='relative w-full h-full duration-500 transform preserve-3d group-hover:rotate-y-180'
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Parte frontal con imagen */}
                <div 
                  className='absolute w-full h-full backface-hidden rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg'
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img 
                    src={agent.img} 
                    alt={agent.name} 
                    className='w-full h-full object-cover'
                    loading='lazy'
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://www.dota2.com/home";
                    }}
                    
                  />
                </div>
                
                {/* Parte trasera con contenido responsivo */}
                <div 
                  className='absolute w-full h-full bg-[rgba(15,24,35,0.95)] rounded-lg md:rounded-xl overflow-hidden p-3 sm:p-4 md:p-6 text-neutral-300 space-y-2 sm:space-y-3 md:space-y-4 rotate-y-180 backface-hidden'
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div>
                    <span className='font-bold text-lg sm:text-xl md:text-2xl'>{agent.name}</span>
                  </div>
                  <div className='flex flex-col space-y-1 sm:space-y-2'>
                    <span className='font-semibold text-xs sm:text-sm'>// ROL</span>
                    <span className='text-xl sm:text-2xl font-bold'>{agent.role}</span>
                  </div>
                  <div className='flex flex-col space-y-1 sm:space-y-2 md:space-y-3'>
                    <span className='font-bold text-sm md:text-base'>BIOGRAFÍA</span>
                    <span className='text-xs sm:text-sm leading-snug sm:leading-relaxed'>
                      {agent.bio}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Imgblock;