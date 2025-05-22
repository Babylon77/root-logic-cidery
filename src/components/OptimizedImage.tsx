import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

// Helper function to handle base path for images
export function getImagePath(src: string): string {
  // If running in a browser environment, check for GitHub Pages
  const isClient = typeof window !== 'undefined';
  const isGitHubPages = isClient && window.location.hostname === 'babylon77.github.io';
  const gitHubBasePath = '/root-logic-cidery';
  
  // Skip processing for external URLs
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src;
  }
  
  // Handle GitHub Pages paths explicitly
  if (isGitHubPages) {
    // Skip if already contains the base path
    if (src.includes(gitHubBasePath)) {
      return src;
    }
    
    // Ensure proper path construction
    return `${gitHubBasePath}${src.startsWith('/') ? src : `/${src}`}`;
  }
  
  // For local dev and Netlify, use NextJS base path
  const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Skip if already prefixed
  if (envBasePath && src.startsWith(envBasePath)) {
    return src;
  }
  
  // Standard path construction
  return src.startsWith('/') ? `${envBasePath}${src}` : `${envBasePath}/${src}`;
}

// Extended Image component that handles paths automatically
export default function OptimizedImage(props: Omit<ImageProps, 'src'> & { src: string }) {
  const { src, alt, ...rest } = props;
  const [imageSrc, setImageSrc] = useState<string>(src);
  
  useEffect(() => {
    // Apply path correction when component mounts or src changes
    const fixedPath = getImagePath(src);
    setImageSrc(fixedPath);
    
    // Log path correction for debugging
    if (typeof window !== 'undefined' && window.location.hostname === 'babylon77.github.io') {
      console.log(`OptimizedImage path correction: ${src} → ${fixedPath}`);
    }
  }, [src]);
  
  return (
    <Image 
      src={imageSrc} 
      alt={alt || 'Image'} 
      onError={(e) => {
        // Attempt to fix broken images on GitHub Pages
        if (typeof window !== 'undefined' && 
            window.location.hostname === 'babylon77.github.io' && 
            imageSrc && !imageSrc.includes('/root-logic-cidery')) {
          console.log(`Image load error, trying direct path fix: ${imageSrc}`);
          const fixedSrc = `/root-logic-cidery${imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`}`;
          (e.target as HTMLImageElement).src = fixedSrc;
        }
      }}
      {...rest} 
    />
  );
} 