import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Users, Heart, Building2, Calendar } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const albums = [
    {
      id: 1,
      title: "Patient Care Excellence",
      category: "patient-care",
      thumbnail: "/lovable-uploads/f32d770f-1bb9-49ce-ad42-f338e451a70f.png",
      images: [
        "/lovable-uploads/f32d770f-1bb9-49ce-ad42-f338e451a70f.png"
      ],
      description: "Dedicated moments of compassionate patient care"
    },
    {
      id: 2,
      title: "Our Team",
      category: "staff",
      thumbnail: "/lovable-uploads/6c9b4617-392a-420d-8ba2-dea8363ea5cc.png",
      images: [
        "/lovable-uploads/6c9b4617-392a-420d-8ba2-dea8363ea5cc.png",
        "/lovable-uploads/39278333-397a-417c-9540-9432f87eb8a9.png",
        "/lovable-uploads/bea3f366-5a40-48d0-ace3-c8efce80d6d5.png",
        "/lovable-uploads/cdbf0a5b-44b1-42fc-a451-60bde09ed1ff.png",
        "/src/assets/medical-services.jpg",
        "/lovable-uploads/d439926d-909f-41dd-85f4-9b485fd84371.png",
        "/src/assets/hospital-hero.jpg"
      ],
      description: "Our professional healthcare team in action"
    },
    {
      id: 3,
      title: "Hospital Facilities",
      category: "facilities",
      thumbnail: "/src/assets/hospital-hero.jpg",
      images: [
        "/src/assets/hospital-hero.jpg",
        "/src/assets/medical-services.jpg",
        "/lovable-uploads/d439926d-909f-41dd-85f4-9b485fd84371.png"
      ],
      description: "State-of-the-art medical facilities and equipment"
    },
    {
      id: 4,
      title: "Community Outreach",
      category: "community",
      thumbnail: "/lovable-uploads/68dcc8ad-dbdd-483a-adcc-c81069e0e00a.png",
      images: [
        "/lovable-uploads/68dcc8ad-dbdd-483a-adcc-c81069e0e00a.png",
        "/lovable-uploads/66d2b633-f5a8-49d3-806f-0d16735ad6c0.png",
        "/lovable-uploads/d8c24b5d-f672-4273-b898-f6e4388dcc9f.png",
        "/lovable-uploads/d1800c54-f0ca-4af0-bbe6-042551c09430.png",
        "/lovable-uploads/89cb1f9f-1f2c-4c74-8bac-15b88c5ae131.png",
        "/lovable-uploads/dfe95aab-67b0-4dc3-b83b-30ecfc10164c.png",
        "/lovable-uploads/43cf1435-664c-4e24-b9d3-003534219e5d.png",
        "/lovable-uploads/b1f454d7-d81c-4783-a563-c5ec35930631.png",
        "/lovable-uploads/d439926d-909f-41dd-85f4-9b485fd84371.png",
        "/src/assets/hospital-hero.jpg",
        "/src/assets/medical-services.jpg"
      ],
      description: "Community health programs and outreach initiatives"
    },
    {
      id: 5,
      title: "Heritage Day",
      category: "heritage-day",
      thumbnail: "/lovable-uploads/heritage-day-1.jpg",
      images: [
        "/lovable-uploads/heritage-day-1.jpg",
        "/lovable-uploads/heritage-day-2.jpg",
        "/lovable-uploads/heritage-day-3.jpg",
        "/lovable-uploads/heritage-day-4.jpg",
        "/lovable-uploads/heritage-day-5.jpg",
        "/lovable-uploads/heritage-day-6.jpg",
        "/lovable-uploads/heritage-day-7.jpg",
        "/lovable-uploads/heritage-day-8.jpg",
        "/lovable-uploads/heritage-day-9.jpg"
      ],
      description: "Celebrating our cultural heritage and traditions"
    }
  ];

  const categories = [
    { id: "all", label: "All Photos", icon: Camera },
    { id: "patient-care", label: "Patient Care", icon: Heart },
    { id: "staff", label: "Our Team", icon: Users },
    { id: "facilities", label: "Facilities", icon: Building2 },
    { id: "community", label: "Community", icon: Users },
    { id: "heritage-day", label: "Heritage Day", icon: Calendar }
  ];

  const filteredAlbums = selectedCategory === "all" 
    ? albums 
    : albums.filter(album => album.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of memorable moments, showcasing our commitment to healthcare excellence
              and community service.
            </p>
          </div>
        </section>

        {/* Gallery Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{category.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </Tabs>

            {/* Albums Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAlbums.map((album) => (
                <Dialog key={album.id}>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={album.thumbnail}
                            alt={album.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <Badge className="absolute top-4 left-4">
                            {album.images.length} Photos
                          </Badge>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-card-foreground mb-2">
                            {album.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {album.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl w-full">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold">{album.title}</h2>
                        <p className="text-muted-foreground">{album.description}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                        {album.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image}
                              alt={`${album.title} ${index + 1}`}
                              className="w-full h-32 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {filteredAlbums.length === 0 && (
              <div className="text-center py-16">
                <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  No photos found
                </h3>
                <p className="text-muted-foreground">
                  No albums match the selected category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Experience Excellence in Healthcare
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              See the difference our dedicated team makes in patient care and community health.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Your Appointment
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;