
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CanonicalLink: React.FC = () => {
  const location = useLocation();
  // Using window.location.origin ensures we get the correct base URL in any environment
  const baseUrl = window.location.origin;
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalLink;
