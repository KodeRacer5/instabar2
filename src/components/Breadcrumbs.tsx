import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getRouteTitle } from '../lib/routes';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const getBreadcrumbs = () => {
    const breadcrumbs = [];
    let currentPath = '';
    
    breadcrumbs.push({
      path: '/',
      label: 'Home'
    });

    for (const segment of pathSegments) {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        path: currentPath,
        label: getRouteTitle(currentPath)
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav aria-label="Breadcrumb" className="bg-background-dark py-4">
      <div className="container-default">
        <ol className="flex flex-wrap items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight size={16} className="text-text-muted mx-2" />
              )}
              <Link
                to={crumb.path}
                className={`text-text-muted hover:text-primary transition-colors flex items-center ${
                  index === 0 ? 'flex items-center' : ''
                }`}
              >
                {index === 0 && <Home size={16} className="mr-1" />}
                {crumb.label}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;