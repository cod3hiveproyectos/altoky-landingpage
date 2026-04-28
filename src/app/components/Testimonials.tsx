import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const testimonials = [
  {
    name: 'María González',
    role: 'Cliente',
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTcwODE5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    review: 'Encontré un técnico en menos de 20 minutos. Muy fácil de usar y el servicio fue excelente.',
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: 'Proveedor',
    image: 'https://images.unsplash.com/photo-1591818873794-ba8279c7da8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzc1Nzc1MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    review: 'Como proveedor, Altoky me ha ayudado a conseguir más clientes. La plataforma es confiable.',
    rating: 5,
  },
  {
    name: 'Ana Torres',
    role: 'Cliente',
    image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwc2VydmljZXxlbnwxfHx8fDE3NzU3MTY0Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    review: 'Alquilé herramientas para mi proyecto y todo fue súper sencillo. ¡Totalmente recomendado!',
    rating: 5,
  },
];

export function Testimonials() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Miles de personas confían en Altoky para sus necesidades diarias
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-indigo-600" />
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 mb-6 leading-relaxed flex-grow italic">
                  "{testimonial.review}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-100"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
