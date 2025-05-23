import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/router';

type OptimizedImageProps = Omit<ImageProps, 'src'> & { 
  src: string 
};

export default function OptimizedImage(props: OptimizedImageProps) {
  const { src, alt = "Image", ...rest } = props;
  const router = useRouter();
  
  // Get the base path from Next.js configuration
  const basePath = router.basePath || '';
  
  // For images in the public directory, we need to add the basePath manually
  const imageSrc = src.startsWith('/') && !src.startsWith(basePath) && basePath 
    ? `${basePath}${src}` 
    : src;
  
  return (
    <Image
      src={imageSrc}
      alt={alt}
      {...rest}
    />
  );
} 