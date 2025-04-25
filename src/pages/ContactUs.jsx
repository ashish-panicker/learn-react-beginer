import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo: Show in console
    console.log(formData);
    alert("Message sent! We'll get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-white text-gray-800 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-xl shadow-md space-y-6">
        <div>
          <label className="block font-semibold mb-2">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 h-32 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
