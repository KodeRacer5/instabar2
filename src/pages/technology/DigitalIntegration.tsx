import React from 'react';
import { Scan, Database, Cloud, Laptop, ArrowRight } from 'lucide-react';

const DigitalIntegration = () => {
  const scannerCompatibility = [
    {
      icon: <Scan className="w-6 h-6 text-primary" />,
      title: 'Intraoral Scanners',
      features: [
        'All Major Intraoral Scanners',
        'CBCT Integration',
        'Digital Impression Systems',
        'Photogrammetry Support'
      ]
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary" />,
      title: 'Cloud Processing',
      features: [
        'Real-time Verification',
        'Cloud-based Processing',
        'Secure Data Storage',
        'Instant Results'
      ]
    }
  ];

  const softwareIntegration = [
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: 'CAD/CAM Systems',
      features: [
        'Direct Export Capability',
        'Treatment Planning',
        'Case Management',
        'Digital Design'
      ]
    },
    {
      icon: <Laptop className="w-6 h-6 text-primary" />,
      title: 'Analysis Tools',
      features: [
        'Progress Tracking',
        'Result Analysis',
        'Automated Reporting',
        'Quality Control'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container-default py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            Digital Integration
          </h1>
          <p className="text-xl text-text-muted mb-12">
            Seamless integration with modern digital dentistry workflows and systems.
          </p>

          <div className="bg-background-dark rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-text-light mb-8">
              Scanner Compatibility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {scannerCompatibility.map((section, index) => (
                <div key={index} className="card-glass">
                  <div className="mb-4">{section.icon}</div>
                  <h3 className="text-lg font-semibold text-text-light mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-light mb-8">
              Software Integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softwareIntegration.map((section, index) => (
                <div key={index} className="card-glass">
                  <div className="mb-4">{section.icon}</div>
                  <h3 className="text-lg font-semibold text-text-light mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Go Digital?
            </h2>
            <p className="text-white/90 mb-6">
              Transform your workflow with our advanced digital integration solutions.
            </p>
            <button className="btn-secondary bg-white text-primary border-white hover:bg-white/90">
              Schedule Demo <ArrowRight className="ml-2 inline-block" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalIntegration;