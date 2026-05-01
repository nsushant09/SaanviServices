import { Link } from 'react-router-dom';
import Logo from '@/assets/Logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F9] py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={Logo} alt="Saanvi Services" className="h-12 w-auto mb-6" />
            <p className="text-secondary/80 text-sm max-w-sm font-serif leading-relaxed">
              Providing personalized, compassionate, and reliable support that empowers individuals to live life on their own terms.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/about" className="text-secondary/80 hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-secondary/80 hover:text-primary text-sm transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-secondary/80 hover:text-primary text-sm transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-secondary/80 hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-secondary mb-4">Contact</h4>
            <address className="text-secondary/80 text-sm not-italic flex flex-col gap-2">
              <p>5 Pythagoras St, 3754, Mernda, VIC</p>
              <p>Australia</p>
              <a href="mailto:info@saanviservices.com.au" className="hover:text-primary transition-colors">info@saanviservices.com.au</a>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col items-center text-center gap-4">
          <p className="text-secondary/70 text-xs max-w-3xl leading-relaxed">
            We acknowledge and pay respect to the many First Nations and Traditional Custodians of the land and waters where we live and work. We honour their ongoing connection to culture and Country and pay our respects to Elders past and present.
          </p>
          <p className="text-secondary/60 text-xs">
            Operating in alignment with NDIS principles as a self-managed service provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
