import Image, { ImageProps } from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'src'> & { 
  src: string 
};

export default function OptimizedImage(props: OptimizedImageProps) {
  const { src, alt = "Image", ...rest } = props;
  
  // Let Next.js handle the path resolution through its basePath configuration
  return (
    <Image
      src={src}
      alt={alt}
      {...rest}
    />
  );
} 