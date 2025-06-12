'use client'
import React, { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">GM</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600">
              À propos
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600">
              Compétences
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600">
              Expérience
            </button>
            <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-blue-600">
              Formation
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Compétences
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Expérience
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Formation
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 