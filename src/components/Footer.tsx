export const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              BBR TrainLog
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BBR TrainLog. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Developed Aldri Terrado
          </p>
        </div>
      </div>
    </footer>
  )
}
