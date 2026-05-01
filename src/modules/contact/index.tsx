import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Valid phone number is required'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

const onSubmit = async (data: ContactFormData) => {
    // Send email via EmailJS
    const templateParams = {
      subject: 'Contact Form Submission',
      from_name: data.name,
      from_email: 'nsushant21@tbc.edu.np',
      reply_to: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID);
      alert('Message sent successfully!');
    } catch (e) {
      console.error('EmailJS error:', e);
      alert('Failed to send message. Please try again later.');
    }
    reset();
  };

  return (
    <div className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-secondary mb-6">Contact Us</h1>
          <p className="text-xl text-secondary/80 font-serif leading-relaxed">
            We're here to answer your questions and start the conversation about how we can support you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif text-secondary mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg mb-1">Address</h3>
                    <p className="text-secondary/80">5 Pythagoras St, 3754<br/>Mernda, VIC, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg mb-1">Email</h3>
                    <a href="mailto:info@saanviservices.com.au" className="text-secondary/80 hover:text-primary transition-colors">info@saanviservices.com.au</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary text-lg mb-1">Phone</h3>
                    <a href="tel:+61430944615" className="text-secondary/80 hover:text-primary transition-colors">+61 4 3094 4615</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden h-64 bg-gray-100 shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.601859664551!2d145.0993!3d-37.6042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64c929af577fb%3A0x633f86ea2de09f02!2s5%20Pythagoras%20St%2C%20Mernda%20VIC%203754%2C%20Australia!5e0!3m2!1sen!2sus!4v1714088019036!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#FAF9F9] rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-secondary mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Name</label>
                <input {...register('name')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-white" placeholder="Your name" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                  <input {...register('email')} type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-white" placeholder="Your email" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Phone</label>
                  <input {...register('phone')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-white" placeholder="Your phone number" />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Service Required</label>
                <select {...register('service')} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-white text-secondary">
                  <option value="">Select a service...</option>
                  <option value="disability">Individual Disability Support</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="yard">Yard Maintenance</option>
                  <option value="other">Other Inquiry</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                <textarea {...register('message')} rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all bg-white resize-none" placeholder="How can we help you?"></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-md disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
