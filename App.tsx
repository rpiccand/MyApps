
import React, { useState, useMemo } from 'react';
import AppGrid from './components/AppGrid';
import { APPS } from './constants';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = useMemo(() => {
    if (!searchTerm) {
      return APPS;
    }
    return APPS.filter(
      (app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[150vw] h-[150vh] bg-gradient-to-br from-indigo-900/50 via-slate-900 to-gray-900"></div>
      <div className="absolute top-0 right-0 w-[100vw] h-[100vh] bg-gradient-radial from-purple-900/30 via-transparent to-transparent"></div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              My Applications
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              A central hub for all your essential tools and services.
            </p>
          </header>

          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                id="search"
                name="search"
                className="block w-full bg-white/5 border border-white/10 rounded-md py-3 pl-10 pr-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm leading-6 transition-colors duration-300"
                placeholder="Search for an app..."
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search for an application"
              />
            </div>
          </div>
          
          {filteredApps.length > 0 ? (
            <AppGrid apps={filteredApps} />
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-300">No Applications Found</h2>
              <p className="mt-2 text-gray-500">
                Your search for "{searchTerm}" did not match any applications.
              </p>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default App;
