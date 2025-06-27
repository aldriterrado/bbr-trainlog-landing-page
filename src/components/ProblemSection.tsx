import { FileSpreadsheet, AlertTriangle, BarChart4, Clock } from 'lucide-react'
export const ProblemSection = () => {
  return (
    <section id="overview" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Overview
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why You Need BBR TrainLog
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional training management methods create unnecessary challenges for HR departments. The system solves these critical problems:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problemCards.map((card, index) => (
            <ProblemCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
const problemCards = [
  {
    icon: <FileSpreadsheet className="h-7 w-7 text-white" />,
    title: 'Fragmented Excel Files',
    description:
      'Replace scattered spreadsheets with a single, accessible database of all training records.',
  },
  {
    icon: <AlertTriangle className="h-7 w-7 text-white" />,
    title: 'Compliance Risks',
    description:
      'Avoid compliance issues with automated tracking of certification expiry dates and requirements.',
  },
  {
    icon: <BarChart4 className="h-7 w-7 text-white" />,
    title: 'Reporting Challenges',
    description:
      'Generate comprehensive reports instantly instead of manually compiling data for audits.',
  },
  {
    icon: <Clock className="h-7 w-7 text-white" />,
    title: 'Time Consumption',
    description:
      'Save countless hours with automated workflows and instant access to training information.',
  },
]
const ProblemCard = ({ icon, title, description, delay }) => {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group"
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-50 transition-opacity group-hover:opacity-80"></div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform transition duration-300 group-hover:rotate-3 shadow-md">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">
        {title}
      </h3>
      <p className="text-gray-700 relative z-10">{description}</p>
      <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 transition-all duration-300 group-hover:w-full"></div>
    </div>
  )
}
