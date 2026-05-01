import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-24 px-6 bg-[#FAF9F9] min-h-screen">
      <div className="max-w-4xl mx-auto space-y-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="text-5xl font-bold text-secondary mb-6">About Us</h1>
          <p className="text-xl text-secondary/80 font-serif leading-relaxed">
            Our story is built on the foundation of genuine care and the desire to empower individuals with disabilities.
          </p>
        </motion.div>

        <section className="space-y-8">
          <h2 className="text-3xl font-serif text-secondary border-b pb-4">Our Story</h2>
          <p className="text-secondary/80 leading-relaxed text-lg">
            Saanvi Services was created from a deep understanding that care should never feel clinical or detached. We believe in building relationships, understanding unique needs, and providing support that feels like an extension of family. For over 2 years, we have been providing dedicated individual disability support, focusing on real human connection rather than systems.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-serif text-secondary border-b pb-4">Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Empowerment</h3>
              <p className="text-secondary/80">Supporting you to live life on your own terms with independence and dignity.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Compassion</h3>
              <p className="text-secondary/80">Delivering care with warmth, empathy, and a genuine human connection.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Reliability</h3>
              <p className="text-secondary/80">Being a steadfast presence you can always count on.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-4">Personalization</h3>
              <p className="text-secondary/80">Tailoring our support to fit your unique journey and goals.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
