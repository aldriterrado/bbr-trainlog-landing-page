import { Users, CheckSquare, Bell, FileText, Upload } from 'lucide-react'
export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 -translate-x-1/2 blur-xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-30 translate-x-1/3 blur-xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-20 blur-sm"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Key Modules & Features
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BBR TrainLog provides a comprehensive suite of tools designed to
            streamline your training management process.
          </p>
        </div>
        {/* First row - 3 features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            {
              icon: <Users className="h-6 w-6 text-white" />,
              title: 'Employee Training Records',
              description:
                'Maintain complete digital records of all employee training activities, certifications, and progress in one centralized location.',
              color: 'from-blue-600 to-indigo-600',
              textColor: 'text-blue-700',
            },
            {
              icon: <CheckSquare className="h-6 w-6 text-white" />,
              title: 'Qualification Matrix',
              description:
                'Visualize training requirements and completion status across teams with customizable qualification matrices.',
              color: 'from-green-600 to-teal-600',
              textColor: 'text-green-700',
            },
            {
              icon: <Bell className="h-6 w-6 text-white" />,
              title: 'Training Expiry Alerts',
              description:
                'Receive proactive notifications before certifications expire to ensure continuous compliance.',
              color: 'from-amber-500 to-orange-600',
              textColor: 'text-amber-700',
            },
          ].map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`bg-gradient-to-r ${feature.color} text-white p-3 rounded-lg mr-4 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${feature.textColor}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Second row - 2 features centered */}
        <div className="grid grid-cols-1 md:flex justify-center gap-8">
          {[
            {
              icon: <FileText className="h-6 w-6 text-white" />,
              title: 'Reports & Dashboards',
              description:
                'Generate comprehensive reports and visualize training data with exportable dashboards (Excel/PDF).',
              color: 'from-indigo-600 to-purple-600',
              textColor: 'text-indigo-700',
            },
            {
              icon: <Upload className="h-6 w-6 text-white" />,
              title: 'File Upload Support',
              description:
                'Attach and store training certificates, study bonds, and other documentation directly in the system.',
              color: 'from-blue-600 to-blue-800',
              textColor: 'text-blue-700',
            },
          ].map((feature, index) => (
            <div key={index} className="group w-full md:w-1/3">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`bg-gradient-to-r ${feature.color} text-white p-3 rounded-lg mr-4 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className={`text-xl font-bold ${feature.textColor}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
