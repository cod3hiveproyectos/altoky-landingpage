import { Rocket, Search, MessageCircle, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useState } from 'react';

const features = [
  {
    icon: Rocket,
    title: 'Plataforma rápida',
    description: 'Conecta con proveedores en cuestión de minutos gracias a nuestra tecnología optimizada con Iteligencia Artificial de nuestro chat de Whatsapp.',
    color: 'from-[#4338CA] to-[#7C3AED]',
    stat: '7 min',
    statLabel: 'Tiempo promedio',
  },
  {
    icon: Search,
    title: 'Búsqueda inteligente',
    description: 'Encuentra exactamente lo que necesitas con nuestro sistema de búsqueda avanzado.',
    color: 'from-indigo-500 to-purple-500',
    stat: '10K+',
    statLabel: 'Servicios',
  },
  {
    icon: MessageCircle,
    title: 'Comunicación oportuna',
    description: 'Chatea directamente los analistas de mercado y compara la mejor oferta para ti y viendo toda la información del proveedor antes de contratar.',
    color: 'from-purple-500 to-[#4338CA]',
    stat: '24/7',
    statLabel: 'Disponibilidad',
  },
  {
    icon: Trophy,
    title: 'Pagos Transparentes',
    description: 'Los servicios que contrates son pagados directamente al proveedor contraentrega o después de haber finalizado el servicio. La empresa no cobra a los clientes comisiones por el servicio contratado, solo una pequeña tarifa a los proveedores por el uso de la plataforma.',
    color: 'from-[#4338CA] to-[#6366F1]',
    stat: '98%',
    statLabel: 'Satisfacción',
  },
];

export function PlatformBenefits() {
  const [ref, isInView] = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* Animated Background Grid */}
    

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-100 border border-indigo-200 text-indigo-700 rounded-full font-semibold text-sm"
          >
            <Sparkles className="w-4 h-4" />
            CARACTERÍSTICAS
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Cuidamos cada detalle por ti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una plataforma moderna diseñada para ofrecerte la mejor experiencia
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Feature 1 - Large Card */}
          {(() => {
            const Icon0 = features[0].icon;
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                onHoverStart={() => setHoveredIndex(0)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="md:col-span-2 lg:col-span-2 lg:row-span-2 group cursor-pointer"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200 overflow-hidden hover:border-indigo-300 hover:shadow-xl transition-all duration-500">
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === 0 ? 1 : 0,
                      scale: hoveredIndex === 0 ? 1 : 0.8
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl"
                  />

                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        rotate: hoveredIndex === 0 ? 360 : 0,
                        scale: hoveredIndex === 0 ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 mb-6 relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${features[0].color} rounded-2xl opacity-20 blur-lg`} />
                      <div className={`relative w-full h-full bg-gradient-to-r ${features[0].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon0 className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                    </motion.div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {features[0].title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {features[0].description}
                    </p>

                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-[#4338CA] bg-clip-text text-transparent">
                        {features[0].stat}
                      </span>
                      <span className="text-gray-500 pb-2 text-sm">
                        {features[0].statLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Feature 2 - Medium Card */}
          {(() => {
            const Icon1 = features[1].icon;
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                onHoverStart={() => setHoveredIndex(1)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="lg:col-span-2 group cursor-pointer"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200 overflow-hidden hover:border-indigo-300 hover:shadow-xl transition-all duration-500">
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === 1 ? 1 : 0,
                      scale: hoveredIndex === 1 ? 1 : 0.8
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl"
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1">
                      <motion.div
                        animate={{
                          rotate: hoveredIndex === 1 ? 360 : 0
                        }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 mb-4 relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${features[1].color} rounded-2xl opacity-20 blur-lg`} />
                        <div className={`relative w-full h-full bg-gradient-to-r ${features[1].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Icon1 className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                      </motion.div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {features[1].title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {features[1].description}
                      </p>
                    </div>

                    <div className="text-right ml-4">
                      <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {features[1].stat}
                      </div>
                      <div className="text-gray-500 text-xs mt-1">
                        {features[1].statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Feature 3 - Medium Card */}
          {(() => {
            const Icon2 = features[2].icon;
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                onHoverStart={() => setHoveredIndex(2)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="lg:col-span-2 group cursor-pointer"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200 overflow-hidden hover:border-indigo-300 hover:shadow-xl transition-all duration-500">
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === 2 ? 1 : 0,
                      scale: hoveredIndex === 2 ? 1 : 0.8
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl"
                  />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex-1">
                      <motion.div
                        animate={{
                          rotate: hoveredIndex === 2 ? 360 : 0
                        }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 mb-4 relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${features[2].color} rounded-2xl opacity-20 blur-lg`} />
                        <div className={`relative w-full h-full bg-gradient-to-r ${features[2].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Icon2 className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                      </motion.div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {features[2].title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {features[2].description}
                      </p>
                    </div>

                    <div className="text-right ml-4">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-[#4338CA] bg-clip-text text-transparent">
                        {features[2].stat}
                      </div>
                      <div className="text-gray-500 text-xs mt-1">
                        {features[2].statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Feature 4 - Wide Card */}
          {(() => {
            const Icon3 = features[3].icon;
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                onHoverStart={() => setHoveredIndex(3)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="md:col-span-2 lg:col-span-4 group cursor-pointer"
              >
                <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200 overflow-hidden hover:border-indigo-300 hover:shadow-xl transition-all duration-500">
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === 3 ? 1 : 0,
                      scale: hoveredIndex === 3 ? 1 : 0.8
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl"
                  />

                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-start gap-6 flex-1">
                      <motion.div
                        animate={{
                          rotate: hoveredIndex === 3 ? 360 : 0
                        }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 relative flex-shrink-0"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${features[3].color} rounded-2xl opacity-20 blur-lg`} />
                        <div className={`relative w-full h-full bg-gradient-to-r ${features[3].color} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <Icon3 className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {features[3].title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {features[3].description}
                        </p>
                      </div>
                    </div>

                    <div className="text-center md:text-right">
                      <div className="text-5xl font-bold bg-gradient-to-r from-[#4338CA] to-[#7C3AED] bg-clip-text text-transparent">
                        {features[3].stat}
                      </div>
                      <div className="text-gray-500 text-sm mt-1">
                        {features[3].statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
