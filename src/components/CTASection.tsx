import {
  CalendarIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  PaletteIcon,
  RocketIcon,
} from 'lucide-react'
export const CTASection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden"
    >
      {/* Simple decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-white -translate-x-1/4 -translate-y-1/4 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 bg-white translate-x-1/4 translate-y-1/4 blur-3xl"></div>
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
            Project Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            BBR TrainLog Development Schedule
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Building a Smarter Way to Manage Training
          </p>
        </div>
        {/* Timeline container */}
        <div className="max-w-5xl mx-auto mb-20">
          {/* Timeline items */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white flex flex-col items-center text-center transition-all duration-300 hover:bg-white/15"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${item.active ? 'bg-white/20' : 'bg-white/10'}`}
                >
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-white/70 text-sm mb-3">{item.date}</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
// Timeline data
const timelineItems = [
  {
    icon: <CheckCircleIcon className="h-5 w-5 text-white" />,
    title: 'Planning',
    date: 'July 1, 2025',
    status: 'Completed',
    statusColor: 'bg-green-500/30',
    active: true,
  },
  {
    icon: <PaletteIcon className="h-5 w-5 text-white" />,
    title: 'Design Phase',
    date: 'July 8, 2025',
    status: 'In Progress',
    statusColor: 'bg-yellow-500/30',
    active: true,
  },
  {
    icon: <UsersIcon className="h-5 w-5 text-white" />,
    title: 'Development',
    date: 'July 15, 2025',
    status: 'Upcoming',
    statusColor: 'bg-blue-500/30',
    active: false,
  },
  {
    icon: <ClockIcon className="h-5 w-5 text-white" />,
    title: 'Testing',
    date: 'November 4, 2025',
    status: 'Upcoming',
    statusColor: 'bg-purple-500/30',
    active: false,
  },
  {
    icon: <RocketIcon className="h-5 w-5 text-white" />,
    title: 'Deployment',
    date: 'November 17, 2025',
    status: 'Planned',
    statusColor: 'bg-indigo-500/30',
    active: false,
  },
]
