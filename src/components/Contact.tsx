import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 py-20 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-8">Contacto</h2>
      <p className="text-lg text-zinc-300 mb-8">
        Si deseas ponerte en contacto conmigo para más información o colaborar en proyectos, no dudes en enviarme un mensaje.
      </p>
      
      <form className="max-w-2xl mx-auto bg-zinc-800 p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label htmlFor="name" className="block text-left text-zinc-300">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tu nombre"
            className="text-white w-full px-4 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-left text-zinc-300">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            className="text-white w-full px-4 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-left text-zinc-300">Mensaje</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje"
            className="text-white w-full px-4 py-2 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-white text-zinc-900 px-6 py-2 rounded-full hover:bg-zinc-300 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  </section>
  
  );
}