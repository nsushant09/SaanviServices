import { motion } from 'framer-motion';
import Binod from '@/assets/Binod.jpg';

export default function Team() {
  const teamMembers = [
    {
      name: 'Binod Bhandari',
      role: 'Lead Support Worker',
      bio: 'As our Lead Support Worker, Binod brings years of expertise in coordinating care, mentoring staff, and ensuring the highest quality of support for our clients.',
      image: Binod
    },
    {
      name: 'Sarita Neupane', 
      role: 'Support Worker',
      bio: 'As a dedicated Support Worker, Sarita provides compassionate, hands-on assistance, working closely with clients to achieve their daily goals and foster independence.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="py-24 px-6 bg-[#FAF9F9] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold text-secondary mb-6">Our Team</h1>
          <p className="text-xl text-secondary/80 font-serif leading-relaxed">
            Meet the dedicated individuals who make Saanvi Services feel like family.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-secondary mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-secondary/80 leading-relaxed font-serif">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
