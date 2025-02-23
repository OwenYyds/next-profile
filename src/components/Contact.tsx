"use client";

import { motion } from "framer-motion";
import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="overflow-x-clip py-32 text-white container mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-300">touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel:+123213213"
                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                +86 176 7120 3920
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="youngwhenball@gmail.com"
                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                youngwhenball@gmail.com
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Location</p>
              <address className="text-xl not-italic leading-relaxed">
                <p>Shanghai, China</p>
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3414.877286186342!2d121.4586528151581!3d31.22839628146057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b2f6f3b6d3b2c1%3A0x9d4b6c5f8a3f7d2c!2sShanghai%20Tower!5e0!3m2!1sen!2sca!4v1631600892171!5m2!1sen!2sca"
            className="w-full h-full"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
