import React from 'react';
import { FileText, Shield, Zap, PenTool as Tool, Download } from 'lucide-react';

const Specifications = () => {
  const technicalDetails = [
    { label: 'Material', value: '316L Stainless Steel' },
    { label: 'Tolerance', value: '±0.01mm' },
    { label: 'Link Lengths', value: '12mm, 15mm, 18mm' },
    { label: 'Maximum Angle', value: '70°' },
    { label: 'Surface Finish', value: 'Mirror-polished' }
  ];

  const performanceMetrics = [
    { label: 'Accuracy', value: '98%' },
    { label: 'Verification Time', value: '15 minutes' },
    { label: 'Sterilization Cycles', value: '1,000' },
    { label: 'Temperature Resistance', value: '-20°C to 180°C' },
    { label: 'Tensile Strength', value: '500 MPa' },
    { label: 'Corrosion Resistance', value: 'Grade 7' }
  ];

  const resources = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: 'Technical Documentation',
      description: 'Complete specifications and guidelines'
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: 'Clinical Guidelines',
      description: 'Best practices and protocols'
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Case Studies',
      description: 'Real-world applications'
    },
    {
      icon: <Tool className="w-6 h-6 text-primary" />,
      title: 'Maintenance Guide',
      description: 'Care and handling instructions'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container-default py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            Technical Specifications
          </h1>
          <p className="text-xl text-text-muted mb-12">
            Comprehensive technical details and performance metrics for the Insta-Bar™ system.
          </p>

          <div className="bg-background-dark rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-text-light mb-8">
              Technical Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalDetails.map((detail, index) => (
                <div key={index} className="card-glass">
                  <h3 className="text-sm text-text-muted mb-1">{detail.label}</h3>
                  <p className="text-lg font-semibold text-text-light">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-text-light mb-8">
              Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="card-glass">
                  <h3 className="text-sm text-text-muted mb-1">{metric.label}</h3>
                  <p className="text-lg font-semibold text-text-light">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background-dark rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-text-light mb-8">
              Technical Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="card-glass group cursor-pointer">
                  <div className="flex items-start">
                    <div className="mr-4">{resource.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-text-light mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-text-muted mb-4">{resource.description}</p>
                      <button className="text-primary group-hover:text-primary-dark flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need More Information?
            </h2>
            <p className="text-white/90 mb-6">
              Download our comprehensive technical documentation package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary bg-white text-primary border-white hover:bg-white/90">
                Download Full Specs
              </button>
              <button className="btn-secondary text-white">
                Contact Technical Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;