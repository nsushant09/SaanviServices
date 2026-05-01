import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="py-24 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl font-bold text-secondary mb-6">Our Services</h1>
          <p className="text-xl text-secondary/80 font-serif leading-relaxed">
            Comprehensive, personalized support designed around your unique needs and goals.
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary/5 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-secondary mb-6">Individual Disability Support</h2>
              <p className="text-lg text-secondary/80 leading-relaxed mb-6 font-serif">
                Our primary focus is providing personalized one-on-one care tailored to your specific requirements. We work closely with you to understand your goals, preferences, and challenges, ensuring the support you receive is truly centered around you.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-secondary/90"><span className="text-primary font-bold">✓</span> Daily living assistance</li>
                <li className="flex items-center gap-3 text-secondary/90"><span className="text-primary font-bold">✓</span> Community participation</li>
                <li className="flex items-center gap-3 text-secondary/90"><span className="text-primary font-bold">✓</span> Skill development</li>
              </ul>
            </div>
            <div className="flex-1 w-full">
              <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop" alt="Individual Support" className="rounded-2xl w-full h-80 object-cover shadow-lg" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#FAF9F9] rounded-3xl p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-secondary mb-4">Cleaning Services</h2>
              <p className="text-secondary/80 leading-relaxed">
                Maintaining a safe, hygienic, and comfortable living environment is essential for well-being. Our dedicated team provides thorough cleaning services to ensure your home remains a sanctuary.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#FAF9F9] rounded-3xl p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-secondary mb-4">Yard Maintenance</h2>
              <p className="text-secondary/80 leading-relaxed">
                We believe your outdoor spaces should be as comfortable and accessible as your indoor ones. Our yard maintenance services take the hassle out of outdoor upkeep.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
