import React from 'react';
import { Menu, Users, BookOpen, Calendar, Building2, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">EduAssist</h1>
      </div>

      <nav className="space-y-2">
        <NavItem icon={<Menu />} label="Dashboard" active />
        <NavItem icon={<Users />} label="Students" />
        <NavItem icon={<BookOpen />} label="Faculty" />
        <NavItem icon={<Calendar />} label="Schedule" />
        <NavItem icon={<Building2 />} label="Facilities" />
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center justify-between p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
          >
            {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </button>
          <Settings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active = false }) => (
  <button
    className={`flex items-center gap-3 w-full p-2 rounded-lg transition-colors
      ${active 
        ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400' 
        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
  >
    {React.cloneElement(icon, { className: 'w-5 h-5' })}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default Sidebar;