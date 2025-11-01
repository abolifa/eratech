"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Cloud,
  Globe,
  ShieldCheck,
  Wrench,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

export default function EratechPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      desc: "Scalable, secure, and high-performance websites and dashboards using Laravel, Next.js, and modern stacks.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile Applications",
      desc: "Cross-platform Flutter apps with stunning UI and seamless performance on iOS and Android.",
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud & API Services",
      desc: "Robust APIs and cloud deployments with modern security, monitoring, and scalability standards.",
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "UI/UX & Branding",
      desc: "Elegant, intuitive, and consistent interfaces that elevate your brand identity.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Security & Maintenance",
      desc: "Continuous updates, backups, and proactive security audits for peace of mind.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "System Integration",
      desc: "Custom integrations with ERP, CRM, and logistics systems for operational excellence.",
    },
  ];

  const team = [
    {
      name: "Abdurrahman Abulifa",
      role: "Founder & Lead Engineer",
      image: "/images/team/ab.jpg",
    },
    {
      name: "Ghassan Arafa",
      role: "UI/UX Designer",
      image: "/images/team/gh.jpeg",
    },
    {
      name: "Omar Saleh",
      role: "Mobile Developer",
      image: "/images/team/marwan.jpg",
    },
  ];

  return (
    <main className="flex flex-col items-center w-full text-gray-900">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-linear-to-b from-white to-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          Empowering <span className="text-blue-600">Digital Growth</span> with
          Smart Software Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 text-gray-600 max-w-2xl"
        >
          Eratech delivers innovative web, mobile, and cloud systems designed to
          help your business grow and stand out in the digital era.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#services"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Explore Services
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-20 bg-white px-6 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About <span className="text-blue-600">Eratech</span>
        </h2>
        <p className="text-gray-600 max-w-3xl leading-relaxed">
          Eratech is a digital innovation company specializing in intelligent,
          scalable, and secure solutions for modern enterprises. Our mission is
          to empower organizations through automation and smart technology that
          drives measurable results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mt-16">
          <div className="bg-gray-50 rounded-xl shadow p-8 text-left">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver intelligent software that simplifies complexity,
              enhances productivity, and accelerates growth across industries.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl shadow p-8 text-left">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become the leading software innovation hub in North Africa,
              recognized for excellence in design, engineering, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-20 bg-gray-50 px-6 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Core <span className="text-blue-600">Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl shadow-lg p-8 text-left border border-gray-100 hover:shadow-xl transition"
            >
              {s.icon}
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section
        id="team"
        className="py-20 bg-white px-6 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-blue-600">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center"
            >
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 bg-gray-50 w-full flex flex-col items-center px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Get in <span className="text-blue-600">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full">
          <div className="bg-white rounded-xl shadow p-8 text-left">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Contact Info
            </h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600 w-5 h-5" />
                <Link
                  href="mailto:info@eratech.com.ly"
                  className="hover:text-blue-600"
                >
                  info@eratech.com.ly
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600 w-5 h-5" />
                <Link href="tel:+218912345678" className="hover:text-blue-600">
                  +218 91 234 5678
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600 w-5 h-5" />
                <p>Tripoli, Libya</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Sunday–Thursday, 9:00 AM to 6:00 PM.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow p-8 flex flex-col space-y-4"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Send a Message
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:opacity-70"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent ✅"
                : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white py-6 w-full text-center text-sm">
        © {new Date().getFullYear()} Eratech — All Rights Reserved.
      </footer>
    </main>
  );
}
