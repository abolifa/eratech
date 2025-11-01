"use client";

import { PROJECTS } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8"
      >
        Our <span className="text-blue-600">Projects</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 max-w-2xl text-center mb-16"
      >
        Explore a selection of Eratech’s top software solutions that demonstrate
        our innovation, precision, and performance across industries.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {p.link && (
                <Link
                  href={p.link}
                  target="_blank"
                  className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-700 transition"
                >
                  View Project →
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
