import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        { label: "Emergency Line", value: "061 522 0536", urgent: true },
        { label: "General Enquiries", value: "053 0500 0500", urgent: false },
        { label: "Appointments", value: "053 123 4569", urgent: false }
      ]
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        { label: "Address", value: "123 Community Street", urgent: false },
        { label: "Area", value: "Galeshewe, Kimberley", urgent: false },
        { label: "Province", value: "Northern Cape, South Africa", urgent: false }
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        { label: "Emergency Department", value: "24/7 - Always Open", urgent: true },
        { label: "General Services", value: "Monday - Friday: 7:00 AM - 5:00 PM", urgent: false },
        { label: "Weekend Services", value: "Saturday: 8:00 AM - 1:00 PM", urgent: false }
      ]
    },
    {
      icon: Mail,
      title: "Email & Online",
      details: [
        { label: "General Email", value: "info@hospitalekhaya.co.za", urgent: false },
        { label: "Appointments", value: "appointments@hospitalekhaya.co.za", urgent: false },
        { label: "Administration", value: "admin@hospitalekhaya.co.za", urgent: false }
      ]
    }
  ];

  const departments = [
    { name: "Emergency Department", hours: "24/7", phone: "061 522 0536" },
    { name: "General Practice", hours: "Mon-Fri: 7AM-5PM", phone: "053 0500 0500" },
    { name: "Maternity Ward", hours: "24/7", phone: "053 123 4570" },
    { name: "Pharmacy", hours: "Mon-Fri: 8AM-5PM", phone: "053 123 4571" },
    { name: "Laboratory", hours: "Mon-Fri: 7AM-4PM", phone: "053 123 4572" },
    { name: "Administration", hours: "Mon-Fri: 8AM-4PM", phone: "053 123 4569" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-6">Contact Hospital@Ekhaya</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're here to help and provide the medical care you need. Contact us for emergencies, 
            appointments, or general enquiries.
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="bg-white border-0 shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-3">
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {contact.details.map((detail, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
                    <p className={`font-semibold ${detail.urgent ? 'text-medical-green text-lg' : 'text-primary'}`}>
                      {detail.value}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact Highlight */}
        <div className="bg-medical-green rounded-2xl p-8 text-white text-center mb-16 animate-slide-up">
          <Phone className="w-16 h-16 mx-auto mb-4 animate-pulse-gentle" />
          <h3 className="text-3xl font-bold mb-4">Medical Emergency?</h3>
          <p className="text-xl mb-6 text-white/90">
            Call our emergency line immediately for urgent medical assistance
          </p>
          <div className="text-4xl font-bold mb-6">061 522 0536</div>
          <Button size="lg" className="bg-white text-medical-green hover:bg-white/90">
            <Phone className="w-5 h-5 mr-2" />
            Call Emergency Now
          </Button>
        </div>

        {/* Departments Directory */}
        <div className="bg-white rounded-2xl p-8 shadow-card animate-fade-in">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Department Directory</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="p-4 bg-soft-gray rounded-lg border border-border hover:shadow-soft transition-all duration-300">
                <h4 className="font-bold text-primary mb-2">{dept.name}</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{dept.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium text-primary">{dept.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Directions */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-card animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-6">How to Find Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-medical-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary">123 Community Street</p>
                  <p className="text-muted-foreground">Galeshewe, Kimberley</p>
                  <p className="text-muted-foreground">Northern Cape, South Africa</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Navigation className="w-5 h-5 text-medical-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary">Directions</p>
                  <p className="text-muted-foreground">
                    Located in the heart of Galeshewe, easily accessible by public transport 
                    and with parking available on-site.
                  </p>
                </div>
              </div>
            </div>
            <Button className="w-full mt-6 bg-medical-blue hover:bg-medical-blue/90">
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card animate-slide-up">
            <h3 className="text-2xl font-bold text-primary mb-6">Visiting Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-primary mb-2">Visiting Hours</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• General Wards: 9:00 AM - 8:00 PM</li>
                  <li>• ICU/Critical Care: 2:00 PM - 4:00 PM, 6:00 PM - 8:00 PM</li>
                  <li>• Maternity Ward: 9:00 AM - 8:00 PM</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-primary mb-2">What to Bring</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Valid ID document</li>
                  <li>• Medical aid card (if applicable)</li>
                  <li>• Previous medical records</li>
                  <li>• Current medication list</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;