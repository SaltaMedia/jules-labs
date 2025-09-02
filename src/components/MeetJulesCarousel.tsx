'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  id: string;
  image: string;
  alt: string;
  caption: string;
}

const slides: Slide[] = [
  {
    id: 'chat',
    image: '/Chat.jpeg',
    alt: 'Jules chat answering what to bring for a 3-day trip to San Francisco',
    caption: 'Direct, honest advice in seconds.'
  },
  {
    id: 'fit-check',
    image: '/Fit Check.jpeg',
    alt: 'Fit check result with outfit photo and Jules\'s written analysis',
    caption: 'Upload a fit. Jules tells you what works and what to tweak.'
  },
  {
    id: 'closet',
    image: '/Closet.jpeg',
    alt: 'My Closet screen with clothing cards and tags',
    caption: 'Log your clothes. Jules learns your style.'
  },
  {
    id: 'outfit-suggestions',
    image: '/Outfit Suggestion.jpeg',
    alt: 'Fits screen showing closet item and Jules\'s pairing suggestion',
    caption: 'Outfit ideas built from what you already own.'
  },
  {
    id: 'shopping',
    image: '/Shopping.jpeg',
    alt: 'Chat showing sneaker recommendations with product images',
    caption: 'Curated picks that actually match your look.'
  },
  {
    id: 'wishlist',
    image: '/Wish List.jpeg',
    alt: 'Wishlist grid with products from multiple brands',
    caption: 'Save items, compare options, buy when ready.'
  },
  {
    id: 'community',
    image: '/Community.jpeg',
    alt: 'Community coming soon screen',
    caption: 'Share fits, get feedback, build confidence together.'
  }
];

export function MeetJulesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = slideRefs.current[index];
    
    if (track && slide) {
      const scrollLeft = slide.offsetLeft - track.offsetLeft;
      track.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, []);

  const handlePrevious = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(slides.length - 1, currentIndex + 1);
    scrollToSlide(newIndex);
  };

  const handleDotClick = (index: number) => {
    scrollToSlide(index);
  };

  const handleTrackScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const track = trackRef.current;
      if (!track) return;

      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      slideRefs.current.forEach((slide, index) => {
        if (slide) {
          const slideRect = slide.getBoundingClientRect();
          const slideCenter = slideRect.left + slideRect.width / 2;
          const distance = Math.abs(trackCenter - slideCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setCurrentIndex(closestIndex);
    }, 50);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', handleTrackScroll);
      return () => track.removeEventListener('scroll', handleTrackScroll);
    }
  }, [handleTrackScroll]);

  return (
    <section 
      className="bg-transparent w-full" 
      aria-labelledby="meet-jules"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 id="meet-jules" className="text-3xl md:text-4xl font-semibold mb-4">
            Jules in Action
          </h2>
        </div>

        {/* Carousel Track */}
        <div className="relative">
          {/* Arrow Navigation - Desktop Only */}
          <button
            onClick={handlePrevious}
            aria-label="Previous slide"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 rounded-full bg-zinc-800/80 ring-1 ring-white/10 p-2 text-zinc-100 hover:bg-zinc-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 rounded-full bg-zinc-800/80 ring-1 ring-white/10 p-2 text-zinc-100 hover:bg-zinc-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slides Track */}
          <div
            ref={trackRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-6 px-6"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Jules features carousel"
          >
            <div className="flex gap-6 w-max">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  ref={(el) => (slideRefs.current[index] = el)}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Slide ${index + 1} of ${slides.length}: ${slide.caption}`}
                  className="w-[320px] sm:w-[420px] lg:w-[520px] flex-shrink-0 snap-center"
                >
                                   <div className="rounded-2xl border border-zinc-200/20 bg-zinc-900/40 backdrop-blur shadow-lg dark:border-zinc-700/30 p-4">
                   <h3 className="text-lg font-semibold text-zinc-100 text-center mb-3">
                     {slide.id === 'chat' && 'Chat'}
                     {slide.id === 'fit-check' && 'Fit Check'}
                     {slide.id === 'closet' && 'Closet'}
                     {slide.id === 'outfit-suggestions' && 'Outfit Suggestion'}
                     {slide.id === 'shopping' && 'Shopping'}
                     {slide.id === 'wishlist' && 'Wishlist'}
                     {slide.id === 'community' && 'Community'}
                   </h3>
                   <div className="relative aspect-[9/16] rounded-xl ring-1 ring-white/10 overflow-hidden">
                     <Image
                       src={slide.image}
                       alt={slide.alt}
                       fill
                       className="object-cover rounded-xl"
                       loading={index === 0 ? 'eager' : 'lazy'}
                       sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 520px"
                     />
                   </div>
                   <p className="mt-3 text-zinc-300 text-sm sm:text-base text-center">
                     {slide.caption}
                   </p>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentIndex}
              aria-controls="carousel-track"
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full mx-1 transition-colors ${
                index === currentIndex 
                  ? 'bg-fuchsia-500' 
                  : 'bg-zinc-600/50 hover:bg-zinc-600/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a
            href="https://app.juleslabs.com"
            className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-medium transition bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg"
          >
            Join the Beta Today
          </a>
        </div>
      </div>
    </section>
  );
}
