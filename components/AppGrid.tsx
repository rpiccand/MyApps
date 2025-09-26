
import React from 'react';
import type { AppInfo } from '../types';
import AppCard from './AppCard';

interface AppGridProps {
  apps: AppInfo[];
}

const AppGrid: React.FC<AppGridProps> = ({ apps }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
};

export default AppGrid;
