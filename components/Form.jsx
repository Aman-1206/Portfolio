"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Message sent successfully!✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-[80vh] scroll-mt-5 flex flex-col items-center justify-center px-6 py-16 text-white mt-20"
    >
      <h1 className="text-5xl font-bold mb-2 bg-cyan-400 text-transparent bg-clip-text">
        Get In Touch
      </h1>
      <p className="text-gray-200 mb-12 text-center max-w-2xl">
        I’m always open to discussing new opportunities, collaborations, or just
        connecting with fellow developers.
      </p>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center items-start bg-[#000000]/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-md shadow-xl shadow-cyan-900/40 transition-transform hover:scale-[1.01] duration-300">
        
        {/* LEFT: Contact Info */}
        <div className="md:w-1/2 w-full space-y-6">
          <h2 className="text-2xl font-semibold mb-4 border-b border-cyan-400/30 pb-2">
            Contact Information
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-400" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm">amankumarschool7@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-cyan-400" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm">+91 9971416471</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm">New Delhi, India</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 border-b border-cyan-400/30 pb-2">
            Connect With Me
          </h2>
          <div className="flex flex-col gap-4">
            <a
              href="https://github.com/Aman-1206"
              target="_blank"
              className="flex items-center gap-3 bg-[#00dfc41a]/50 p-3 rounded-md hover:bg-[#00dfc41a]/80 transition"
            >
              <Github className="text-cyan-400" /> GitHub – @Aman-1206
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kumar-a2ba54361"
              target="_blank"
              className="flex items-center gap-3 bg-[#00dfc41a]/50 p-3 rounded-md hover:bg-[#00dfc41a]/80 transition"
            >
              <Linkedin className="text-cyan-400" /> LinkedIn Profile
            </a>
            <a
              href="https://www.instagram.com/aman.cpp_/"
              target="_blank"
              className="flex items-center gap-3 bg-[#00dfc41a]/50 p-3 rounded-md hover:bg-[#00dfc41a]/80 transition"
            >
              <Instagram className="text-cyan-400" /> Instagram
            </a>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full bg-[#0f172a]/60 p-6 rounded-2xl border border-cyan-500/30 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded-md bg-[#00dfc41a]/70 outline-none border border-cyan-900/30 focus:border-cyan-500 transition"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded-md bg-[#00dfc41a]/70 outline-none border border-cyan-900/30 focus:border-cyan-500 transition"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded-md bg-[#00dfc41a]/70 outline-none border border-cyan-900/30 focus:border-cyan-500 transition resize-none h-32"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-700 transition p-3 rounded-md font-semibold"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-gray-300 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Form;
