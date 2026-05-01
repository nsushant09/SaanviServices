import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-br from-pink-50 to-white overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Hero background" />
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-secondary mb-6 tracking-tight leading-tight"
          >
            Care that feels personal.<br/>
            <span className="text-primary">Support that feels like family.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-secondary/80 max-w-2xl mb-10 font-serif"
          >
            Providing compassionate individual disability support tailored to every journey.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/services" className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30">
              Explore Services
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white text-secondary border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all hover:scale-105 shadow-sm">
              Get Support
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Story Begins */}
      <section className="py-32 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-secondary leading-relaxed">
              Every individual deserves dignity, independence, and genuine care.
              <br/><br/>
              At Saanvi Services, we don’t just provide support — <span className="text-primary italic">we build relationships.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Need */}
      <section className="py-24 px-6 bg-[#FAF9F9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1000&auto=format&fit=crop" alt="Care interaction" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-serif text-secondary leading-snug mb-6">
              Navigating life with a disability can feel overwhelming.
            </h3>
            <p className="text-xl text-secondary/80 leading-relaxed font-serif">
              Finding support that truly understands your needs shouldn’t be. We navigate this journey alongside you, offering clarity and steadfast support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Our Purpose */}
      <section className="py-32 px-6 bg-primary/5 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-serif text-secondary leading-relaxed"
          >
            That’s why Saanvi Services was created —<br/><br/>
            <span className="font-medium text-primary">to provide personalized, compassionate, and reliable support that empowers individuals to live life on their own terms.</span>
          </motion.p>
        </div>
      </section>

      {/* Section 5: Services */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-secondary mb-16"
          >
            How can we support you today?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Individual Disability Support',
                desc: 'Personalized one-on-one care tailored to individual needs.',
                highlight: true
              },
              {
                title: 'Cleaning Services',
                desc: 'Maintaining safe and hygienic living environments.'
              },
              {
                title: 'Yard Maintenance',
                desc: 'Outdoor upkeep for comfort and accessibility.'
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${service.highlight ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-[#FAF9F9] text-secondary hover:shadow-lg'}`}
              >
                <h3 className={`text-2xl font-bold mb-4 ${service.highlight ? 'text-white' : 'text-secondary'}`}>{service.title}</h3>
                <p className={`mb-8 ${service.highlight ? 'text-white/90' : 'text-secondary/70'}`}>{service.desc}</p>
                <Link to="/services" className={`font-medium inline-flex items-center gap-2 ${service.highlight ? 'text-white' : 'text-primary'}`}>
                  Learn More <span className="text-xl">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Experience & Trust */}
      <section className="py-24 px-6 bg-secondary text-white text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl font-serif leading-relaxed"
          >
            For over 2 years, we have been providing dedicated individual disability support, focusing on real human connection rather than systems.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-white/80 font-serif"
          >
            We are currently self-managed, allowing us to provide flexible and personalized care.
          </motion.p>
        </div>
      </section>

      {/* Section 7 & 8: Emotional Closure & CTA */}
      <section className="relative py-32 px-6 flex flex-col items-center text-center bg-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb046eb9?q=80&w=2000&auto=format&fit=crop" alt="Peaceful setting" className="w-full h-full object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-12 leading-tight">
            Because care isn’t just a service — <br/><span className="text-primary italic">it’s a commitment to someone’s life.</span>
          </h2>
          <p className="text-2xl font-medium text-secondary mb-8">Let’s support your journey.</p>
          <Link to="/contact" className="inline-block px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/30">
            Contact Us Today
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
