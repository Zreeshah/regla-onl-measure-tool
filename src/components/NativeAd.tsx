import React, { useEffect, useRef } from 'react';

interface NativeAdProps {
  className?: string;
}

const NativeAd: React.FC<NativeAdProps> = ({ className = '' }) => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current || !adContainerRef.current) return;

    // Create unique container ID for this instance
    const containerId = `ad-container-${Math.random().toString(36).substr(2, 9)}`;
    
    // Create the ad container div
    const adDiv = document.createElement('div');
    adDiv.id = 'container-2f1345da77d78f7ab133037ccdddc3ea';
    adContainerRef.current.appendChild(adDiv);

    // Load the ad script
    const script = document.createElement('script');
    script.src = 'https://pl28035536.effectivegatecpm.com/2f1345da77d78f7ab133037ccdddc3ea/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    adContainerRef.current.appendChild(script);

    scriptLoaded.current = true;

    return () => {
      // Cleanup on unmount
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = '';
      }
      scriptLoaded.current = false;
    };
  }, []);

  return (
    <div 
      ref={adContainerRef}
      className={`native-ad-container w-full overflow-hidden ${className}`}
      style={{ minHeight: '90px' }}
    />
  );
};

export default NativeAd;
