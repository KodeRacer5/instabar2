import React from 'react';
import { Folder, FileText, ExternalLink } from 'lucide-react';

const SiteMap = () => {
  const siteStructure = [
    {
      title: 'Products',
      links: [
        { name: 'Standard System', url: '/products/standard-system' },
        { name: 'Digital Bundle', url: '/products/digital-bundle' },
        { name: 'Professional Kit', url: '/products/professional-kit' }
      ]
    },
    {
      title: 'Technology',
      links: [
        { name: 'Core Technology', url: '/technology/core' },
        { name: 'Digital Integration', url: '/technology/digital' },
        { name: 'Specifications', url: '/technology/specifications' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', url: '/resources/documentation' },
        { name: 'Training', url: '/resources/training' },
        { name: 'Support', url: '/resources/support' }
      ]
    },
    {
      title: 'Case Studies',
      links: [
        { name: 'Clinical Cases', url: '/case-studies/clinical' },
        { name: 'Success Stories', url: '/case-studies/success' },
        { name: 'Research', url: '/case-studies/research' }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-default">
        <h2 className="section-title">Site Map</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {siteStructure.map((section, index) => (
            <div key={index} className="card-glass">
              <div className="flex items-center mb-4">
                <Folder className="text-primary mr-2" size={20} />
                <h3 className="text-lg font-semibold text-text-light">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="flex items-center text-text-muted hover:text-primary transition-colors"
                    >
                      <FileText size={16} className="mr-2" />
                      {link.name}
                      <ExternalLink size={12} className="ml-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteMap;