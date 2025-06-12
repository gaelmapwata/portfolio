import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p className="text-gray-300">
              Développeur web passionné, créant des expériences numériques modernes et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Réseaux Sociaux</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/gaelmapwata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/gaelmapwata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gael Mapwata. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 