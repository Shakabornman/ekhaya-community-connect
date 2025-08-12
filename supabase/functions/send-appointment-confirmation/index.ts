import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentData {
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  service: string;
  appointment_date: string;
  appointment_time: string;
  notes?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Function invoked:", req.method);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const appointmentData: AppointmentData = await req.json();
    console.log("Appointment data received:", appointmentData);

    // Format the date for better readability
    const appointmentDate = new Date(appointmentData.appointment_date);
    const formattedDate = appointmentDate.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send confirmation email to patient
    const patientEmailResponse = await resend.emails.send({
      from: "Hospital Ekhaya <onboarding@resend.dev>",
      to: [appointmentData.patient_email],
      subject: "Appointment Confirmation - Hospital Ekhaya",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0EA5E9, #06B6D4); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Hospital Ekhaya</h1>
            <p style="color: white; margin: 10px 0 0 0;">Your Appointment is Confirmed</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Dear ${appointmentData.patient_name},</h2>
            
            <p style="color: #64748b; line-height: 1.6;">
              Thank you for booking your appointment with Hospital Ekhaya. We have confirmed your appointment with the following details:
            </p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Service:</td>
                  <td style="padding: 8px 0; color: #64748b;">${appointmentData.service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Date:</td>
                  <td style="padding: 8px 0; color: #64748b;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Time:</td>
                  <td style="padding: 8px 0; color: #64748b;">${appointmentData.appointment_time}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Patient:</td>
                  <td style="padding: 8px 0; color: #64748b;">${appointmentData.patient_name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Phone:</td>
                  <td style="padding: 8px 0; color: #64748b;">${appointmentData.patient_phone}</td>
                </tr>
              </table>
              ${appointmentData.notes ? `
                <div style="margin-top: 15px;">
                  <strong style="color: #1e293b;">Notes:</strong>
                  <p style="color: #64748b; margin: 5px 0 0 0;">${appointmentData.notes}</p>
                </div>
              ` : ''}
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; color: #92400e;">Important Information:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #92400e;">
                <li>Please arrive 15 minutes before your appointment time</li>
                <li>Bring a valid ID and any relevant medical documents</li>
                <li>If you need to reschedule, please call us at least 24 hours in advance</li>
              </ul>
            </div>
            
            <div style="margin: 30px 0;">
              <h3 style="color: #1e293b; margin-bottom: 10px;">Contact Information:</h3>
              <p style="color: #64748b; margin: 5px 0;">📍 Co Hulana and Motopo Street, Galeshewe</p>
              <p style="color: #64748b; margin: 5px 0;">📞 General Enquiries: 053 050 0500</p>
              <p style="color: #64748b; margin: 5px 0;">🚨 Emergency: 061 522 0536</p>
              <p style="color: #64748b; margin: 5px 0;">✉️ info@hospitalekhaya.co.za</p>
            </div>
            
            <p style="color: #64748b; line-height: 1.6;">
              We look forward to seeing you soon. If you have any questions or concerns, please don't hesitate to contact us.
            </p>
            
            <p style="color: #64748b; margin-top: 20px;">
              Best regards,<br>
              <strong>Hospital Ekhaya Team</strong>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Patient email sent:", patientEmailResponse);

    // Send notification email to hospital (using verified email address for testing)
    const hospitalEmailResponse = await resend.emails.send({
      from: "Hospital Ekhaya <onboarding@resend.dev>",
      to: ["shakabornman@gmail.com"],
      subject: `New Appointment Booking - ${appointmentData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e293b; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Appointment Booking</h1>
            <p style="color: #94a3b8; margin: 10px 0 0 0;">Hospital Ekhaya Patient Portal</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Appointment Details</h2>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Patient Name:</td>
                  <td style="padding: 8px 0; color: #64748b;">${appointmentData.patient_name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Email:</td>
                  <td style="padding: 8px 0; color: #64748b;">${appointmentData.patient_email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Phone:</td>
                  <td style="padding: 8px 0; color: #64748b;">${appointmentData.patient_phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Service:</td>
                  <td style="padding: 8px 0; color: #64748b;">${appointmentData.service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Date:</td>
                  <td style="padding: 8px 0; color: #64748b;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">Time:</td>
                  <td style="padding: 8px 0; color: #64748b;">${appointmentData.appointment_time}</td>
                </tr>
              </table>
              ${appointmentData.notes ? `
                <div style="margin-top: 15px;">
                  <strong style="color: #1e293b;">Patient Notes:</strong>
                  <p style="color: #64748b; margin: 5px 0 0 0;">${appointmentData.notes}</p>
                </div>
              ` : ''}
            </div>
            
            <p style="color: #64748b; margin-top: 20px;">
              This appointment was booked through the Hospital Ekhaya online portal.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Hospital email sent:", hospitalEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        patientEmail: patientEmailResponse,
        hospitalEmail: hospitalEmailResponse 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-appointment-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);