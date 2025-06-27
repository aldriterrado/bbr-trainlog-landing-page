import {  useState } from 'react'
import { Menu, X } from 'lucide-react'
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Handle smooth scrolling when clicking navigation links
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = e.currentTarget.getAttribute('href')
    const targetElement =
      targetId === '#'
        ? document.documentElement
        : targetId
          ? document.querySelector(targetId)
          : null
    if (targetElement) {
      // Close mobile menu if open
      if (isMenuOpen) {
        setIsMenuOpen(false)
      }
      // Smooth scroll to the target element
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      // Update URL without causing a jump (optional)
      window.history.pushState(null, '', targetId)
    }
  }
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <a
                  href="#"
                  onClick={handleNavLinkClick}
                  className="cursor-pointer"
                >
                  <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    BBR TrainLog
                  </span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#overview"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
              >
                Overview
              </a>
              <a
                href="#features"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
              >
                Features
              </a>
              <a
                href="#user-roles"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
              >
                User Roles
              </a>
              <a
                href="#workflow"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
              >
                Workflow
              </a>
              <a
                href="#tech"
                onClick={handleNavLinkClick}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 hover:bg-gray-100"
              >
                Technology
              </a>
            </div>
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a
                href="#features"
                onClick={handleNavLinkClick}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#user-roles"
                onClick={handleNavLinkClick}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                User Roles
              </a>
              <a
                href="#workflow"
                onClick={handleNavLinkClick}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Workflow
              </a>
              <a
                href="#tech"
                onClick={handleNavLinkClick}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                Technology
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
