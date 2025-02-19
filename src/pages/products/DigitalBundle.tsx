import React from 'react';
import { Laptop, Database, Cloud, Users, ArrowRight, Check, Scan } from 'lucide-react';

const DigitalBundle = () => {
  const features = [
    {
      icon: <Laptop className="w-6 h-6 text-primary" />,
      title: 'Complete 28-Link System',
      description: 'Full metal-link verification system'
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: 'CAD/CAM Integration',
      description: 'Seamless digital workflow integration'
    },
    {
      icon: <Scan className="w-6 h-6 text-primary" />,
      title: 'Scanner Compatibility',
      description: 'Works with all major scanners'
    },
    {
      icon: <Cloud className="w-6 h-6 text-primary" />,
      title: 'Cloud Storage Access',
      description: 'Secure cloud-based case storage'
    }
  ];

  const digitalCapabilities = [
    'Direct Scanner Integration',
    'Real-time Verification',
    'Digital Design Export',
    'Cloud-based Case Management',
    'Automated Analysis',
    'Progress Tracking'
  ];

  const components = [
    'Complete 28-Link System',
    'Digital Integration Suite',
    'Scanner Compatibility Kit',
    'Online Training Access',
    'Technical Support',
    'Regular Updates'
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container-default py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            Digital Bundle
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Complete digital workflow solution combining our proven metal-link system with advanced digital integration capabilities.
          </p>
          
          <div className="bg-background-dark rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <p className="text-sm text-text-muted mb-2">Starting from</p>
                <p className="text-4xl font-bold text-primary">$1,599</p>
              </div>
              <button className="btn-primary mt-4 md:mt-0">
                Order Now <ArrowRight className="ml-2 inline-block" size={20} />
              </button>
            </div>
            
            <hr className="border-text-muted/10 my-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-text-light mb-6">
                Digital Capabilities
              </h2>
              <ul className="space-y-4">
                {digitalCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-text-light">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-text-light mb-6">
                Included Components
              </h2>
              <ul className="space-y-4">
                {components.map((component, index) => (
                  <li key={index} className="flex items-start">
                    <Users className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-text-light">{component}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Upgrade to Digital Workflow
            </h2>
            <p className="text-white/90 mb-6">
              Experience the future of implant verification with our digital integration package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-white text-primary border-white hover:bg-white/90">
                Watch Demo
              </button>
              <button className="btn-secondary text-white">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalBundle;