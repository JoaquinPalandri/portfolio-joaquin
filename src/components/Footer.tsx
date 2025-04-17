import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-400 mb-4">© 2025 Joaquín Palandri. Todos los derechos reservados.</p>
        
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/joaquinpalandri/"
            className="text-gray-300 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/JoaquinPalandri"
            className="text-gray-300 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="mailto:joaquin.palandri@email.com"
            className="text-gray-300 hover:text-white transition"
          >
            Correo
          </a>
        </div>
      </div>
    </footer>
  );
}