
import React from 'react';
import AppGrid from './components/AppGrid';
import { APPS } from './constants';

const App: React.FC = () => {
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
          <AppGrid apps={APPS} />
        </div>
      </main>
    </div>
  );
};

export default App;
