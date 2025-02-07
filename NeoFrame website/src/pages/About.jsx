import { motion } from 'framer-motion';

function About() {
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
            <h1 className="text-5xl font-bold mb-6">Unsere Geschichte</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Die Vision von NeoFrame entstand aus der Leidenschaft für Kunst und 
              der Faszination für innovative Technologie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Unsere Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                Bei NeoFrame glauben wir, dass Kunst dynamisch, persönlich und für jeden 
                zugänglich sein sollte. Unsere Mission ist es, die Art und Weise zu 
                revolutionieren, wie Menschen Kunst in ihrem täglichen Leben erleben.
              </p>
              <p className="text-lg text-gray-600">
                Wir verbinden traditionelle Kunstappreziation mit modernster KI-Technologie, 
                um jedem die Möglichkeit zu geben, seine Räume mit lebendiger, 
                sich entwickelnder Kunst zu gestalten.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="/images/vision.jpg" 
                alt="NeoFrame Vision" 
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Unser Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ein Team aus leidenschaftlichen Künstlern, Ingenieuren und Designern, 
              die NeoFrame zum Leben erwecken.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Unsere Reise</h2>
          <div className="space-y-12">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/3">
                  <div className="text-4xl font-bold text-blue-600">{milestone.year}</div>
                  <h3 className="text-xl font-semibold mb-4">{milestone.title}</h3>
                </div>
                <div className="w-full md:w-2/3 bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const teamMembers = [
  {
    name: "Dr. Sarah Schmidt",
    position: "CEO & Gründerin",
    image: "/images/team/sarah.jpg",
    description: "Kunsthistorikerin und Tech-Visionärin mit über 15 Jahren Erfahrung in der Kunstwelt."
  },
  {
    name: "Michael Weber",
    position: "CTO",
    image: "/images/team/michael.jpg",
    description: "KI-Experte mit Fokus auf generative Kunst und maschinelles Lernen."
  },
  {
    name: "Lisa Chen",
    position: "Design Director",
    image: "/images/team/lisa.jpg",
    description: "Preisgekrönte Designerin mit Passion für die Verschmelzung von Kunst und Technologie."
  }
];

const journeyMilestones = [
  {
    year: "2020",
    title: "Die Idee entsteht",
    description: "Während der globalen Pandemie entstand die Vision, Kunst durch Technologie zugänglicher zu machen."
  },
  {
    year: "2021",
    title: "Erster Prototyp",
    description: "Entwicklung des ersten NeoFrame-Prototyps und erfolgreiche Tests mit Kunstliebhabern."
  },
  {
    year: "2022",
    title: "Technologischer Durchbruch",
    description: "Integration fortschrittlicher KI-Algorithmen für personalisierte Kunsterlebnisse."
  },
  {
    year: "2024",
    title: "Markteinführung",
    description: "Offizieller Launch von NeoFrame und Beginn einer neuen Ära der digitalen Kunst."
  }
];

const values = [
  {
    icon: "🎨",
    title: "Innovation",
    description: "Wir pushen kontinuierlich die Grenzen dessen, was in der digitalen Kunst möglich ist."
  },
  {
    icon: "🌱",
    title: "Nachhaltigkeit",
    description: "Umweltbewusstes Handeln steht im Zentrum unserer Produktentwicklung."
  },
  {
    icon: "🤝",
    title: "Zugänglichkeit",
    description: "Wir machen Kunst für jeden erlebbar und erschwinglich."
  }
];

export default About; 