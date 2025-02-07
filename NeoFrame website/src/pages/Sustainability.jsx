import { motion } from 'framer-motion';

function Sustainability() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Nachhaltige Innovation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Unser Engagement für eine grünere Zukunft durch verantwortungsvolle 
              Technologie und nachhaltiges Design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Unser Umwelteinfluss</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Bei NeoFrame verstehen wir die Dringlichkeit des Klimawandels. Deshalb 
                  haben wir Nachhaltigkeit in jeden Aspekt unseres Produkts integriert - 
                  von der Entwicklung bis zum Ende der Lebensdauer.
                </p>
                <p>
                  Unsere Frames verbrauchen bis zu 90% weniger Energie als herkömmliche 
                  digitale Displays und sind aus recycelten und nachhaltigen Materialien 
                  gefertigt.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-green-50 p-4 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
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
                src="/images/sustainability/eco-design.jpg" 
                alt="Nachhaltiges Design" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Nachhaltige Materialien
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-3xl mb-4">{material.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{material.title}</h3>
                <p className="text-gray-600">{material.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold mb-2">Umweltvorteile:</h4>
                  <ul className="space-y-2">
                    {material.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Efficiency */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Energieeffizienz</h2>
              <div className="space-y-6">
                {energyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-green-500 mr-4 mt-1">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="/images/sustainability/energy-efficiency.jpg" 
                alt="Energieeffizienz" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recycling Program */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Recycling-Programm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Trade-In Programm</h3>
              <p className="text-gray-600">
                Unser Trade-In Programm ermöglicht es Ihnen, Ihr altes NeoFrame gegen 
                ein neues Modell einzutauschen. Wir kümmern uns um das fachgerechte 
                Recycling und Sie erhalten einen Rabatt auf Ihr neues Gerät.
              </p>
              <ul className="space-y-4">
                {recyclingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Partnerschaften</h3>
              <div className="grid grid-cols-2 gap-4">
                {recyclingPartners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="h-12 mx-auto mb-2"
                    />
                    <p className="text-sm text-gray-600">{partner.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Future */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Unsere Verpflichtung für die Zukunft</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{commitment.year}</h3>
                <p className="text-gray-100">{commitment.goal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const impactStats = [
  {
    value: "90%",
    label: "Weniger Energieverbrauch"
  },
  {
    value: "100%",
    label: "Recycelbare Materialien"
  },
  {
    value: "75%",
    label: "CO₂-Reduktion in der Produktion"
  },
  {
    value: "10k+",
    label: "Recycelte Geräte"
  }
];

const materials = [
  {
    icon: "♻️",
    title: "Recyceltes Aluminium",
    description: "Unser Rahmen besteht zu 100% aus recyceltem Aluminium.",
    benefits: [
      "60% weniger CO₂-Ausstoß",
      "Vollständig recycelbar",
      "Langlebig und robust"
    ]
  },
  {
    icon: "🌳",
    title: "FSC-zertifiziertes Holz",
    description: "Alle Holzelemente stammen aus nachhaltiger Forstwirtschaft.",
    benefits: [
      "Nachhaltige Waldwirtschaft",
      "CO₂-Speicherung",
      "Biologisch abbaubar"
    ]
  },
  {
    icon: "🔋",
    title: "Nachhaltige Elektronik",
    description: "Energieeffiziente Komponenten und recycelbare Elektronik.",
    benefits: [
      "Niedriger Stromverbrauch",
      "Lange Lebensdauer",
      "Reparaturfreundlich"
    ]
  }
];

const energyFeatures = [
  {
    icon: () => <svg>...</svg>, // Hier würde ein passendes SVG-Icon stehen
    title: "Adaptiver Energiemodus",
    description: "Automatische Anpassung der Helligkeit und des Energieverbrauchs basierend auf Umgebungslicht und Tageszeit."
  },
  {
    icon: () => <svg>...</svg>,
    title: "E-Ink Option",
    description: "Unsere E-Ink Displays verbrauchen nur beim Bildwechsel Energie und sind besonders augenschonend."
  },
  {
    icon: () => <svg>...</svg>,
    title: "Smart Scheduling",
    description: "Automatische An- und Ausschaltzeiten basierend auf Ihren Gewohnheiten."
  }
];

const recyclingBenefits = [
  "Bis zu 30% Rabatt auf Ihr neues NeoFrame",
  "Kostenloser Versand des alten Geräts",
  "Fachgerechtes Recycling aller Komponenten",
  "Transparente Nachverfolgung des Recycling-Prozesses"
];

const recyclingPartners = [
  {
    name: "GreenCycle GmbH",
    logo: "/images/partners/greencycle.png"
  },
  {
    name: "E-Waste Solutions",
    logo: "/images/partners/ewaste.png"
  },
  {
    name: "RecyclingTech",
    logo: "/images/partners/recyclingtech.png"
  },
  {
    name: "EcoPartner",
    logo: "/images/partners/ecopartner.png"
  }
];

const commitments = [
  {
    year: "2025",
    goal: "100% CO₂-neutrale Produktion durch erneuerbare Energien"
  },
  {
    year: "2027",
    goal: "Vollständig plastikfreie Verpackung und Produktion"
  },
  {
    year: "2030",
    goal: "Negative CO₂-Bilanz durch Aufforstungsprojekte und nachhaltige Initiativen"
  }
];

export default Sustainability; 