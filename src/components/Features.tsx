import React from 'react';
import { Shield, Target, Zap, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield size={32} className="text-primary" />,
      title: 'Zero Dimensional Change',
      description: 'Prefabricated stainless steel links eliminate flex and shrinkage with ±0.01mm tolerance.',
      stats: [
        { label: 'Tolerance', value: '±0.01mm' },
        { label: 'Material Stability', value: '100%' }
      ]
    },
    {
      icon: <Target size={32} className="text-primary" />,
      title: 'Anti-Angle Design',
      description: 'Pre-engineered connectors accommodate implants up to 45° with universal compatibility.',
      stats: [
        { label: 'Angle Range', value: '45°' },
        { label: 'Compatibility', value: '100%' }
      ]
    },
    {
      icon: <Zap size={32} className="text-primary" />,
      title: 'Dual Stabilization',
      description: 'Combined mechanical and material bonding ensures superior stability and reliability.',
      stats: [
        { label: 'Accuracy', value: '98%' },
        { label: 'Stability', value: '100%' }
      ]
    },
    {
      icon: <Award size={32} className="text-primary" />,
      title: 'Universal Compatibility',
      description: 'Works seamlessly with All-on-4®, All-on-6®, and zygomatic cases for industry-standard integration.',
      stats: [
        { label: 'System Support', value: '100%' },
        { label: 'Integration', value: 'Full' }
      ]
    }
  ];

  const advantages = [
    { label: 'Accuracy', value: '98%', description: 'Position verification' },
    { label: 'Workflow', value: '50%', description: 'Faster completion' },
    { label: 'Remakes', value: '40%', description: 'Fewer prosthetics' },
    { label: 'Fit', value: '100%', description: 'Passive fit guaranteed' }
  ];

  return (
    <section id="features" className="py-20 bg-background-dark">
      <div className="container-default">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Advanced Metal-Link Verification Technology
          </h2>
          <p className="section-subtitle">
            Revolutionary precision for superior clinical outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-glass hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-text-light">{feature.title}</h3>
              <p className="text-text-muted mb-6">{feature.description}</p>
              <div className="space-y-2">
                {feature.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="flex justify-between">
                    <span className="text-text-muted">{stat.label}</span>
                    <span className="text-primary font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-12 border border-text-muted/10">
          <h3 className="text-2xl font-bold text-text-light mb-12 text-center">
            Clinical Advantages
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{advantage.value}</div>
                <div className="text-lg font-semibold text-text-light mb-1">{advantage.label}</div>
                <div className="text-sm text-text-muted">{advantage.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;