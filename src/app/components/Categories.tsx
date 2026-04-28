import { useState } from 'react';
import { Wrench, Zap, Hammer, PartyPopper, Home, Laptop, Sparkles, Truck, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './hooks/useInView';

const categories = [
  {
    title: 'Gasfitería',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZml4aW5nJTIwcGlwZXMlMjB3b3JrfGVufDF8fHx8MTc3NTg1NTk0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Reparación de fugas, instalación de sanitarios y mantenimiento',
    gradient: 'from-[#4338CA] to-[#7C3AED]',
    providers: 150,
    rating: 4.8,
  },
  {
    title: 'Electricidad',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1636218685495-8f6545aadb71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBlbGVjdHJpY2FsfGVufDF8fHx8MTc3NTg1NTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Instalaciones, reparaciones y certificaciones eléctricas',
    gradient: 'from-[#4338CA] to-[#7C3AED]',
    providers: 200,
    rating: 4.9,
  },
  {
    title: 'Herramientas',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1546827209-a218e99fdbe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHRvb2xzJTIwcmVudGFsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NTg1NTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Alquiler de equipos y herramientas profesionales',
    gradient: 'from-[#4338CA] to-[#4338CA]',
    providers: 85,
    rating: 4.7,
  },
  {
    title: 'Eventos',
    icon: PartyPopper,
    image: 'https://images.unsplash.com/photo-1768776183877-e8f3dfc91f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGV2ZW50JTIwY2VsZWJyYXRpb24lMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc3NTg1NTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Organización completa de eventos y celebraciones',
    gradient: 'from-purple-500 to-[#4338CA]',
    providers: 120,
    rating: 4.9,
  },
  {
    title: 'Reparaciones',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVwYWlyJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzc1ODU1OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Maestros para pintura, albañilería y carpintería',
    gradient: 'from-[#4338CA] to-[#7C3AED]',
    providers: 180,
    rating: 4.8,
  },
  {
    title: 'Tecnología',
    icon: Laptop,
    image: 'https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB0ZWNobm9sb2d5JTIwcmVwYWlyfGVufDF8fHx8MTc3NTg1NTk0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Reparación de equipos y soporte técnico especializado',
    gradient: 'from-[#4338CA] to-[#7C3AED]',
    providers: 95,
    rating: 4.9,
  },
  {
    title: 'Limpieza',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1775178120132-f0ff7fd5cb40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNlcnZpY2UlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1ODU1OTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Servicios de limpieza profunda y mantenimiento',
    gradient: 'from-[#4338CA] to-[#7C3AED]',
    providers: 140,
    rating: 4.8,
  },
  {
    title: 'Mudanzas',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1764200458388-65c4b0c19a95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpbmclMjB0cnVjayUyMHRyYW5zcG9ydCUyMHNlcnZpY2V8ZW58MXx8fHwxNzc1ODU1OTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Transporte seguro y mudanzas locales o nacionales',
    gradient: 'from-indigo-500 to-purple-500',
    providers: 75,
    rating: 4.7,
  },
];

export function Categories() {
  const [ref, isInView] = useInView();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <section id="servicios" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200/30 to-orange-200/30 rounded-full filter blur-3xl" />

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
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full font-semibold text-sm"
          >
            SERVICIOS POPULARES
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Encuentra lo que necesitas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 100 expertos verificados listos para ayudarte
          </p>
        </motion.div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredIndex === index;
            const isSelected = selectedCategory === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedCategory(isSelected ? null : index)}
                className="group relative cursor-pointer"
              >
                {/* Card */}
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/30 group-hover:via-black/10 transition-all duration-500`} />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6">
                    {/* Icon Badge */}
                    <motion.div
                      animate={{
                        scale: isHovered ? 1.1 : 1,
                        rotate: isHovered ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="self-start"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                      </div>
                    </motion.div>

                    {/* Info */}
                    <div>
                      {/* Stats */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-4 mb-3"
                      >
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-semibold text-white">{category.rating}</span>
                        </div>
                        <div className="text-sm text-gray-300">
                          {category.providers}+ proveedores
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>

                      {/* CTA */}
                      <motion.div
                        animate={{
                          x: isHovered ? 0 : -10,
                          opacity: isHovered ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 text-white font-semibold"
                      >
                        <span className="text-sm">Explorar</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <motion.div
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    className="absolute inset-0 rounded-3xl border-2 border-purple-500/15 pointer-events-none"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            <span>Ver todas las categorías</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>*/}
      </div>
    </section>
  );
}
