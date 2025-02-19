import React from 'react';
import { Crown, Users, Shield, Headphones, ArrowRight, Check, BarChart } from 'lucide-react';

const ProfessionalKit = () => {
  const features = [
    {
      icon: <Crown className="w-6 h-6 text-primary" />,
      title: 'Dual 84-Link Systems',
      description: 'Complete verification solution for multiple cases'
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: 'Advanced Digital Integration',
      description: 'Comprehensive digital workflow support'
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: 'Extended Training Program',
      description: 'In-depth training for your entire team'
    },
    {
      icon: <Headphones className="w-6 h-6 text-primary" />,
      title: 'Priority Support Access',
      description: '24/7 dedicated technical assistance'
    }
  ];

  const professionalBenefits = [
    'Multiple case handling',
    'Advanced case support',
    'Priority technical assistance',
    'Custom implementation',
    'Dedicated account manager',
    'Quarterly reviews'
  ];

  const enterpriseSolutions = [
    'Multi-user access',
    'Practice integration',
    'Staff training',
    'Custom workflows',
    'Analytics dashboard',
    'ROI tracking'
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container-default py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            Professional Kit
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Comprehensive professional solution for high-volume practices and laboratories, featuring dual systems and advanced support.
          </p>
          
          <div className="bg-background-dark rounded-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <p className="text-sm text-text-muted mb-2">Enterprise Pricing</p>
                <p className="text-2xl font-bold text-primary">Contact Sales for Pricing</p>
              </div>
              <button className="btn-primary mt-4 md:mt-0">
                Request Quote <ArrowRight className="ml-2 inline-block" size={20} />
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
                Professional Benefits
              </h2>
              <ul className="space-y-4">
                {professionalBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-text-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-text-light mb-6">
                Enterprise Solutions
              </h2>
              <ul className="space-y-4">
                {enterpriseSolutions.map((solution, index) => (
                  <li key={index} className="flex items-start">
                    <BarChart className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-text-light">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Enterprise-Grade Solution
            </h2>
            <p className="text-white/90 mb-6">
              Scale your practice with our most comprehensive verification system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-white text-primary border-white hover:bg-white/90">
                Schedule Consultation
              </button>
              <button className="btn-secondary text-white">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalKit;