'use client';

import Image from "next/image";
import { useState } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  linkedinUrl: string;
  imageSrc: string;
  initials: string;
  gradientClass: string;
}

export function TeamCard({ name, role, bio, linkedinUrl, imageSrc, initials, gradientClass }: TeamCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
      <div className={`w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white/20 ${gradientClass} flex items-center justify-center`}>
        {!imageError ? (
          <Image 
            src={imageSrc} 
            alt={name} 
            width={128} 
            height={128}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-white text-3xl font-bold">{initials}</div>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-white/70 mb-3">{role}</p>
      <p className="text-sm text-white/80 mb-4 leading-relaxed">{bio}</p>
      <a 
        href={linkedinUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition text-sm"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        LinkedIn
      </a>
    </div>
  );
}
