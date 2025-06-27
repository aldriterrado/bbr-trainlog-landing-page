import { CheckCircle, Award, FileText } from 'lucide-react'
export const HeroSection = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Subtle accent elements for modern look */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50 rounded-tr-full opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                BBR TrainLog
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
              Organize Employee Training <br className="hidden md:block" />
              <span className="text-blue-600">All in One Place</span>
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed max-w-xl">
              A centralized, digital Training Management System that simplifies
              how HR records, monitors, and analyzes employee training
              activities and compliance.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {/* Keeping glass effect only on these 3 detail items */}
              <div className="flex items-center bg-white/50 backdrop-blur-sm p-4 rounded-xl hover:bg-white/70 transition-colors duration-300 border border-white/60 shadow-sm">
                <div className="bg-blue-100/70 backdrop-blur-sm p-2 rounded-lg mr-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-800 font-medium">
                  Streamline training record management
                </span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm p-4 rounded-xl hover:bg-white/70 transition-colors duration-300 border border-white/60 shadow-sm">
                <div className="bg-blue-100/70 backdrop-blur-sm p-2 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-800 font-medium">
                  Track certifications and compliance
                </span>
              </div>
              <div className="flex items-center bg-white/50 backdrop-blur-sm p-4 rounded-xl hover:bg-white/70 transition-colors duration-300 border border-white/60 shadow-sm">
                <div className="bg-blue-100/70 backdrop-blur-sm p-2 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-gray-800 font-medium">
                  Generate reports with a single click
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              {/* Modern image presentation */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform rotate-2 opacity-10"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl transform -rotate-2 opacity-5"></div>
              <img
                src="https://uploadthingy.s3.us-west-1.amazonaws.com/eaG5VkwqH6m7pV4oc4BoCa/4151017.jpg"
                alt="HR professionals managing employee training records"
                className="w-full h-auto rounded-2xl shadow-xl relative z-10 transform transition-transform duration-500 hover:scale-105"
              />
              {/* Decorative elements for ultra-modern look */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-600 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
