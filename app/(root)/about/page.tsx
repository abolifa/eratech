"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About <span className="text-blue-600">Eratech</span>
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Eratech is a software solutions company specializing in
          high-performance web, mobile, and cloud platforms. We build
          intelligent digital ecosystems that help businesses automate, scale,
          and thrive in the connected world.
        </p>
      </motion.section>

      {/* MISSION & VISION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mt-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To empower organizations with smart, scalable, and secure digital
            solutions that simplify operations and drive measurable results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To become the leading software innovation hub in North Africa —
            creating world-class products that redefine digital transformation
            standards.
          </p>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-6xl mt-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          Who We Are
        </motion.h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Founded by passionate engineers and designers, Eratech blends
          technical precision with creative thinking. Our multidisciplinary team
          brings deep experience in software architecture, UX design, cloud
          engineering, and mobile development — united by a shared goal:
          building solutions that perform beautifully and scale globally.
        </p>
      </section>

      {/* TEAM */}
      <section className="max-w-6xl mt-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
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
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white shadow rounded-xl p-6 flex flex-col items-center"
            >
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let’s Build Something Great Together
        </h2>
        <p className="text-gray-600 mb-8">
          Whether you’re a startup, business, or government agency — we’ll help
          turn your digital vision into reality.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </motion.section>
    </main>
  );
}
