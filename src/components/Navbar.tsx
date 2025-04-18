import React from "react";

export default function Navbar() {
    return (
      <header className="fixed top-0 w-full bg-zinc-100 shadow-md z-50">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-slate-900"><a href="#hero" className="hover:text-slate-900 transition">Joaquín</a></h1>
          <ul className="flex space-x-6 text-sm font-medium text-slate-700">
            <li><a href="#about" className="hover:text-slate-900 transition">Sobre mí</a></li>
            <li><a href="#experience" className="hover:text-slate-900 transition">Experiencia</a></li>
            <li><a href="#projects" className="hover:text-slate-900 transition">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-slate-900 transition">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
  }