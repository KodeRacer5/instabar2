import React from 'react';

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

const ImageContainer: React.FC<ImageContainerProps> = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  loading = 'lazy'
}) => {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-text-muted/10 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        className="w-full h-full object-cover"
        fetchpriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark/50 to-transparent" />
    </div>
  );
};

export default ImageContainer;