import React from 'react';
import { Cog, Cpu, Database, Clock, Scan, Laptop, Cuboid as Cube } from 'lucide-react';
import ImageContainer from './ImageContainer';

const Technology = () => {
  const coreTechnology = [
    {
      icon: <Cog size={32} className="text-primary" />,
      title: 'Surgical-Grade Steel',
      features: ['Biocompatible construction', 'Unmatched durability']
    },
    {
      icon: <Cpu size={32} className="text-primary" />,
      title: 'Precision Engineering',
      features: ['Zero flex design', 'Aerospace tolerances']
    },
    {
      icon: <Database size={32} className="text-primary" />,
      title: 'Digital Integration',
      features: ['CAD/CAM compatible', 'Intraoral scanner support']
    },
    {
      icon: <Clock size={32} className="text-primary" />,
      title: 'Enhanced Efficiency',
      features: ['Streamlined workflow', 'Reduced chair time']
    }
  ];

  const digitalFeatures = [
    {
      icon: <Scan size={32} className="text-primary" />,
      title: 'Scanning Technology',
      features: [
        'Compatible with all intraoral scanners',
        'Digital impression capability',
        'Real-time verification'
      ]
    },
    {
      icon: <Laptop size={32} className="text-primary" />,
      title: 'CAD/CAM Integration',
      features: [
        'Direct export to design software',
        'Automated prosthetic planning',
        'Precision milling compatibility'
      ]
    },
    {
      icon: <Cube size={32} className="text-primary" />,
      title: 'Treatment Planning',
      features: [
        'CBCT integration',
        'Surgical guide compatibility',
        '3D visualization'
      ]
    }
  ];

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container-default">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Revolutionary Implant Verification Technology
          </h2>
          <p className="section-subtitle">
            Setting new standards in implant dentistry
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-20">
          <ImageContainer
            src="/dental-implant-system.jpg"
            alt="Insta-Bar™ Dental Implant System"
            className="w-full h-[500px] rounded-xl shadow-2xl"
            priority={true}
          />
        </div>

        {/* Core Technology */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {coreTechnology.map((tech, index) => (
            <div
              key={index}
              className="card-glass hover:scale-105"
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-text-light">{tech.title}</h3>
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-text-muted flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Digital Integration */}
        <div className="bg-background-dark rounded-2xl p-12 border border-text-muted/10">
          <h3 className="text-2xl font-bold text-text-light mb-12 text-center">Digital Integration Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalFeatures.map((feature, index) => (
              <div key={index} className="card-glass">
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-4 text-text-light">{feature.title}</h4>
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-text-muted flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;