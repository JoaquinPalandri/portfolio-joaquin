import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contacto</h2>
        <p className="text-lg text-gray-600 mb-8">
          Si deseas ponerte en contacto conmigo para más información o colaborar en proyectos, no dudes en enviarme un mensaje.
        </p>
        
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-left text-gray-700">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-left text-gray-700">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}