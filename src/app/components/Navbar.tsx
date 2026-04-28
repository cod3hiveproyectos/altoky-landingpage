import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Altoky
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Servicios
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Cómo funciona
            </a>
            <a href="#proveedores" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Proveedores
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Contacto
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/51912643915?text=Hola%20vengo%20de%20Altoky%2C%20necesito%20un%20servicio%20o%20alquilar%20un%20producto%20con%20urgencia"
              target="_blank"
              rel="noopener noreferrer" className="px-4 py-2 text-indigo-600 hover:text-indigo-700 transition-colors">
              Buscar servicios
            </a>
            <a
              href="https://wa.me/51912643915?text=Hola%20vengo%20de%20Altoky%2C%20estoy%20interesado%20en%20ser%20proveedor%20%2C%20tengo%20un%20producto%20o%20habilidades%20que%20pueden%20ser%20útiles"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all">
              Convertirse en proveedor
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              <a href="#servicios" className="block text-gray-700 hover:text-indigo-600 transition-colors">
                Servicios
              </a>
              <a href="#como-funciona" className="block text-gray-700 hover:text-indigo-600 transition-colors">
                Cómo funciona
              </a>
              <a href="#proveedores" className="block text-gray-700 hover:text-indigo-600 transition-colors">
                Proveedores
              </a>
              <a href="#contacto" className="block text-gray-700 hover:text-indigo-600 transition-colors">
                Contacto
              </a>
              <div className="pt-4 space-y-2">
                <button className="w-full px-4 py-2 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition-colors">
                  Iniciar sesión
                </button>
                <button className="w-full px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all">
                  Registrarse
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
