
import React from 'react';
import type { AppInfo } from '../types';

interface AppCardProps {
  app: AppInfo;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-sm border border-white/10">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col items-center justify-between h-full">
        <div className="mb-4 text-purple-300 transition-colors duration-300 group-hover:text-purple-200">
            {app.icon}
        </div>
        <div className="flex-grow flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-100">{app.name}</h3>
            <p className="mt-2 text-sm text-gray-400">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
