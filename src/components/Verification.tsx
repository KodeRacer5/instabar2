import React from 'react';
import { Scale, Clock, CheckCircle, BarChart3, ArrowRight } from 'lucide-react';

const Verification = () => {
  const comparisons = [
    {
      traditional: {
        title: 'Material Shrinkage',
        value: '0.2–0.5%',
        description: 'Significant dimensional changes'
      },
      modern: {
        title: 'Zero Shrinkage',
        value: '±0.01mm',
        description: 'Precise dimensional stability'
      }
    },
    {
      traditional: {
        title: 'Angled Implants',
        value: 'Limited',
        description: 'Complex adjustments needed'
      },
      modern: {
        title: 'Anti-Angle Design',
        value: '0-45°',
        description: 'Universal compatibility'
      }
    },
    {
      traditional: {
        title: 'Workflow Time',
        value: '45+ min',
        description: 'Multiple adjustments required'
      },
      modern: {
        title: 'Rapid Workflow',
        value: '15 min',
        description: 'Streamlined process'
      }
    }
  ];

  const results = [
    {
      icon: <Scale className="w-8 h-8 text-primary" />,
      value: '98%',
      label: 'Accuracy in studies'
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      value: '40%',
      label: 'Reduction in remakes'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      value: '100%',
      label: 'Implant compatibility'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      value: '15min',
      label: 'Average workflow time'
    }
  ];

  return (
    <section className="py-20 bg-background-dark">
      <div className="container-default">
        <div className="text-center mb-16">
          <h2 className="section-title">
            From Acrylic Jigs to Metal-Link Precision
          </h2>
          <p className="section-subtitle">
            Experience the evolution of implant verification technology
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {comparisons.map((comparison, index) => (
            <div key={index} className="bg-background rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 h-full">
                <div className="p-6 border-r border-text-muted/10">
                  <div className="text-text-muted mb-2 text-sm">Traditional</div>
                  <div className="text-2xl font-bold text-text-light mb-2">
                    {comparison.traditional.value}
                  </div>
                  <div className="text-lg font-semibold text-text-light mb-1">
                    {comparison.traditional.title}
                  </div>
                  <div className="text-sm text-text-muted">
                    {comparison.traditional.description}
                  </div>
                </div>
                <div className="p-6 bg-background-dark">
                  <div className="text-primary mb-2 text-sm">Insta-Bar™</div>
                  <div className="text-2xl font-bold text-primary mb-2">
                    {comparison.modern.value}
                  </div>
                  <div className="text-lg font-semibold text-text-light mb-1">
                    {comparison.modern.title}
                  </div>
                  <div className="text-sm text-text-muted">
                    {comparison.modern.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Grid */}
        <div className="bg-background rounded-xl p-12 border border-text-muted/10">
          <h3 className="text-2xl font-bold text-text-light mb-12 text-center">
            Proven Results
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-background-dark rounded-full mb-4">
                  {result.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {result.value}
                </div>
                <div className="text-text-muted">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="btn-primary group inline-flex items-center">
            Request Verification Demo
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Verification;