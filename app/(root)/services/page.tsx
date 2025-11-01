"use client";

import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cloud,
  Globe,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Code className="w-8 h-8 text-blue-600" />,
    title: "Web Development",
    description:
      "We craft fast, secure, and scalable web applications using modern frameworks like Laravel, Next.js, and React — designed for performance and reliability.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps built with Flutter, offering elegant design, seamless experience, and real-time connectivity for iOS and Android.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-600" />,
    title: "Cloud & API Services",
    description:
      "From custom APIs to full-scale cloud deployment, we ensure smooth integration, high availability, and secure architecture for your business systems.",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "UI/UX Design & Branding",
    description:
      "We design user experiences that are intuitive, visually stunning, and aligned with your brand identity — because design is how users trust you.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Security & Maintenance",
    description:
      "We keep your systems secure, updated, and monitored — from SSL and backups to penetration testing and version control best practices.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: "System Integration",
    description:
      "Connect your ERP, CRM, payment gateways, and logistics systems seamlessly with custom-built integrations tailored for efficiency.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8"
      >
        Our <span className="text-blue-600">Services</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-2xl text-center mb-16"
      >
        At Eratech, we deliver full-cycle software solutions that combine
        functionality, performance, and design excellence. Explore what we do
        best.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm flex-1">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <section className="mt-20 text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Need a custom solution?
        </h2>
        <p className="text-gray-600 mb-8">
          Whether you're looking to automate workflows, build a marketplace, or
          launch a SaaS platform — our team can bring your vision to life.
        </p>
        <Link
          href="mailto:info@eratech.ly"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
