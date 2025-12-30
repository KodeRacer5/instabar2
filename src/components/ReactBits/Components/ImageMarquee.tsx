'use client';

import Image from 'next/image';

interface ImageMarqueeProps {
  images: {
    src: string;
    alt: string;
  }[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export default function ImageMarquee({
  images,
  speed = 30,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: ImageMarqueeProps) {
  // Duplicate 4x for seamless loop across wide screens
  const duplicatedImages = [...images, ...images, ...images, ...images];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Outer glowing container - matching video frame style */}
      <div className="group relative">
        {/* Animated glow border */}
        <div
          className="absolute -inset-[2px] rounded-2xl opacity-75 blur-sm"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
            backgroundSize: '300% 100%',
            animation: 'gradient-shift 4s ease infinite',
          }}
        />

        {/* Outer glow pulse */}
        <div
          className="absolute -inset-[6px] rounded-2xl opacity-40 blur-xl"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #22d3ee, #8b5cf6, #3b82f6)',
            backgroundSize: '300% 100%',
            animation: 'gradient-shift 4s ease infinite, glow-pulse 2s ease-in-out infinite',
          }}
        />

        {/* Inner container */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-4">
          {/* Marquee content with edge fade */}
          <div
            className="overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            }}
          >
            <div
              className={`flex gap-6 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
              style={{
                animation: `marquee-${direction} ${speed}s linear infinite`,
                width: 'max-content',
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div key={index} className="group/card relative flex-shrink-0 cursor-pointer">
                  {/* Animated rotating border frame around each image */}
                  <div className="absolute inset-[-2px] overflow-hidden rounded-xl">
                    <div
                      className="animate-spin-slow absolute inset-[-50%]"
                      style={{
                        background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #22d3ee, #3b82f6)',
                      }}
                    />
                  </div>

                  {/* Inner background to create border effect */}
                  <div className="absolute inset-[2px] z-[1] rounded-lg bg-gray-900" />

                  {/* Image container */}
                  <div className="relative z-[2] h-[200px] w-[300px] overflow-hidden rounded-xl bg-gray-900 transition-all duration-300 group-hover/card:z-10 group-hover/card:scale-110 md:h-[280px] md:w-[400px]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                      sizes="(max-width: 768px) 300px, 400px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes glow-pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
