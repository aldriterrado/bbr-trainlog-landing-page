import React from 'react'
import {
  LogIn,
  LayoutDashboard,
  Users,
  ClipboardCheck,
  CheckSquare,
  Bell,
  FileBarChart,
  ArrowRight,
  ChevronDown,
} from 'lucide-react'

export const WorkflowSection = () => {
  const workflowSteps = [
    {
      icon: <LogIn className="h-5 w-5" />,
      title: 'Login',
      description: 'Secure access with role-based permissions',
      step: 1,
    },
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      title: 'Dashboard',
      description: 'At-a-glance view of training metrics and status',
      step: 2,
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Employee Management',
      description: 'Manage employee information',
      step: 3,
    },
    {
      icon: <ClipboardCheck className="h-5 w-5" />,
      title: 'Training Application & Registration',
      description: 'Process training requests and registrations',
      step: 4,
    },
    {
      icon: <CheckSquare className="h-5 w-5" />,
      title: 'Qualification Matrix',
      description: 'Displays list of employees vs trainings',
      step: 5,
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: 'Notifications',
      description: 'Automated alerts for renewals and updates',
      step: 6,
    },
    {
      icon: <FileBarChart className="h-5 w-5" />,
      title: 'Reports',
      description: 'Generate comprehensive training reports',
      step: 7,
    },
  ]
  return (
    <section
      id="workflow"
      className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 translate-x-1/2"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            How it works
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            System Workflow
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BBR TrainLog provides a streamlined, intuitive workflow for managing your employee training programs.
          </p>
        </div>
        {/* Desktop workflow - horizontal timeline */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Horizontal connecting line */}
            <div className="absolute left-0 right-0 top-16 h-1 bg-blue-200"></div>
            <div className="flex justify-between">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center w-full"
                >
                  {/* Step number circle */}
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold z-10 mb-2">
                    {step.step}
                  </div>
                  {/* Arrow between steps (except for last step) */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-[16px] left-[calc(50%+20px)] right-0 flex items-center justify-center">
                      <ArrowRight className="h-5 w-5 text-blue-400" />
                    </div>
                  )}
                  {/* Icon */}
                  <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full flex items-center justify-center mb-3">
                    {step.icon}
                  </div>
                  {/* Content */}
                  <div className="text-center max-w-[140px]">
                    <h3 className="font-semibold text-gray-900 text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tablet workflow - card grid */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6">
            {workflowSteps.map((step, index) => (
              <TabletWorkflowStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                step={step.step}
              />
            ))}
          </div>
        </div>
        {/* Mobile workflow - vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-8 border-l-2 border-blue-200 ml-4">
            {workflowSteps.map((step, index) => (
              <MobileWorkflowStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                step={step.step}
                isLast={index === workflowSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Add prop types for TabletWorkflowStep
interface TabletWorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}
const TabletWorkflowStep = ({ icon, title, description, step }: TabletWorkflowStepProps) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group">
      <div className="flex items-start">
        <div className="mr-4 flex-shrink-0">
          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mb-2">
            {step}
          </div>
          <div className="bg-blue-100 text-blue-600 p-2 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Add prop types for MobileWorkflowStep
interface MobileWorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  isLast: boolean;
}
const MobileWorkflowStep = ({ icon, title, description, step, isLast }: MobileWorkflowStepProps) => {
  return (
    <div className="mb-8 relative">
      {/* Circle on timeline */}
      <div className="absolute -left-[25px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
      <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 hover:border-blue-300">
        <div className="flex items-center mb-2">
          <div className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold mr-3">
            {step}
          </div>
          <div className="bg-blue-100 text-blue-600 p-1.5 rounded-full flex items-center justify-center mr-3">
            {icon}
          </div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm pl-[70px]">{description}</p>
      </div>
      {!isLast && (
        <div className="absolute -left-[22.5px] top-5 h-[calc(100%+16px)] flex flex-col items-center">
          <ChevronDown className="h-4 w-4 text-blue-400 absolute bottom-0" />
        </div>
      )}
    </div>
  )
}
