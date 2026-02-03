import React, { useEffect, useRef } from 'react';

interface AdBannerProps {
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ className = '' }) => {
  const adRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current || !adRef.current) return;
    
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://pl28035536.effectivegatecpm.com/2f1345da77d78f7ab133037ccdddc3ea/invoke.js"]'
    );
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://pl28035536.effectivegatecpm.com/2f1345da77d78f7ab133037ccdddc3ea/invoke.js';
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      document.head.appendChild(script);
    }
    
    scriptLoaded.current = true;
  }, []);

  return (
    <div className={`w-full flex justify-center my-4 ${className}`}>
      <div 
        ref={adRef}
        id="container-2f1345da77d78f7ab133037ccdddc3ea"
        className="w-full max-w-4xl"
      />
    </div>
  );
};

export default AdBanner;
