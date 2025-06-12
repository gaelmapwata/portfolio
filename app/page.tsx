'use client'
import React from 'react'
import Image from 'next/image'
import Navigation from './components/Navigation'

const skills = [
  { name: 'HTML', icon: '/icons/html5.svg' },
  { name: 'CSS', icon: '/icons/css3.svg' },
  { name: 'Javascript', icon: '/icons/javascript.svg' },
  { name: 'Express', icon: '/icons/express.svg' },
  { name: 'Vue.js', icon: '/icons/vuejs.svg' },
  { name: 'Nuxt.js', icon: '/icons/nuxtjs.svg' },
  { name: 'Sequelize', icon: '/icons/sequelize.svg' },
  { name: 'React.js', icon: '/icons/react.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'SQL Server', icon: '/icons/sqlserver.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'Merise', icon: '/icons/merise.svg' },
  { name: 'UML', icon: '/icons/uml.svg' },
]

const projects = [
  {
    title: 'Application bancaire UBA',
    description: 'Application de gestion bancaire pour UBA Group',
    image: '/banner.jpg',
  },
  {
    title: 'Portail immobilier',
    description: 'Plateforme de présentation et d\'achat de biens immobiliers',
    image: '/house.png',
  },
  {
    title: 'ERP COVID-19',
    description: 'ERP pour la gestion de la pandémie à Kinshasa',
    image: '/covid.png',
  },
]

export default function Home() {
  return (
    <>
      <Navigation />
      {/* Hero Banner */}
      <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center mb-16 fade-in">
        <Image
          src="/banner.jpg"
          alt="Bannière portfolio"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white slide-up">
          <Image
            src="/avatar.jpeg"
            alt="Avatar de Gael Mapwata"
            width={140}
            height={140}
            className="rounded-full border-4 border-white shadow-xl mb-4 object-cover fade-in"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg fade-in">Gael Mapwata</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow fade-in">Full Stack Developer</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow fade-in">
            Passionné par la création de solutions robustes et performantes, je conçois des applications web modernes et innovantes.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Skills Section */}
        <section id="skills" className="mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 slide-up">Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div key={skill.name} className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:scale-110 hover:shadow-2xl transition-all duration-300 slide-up" style={{animationDelay: `${0.1 * i}s`}}>
                <Image src={skill.icon} alt={skill.name} width={48} height={48} className="mb-2" />
                <span className="font-semibold text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 slide-up">Projets récents</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 slide-up" style={{animationDelay: `${0.1 * i}s`}}>
                <Image src={project.image} alt={project.title} width={400} height={220} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-blue-800">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Expérience professionnelle</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4 bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold">Developpeur Fullstack</h3>
              <p className="text-gray-600">UBA GROUP, Nigeria</p>
              <p className="text-gray-500">juil. 2023 - Présent</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Responsable du développement frontend et backend de plusieurs applications bancaires</li>
                <li>Conception et maintenance de l'application marchant</li>
                <li>Développement de l'application en collaboration avec Airtel</li>
                <li>Création d'une application mobile pour l'ouverture de comptes bancaires</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold">Developpeur Fullstack</h3>
              <p className="text-gray-600">Kadea Software, Belgique/France/Kinshasa</p>
              <p className="text-gray-500">déc. 2020 - juin 2023</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Travaillé pour plusieurs entreprises en France, Belgique, et Suisse</li>
                <li>Réalisé une application pour la gestion de la compétition féminine à Bruxelles</li>
                <li>Développé un portail immobilier pour une entreprise en France</li>
                <li>Créé un ERP pour la gestion de la pandémie de COVID-19 à Kinshasa</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold">Developpeur web</h3>
              <p className="text-gray-600">Oxanfoxs, Kinshasa</p>
              <p className="text-gray-500">oct. 2017 - nov. 2019</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Responsable de la réalisation de sites web pour des clients d'institutions publiques</li>
                <li>Collaboré avec divers clients pour comprendre leurs besoins</li>
                <li>Assuré la qualité et la performance des sites web développés</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Formation</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-4 bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold">Fullstack developper</h3>
              <p className="text-gray-600">Kinshasa Digital Academy, Kinshasa</p>
              <p className="text-gray-500">janv. 2020 - janv. 2021</p>
              <p className="mt-2 text-gray-700">
                Formation pratique en développement web et mobile avec stages en entreprise.
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4 bg-white rounded-lg shadow p-4">
              <h3 className="text-xl font-bold">Genie logiciel</h3>
              <p className="text-gray-600">ISIPA, Kinshasa</p>
              <p className="text-gray-500">oct. 2013 - juil. 2018</p>
              <p className="mt-2 text-gray-700">Licence en genie logiciel</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Informations personnelles</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Email: gmapwata6@gmail.com</li>
                <li>Téléphone: +243810951614</li>
                <li>Adresse: av pagnamutombo num 270, Lingwala, Kinshasa</li>
                <li>Date de naissance: 31 octobre 1994</li>
                <li>Nationalité: Congolais</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">Langues</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Français</li>
                <li>Anglais</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 