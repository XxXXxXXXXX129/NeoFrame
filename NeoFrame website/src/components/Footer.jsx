import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Firma */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">NeoFrame</h3>
            <p className="text-sm">
              Wo Kunst auf Innovation trifft. Transformieren Sie Ihren Raum mit intelligenter, 
              sich entwickelnder Kunst.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Preise</Link></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">AGB</Link></li>
              <li><Link to="/imprint" className="hover:text-white transition-colors">Impressum</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li>123 Innovation Drive</li>
              <li>Berlin, Deutschland</li>
              <li>Tel: +1 (800) 123-4567</li>
              <li>E-Mail: support@neoframe.com</li>
            </ul>
          </div>
        </div>

        {/* Soziale Medien */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
          </div>
          <p className="text-sm">© 2024 NeoFrame. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 