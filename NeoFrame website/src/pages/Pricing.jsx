import { motion } from 'framer-motion';
import { useState } from 'react';

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

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
            <h1 className="text-5xl font-bold mb-6">Wählen Sie Ihr NeoFrame</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Flexible Optionen für jeden Kunstliebhaber
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-4 mb-16">
            <span className={`text-lg ${!isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Monatlich
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-blue-600 rounded-full p-1 transition-colors duration-300"
            >
              <motion.div
                animate={{ x: isAnnual ? 32 : 0 }}
                className="w-6 h-6 bg-white rounded-full"
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Jährlich (-20%)
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`
                  bg-white rounded-2xl shadow-xl p-8 border-2 
                  ${selectedPlan === index ? 'border-blue-600' : 'border-transparent'}
                  hover:border-blue-600 transition-all duration-300
                `}
                onClick={() => setSelectedPlan(index)}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-4">
                    {isAnnual ? (
                      <>
                        <span className="text-gray-400 line-through text-2xl">
                          €{plan.price}
                        </span>
                        <span className="ml-2">
                          €{Math.round(plan.price * 0.8)}
                        </span>
                      </>
                    ) : (
                      `€${plan.price}`
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  className={`
                    w-full py-3 rounded-lg transition-colors duration-300
                    ${index === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 
                    'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                  `}
                >
                  Jetzt auswählen
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Plan Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">KI-Funktionen Erweiterungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">
                    €{plan.price}/Monat
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Hinzufügen
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const pricingPlans = [
  {
    name: "NeoFrame Lite",
    price: 199,
    description: "Perfekt für den Einstieg in die Welt der digitalen Kunst",
    features: [
      "15\" E-Ink Display",
      "Basis KI-Funktionen",
      "WLAN-Konnektivität",
      "Monatliche Software-Updates",
      "Standard Support"
    ]
  },
  {
    name: "NeoFrame Standard",
    price: 399,
    description: "Unsere beliebteste Option für Kunstenthusiasten",
    features: [
      "20\" 4K OLED Display",
      "Erweiterte KI-Funktionen",
      "Smart Home Integration",
      "Prioritäts-Updates",
      "Premium Support"
    ]
  },
  {
    name: "NeoFrame Pro",
    price: 599,
    description: "Die ultimative digitale Kunstgalerie",
    features: [
      "30\" 4K OLED Display",
      "Vollständige KI-Suite",
      "Professionelle Kalibrierung",
      "Exklusive Künstler-Kollaborationen",
      "24/7 VIP Support"
    ]
  }
];

const aiPlans = [
  {
    name: "Basic",
    price: 0,
    features: [
      "Standard Kunststile",
      "Basis Automatisierung",
      "Regelmäßige Updates"
    ]
  },
  {
    name: "Pro",
    price: 5,
    features: [
      "Exklusive KI-Stile",
      "Erweiterte Automatisierung",
      "Prioritäts-Support",
      "Beta-Zugang zu neuen Features"
    ]
  },
  {
    name: "Ultra",
    price: 10,
    features: [
      "Personalisierte Kunststile",
      "Premium Künstler-Kollaborationen",
      "24/7 VIP Support",
      "Unbegrenzte Stil-Transformationen"
    ]
  }
];

const faqs = [
  {
    question: "Wie funktioniert die jährliche Abrechnung?",
    answer: "Bei jährlicher Zahlung erhalten Sie 20% Rabatt auf den Gesamtpreis. Die Abrechnung erfolgt einmal jährlich im Voraus."
  },
  {
    question: "Kann ich meinen Plan später upgraden?",
    answer: "Ja, Sie können jederzeit auf einen höheren Plan upgraden. Die Differenz wird anteilig berechnet."
  },
  {
    question: "Gibt es eine Mindestvertragslaufzeit?",
    answer: "Nein, Sie können monatlich kündigen. Bei jährlicher Zahlung gilt die Laufzeit für ein Jahr."
  },
  {
    question: "Sind Updates im Preis inbegriffen?",
    answer: "Ja, alle Software-Updates sind im Preis enthalten. Die Häufigkeit der Updates hängt von Ihrem gewählten Plan ab."
  }
];

export default Pricing; 