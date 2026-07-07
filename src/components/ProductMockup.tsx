'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function ProductMockup() {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updateSliderPosition(e.clientX);
  };

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) updateSliderPosition(e.touches[0].clientX);
  };

  return (
    <div className="relative mx-auto mt-12 sm:mt-16 max-w-5xl">
      <div className="absolute -inset-x-8 -bottom-8 -top-4 -z-10 rounded-3xl bg-surface-2/60 blur-2xl" />

      <div
        ref={containerRef}
        className="hairline overflow-hidden rounded-xl bg-surface shadow-[0_30px_80px_-40px_rgba(60,50,30,0.35)] relative select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Black) */}
        <Image
          src="/app-mockup-black.png"
          alt="AudioPad app in dark mode"
          width={1440}
          height={900}
          className="w-full h-auto"
          priority
        />

        {/* Before Image (White) - Clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-[100vw] h-full min-w-full">
            <Image
              src="/app-mockup-white.png"
              alt="AudioPad app in light mode"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Slider Control */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg z-10"
          style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-gray-200 flex items-center justify-center">
            <div className="flex items-center gap-1">
              <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
              <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
