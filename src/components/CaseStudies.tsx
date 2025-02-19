import React from 'react';
import { TrendingUp, Clock, Users, BarChart3, ArrowRight, Building2, Award } from 'lucide-react';
import ImageContainer from './ImageContainer';

const CaseStudies = () => {
  const mainCaseStudy = {
    title: "NYC Dental Lab Slashes Remakes by 40%",
    description: "How a leading dental laboratory transformed their workflow and significantly reduced remakes using Insta-Bar™ verification system.",
    metrics: [
      { icon: <TrendingUp className="w-6 h-6 text-primary" />, label: "Remake Reduction", value: "40%" },
      { icon: <BarChart3 className="w-6 h-6 text-primary" />, label: "New Remake Rate", value: "4%" },
      { icon: <Users className="w-6 h-6 text-primary" />, label: "Staff Efficiency", value: "+35%" },
      { icon: <Clock className="w-6 h-6 text-primary" />, label: "ROI Timeline", value: "3 mo" }
    ],
    benefits: [
      "Enhanced accuracy in implant verification",
      "Significantly reduced chair time",
      "Improved lab-clinician communication",
      "Seamless digital workflow integration"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
  };

  const additionalCases = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Multi-Location Practice Success",
      description: "How a 5-location dental group standardized their implant workflow",
      metrics: [
        { label: "Workflow Time", value: "-45%" },
        { label: "Case Acceptance", value: "+28%" }
      ]
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Specialty Clinic Excellence",
      description: "Advanced implant cases with zero remakes in 6 months",
      metrics: [
        { label: "Success Rate", value: "100%" },
        { label: "Time Saved", value: "4h/case" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container-default">
        <div className="text-center mb-16">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            Real results from dental professionals using Insta-Bar™
          </p>
        </div>

        {/* Main Case Study */}
        <div className="bg-background-dark rounded-xl overflow-hidden mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-text-light mb-4">
                {mainCaseStudy.title}
              </h3>
              <p className="text-text-muted mb-8">
                {mainCaseStudy.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {mainCaseStudy.metrics.map((metric, index) => (
                  <div key={index} className="bg-background rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      {metric.icon}
                      <span className="text-3xl font-bold text-primary ml-2">
                        {metric.value}
                      </span>
                    </div>
                    <div className="text-sm text-text-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits List */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-text-light mb-4">
                  Key Benefits
                </h4>
                <ul className="space-y-3">
                  {mainCaseStudy.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Implementation Results */}
              <div className="bg-background rounded-lg p-6">
                <h4 className="text-lg font-semibold text-text-light mb-4">
                  Implementation Results
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Before Implementation:</span>
                    <span className="text-text-light">6-7% remake rate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">After Implementation:</span>
                    <span className="text-primary font-semibold">&lt;4% remake rate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Return on Investment:</span>
                    <span className="text-primary font-semibold">3 months</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <ImageContainer
                src={mainCaseStudy.image}
                alt="NYC Dental Lab Case Study"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* Additional Case Studies */}
        <div className="grid md:grid-cols-2 gap-8">
          {additionalCases.map((study, index) => (
            <div
              key={index}
              className="bg-background-dark rounded-xl p-8 border border-text-muted/10 hover:border-primary/50 transition-all group"
            >
              <div className="mb-6">
                {study.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-light mb-2">
                {study.title}
              </h3>
              <p className="text-text-muted mb-6">
                {study.description}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {study.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="bg-background rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-text-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-primary group-hover:text-primary-dark transition-colors flex items-center">
                Read Full Case Study
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;