import { 
  Stethoscope, 
  HeartPulse, 
  Baby, 
  Pill, 
  Siren, 
  UserCheck,
  Microscope,
  Zap,
  Eye,
  Bone,
  Shield,
  Activity,
  Brain,
  Bandage,
  Droplet
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import servicesImage from "@/assets/medical-services.jpg";

const Services = () => {
  const services = [
    {
      icon: Siren,
      title: "Emergency Care",
      description: "24/7 emergency medical services with fully equipped trauma unit and ambulance services.",
      badge: "24/7",
      color: "bg-red-500"
    },
    {
      icon: UserCheck,
      title: "General Practice",
      description: "Comprehensive primary healthcare services including consultations and routine check-ups.",
      badge: "Daily",
      color: "bg-medical-blue"
    },
    {
      icon: Baby,
      title: "Maternity & Pediatrics",
      description: "Specialized care for mothers and children, including prenatal care and pediatric services.",
      badge: "Specialized",
      color: "bg-pink-500"
    },
    {
      icon: HeartPulse,
      title: "Chronic Disease Management",
      description: "Ongoing care for diabetes, hypertension, HIV/AIDS, and other chronic conditions.",
      badge: "Ongoing",
      color: "bg-medical-green"
    },
    {
      icon: Microscope,
      title: "Laboratory Services",
      description: "Full pathology lab with blood tests, urine analysis, and diagnostic testing.",
      badge: "Same Day",
      color: "bg-purple-500"
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "On-site pharmacy with prescription medications and over-the-counter drugs.",
      badge: "On-site",
      color: "bg-warm-orange"
    },
    {
      icon: Zap,
      title: "Radiology",
      description: "X-ray services and basic imaging for diagnostic purposes.",
      badge: "Imaging",
      color: "bg-blue-600"
    },
    {
      icon: Eye,
      title: "Outpatient Services",
      description: "Specialist consultations and follow-up appointments for various medical conditions.",
      badge: "Appointments",
      color: "bg-teal-500"
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Vaccinations, health screenings, and community health education programs.",
      badge: "Prevention",
      color: "bg-green-600"
    },
    {
      icon: Activity,
      title: "Rehabilitation",
      description: "Physical therapy and rehabilitation services for recovery and mobility improvement.",
      badge: "Recovery",
      color: "bg-indigo-500"
    },
    {
      icon: Brain,
      title: "Psychiatric Services",
      description: "Mental health care including counseling, therapy, and psychiatric consultations.",
      badge: "Mental Health",
      color: "bg-purple-600"
    },
    {
      icon: Bandage,
      title: "Wound Care",
      description: "Specialized wound care and treatment for chronic wounds, ulcers, and injuries.",
      badge: "Specialized",
      color: "bg-orange-600"
    },
    {
      icon: Droplet,
      title: "IV Clinic",
      description: "Intravenous therapy services including hydration, medication administration, and infusions.",
      badge: "Infusion",
      color: "bg-cyan-600"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6">Our Medical Services</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hospital@Ekhaya provides comprehensive healthcare services to meet the diverse medical needs 
            of our community. From emergency care to specialized treatments, we're here for you.
          </p>
        </div>

        {/* Featured Services Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 lg:mb-16 shadow-card animate-slide-up">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Quality Care When You Need It</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Our hospital is equipped with modern medical equipment and staffed by qualified healthcare 
                professionals who are dedicated to providing the best possible care for our patients.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-soft-gray rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-primary">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Emergency Care</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-soft-gray rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-medical-green">24</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Hospital Beds</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-soft-gray rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-warm-orange">60+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Staff Members</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-soft-gray rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-primary">100's</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Patients Served</div>
                </div>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <img
                src={servicesImage}
                alt="Medical services and equipment at Hospital@Ekhaya"
                className="rounded-xl shadow-card w-full max-w-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border-0 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-soft-gray text-primary">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Services Highlight */}
        <div className="mt-10 sm:mt-12 lg:mt-16 bg-gradient-hero rounded-2xl p-6 sm:p-8 text-white text-center animate-fade-in">
          <Siren className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 animate-pulse-gentle" />
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Emergency Services Available 24/7</h3>
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 text-white/90">
            Our emergency department is always ready to provide immediate medical care when you need it most.
          </p>
          <div className="text-2xl sm:text-3xl font-bold">
            Emergency Hotline: 061 522 0536
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;