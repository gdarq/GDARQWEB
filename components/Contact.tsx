"use client";

import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-3">Contacto</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6 text-balance">
                Empecemos tu proyecto
              </h3>
              <p className="text-gray-400 font-light text-lg mb-10 leading-relaxed text-balance">
                Cada gran espacio comienza con una conversación. Contame sobre tu marca, tus objetivos y los desafíos de tu próximo proyecto.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:gabriela.dodelson@gmail.com" 
                  className="group flex items-center gap-4 p-4 border border-white/10 hover:border-white/30 bg-white/5 transition-all"
                >
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-none group-hover:bg-white group-hover:text-black transition-colors">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Email</span>
                    <span className="text-white font-medium group-hover:text-gray-300 transition-colors">gabriela.dodelson@gmail.com</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/5493518642423" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 border border-white/10 hover:border-white/30 bg-white/5 transition-all"
                >
                  <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] flex items-center justify-center rounded-none group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">WhatsApp Directo</span>
                    <span className="text-white font-medium">+54 9 351 864-2423</span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 p-8 border border-white/10"
            >
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors"
                      placeholder="nombre@empresa.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors"
                      placeholder="+54 9..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Contame sobre tu proyecto..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="mt-4 w-full bg-white text-black font-medium py-4 hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm"
                >
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
