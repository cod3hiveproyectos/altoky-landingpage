import { Search, Plus, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function FinalCTA() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-[#4338CA]" />
      
      {/* Animated Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full mb-8"
          >
            <ArrowRight className="w-10 h-10 text-white" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Sé de los primeros en usar Altoky
          </h2>

          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Estamos construyendo la comunidad de servicios más confiable de Chiclayo. Regístrate hoy y obtén beneficios exclusivos de lanzamiento.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/51912643915?text=Hola%20vengo%20de%20Altoky%2C%20necesito%20un%20servicio%20o%20alquilar%20un%20producto%20con%20urgencia"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white text-indigo-600 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Alquilar herramienta</span>
            </a>
            <a
              href="https://wa.me/51912643915?text=Hola%20vengo%20de%20Altoky%2C%20estoy%20interesado%20en%20ser%20proveedor%20%2C%20tengo%20un%20producto%20o%20habilidades%20que%20pueden%20ser%20útiles"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-indigo-700/50 backdrop-blur-lg text-white border-2 border-white rounded-full font-medium hover:bg-indigo-700 transition-all flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              <span>Publicar servicio</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80"
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Gratis para empezar</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
