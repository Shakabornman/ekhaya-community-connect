import { Heart, Users, Award, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with kindness, respect, and the highest level of medical care."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Proudly serving the Galeshewe community with healthcare services tailored to local needs."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our qualified medical team is committed to maintaining the highest standards of healthcare."
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We ensure a safe, clean, and secure environment for all our patients and visitors."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-6">About Hospital@Ekhaya</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Ekhaya" means "home" in isiZulu and isiXhosa - and that's exactly what we are: 
            your home for healthcare in Galeshewe, Kimberley. We provide quality medical services 
            with the warmth and care of family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To provide accessible, quality healthcare services to the residents of Galeshewe and 
              surrounding areas, with a focus on preventive care, community health education, and 
              compassionate treatment for all.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a community hospital, we understand the unique health challenges facing our area 
              and work tirelessly to address them with culturally sensitive, professional medical care.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card animate-slide-up">
            <h4 className="text-2xl font-bold text-primary mb-6">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-soft-gray rounded-lg">
                <span className="font-medium">Established</span>
                <span className="text-primary font-bold">2018</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-soft-gray rounded-lg">
                <span className="font-medium">Beds</span>
                <span className="text-primary font-bold">45</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-soft-gray rounded-lg">
                <span className="font-medium">Staff Members</span>
                <span className="text-primary font-bold">120+</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-soft-gray rounded-lg">
                <span className="font-medium">Patients Served</span>
                <span className="text-primary font-bold">15,000+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;