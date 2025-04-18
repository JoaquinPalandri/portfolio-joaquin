export default function Experience() {
    return (
<section id="experience" className="py-20 bg-zinc-900 text-zinc-200">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Experiencia</h2>
    <div className="space-y-10">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Proyecto de Tesis - Sistema de Monitoreo Remoto</h3>
        <p className="mb-4">
          Estoy trabajando en el desarrollo e implementación de un sistema de monitoreo para equipos de ducha en cama. Este proyecto involucra la integración de dispositivos IoT para la recolección de datos en tiempo real y su visualización a través de una plataforma web.
        </p>
        <ul className="list-disc pl-5">
          <li>Desarrollo de la arquitectura de sistemas embebidos.</li>
          <li>Configuración de AWS IoT Core para la comunicación de dispositivos.</li>
          <li>Diseño de una interfaz web para la visualización de datos.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">Prácticas en Desarrollo Web</h3>
        <p className="mb-4">
          Durante mi tiempo en prácticas, he trabajado en diversas aplicaciones web usando tecnologías como React y Angular, además de integrar soluciones backend con PHP y bases de datos MySQL.
        </p>
        <ul className="list-disc pl-5">
          <li>Desarrollo de interfaces de usuario interactivas.</li>
          <li>Implementación de API RESTful en PHP.</li>
          <li>Optimización de sitios web para un rendimiento superior.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">Colaboraciones en Proyectos de Investigación</h3>
        <p className="mb-4">
          Participé en proyectos de investigación en el área de la ingeniería biomédica, desarrollando modelos de simulación para sistemas de monitoreo de pacientes.
        </p>
        <ul className="list-disc pl-5">
          <li>Modelado de sistemas biomédicos en software de simulación.</li>
          <li>Colaboración en la interpretación de datos de investigación.</li>
        </ul>
      </div>
    </div>
  </div>
</section>
    );
  }