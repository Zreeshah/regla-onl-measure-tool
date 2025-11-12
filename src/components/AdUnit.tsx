import { useEffect, useRef } from 'react';

interface AdUnitProps {
  className?: string;
}

const AdUnit = ({ className = '' }: AdUnitProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current) return;

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl28035536.effectivegatecpm.com/2f1345da77d78f7ab133037ccdddc3ea/invoke.js';
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
      scriptLoadedRef.current = true;
    }

    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <div className={`my-8 flex justify-center ${className}`} ref={containerRef}>
      <div id="container-2f1345da77d78f7ab133037ccdddc3ea"></div>
    </div>
  );
};

export default AdUnit;
