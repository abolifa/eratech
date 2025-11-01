"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6"
      >
        Contact <span className="text-blue-600">Us</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 text-center max-w-2xl mb-16"
      >
        Let's discuss your next software project or digital idea. Reach out to
        our team — we’ll respond as soon as possible.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow p-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Get in touch
          </h2>
          <div className="flex items-center gap-4 mb-4">
            <Mail className="text-blue-600 w-5 h-5" />
            <Link
              href="mailto:info@eratech.ly"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              info@eratech.ly
            </Link>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Phone className="text-blue-600 w-5 h-5" />
            <Link
              href="tel:+218912345678"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              +218 91 234 5678
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600 w-5 h-5" />
            <p className="text-gray-700">Tripoli, Libya</p>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            We’re available Sunday–Thursday, 9:00 AM to 6:00 PM.
          </div>
        </motion.div>

        {/* RIGHT: CONTACT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow p-8 flex flex-col space-y-4"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Send a Message
          </h2>

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
        </motion.form>
      </div>
    </main>
  );
}
