import React from 'react';
import { Bell } from 'lucide-react';

const AnnouncementCard = ({ title, date, description, type }) => {
  const getTypeStyles = () => {
    switch (type) {
      case 'urgent':
        return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
      case 'event':
        return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${getTypeStyles()}`}>
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${getTypeStyles()}`}>
          {type}
        </span>
      </div>
      <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default AnnouncementCard;