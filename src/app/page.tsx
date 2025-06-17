'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Server, Smartphone } from 'lucide-react';
import Image from 'next/image';

// Tech logos component
const TechLogo = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/30 transition-colors">
    <div className="w-6 h-6 flex items-center justify-center">
      <div
        className="w-full h-full bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${logo})` }}
      />
    </div>
    <span className="text-gray-300 text-sm">{name}</span>
  </div>
);

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Tech stacks with logos
  const frontendTechs = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
  ];

  const backendTechs = [
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Lua', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg' }
  ];

  const databaseTechs = [
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MariaDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg' }
  ];

  const toolsTechs = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Gabriel Moreno
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              {['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Experiencia', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Gabriel Moreno"
                    width={120}
                    height={120}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      // Fallback to initials if image fails to load
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <span className="text-4xl font-bold text-white hidden">GM</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Gabriel Moreno
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-purple-300 mb-8"
            >
              Desarrollador Fullstack
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed text-center"
            >
              Apasionado por la programación y en pleno proceso de formación y crecimiento.
              Gran motivación por aprender, mejorar y aportar valor desde el primer día.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+34 634668535</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>gabrielmordev@gmail.com</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8"
            >
              <a
                href="/Moreno Muñoz, Gabriel - Curriculum.pdf"
                download="Moreno Muñoz, Gabriel - Curriculum.pdf"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mí" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre mí</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Mi Perfil Profesional</h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                Apasionado por la programación y en pleno proceso de formación y crecimiento. Gran motivación por aprender, mejorar y aportar valor desde el primer día.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                Me esfuerzo por dar siempre lo mejor de mí, soy <strong className="text-purple-300">constante</strong>, <strong className="text-purple-300">responsable </strong> y tengo muchas ganas de empezar a trabajar en un
                entorno profesional donde pueda desarrollarme y contribuir al equipo.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Actitud proactiva y resolutiva</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Gran capacidad de aprendizaje</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Adaptabilidad a nuevas herramientas y metodologías</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Interés por la mejora continua y el crecimiento profesional</span>
                </div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Educación</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-purple-300 font-medium">Desarrollo de Aplicaciones Multiplataforma</h5>
                    <p className="text-gray-400">IES GRAN CAPITÁN • 2022-2024</p>
                  </div>
                  <div>
                    <h5 className="text-purple-300 font-medium">Técnico en Sistemas Microinformáticos y Redes</h5>
                    <p className="text-gray-400">IES FIDIANA • 2020-2022</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Idiomas</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Español</span>
                    <span className="text-purple-300">Nativo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Inglés</span>
                    <span className="text-purple-300">B1</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Programa Talento Joven</h4>
                <p className="text-gray-300 text-sm text-justify">
                  Mi contratación está sujeta a una ayuda de 4.950 € por parte de la Cámara de Comercio de Córdoba,
                  por mi participación en su programa de cualificación y empleo &apos;Talento Joven&apos;.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Habilidades Técnicas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {frontendTechs.map((tech) => (
                  <TechLogo key={tech.name} name={tech.name} logo={tech.logo} />
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Backend</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {backendTechs.map((tech) => (
                  <TechLogo key={tech.name} name={tech.name} logo={tech.logo} />
                ))}
              </div>
            </motion.div>

            {/* Database */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Base de Datos</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">

                {databaseTechs.map((tech) => (
                  <TechLogo key={tech.name} name={tech.name} logo={tech.logo} />
                ))}
              </div>
            </motion.div>

            {/* Tools & Others */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Herramientas</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {toolsTechs.map((tech) => (
                  <TechLogo key={tech.name} name={tech.name} logo={tech.logo} />
                ))}

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Proyectos Destacados</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center gap-3 mb-4">
                    <ExternalLink className="w-6 h-6 text-purple-400" />
                    <h3 className="text-2xl font-bold text-white">Servidor GTA V Roleplay (FiveM)</h3>
                    <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">2024-2025</span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                    Desarrollo completo de un servidor multijugador personalizado con arquitectura cliente-servidor, centrado en lógica de juego, sistemas persistentes y rendimiento en tiempo real.                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Características principales:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Programación de lógica backend en Lua y JavaScript sobre QB-Core (FiveM).
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Modelado y gestión de base de datos MySQL/MariaDB
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Desarrollo de scripts persistentes: economía, inventario, crafting, permisos,...
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Comunicación cliente-servidor asincrónica (eventos, callbacks, sincronización).
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Control de versiones y colaboración con GitHub.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:w-1/3">
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-4">Tecnologías Utilizadas</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-purple-300 font-medium">Lenguajes:</span>
                        <p className="text-gray-300 text-sm">Lua, JavaScript, SQL, HTML/CSS</p>
                      </div>
                      <div>
                        <span className="text-purple-300 font-medium">Frameworks:</span>
                        <p className="text-gray-300 text-sm">React, Vue.js, QB-Core</p>
                      </div>
                      <div>
                        <span className="text-purple-300 font-medium">Herramientas:</span>
                        <p className="text-gray-300 text-sm">GitHub, FXServer, VPS</p>
                      </div>
                      <div>
                        <span className="text-purple-300 font-medium">Infraestructura:</span>
                        <p className="text-gray-300 text-sm">VPS, MySQL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experiencia Laboral</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {/* AICOR Experience */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-purple-400/50 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Desarrollador Multiplataforma (FCT)</h3>
                  <h4 className="text-xl text-purple-300 mb-2">AICOR Consultores Informáticos</h4>
                  <span className="text-gray-400">2024</span>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    Formación en Centros de Trabajo
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-justify">
                Desarrollo de aplicaciones multiplataforma utilizando tecnologías modernas.
                Participé en proyectos reales trabajando con frameworks y herramientas de desarrollo actuales.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Responsabilidades:</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Desarrollo con React Native
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Desarrollo frontend con React
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Desarrollo y mantenimiento en WordPress
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Tecnologías:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'React Native', 'WordPress', 'PHP', 'JavaScript'].map((tech) => (
                      <span key={tech} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ayuntamiento Experience */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-purple-400/50 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Técnico Auxiliar Informático (FCT)</h3>
                  <h4 className="text-xl text-purple-300 mb-2">Ayuntamiento de Córdoba</h4>
                  <span className="text-gray-400">2022</span>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    Formación en Centros de Trabajo
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-justify">
                Experiencia en el mantenimiento y soporte técnico de equipos informáticos en el sector público.
                Trabajo con hardware y sistemas de la administración local.
              </p>

              <div>
                <h5 className="text-lg font-semibold text-white mb-3">Responsabilidades:</h5>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Reparación de equipos informáticos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Mantenimiento preventivo y correctivo
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Clonación y configuración de equipos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Soporte técnico a usuarios
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contacto</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center">
              ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él y ver cómo puedo ayudarte!
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-2xl w-full"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-400/50 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <a href="mailto:gabrielmordev@gmail.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                      gabrielmordev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-400/50 transition-colors">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Teléfono</h3>
                    <a href="tel:+34634668535" className="text-purple-300 hover:text-purple-200 transition-colors">
                      +34 634 668 535
                    </a>
                  </div>
                </div>



              </div>

              <div className="flex justify-center gap-4 mt-8">
                <a
                  href="https://github.com/gabrielmordev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-400/50 flex items-center justify-center transition-colors group"
                >
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-moreno-munoz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-purple-400/50 flex items-center justify-center transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Gabriel Moreno. Desarrollado con Next.js y Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
