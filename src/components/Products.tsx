import React from 'react';
import { Package, Laptop, Crown, Check, ArrowRight, Shield, PenTool, Microscope } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Standard System',
      icon: <Package className="w-12 h-12 text-primary" />,
      price: '1,399',
      description: 'Perfect for clinics starting with metal verification systems',
      features: [
        '28 Surgical-Grade Steel Links',
        'Multiple Length Options',
        'Angle-Fit Design',
        'Basic Training Program',
        'Standard Support',
        'Single User License',
      ],
      popular: false
    },
    {
      name: 'Digital Bundle',
      icon: <Laptop className="w-12 h-12 text-primary" />,
      price: '1,599',
      description: 'Ideal for practices embracing digital workflows',
      features: [
        '28-Link System',
        'CAD/CAM Integration',
        'Scanner Compatibility Kit',
        'Digital Training Program',
        'Priority Support',
        'Multi-User License',
      ],
      popular: true
    },
    {
      name: 'Professional Kit',
      icon: <Crown className="w-12 h-12 text-primary" />,
      price: 'Contact Sales',
      description: 'Complete solution for high-volume practices',
      features: [
        'Dual 84-Link Systems',
        'Advanced Digital Integration',
        'Extended Training Program',
        'Priority Support',
        'Enterprise License',
        'Custom Implementation',
      ],
      popular: false
    }
  ];

  const specifications = [
    {
      icon: <PenTool className="w-6 h-6 text-primary" />,
      title: 'Material',
      value: 'Surgical-Grade Stainless Steel',
      description: 'Biocompatible and autoclavable'
    },
    {
      icon: <Microscope className="w-6 h-6 text-primary" />,
      title: 'Tolerance',
      value: '±0.01mm',
      description: 'Industry-leading precision'
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: 'Compatibility',
      value: 'Universal',
      description: 'Works with all major implant systems'
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container-default">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Insta-Bar™ Model Record System
          </h2>
          <p className="section-subtitle">
            Choose the perfect solution for your practice
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-background-dark rounded-xl overflow-hidden border border-text-muted/10 transition-all hover:scale-105 ${
                product.popular ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute top-0 right-0 bg-primary px-4 py-1 rounded-bl-lg text-sm font-medium text-text-light">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  {product.icon}
                  <div className="text-right">
                    <div className="text-sm text-text-muted">Starting at</div>
                    <div className="text-2xl font-bold text-text-light">
                      {product.price.startsWith('Contact') ? (
                        <span className="text-primary">Contact Sales</span>
                      ) : (
                        <>$<span className="text-3xl">{product.price}</span></>
                      )}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-light mb-2">{product.name}</h3>
                <p className="text-text-muted mb-6">{product.description}</p>
                
                <div className="space-y-4 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-text-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 px-4 rounded-lg flex items-center justify-center transition-colors ${
                  product.popular
                    ? 'bg-primary hover:bg-primary-dark text-text-light'
                    : 'bg-text-light/10 hover:bg-text-light/20 text-text-light'
                }`}>
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="bg-background-dark rounded-xl p-12 border border-text-muted/10">
          <h3 className="text-2xl font-bold text-text-light mb-12 text-center">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-background rounded-full mb-4">
                  {spec.icon}
                </div>
                <h4 className="text-lg font-semibold text-text-light mb-2">
                  {spec.title}
                </h4>
                <div className="text-xl font-bold text-primary mb-2">
                  {spec.value}
                </div>
                <p className="text-text-muted">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary rounded-xl p-12">
          <h3 className="text-3xl font-bold text-text-light mb-4">
            Ready to Transform Your Practice?
          </h3>
          <p className="text-xl text-text-light/80 mb-8 max-w-2xl mx-auto">
            Join thousands of successful dental practices already using Insta-Bar™ to achieve superior clinical outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-text-light text-primary px-8 py-4 rounded-lg font-semibold hover:bg-text-light/90 transition-colors">
              Request Demo
            </button>
            <button className="bg-primary-dark text-text-light px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark/90 transition-colors border border-text-light/20">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;