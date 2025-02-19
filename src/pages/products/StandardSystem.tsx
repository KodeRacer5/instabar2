import React from 'react';
import { Shield, Target, Zap, Package, ArrowRight, Check } from 'lucide-react';

const StandardSystem = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: '28 Surgical-Grade Steel Links',
      description: 'Precision-engineered links with zero dimensional change'
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: 'Multiple Length Options',
      description: 'Available in 12mm, 15mm, and 18mm lengths'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Anti-Angle Design',
      description: 'Accommodates implants up to 45°'
    },
    {
      icon: <Package className="w-6 h-6 text-primary" />,
      title: 'Basic Training Program',
      description: 'Comprehensive training for your team'
    }
  ];

  const benefits = [
    'Eliminates material shrinkage',
    'Reduces chair time by 50%',
    'Guarantees passive fit',
    'Streamlines verification process',
    'Autoclavable up to 1,000 times',
    'One-year warranty'
  ];

  const components = [
    '28 Verification Links',
    'Sterilization Case',
    'Basic Tool Kit',
    'Quick Start Guide',
    'Training Manual',
    'Verification Protocol Guide'
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container-default py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            Standard System
          </h1>
          <p className="text-xl text-text-muted mb-8">
            The foundational verification system designed for precision in full-arch implant cases.
          </p>
          
          <div className="bg-background-dark rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <p className="text-sm text-text-muted mb-2">Starting from</p>
                <p className="text-4xl font-bold text-primary">$1,399</p>
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
              <h2 className="text-2xl font-bold text-text-light mb-6">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-text-light">{benefit}</span>
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
                    <Package className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-text-light">{component}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-white/90 mb-6">
              Join thousands of successful dental practices already using Insta-Bar™.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-white text-primary border-white hover:bg-white/90">
                Schedule Demo
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

export default StandardSystem;