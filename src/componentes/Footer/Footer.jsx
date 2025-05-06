import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-pink-400">
              MiEmpresa
            </h2>
            <p className="text-gray-300">
              Transformando ideas en soluciones digitales innovadoras para un futuro mejor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#0000] hover:text-white transition duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-500 pb-2">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Inicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Servicios</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Portafolio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contacto</a></li>
            </ul>
          </div>
          
          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-500 pb-2">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Diseño Web</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Desarrollo Apps</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Marketing Digital</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Consultoría</a></li>
            </ul>
          </div>
          
          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-purple-500 pb-2">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MdLocationOn className="mt-1 text-purple-300" size={18} />
                <span className="text-gray-300">Av. Principal 123, Peru</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdPhone className="text-purple-300" size={18} />
                <span className="text-gray-300">+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail className="text-purple-300" size={18} />
                <span className="text-gray-300">tapariona@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Derechos de autor */}
        <div className="border-t border-purple-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} MiEmpresa. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Política de privacidad</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Términos de servicio</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition duration-300">Mapa del sitio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;