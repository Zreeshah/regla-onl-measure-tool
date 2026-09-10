import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

const AD_CLIENT = 'ca-pub-6218065184548996';
const AD_SLOT = '9227052048';

interface AdUnitProps {
  /** Extra classes for the outer wrapper. */
  className?: string;
  /** Reserved height (px) so the page does not shift while the ad loads. */
  minHeight?: number;
  /** Small "advertisement" label shown above the unit. */
  label?: string;
}

/**
 * Responsive AdSense display unit.
 *
 * UX notes:
 *  - Space is reserved up front (minHeight) so nothing jumps around (no CLS).
 *  - The ad request is only fired when the slot gets close to the viewport,
 *    which keeps the initial page load fast and improves viewability.
 *  - If AdSense returns no ad, the whole block collapses instead of leaving
 *    a large empty hole in the middle of the content.
 */
const AdUnit: React.FC<AdUnitProps> = ({
  className = '',
  minHeight = 280,
  label = 'Publicidad',
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const insRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);
  const [inView, setInView] = useState(false);
  const [status, setStatus] = useState<'pending' | 'filled' | 'unfilled'>('pending');
  const { pathname } = useLocation();

  // Reset per route so a fresh <ins> is requested on client-side navigation.
  useEffect(() => {
    pushedRef.current = false;
    setInView(false);
    setStatus('pending');
  }, [pathname]);

  // Only request the ad once the slot is near the viewport.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!inView || pushedRef.current) return;

    const ins = insRef.current;
    if (!ins) return;

    // Never push into a slot that already holds an ad, and never push into a
    // zero-width slot (both throw AdSense TagErrors).
    if (ins.getAttribute('data-adsbygoogle-status')) return;
    if (!ins.offsetWidth) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushedRef.current = true;
    } catch {
      // A failed ad request should never break the page.
    }
  }, [inView]);

  // Watch the fill result: collapse when there is nothing to serve, and release
  // the reserved height once a real ad is in place so no blank gap is left over.
  useEffect(() => {
    const ins = insRef.current;
    if (!ins || typeof MutationObserver === 'undefined') return;

    const check = () => {
      const value = ins.getAttribute('data-ad-status');
      if (!value) return;
      // AdSense reports "filled" on success and several no-ad variants
      // ("unfilled", "unfill-optimized", ...). Anything that is not a real ad
      // collapses so the reader never meets an empty box.
      setStatus(value === 'filled' ? 'filled' : 'unfilled');
    };

    check();
    const observer = new MutationObserver(check);
    observer.observe(ins, { attributes: true, attributeFilter: ['data-ad-status'] });
    return () => observer.disconnect();
  }, [inView]);

  if (status === 'unfilled') return null;

  return (
    <div
      ref={wrapperRef}
      className={`my-6 w-full overflow-hidden text-center ${className}`}
      aria-hidden="true"
    >
      <span className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">
        {label}
      </span>
      <ins
        ref={insRef}
        key={pathname}
        className="adsbygoogle block w-full"
        style={{
          display: 'block',
          // Space is held only until the ad is actually on screen.
          minHeight: status === 'filled' ? undefined : `${minHeight}px`,
        }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdUnit;
