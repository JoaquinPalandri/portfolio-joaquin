import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="w-full px-8 py-5 bg-white text-gray-800 ">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-semibold tracking-wide">Joaquin Palandri</h1>
                <nav className="space-x-6">
                    <a href="#about" className="hover:text-gray-600">Sobre mí</a>
                    <a href="#projects" className="hover:text-gray-600">Proyectos</a>
                    <a href="#contact" className="hover:text-gray-600">Contacto</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;