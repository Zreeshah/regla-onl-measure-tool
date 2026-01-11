import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface DismissibleAdProps {
  className?: string;
}

const DismissibleAd: React.FC<DismissibleAdProps> = ({ className = '' }) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const adContainerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (isDismissed || scriptLoaded.current || !adContainerRef.current) return;

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
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = '';
      }
      scriptLoaded.current = false;
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div className={`relative w-full bg-gray-100 border-b border-gray-200 ${className}`}>
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute top-2 right-2 z-10 p-1 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors"
        aria-label="Cerrar anuncio"
      >
        <X size={18} className="text-gray-600" />
      </button>
      <div 
        ref={adContainerRef}
        className="w-full overflow-hidden py-2 px-4"
        style={{ minHeight: '90px' }}
      />
    </div>
  );
};

export default DismissibleAd;
