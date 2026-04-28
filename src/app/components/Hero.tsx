import { Search, Briefcase, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 -z-10" />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-gray-700">
                Plataforma de confianza
              </span>
            </motion.div>*/}

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Encuentra servicios o alquila lo que necesitas{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                en minutos
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Una plataforma que conecta personas que necesitan
              ayuda con proveedores que pueden ofrecer servicios
              o productos en alquiler en Chiclayo de forma rápida, segura y
              sencilla.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
              href="https://wa.me/51912643915?text=Hola%20vengo%20de%20Altoky%2C%20necesito%20un%20servicio%20o%20alquilar%20un%20producto%20con%20urgencia"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Buscar servicios</span>
              </a>
              <a
              href="https://wa.me/51912643915?text=Hola%20vengo%20de%20Altoky%2C%20estoy%20interesado%20en%20ser%20proveedor%20%2C%20tengo%20un%20producto%20o%20habilidades%20que%20pueden%20ser%20útiles"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-all flex items-center justify-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>Ofrecer servicios</span> {/* Vincular WhatsApp */}
              </a>
            </motion.div>

            {/* Stats */}
            {/* 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-indigo-600">
                  500+
                </div>
                <div className="text-sm text-gray-600">
                  Servicios
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-indigo-600">
                  1000+
                </div>
                <div className="text-sm text-gray-600">
                  Usuarios
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-indigo-600">
                  4.8★
                </div>
                <div className="text-sm text-gray-600">
                  Valoración
                </div>
              </div>
            </motion.div> */}
          </motion.div> 

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjb2xsYWJvcmF0aW9uJTIwdGVhbXdvcmslMjBtb2Rlcm58ZW58MXx8fHwxNzc1Nzc1MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Personas colaborando"
                className="w-full h-auto"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Conexión instantánea
                    </div>
                    <div className="text-sm text-gray-600">
                      Encuentra ayuda en minutos
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}