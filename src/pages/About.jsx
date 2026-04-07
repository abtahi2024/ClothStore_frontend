import { ChevronRight } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import Baners from "../assets/images/hero/about-us.jpg";
import Quote from "../assets/images/hero/testimonial-pic.jpg";

const stats = [
  { number: "102", label: "Our Clients" },
  { number: "30", label: "Total Categories" },
  { number: "102", label: "In Country" },
  { number: "98%", label: "Happy Customer" },
];

const team = [
  {
    name: "John Smith",
    role: "Fashion Design",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop",
  },
  {
    name: "Christine Wise",
    role: "C.E.O",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop",
  },
  {
    name: "Sean Robbins",
    role: "Manager",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop",
  },
  {
    name: "Lucy Myers",
    role: "Delivery",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=500&auto=format&fit=crop",
  },
];

const partners = [
  {
    name: "Partner 1",
    logo: "https://themewagon.github.io/malefashion/img/clients/client-1.png",
  },
  {
    name: "Partner 2",
    logo: "https://themewagon.github.io/malefashion/img/clients/client-2.png",
  },
  {
    name: "Partner 3",
    logo: "https://themewagon.github.io/malefashion/img/clients/client-3.png",
  },
  {
    name: "Partner 4",
    logo: "https://themewagon.github.io/malefashion/img/clients/client-4.png",
  },
  {
    name: "Partner 5",
    logo: "https://themewagon.github.io/malefashion/img/clients/client-5.png",
  },
  {
    name: "Partner 6",
    logo: "https://themewagon.github.io/malefashion/img/clients/client-6.png",
  },
  {
    name: "Partner 7",
    logo: "	https://themewagon.github.io/malefashion/img/clients/client-7.png",
  },
  {
    name: "Partner 8",
    logo: "	https://themewagon.github.io/malefashion/img/clients/client-8.png",
  },
];
const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header / Breadcrumb */}
      <div className="bg-[#f9f8ee]">
        <header className="py-12 px-4 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">About Us</h1>
          <div className="flex items-center text-sm text-gray-500">
            <span>Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-400">About Us</span>
          </div>
        </header>
      </div>
      {/* Hero Image */}
      <section className="px-4 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[500px] overflow-hidden rounded-sm"
        >
          <img
            src={Baners}
            alt="Fashion Store"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Three Columns Info */}
      <section className="px-4 max-w-7xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-bold mb-4">Who We Are ?</h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            Contextual advertising programs sometimes have strict policies that
            need to be adhered too. Let's take Google as an example.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-4">Who We Do ?</h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            In this digital generation where information can be easily obtained
            within seconds, business cards still have retained their importance.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            A two or three storey house is the ideal way to maximise the piece
            of earth on which our home sits, but for older or infirm people.
          </p>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="mb-24 flex flex-col md:flex-row">
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-12 md:p-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md text-center"
          >
            <span className="text-4xl text-red-500 font-serif mb-6 block">
              "
            </span>
            <p className="text-lg italic text-gray-700 mb-8 leading-relaxed">
              “Going out after work? Take your butane curling iron with you to
              the office, heat it up, style your hair before you leave the
              office and you won’t have to make a trip back home.”
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://i.pravatar.cc/150?u=augusta"
                alt="Augusta Schultz"
                className="w-12 h-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <h4 className="font-bold text-sm">Augusta Schultz</h4>
                <p className="text-xs text-gray-400">Fashion Design</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex-1 h-[400px] md:h-auto">
          <img
            src={Quote}
            alt="Lifestyle"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 max-w-7xl mx-auto mb-24 py-12 border-b border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2 block">
            Our Team
          </span>
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="mb-6 overflow-hidden bg-gray-100 aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-lg font-bold mb-1">{member.name}</h4>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner Section */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2 block">
            PARTNER
          </span>
          <h2 className="text-4xl font-bold">Happy Clients</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  Company
                </p>
                <p className="text-[8px] tracking-widest uppercase mt-0.5">
                  Tagline Here
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
