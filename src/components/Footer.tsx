import React from 'react';

export default function Footer() {
  return (
<footer className="bg-slate-100 text-slate-600 py-8 border-t border-slate-200">
  <div className="max-w-5xl mx-auto text-center">
    <p className="text-sm mb-4">© 2025 Joaquín Palandri. Todos los derechos reservados.</p>

    <div className="flex justify-center space-x-6">
      <a
        href="https://www.linkedin.com/in/joaquinpalandri/"
        className="text-slate-600 hover:text-sky-500 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/JoaquinPalandri"
        className="text-slate-600 hover:text-sky-500 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="mailto:joaquin.palandri@email.com"
        className="text-slate-600 hover:text-sky-500 transition"
      >
        Correo
      </a>
    </div>
  </div>
</footer>
    );
    }   