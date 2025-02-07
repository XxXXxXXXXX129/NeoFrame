import { motion } from 'framer-motion';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'support',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier würde die tatsächliche Formular-Verarbeitung stattfinden
    setSubmitStatus({
      submitted: true,
      success: true,
      message: 'Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei Ihnen melden.'
    });
  };

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
            <h1 className="text-5xl font-bold mb-6">Kontaktieren Sie uns</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Haben Sie Fragen? Wir sind hier, um Ihnen zu helfen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Schreiben Sie uns</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Betreff
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="support">Support</option>
                    <option value="sales">Verkauf</option>
                    <option value="partnership">Partnerschaft</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Nachricht senden
                </button>

                {submitStatus.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Kontaktinformationen</h3>
                <ul className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3">{info.icon}</span>
                      <div>
                        <h4 className="font-medium">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Geschäftszeiten</h3>
                <ul className="space-y-2">
                  {businessHours.map((hours, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-600">{hours.days}</span>
                      <span className="font-medium">{hours.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Unser Support-Team ist auch per Live-Chat für Sie da.
                </p>
                <button className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <span className="mr-2">🗨️</span>
                  Chat starten
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Besuchen Sie uns</h2>
          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
            {/* Hier würde die tatsächliche Kartenintegration stehen */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Interaktive Karte</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const contactInfo = [
  {
    icon: "📍",
    title: "Adresse",
    content: "123 Innovation Drive, 10115 Berlin, Deutschland"
  },
  {
    icon: "📞",
    title: "Telefon",
    content: "+49 (30) 123-4567"
  },
  {
    icon: "📧",
    title: "E-Mail",
    content: "support@neoframe.com"
  }
];

const businessHours = [
  {
    days: "Montag - Freitag",
    time: "09:00 - 18:00"
  },
  {
    days: "Samstag",
    time: "10:00 - 14:00"
  },
  {
    days: "Sonntag",
    time: "Geschlossen"
  }
];

export default Contact; 