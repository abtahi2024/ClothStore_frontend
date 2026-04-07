import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Column: Information */}
        <div className="flex-1">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4 block">
            INFORMATION
          </span>
          <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
          <p className="text-gray-500 leading-relaxed mb-12 max-w-md">
            As you might expect of a company that began as a high-end interiors
            contractor, we pay strict attention.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">America</h3>
              <p className="text-gray-500 text-sm mb-1">
                195 E Parker Square Dr, Parker, CO 801
              </p>
              <p className="text-gray-500 text-sm">+43 982-314-0958</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">France</h3>
              <p className="text-gray-500 text-sm mb-1">
                109 Avenue Léon, 63 Clermont-Ferrand
              </p>
              <p className="text-gray-500 text-sm">+12 345-423-9893</p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              required
              className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-black transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-10 py-4 text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-colors uppercase active:scale-90"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
