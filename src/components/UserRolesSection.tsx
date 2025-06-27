import React from 'react'
import {
  FileText,
  UserPlus,
  ClipboardCheck,
  BarChart,
  Upload,
  UserCog,
  BookOpen,
  CalendarCheck,
  CheckCircle,
  Sliders,
} from 'lucide-react'
export const UserRolesSection = () => {
  return (
    <section
      id="user-roles"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full opacity-30 -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-100 rounded-full opacity-30 translate-y-1/2 blur-xl"></div>
      <div className="absolute top-1/3 right-1/5 w-16 h-16 bg-blue-200 rounded-full opacity-20 blur-sm"></div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-indigo-200 rounded-full opacity-20 blur-sm"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Role-Based Access
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            User Roles & Permissions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BBR TrainLog provides tailored access controls to ensure users have
            exactly the right permissions for their responsibilities.
          </p>
        </div>
        {/* User Roles Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* HR Admin Card */}
          <div className="relative group">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-3xl transform rotate-1 scale-[1.02] opacity-70 transition-transform group-hover:rotate-2 group-hover:scale-[1.03]"></div>
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden relative z-10 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-5">
                  <h3 className="text-2xl font-bold text-blue-700 text-center">HR Admin</h3>
                </div>
                  <div className="mt-auto pt-4 border-t border-blue-100">
                  <span className="text-sm text-blue-600 font-medium flex items-center">
                  </span>
                </div>
                <div className="space-y-4 mb-6">
                  <RolePermission
                    icon={<UserPlus className="h-5 w-5" />}
                    title="Add/Update employee profiles"
                    color="bg-blue-600"
                  />
                  <RolePermission
                    icon={<FileText className="h-5 w-5" />}
                    title="View employee training history"
                    color="bg-blue-600"
                  />
                  <RolePermission
                    icon={<ClipboardCheck className="h-5 w-5" />}
                    title="View qualification matrix"
                    color="bg-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Training Admin Card */}
          <div className="relative group">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-teal-600/10 rounded-3xl transform rotate-0 scale-[1.02] opacity-70 transition-transform group-hover:rotate-1 group-hover:scale-[1.03]"></div>
            <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden relative z-10 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-5">
                  <h3 className="text-2xl font-bold text-teal-700">
                    Training Admin
                  </h3>
                </div>
                <div className="mt-auto pt-4 border-t border-green-100">
                  <span className="text-sm text-green-600 font-medium flex items-center">
                  </span>
                </div>
                <div className="space-y-4 mb-6">
                  <RolePermission
                    icon={<BookOpen className="h-5 w-5" />}
                    title="Create/Edit training courses"
                    color="bg-gradient-to-r from-green-600 to-teal-600"
                  />
                  <RolePermission
                    icon={<CalendarCheck className="h-5 w-5" />}
                    title="Register employees for training"
                    color="bg-gradient-to-r from-green-600 to-teal-600"
                  />
                  <RolePermission
                    icon={<CheckCircle className="h-5 w-5" />}
                    title="Update training status"
                    color="bg-gradient-to-r from-green-600 to-teal-600"
                  />
                  <RolePermission
                    icon={<Upload className="h-5 w-5" />}
                    title="Upload certificates"
                    color="bg-gradient-to-r from-green-600 to-teal-600"
                  />
                  <RolePermission
                    icon={<ClipboardCheck className="h-5 w-5" />}
                    title="View qualification matrix"
                    color="bg-gradient-to-r from-green-600 to-teal-600"
                  />
                </div>

              </div>
            </div>
          </div>
          {/* System Admin Card */}
          <div className="relative group">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/10 rounded-3xl transform -rotate-1 scale-[1.02] opacity-70 transition-transform group-hover:-rotate-2 group-hover:scale-[1.03]"></div>
            <div className="bg-white rounded-2xl shadow-xl border border-indigo-100 overflow-hidden relative z-10 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-5">
                  <h3 className="text-2xl font-bold text-indigo-700">
                    System Admin
                  </h3>
                </div>
                <div className="mt-auto pt-4 border-t border-indigo-100">
                  <span className="text-sm text-indigo-600 font-medium flex items-center">
                  </span>
                </div>
                <div className="space-y-4 mb-6">
                  <RolePermission
                    icon={<CheckCircle className="h-5 w-5" />}
                    title="All permissions from HR & Training Admin"
                    color="bg-gradient-to-r from-indigo-600 to-purple-600"
                  />
                  <RolePermission
                    icon={<UserCog className="h-5 w-5" />}
                    title="Manage user roles"
                    color="bg-gradient-to-r from-indigo-600 to-purple-600"
                  />
                  <RolePermission
                    icon={<BarChart className="h-5 w-5" />}
                    title="Access full reports"
                    color="bg-gradient-to-r from-indigo-600 to-purple-600"
                  />
                  <RolePermission
                    icon={<Sliders className="h-5 w-5" />}
                    title="Manage system settings"
                    color="bg-gradient-to-r from-indigo-600 to-purple-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface RolePermissionProps {
    icon: React.ReactNode;
    title: string;
    color: string;
}
const RolePermission = ({ icon, title, color }: RolePermissionProps) => {
  return (
    <div className="flex items-center group">
      <div
        className={`${color} text-white p-2 rounded-lg flex-shrink-0 mr-3 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-900">{title}</p>
      </div>
    </div>
  )
}
