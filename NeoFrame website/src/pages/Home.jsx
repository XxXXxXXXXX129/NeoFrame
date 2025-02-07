import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Hero />
      
      {/* Discover Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Entdecken Sie NeoFrame
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NeoFrame ist nicht nur ein Rahmen - es ist eine lebendige Leinwand, 
              die durch KI gesteuert wird und Kunst kuratiert, die sich an Ihre Stimmung, 
              Ihren Stil und Ihre Umgebung anpasst.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologie Showcase */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Zukunftsweisende Technologie
              </h2>
              <p className="text-xl mb-8">
                Erleben Sie modernste KI-Algorithmen und Display-Technologie, 
                die Ihre Kunst zum Leben erwecken.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Ultra-HD OLED Display
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  KI-gesteuerte Personalisierung
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Smart Home Integration
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/images/tech-showcase.jpg" 
                alt="NeoFrame Technology" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Was unsere Kunden sagen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Bereit, Ihre Räume zu transformieren?
          </h2>
          <p className="text-xl mb-12">
            Werden Sie Teil der künstlerischen Revolution mit NeoFrame
          </p>
          <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-md hover:bg-blue-700 transition-colors">
            Jetzt vorbestellen
          </button>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Nachhaltig in die Zukunft</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kunst trifft auf Umweltbewusstsein - Entdecken Sie, wie NeoFrame 
              Innovation und Nachhaltigkeit vereint.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-4">Nachhaltige Materialien</h3>
              <p className="text-gray-600 mb-4">
                Gefertigt aus 100% recyceltem Aluminium und FSC-zertifiziertem Holz.
              </p>
              <Link 
                to="/sustainability" 
                className="text-green-600 hover:text-green-700 font-semibold flex items-center"
              >
                Mehr erfahren
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Energieeffizient</h3>
              <p className="text-gray-600 mb-4">
                90% weniger Energieverbrauch durch innovative Display-Technologie.
              </p>
              <Link 
                to="/sustainability#energy" 
                className="text-green-600 hover:text-green-700 font-semibold flex items-center"
              >
                Mehr erfahren
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="text-4xl mb-4">♻️</div>
              <h3 className="text-xl font-semibold mb-4">Recycling-Programm</h3>
              <p className="text-gray-600 mb-4">
                Umfassendes Trade-In Programm für eine nachhaltige Kreislaufwirtschaft.
              </p>
              <Link 
                to="/sustainability#recycling" 
                className="text-green-600 hover:text-green-700 font-semibold flex items-center"
              >
                Mehr erfahren
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link 
              to="/sustainability"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Mehr über unsere Nachhaltigkeits-Initiative
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "🎨",
    title: "KI-gesteuerte Kunst",
    description: "Personalisierte Kunstwerke, die sich an Ihre Präferenzen anpassen."
  },
  // ... weitere Features
];

const testimonials = [
  {
    name: "Lisa M.",
    title: "Innenarchitektin",
    quote: "NeoFrame hat meinen Wohnraum komplett transformiert - es ist wie eine neue Galerie jeden Tag!",
    avatar: "/images/avatars/lisa.jpg"
  },
  // ... weitere Testimonials
];

export default Home; 