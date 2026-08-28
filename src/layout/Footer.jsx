import { Mail } from 'lucide-react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">

          <div className="flex gap-6">

            <a
              href="https://www.instagram.com/thebookaholicc/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>

            <a
              href="https://www.tiktok.com/@bookaholics.clube"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok className="w-6 h-6" />
            </a>

            <a
              href="mailto:dyomenegattidm@gmail.com"
              className="hover:text-primary transition-colors"
              aria-label="E-mail"
            >
              <Mail className="w-6 h-6" />
            </a>

          </div>

          <div className="text-center text-white">
            <p className="text-sm">
              © {currentYear} Clube do Livro Bookaholics. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}