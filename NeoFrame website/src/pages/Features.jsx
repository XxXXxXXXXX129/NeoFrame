import { motion } from 'framer-motion';

function Features() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Revolutionäre Funktionen</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Entdecken Sie die innovative Technologie hinter NeoFrame, die Kunst und 
              künstliche Intelligenz nahtlos verbindet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Display Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Display-Optionen</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">4K OLED Display</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Lebendige Farben und tiefe Kontraste
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      HDR-Unterstützung
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Perfekt für dynamische Kunstwerke
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-3">E-Ink Display</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Papierähnliche Darstellung
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Extrem energieeffizient
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      Augenschonend
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/images/display-options.jpg" 
                alt="NeoFrame Displays" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            KI-Funktionen
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Home Integration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Smart Home Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Steuern Sie Ihr NeoFrame nahtlos mit Ihrem bevorzugten Smart Home System
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smartHomeIntegrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">{integration.name}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technische Spezifikationen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(technicalSpecs).map(([category, specs], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {specs.map((spec, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-400 mr-2">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const aiFeatures = [
  {
    icon: "🎨",
    title: "Stil-Anpassung",
    description: "Die KI lernt Ihre Kunstpräferenzen und generiert maßgeschneiderte Kunstwerke."
  },
  {
    icon: "🌅",
    title: "Umgebungsanpassung",
    description: "Passt sich automatisch an Tageszeit und Umgebungslicht an."
  },
  {
    icon: "🔄",
    title: "Dynamische Transformation",
    description: "Verwandelt Ihre Fotos in verschiedene Kunststile."
  }
];

const smartHomeIntegrations = [
  {
    name: "Amazon Alexa",
    logo: "/images/alexa-logo.png",
    description: "Steuern Sie NeoFrame mit einfachen Sprachbefehlen."
  },
  {
    name: "Google Home",
    logo: "/images/google-home-logo.png",
    description: "Nahtlose Integration in Ihr Google Smart Home."
  },
  {
    name: "Apple HomeKit",
    logo: "/images/homekit-logo.png",
    description: "Perfekte Einbindung in das Apple Ökosystem."
  }
];

const technicalSpecs = {
  "Display": [
    "4K OLED (3840 x 2160 Pixel)",
    "HDR10+ Unterstützung",
    "1.07 Milliarden Farben",
    "E-Ink Option verfügbar"
  ],
  "Konnektivität": [
    "Dual-Band WiFi 6",
    "Bluetooth 5.0",
    "HDMI 2.1",
    "USB-C"
  ],
  "Leistung": [
    "KI-Prozessor der neuesten Generation",
    "8GB RAM",
    "128GB interner Speicher",
    "Cloud-Synchronisation"
  ],
  "Energieeffizienz": [
    "Energiesparender Standby-Modus",
    "Automatische Helligkeitsanpassung",
    "EnergyStar zertifiziert"
  ]
};

export default Features; 