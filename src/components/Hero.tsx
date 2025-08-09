import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hospital-hero.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hospital@Ekhaya community hospital exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/90 via-medical-blue/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to<br />
              <span className="bg-gradient-to-r from-warm-orange to-medical-green bg-clip-text text-transparent">
                Hospital@Ekhaya
              </span>
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Your home for quality healthcare in Galeshewe, Kimberley. 
              We provide compassionate, professional medical care for our community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-warm-orange hover:bg-warm-orange/90 text-white shadow-elevated"
                onClick={() => scrollToSection('services')}
              >
                Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary shadow-elevated"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Phone className="w-6 h-6 text-warm-orange mb-2" />
                <p className="text-sm font-medium">Emergency</p>
                <p className="text-lg font-bold">061 522 0536</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <Clock className="w-6 h-6 text-medical-green mb-2" />
                <p className="text-sm font-medium">Open 24/7</p>
                <p className="text-lg font-bold">Emergency Care</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <MapPin className="w-6 h-6 text-warm-orange mb-2" />
                <p className="text-sm font-medium">Location</p>
                <p className="text-lg font-bold">Galeshewe</p>
              </div>
            </div>
          </div>

          {/* Emergency Contact Card */}
          <div className="lg:justify-self-end animate-slide-up">
            <div className="bg-white rounded-2xl p-8 shadow-elevated max-w-md">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Emergency Contact</h3>
                <p className="text-muted-foreground">Available 24/7 for medical emergencies</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-soft-gray rounded-lg">
                  <span className="font-medium">Emergency Line</span>
                  <span className="text-lg font-bold text-primary">061 522 0536</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-soft-gray rounded-lg">
                  <span className="font-medium">General Enquiries</span>
                  <span className="text-lg font-bold text-primary">053 050 0500</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-medical-green hover:bg-medical-green/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Emergency Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;