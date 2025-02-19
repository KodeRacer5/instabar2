import React from 'react';
import ImageContainer from './ImageContainer';

interface CaseStudyProps {
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
  reverse?: boolean;
}

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  description,
  metrics,
  image,
  reverse = false,
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-16`}>
      <div className="lg:w-1/2 h-[400px]">
        <ImageContainer
          src={image}
          alt={title}
          className="w-full h-full"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4 text-text-light">{title}</h3>
        <p className="text-text-muted mb-6">{description}</p>
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-background-dark p-4 rounded-lg border border-text-muted/10">
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-sm text-text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;