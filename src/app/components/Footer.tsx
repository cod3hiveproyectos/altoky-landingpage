import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Altoky
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La plataforma que conecta personas que necesitan ayuda con proveedores de servicios y productos en Chiclayo.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-indigo-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proveedores" className="hover:text-indigo-400 transition-colors">
                  Proveedores
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Política de cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">
                  Ayuda
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Chiclayo, Perú</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:cod3hiveproyectos@gmail.com" className="text-sm hover:text-indigo-400 transition-colors">
                  cod3hiveproyectos@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">+51 912 643 915</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          {/* Cambiamos justify-between por justify-center */}
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-sm text-gray-500">
              © Abril,2026 Altoky. Todos los derechos reservados - Cod3Hive Labs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}