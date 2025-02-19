import React, { useState } from 'react';
import { FileText, Book, Microscope, HeadphonesIcon, MessageSquare, GraduationCap, Phone, Mail, Search, Filter, Download, Play, ExternalLink, FileDown, BookOpen, Video, ChevronDown } from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('documentation');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'documentation', name: 'Documentation' },
    { id: 'technical', name: 'Technical Specs' },
    { id: 'clinical', name: 'Clinical Studies' },
    { id: 'video', name: 'Video Resources' }
  ];

  const documentation = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Complete Verification Protocol',
      description: 'Step-by-step guide for implant verification procedures',
      type: 'PDF',
      size: '2.4 MB',
      category: 'documentation',
      downloadUrl: '#'
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Material Selection Guide',
      description: 'Comprehensive guide to material options and specifications',
      type: 'PDF',
      size: '1.8 MB',
      category: 'technical',
      downloadUrl: '#'
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Clinical Research Papers',
      description: 'Collection of peer-reviewed research and case studies',
      type: 'PDF',
      size: '4.2 MB',
      category: 'clinical',
      downloadUrl: '#'
    }
  ];

  const videoResources = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Installation Tutorial',
      duration: '12:45',
      category: 'video',
      views: '2.4k'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Digital Workflow Guide',
      duration: '18:30',
      category: 'video',
      views: '1.8k'
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Clinical Case Walkthrough',
      duration: '24:15',
      category: 'video',
      views: '3.2k'
    }
  ];

  const technicalSpecs = [
    {
      title: 'Material Specifications',
      content: [
        'Surgical-Grade Stainless Steel',
        'Biocompatible Construction',
        'Autoclavable Components'
      ]
    },
    {
      title: 'Precision Metrics',
      content: [
        '±0.01mm Tolerance',
        'Zero Flex Design',
        'Anti-Angle Technology'
      ]
    },
    {
      title: 'Compatibility',
      content: [
        'Universal Implant Support',
        'CAD/CAM Integration',
        'Digital Workflow Compatible'
      ]
    }
  ];

  const filteredResources = [...documentation, ...videoResources].filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="resources" className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-background-dark py-20">
        <div className="container-default">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-text-light mb-6">
            Resource Center
          </h1>
          <p className="text-xl text-text-muted text-center max-w-3xl mx-auto mb-12">
            Comprehensive resources for dental professionals using the Insta-Bar™ verification system
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 bg-background rounded-lg border border-text-muted/20 focus:border-primary focus:ring-1 focus:ring-primary text-text-light"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <select
                className="appearance-none pl-4 pr-10 py-3 bg-background rounded-lg border border-text-muted/20 focus:border-primary focus:ring-1 focus:ring-primary text-text-light"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-default py-20">
        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <div key={index} className="card-glass group">
              {resource.category === 'video' ? (
                // Video Resource Card
                <div className="relative">
                  <img
                    src={resource.thumbnail}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm text-white">
                    {resource.duration}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-text-light mb-2">{resource.title}</h3>
                    <div className="flex items-center text-text-muted text-sm">
                      <Video className="w-4 h-4 mr-1" />
                      {resource.views} views
                    </div>
                  </div>
                </div>
              ) : (
                // Document Resource Card
                <div className="p-6">
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-semibold text-text-light mb-2">{resource.title}</h3>
                  <p className="text-text-muted mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-muted">
                      {resource.type} • {resource.size}
                    </span>
                    <button className="btn-secondary py-2 px-4 flex items-center text-sm">
                      <FileDown className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-text-light mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="card-glass">
                <h3 className="text-lg font-semibold text-text-light mb-4">{spec.title}</h3>
                <ul className="space-y-2">
                  {spec.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 bg-background-dark rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-text-light mb-4">Need Support?</h2>
              <p className="text-text-muted mb-6">
                Our technical team is available 24/7 to assist you with any questions or concerns.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <span className="text-text-light">1-800-INSTA-BAR</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <span className="text-text-light">support@insta-bar.com</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <button className="btn-primary mb-4">
                Contact Support
              </button>
              <button className="btn-secondary">
                Schedule Training
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;