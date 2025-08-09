import { Heart, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-warm-orange to-medical-green rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hospital@Ekhaya</h3>
                <p className="text-sm text-primary-foreground/80">Your Home for Health</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Providing quality, compassionate healthcare to the Galeshewe community and surrounding areas. 
              Our commitment is to deliver professional medical services with the warmth and care of home.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-medical-green" />
                <span className="font-bold text-warm-orange">Emergency: 061 522 0536</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-medical-green" />
                <span>Co Hulana and Motopo Street, Galeshewe, Kimberley</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-warm-orange transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-warm-orange transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-warm-orange transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-warm-orange transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-warm-orange mb-1">Emergency Line</p>
                <p className="text-lg font-bold">061 522 0536</p>
              </div>
              <div>
                <p className="text-sm font-medium text-warm-orange mb-1">General Enquiries</p>
                <p>053 0500 0500</p>
              </div>
              <div>
                <p className="text-sm font-medium text-warm-orange mb-1">Email</p>
                <p>info@hospitalekhaya.co.za</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="bg-medical-green/20 rounded-lg p-4 text-center">
            <p className="text-lg font-bold mb-2">Medical Emergency? Call Now!</p>
            <p className="text-2xl font-bold text-warm-orange">061 522 0536</p>
            <p className="text-sm text-primary-foreground/80 mt-1">Available 24 hours a day, 7 days a week</p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80">
              © 2024 Hospital@Ekhaya. All rights reserved.
            </p>
            <p className="text-primary-foreground/80">
              Proudly serving the Galeshewe community since 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;