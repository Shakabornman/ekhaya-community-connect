import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import { CalendarDays, Clock, User as UserIcon } from "lucide-react";

const services = [
  "General Practice",
  "Emergency Services",
  "Maternity Services", 
  "Pharmacy",
  "Laboratory Services",
  "Psychiatric Services",
  "Wound Care",
  "IV Clinic"
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

const BookAppointment = () => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<any>(null);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
      fetchProfile(session.user.id);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session?.user) {
          navigate("/auth");
          return;
        }
        setUser(session.user);
        fetchProfile(session.user.id);
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) {
      console.error("Error fetching profile:", error);
    } else {
      setProfile(data);
    }
  };

  const fetchBookedSlots = async (date: Date, service: string) => {
    const dateString = date.toISOString().split('T')[0];
    const { data, error } = await supabase
      .from("appointments")
      .select("appointment_time")
      .eq("appointment_date", dateString)
      .eq("service", service);

    if (error) {
      console.error("Error fetching booked slots:", error);
    } else {
      const slots = data.map(apt => apt.appointment_time);
      setBookedSlots(slots);
    }
  };

  useEffect(() => {
    if (selectedDate && selectedService) {
      fetchBookedSlots(selectedDate, selectedService);
    }
  }, [selectedDate, selectedService]);

  const handleBookAppointment = async () => {
    if (!user || !profile || !selectedService || !selectedDate || !selectedTime) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const appointmentData = {
        user_id: user.id,
        patient_name: `${profile.first_name} ${profile.last_name}`,
        patient_email: profile.email,
        patient_phone: profile.phone,
        service: selectedService,
        appointment_date: selectedDate.toISOString().split('T')[0],
        appointment_time: selectedTime,
        notes: notes,
        status: "pending"
      };

      const { error } = await supabase
        .from("appointments")
        .insert([appointmentData]);

      if (error) {
        throw error;
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-appointment-confirmation', {
        body: appointmentData
      });

      if (emailError) {
        console.error("Email sending error:", emailError);
        // Don't fail the appointment creation if email fails
      }

      toast({
        title: "Success",
        description: "Appointment booked successfully! A confirmation email has been sent.",
      });

      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user || !profile) {
    return <div>Loading...</div>;
  }

  const availableSlots = timeSlots.filter(slot => !bookedSlots.includes(slot));

  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Book an Appointment</h1>
          <p className="text-muted-foreground">Schedule your visit with Hospital Ekhaya</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserIcon className="h-5 w-5" />
                Patient Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Name</Label>
                <p className="font-medium">{profile.first_name} {profile.last_name}</p>
              </div>
              <div>
                <Label>Email</Label>
                <p className="font-medium">{profile.email}</p>
              </div>
              <div>
                <Label>Phone</Label>
                <p className="font-medium">{profile.phone}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                Appointment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="service">Service *</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Select Date *</Label>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  className="rounded-md border"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {selectedDate && selectedService && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Available Time Slots
              </CardTitle>
              <CardDescription>
                Showing available slots for {selectedDate.toLocaleDateString()} - {selectedService}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-6">
                {availableSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant={selectedTime === slot ? "default" : "outline"}
                    onClick={() => setSelectedTime(slot)}
                    className="h-12"
                  >
                    {slot}
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any additional information or special requests..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <Button
                  onClick={handleBookAppointment}
                  disabled={loading || !selectedTime}
                  className="w-full h-12 text-lg"
                >
                  {loading ? "Booking..." : "Book Appointment"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;