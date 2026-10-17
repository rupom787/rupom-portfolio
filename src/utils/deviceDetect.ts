export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768;
};

export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  // Check for low-end indicators
  const isMobileDevice = isMobile();
  const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  const hasSlowConnection = (navigator as any).connection && 
    ((navigator as any).connection.effectiveType === 'slow-2g' || 
     (navigator as any).connection.effectiveType === '2g' ||
     (navigator as any).connection.effectiveType === '3g');
  
  return isMobileDevice || hasLowMemory || hasSlowConnection || false;
};

export const getDevicePixelRatio = (): number => {
  if (typeof window === 'undefined') return 1;
  const dpr = window.devicePixelRatio || 1;
  return isMobile() ? Math.min(dpr, 1.5) : Math.min(dpr, 2);
};
