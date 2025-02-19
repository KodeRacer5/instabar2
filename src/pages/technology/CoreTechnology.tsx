import React from 'react';
import { Shield, Microscope, Zap, PenTool as Tool, Check } from 'lucide-react';

const CoreTechnology = () => {
  const materialScience = [
    'Surgical-Grade Stainless Steel',
    'Zero Thermal Expansion',
    'Anti-Corrosion Treatment',
    'Precision Manufacturing',
    'Biocompatible Composition',
    'Advanced Surface Treatment'
  ];

  const engineeringFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: '±0.01mm Tolerance',
      description: 'Industry-leading precision for perfect fit'
    },
    {
      icon: <Tool className="w-6 h-6 text-primary" />,
      title: '45° Angle Accommodation',
      description: 'Flexible positioning for complex cases'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Dual-Lock Mechanism',
      description: 'Secure connection without rotation'
    },
    {
      icon: <Microscope className="w-6 h-6 text-primary" />,
      title: 'Precision Connections',
      description: 'Perfect mating surfaces every time'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container-default py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            Core Technology
          </h1>
          <p className="text-xl text-text-muted mb-12">
            Revolutionary metal-link verification system utilizing aerospace-grade engineering for unprecedented accuracy in dental implant verification.
          </p>

          <div className="bg-background-dark rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-text-light mb-8">
              Material Science
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {materialScience.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <span className="text-text-light">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-light mb-8">
              Engineering Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engineeringFeatures.map((feature, index) => (
                <div key={index} className="card-glass">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-text-light mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Experience Precision Engineering
            </h2>
            <p className="text-white/90 mb-6">
              Discover how our advanced technology can transform your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-white text-primary border-white hover:bg-white/90">
                Technical Specifications
              </button>
              <button className="btn-secondary text-white">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTechnology;