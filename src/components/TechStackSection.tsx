import {
  AtomIcon,
  ServerIcon,
  DatabaseIcon,
  KeyIcon,
  HardDriveIcon,
  GlobeIcon,
  CodeIcon,
  ShieldIcon,
} from 'lucide-react'

export const TechStackSection = () => {
  return (
    <section
      id="tech"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-70 translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full opacity-70 -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Technology
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            System Architecture
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern technologies for performance, security, and
            scalability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Frontend & Design */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <CodeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Frontend & Design
                </h3>
              </div>
              <div className="space-y-6">
                {/* React */}
                <TechStackItem
                  icon={<AtomIcon className="h-5 w-5 text-blue-600" />}
                  techIcon={
                    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                      <path
                        fill="#61DAFB"
                        d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                      />
                      <path
                        stroke="#61DAFB"
                        strokeWidth="1"
                        d="M12 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"
                      />
                      <path
                        stroke="#61DAFB"
                        strokeWidth="1"
                        d="M12 16.5c4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5z"
                      />
                    </svg>
                  }
                  layer="Frontend Framework"
                  tech="React.js"
                  benefits="Component-based architecture for dynamic user interfaces"
                />
                {/* Tailwind CSS */}
                <TechStackItem
                  icon={<CodeIcon className="h-5 w-5 text-blue-600" />}
                  techIcon={
                    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none">
                      <path
                        fill="#38BDF8"
                        d="M12 6.15c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.685.165 1.174.645 1.716 1.176.882.882 1.904 1.904 4.134 1.904 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.686-.165-1.174-.645-1.716-1.176C15.252 7.168 14.23 6.15 12 6.15zM7.5 12c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.95-1.65 3.15-1.35.686.165 1.174.645 1.716 1.176.882.882 1.904 1.904 4.134 1.904 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.95 1.65-3.15 1.35-.686-.165-1.174-.645-1.716-1.176C10.752 13.028 9.73 12 7.5 12z"
                      />
                    </svg>
                  }
                  layer="CSS Framework"
                  tech="Tailwind CSS"
                  benefits="Utility-first CSS framework for responsive and clean designs"
                />
              </div>
            </div>
          </div>
          {/* Backend & Server */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <ServerIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Backend Server & Database
                </h3>
              </div>
              <div className="space-y-6">
                {/* Node.js */}
                <TechStackItem
                  icon={<ServerIcon className="h-5 w-5 text-green-600" />}
                  techIcon={
                    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none">
                      <path
                        fill="#539E43"
                        d="M12 21.8a1.7 1.7 0 01-.85-.22L9.24 20.4c-.4-.22-.2-.3-.07-.35.54-.2.65-.23 1.23-.56.06-.03.14-.02.2.01l1.44.86c.07.04.18.04.25 0l5.6-3.24c.08-.04.13-.13.13-.22v-6.47c0-.1-.05-.18-.13-.23L12.25 6.96a.24.24 0 00-.25 0L6.4 10.2c-.08.05-.13.14-.13.23v6.47c0 .09.05.18.13.22l1.53.88c1.2.6 1.94-.11 1.94-.82v-6.39c0-.13.1-.23.24-.23h.71c.13 0 .24.1.24.23v6.39c0 1.62-.88 2.54-2.4 2.54-.47 0-.84 0-1.87-.5l-1.47-.84A1.7 1.7 0 012.2 16.7V10.2c0-.62.33-1.2.86-1.5L8.67 5.5a1.78 1.78 0 011.7 0l5.6 3.24c.54.3.87.89.87 1.5v6.47c0 .62-.33 1.19-.86 1.5l-5.6 3.24a1.7 1.7 0 01-.85.22l-.53-.13z"
                      />
                      <path
                        fill="#539E43"
                        d="M14.12 13.76c-2.44 0-2.95-1.12-2.95-2.06 0-.9.1-.23.23-.23h.72c.12 0 .22.08.23.2.16 1.06.62 1.6 1.77 1.6 1.1 0 1.56-.5 1.56-1.65 0-.67-.26-1.16-1.82-1.5-1.4-.28-2.3-.9-2.3-2.13 0-1.4 1.19-2.24 3.17-2.24 2.23 0 3.33.77 3.47 2.44a.24.24 0 01-.23.26h-.73a.23.23 0 01-.22-.18c-.25-1.12-.85-1.48-2.29-1.48-1.7 0-1.9.59-1.9 1.03 0 .54.23.7 1.76 1 1.58.29 2.33.7 2.33 2.6 0 1.52-1.27 2.34-3.47 2.34z"
                      />
                    </svg>
                  }
                  layer="Server Runtime"
                  tech="Node.js & Express"
                  benefits="Fast, scalable server with JavaScript throughout the stack"
                />
                {/* SQL Server */}
                <TechStackItem
                  icon={<DatabaseIcon className="h-5 w-5 text-green-600" />}
                  techIcon={
                    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="2"
                        y="3"
                        width="20"
                        height="18"
                        rx="2"
                        fill="#CC2927"
                        opacity="0.2"
                      />
                      <path
                        fill="#CC2927"
                        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"
                      />
                      <path
                        fill="#CC2927"
                        d="M6 10h12v4H6v-4zm0 6h5v2H6v-2zm7 0h5v2h-5v-2z"
                      />
                    </svg>
                  }
                  layer="Database"
                  tech="SQL Server"
                  benefits="Enterprise-grade data storage with robust security"
                />
              </div>
            </div>
          </div>
          {/* Security & Storage */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <ShieldIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Security & Storage
                </h3>
              </div>
              <div className="space-y-6">
                {/* JWT Authentication */}
                <TechStackItem
                  icon={<KeyIcon className="h-5 w-5 text-purple-600" />}
                  techIcon={<KeyIcon className="h-10 w-10 text-yellow-500" />}
                  layer="Authentication"
                  tech="JWT Authentication"
                  benefits="Secure, stateless authentication system"
                />
                {/* File Storage */}
                <TechStackItem
                  icon={<HardDriveIcon className="h-5 w-5 text-purple-600" />}
                  techIcon={
                    <HardDriveIcon className="h-10 w-10 text-gray-700" />
                  }
                  layer="File Storage"
                  tech="H Drive"
                  benefits="Secure document storage on company infrastructure"
                />
              </div>
            </div>
          </div>
          {/* Deployment - Updated with specific deployment details */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <GlobeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Deployment</h3>
              </div>
              <div className="space-y-6">
                {/* Frontend Deployment */}
                <TechStackItem
                  icon={<GlobeIcon className="h-5 w-5 text-blue-600" />}
                  techIcon={
                    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none">
                      <path
                        fill="#D22128"
                        d="M12 2L1 7v10l11 5 11-5V7L12 2z"
                        opacity="0.2"
                      />
                      <path
                        stroke="#D22128"
                        strokeWidth="1.5"
                        d="M12 2L1 7v10l11 5 11-5V7L12 2z"
                      />
                      <path
                        stroke="#D22128"
                        strokeWidth="1.5"
                        d="M1 7l11 5 11-5M12 12v10"
                      />
                      <path
                        fill="#D22128"
                        d="M17 9.5l-3.5 2L10 9.5l3.5-2 3.5 2z"
                      />
                    </svg>
                  }
                  layer="Frontend Hosting"
                  tech="Apache Server"
                  benefits="Deployed to existing portal.bbr.com.sg Apache server"
                />
                {/* Backend Deployment */}
                <TechStackItem
                  icon={<ServerIcon className="h-5 w-5 text-blue-600" />}
                  techIcon={<ServerIcon className="h-10 w-10 text-gray-700" />}
                  layer="Backend & Database"
                  tech="Spare Workstation"
                  benefits="Dedicated workstation for backend services and database"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TechStackProps {
    icon: React.ReactNode;
    techIcon: React.ReactNode;
    layer: string;
    tech: string;
    benefits: string;
}
const TechStackItem = ({ icon, techIcon, layer, tech, benefits }: TechStackProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:border-blue-200 group">
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 bg-gray-50 p-3 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
          {techIcon}
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            {icon}
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              {layer}
            </span>
          </div>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">{tech}</h3>
          <p className="text-gray-600 text-sm">{benefits}</p>
        </div>
      </div>
    </div>
  )
}
