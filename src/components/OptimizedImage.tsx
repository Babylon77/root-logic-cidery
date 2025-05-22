import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

// Helper function to handle base path for images
export function getImagePath(src: string): string {
  // If running on GitHub Pages, ensure all paths include the correct prefix
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname === 'babylon77.github.io';
  const gitHubBasePath = '/root-logic-cidery';
  
  // If image already starts with http, don't modify it
  if (src.startsWith('http')) {
    return src;
  }
  
  // Handle GitHub Pages paths
  if (isGitHubPages) {
    // If path already has the GitHub Pages prefix, don't modify it
    if (src.startsWith(gitHubBasePath)) {
      return src;
    }
    
    // Add the GitHub Pages prefix
    return `${gitHubBasePath}${src.startsWith('/') ? '' : '/'}${src}`;
  }
  
  // For other environments, use Next.js public base path
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // If src already starts with the base path, don't duplicate it
  if (basePath && src.startsWith(basePath)) {
    return src;
  }
  
  // Handle paths properly
  if (src.startsWith('/')) {
    return `${basePath}${src}`;
  } else {
    return `${basePath}/${src}`;
  }
}

// Extended Image component that handles paths automatically
export default function OptimizedImage(props: Omit<ImageProps, 'src'> & { src: string }) {
  const { src, ...rest } = props;
  const [imageSrc, setImageSrc] = useState(src);
  
  useEffect(() => {
    // Update the src with the correct base path when component mounts or src changes
    setImageSrc(getImagePath(src));
  }, [src]);

  return <Image src={imageSrc} {...rest} />;
} 