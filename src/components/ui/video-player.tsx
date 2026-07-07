"use client";

import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

export default function VideoPlayer({ src, srcWebm }: { src: string; srcWebm: string }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="hairline overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-40px_rgba(60,50,30,0.35)] relative">
      <video
        ref={videoRef}
        poster="/audiopad-poster.webp"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        width={1280}
        height={720}
        className="w-full h-auto"
      >
        <source src={srcWebm} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        <button
          onClick={toggleMute}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>
    </div>
  );
}