import { Zap, ShieldCheck, Star, Grid3x3, Package, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const benefits = [
  {
    icon: Zap,
    title: 'Encuentra servicios rápidamente',
    description: 'Conecta con proveedores en minutos, no en días.',
  },
  {
    icon: ShieldCheck,
    title: 'Proveedores verificados',
    description: 'Todos nuestros proveedores pasan por un proceso de verificación.',
  },
  {
    icon: Star,
    title: 'Valoraciones de usuarios',
    description: 'Lee opiniones reales de otros usuarios antes de decidir.',
  },
  {
    icon: Grid3x3,
    title: 'Amplia variedad de servicios',
    description: 'Mmúltiples categorías con una amplia variedad de servicios disponibles.',
  },
  {
    icon: Package,
    title: 'Alquiler de productos fácilmente',
    description: 'Encuentra y alquila herramientas y equipos cuando los necesites.',
  },
  {
    icon: Lock,
    title: 'Plataforma segura',
    description: 'Tus datos y transacciones están protegidos en todo momento.',
  },
];

export function Benefits() {
  const [ref, isInView] = useInView();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-sm tracking-wide"
          >
            BENEFICIOS
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            ¿Por qué usar Altoky?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La mejor plataforma para conectar con servicios y productos de alquiler en Chiclayo
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="group relative"
            >
              {/* Card Background with Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-[#4338CA] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-50 to-transparent rounded-bl-3xl opacity-50" />

                {/* Icon Container with modern gradient */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative w-16 h-16 mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-2xl opacity-10 blur-md" />
                  <div className="relative w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {benefit.description}
                </p>

                {/* Subtle hover indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-[#7C3AED] rounded-full transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
