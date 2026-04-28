import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

const features = [
  {
    icon: TrendingUp,
    title: 'Aumenta tus ingresos',
    description: 'Monetiza tus habilidades y herramientas.',
  },
  {
    icon: Users,
    title: 'Acceso a clientes',
    description: 'Conecta con miles de usuarios activos.',
  },
  {
    icon: DollarSign,
    title: 'Sin costos ocultos',
    description: 'Comisiones transparentes y justas.',
  },
  {
    icon: Award,
    title: 'Construye tu reputación',
    description: 'Gana valoraciones y crece tu negocio.',
  },
];

export function ForProviders() {
  const [ref, isInView] = useInView();

  return (
    <section id="proveedores" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-[#4338CA] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Convierte tus habilidades en ingresos
            </h2>
            <p className="text-lg text-indigo-100 mb-8 leading-relaxed">
              Si tienes herramientas, equipos o conocimientos técnicos o profesionales, puedes ofrecerlos en Altoky y conectar con personas que necesitan tus servicios.
            </p>

            <a
              href="https://wa.me/51912643915?text=Hola%20vengo%20de%20Altoky%2C%20estoy%20interesado%20en%20ser%20proveedor%20%2C%20tengo%20un%20producto%20o%20habilidades%20que%20pueden%20ser%20útiles"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-white text-indigo-600 rounded-full font-medium shadow-xl hover:shadow-2xl transition-all flex items-center space-x-2">
              <span>Convertirme en proveedor</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-indigo-200 text-sm">Proveedores activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold">85%</div>
                <div className="text-indigo-200 text-sm">Tasa de éxito</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-indigo-200 text-sm">Soporte</div>
              </div>
            </div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-indigo-100 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
