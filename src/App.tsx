import React from 'react';
import Sidebar from './components/Layout/Sidebar';
import ChatWidget from './components/Chat/ChatWidget';
import AnnouncementCard from './components/Dashboard/AnnouncementCard';
import { ThemeProvider } from './contexts/ThemeContext';

const announcements = [
  {
    title: 'Campus Closure Notice',
    date: 'March 15, 2024',
    description: 'Campus will be closed on March 20th for maintenance. All classes will be conducted online.',
    type: 'urgent',
  },
  {
    title: 'Spring Festival',
    date: 'March 25, 2024',
    description: 'Join us for the annual Spring Festival celebration in the main quadrangle.',
    type: 'event',
  },
  {
    title: 'New Library Hours',
    date: 'March 10, 2024',
    description: 'The library will now be open 24/7 during final exam weeks.',
    type: 'info',
  },
];

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Sidebar />
        <main className="ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Welcome back! Here's what's happening at the university.
              </p>
            </header>

            <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {announcements.map((announcement, index) => (
                <AnnouncementCard key={index} {...announcement} />
              ))}
            </section>
          </div>
        </main>
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
}

export default App;