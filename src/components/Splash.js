import React, { useEffect, useState } from 'react';
import './Loading.css';

export const Splash = () => {
  const [applyEffect, setApplyEffect] = useState(false);

  useEffect(() => {
    setApplyEffect(true);
  }, []);

  return (
    <div className={`container logo-loading ${applyEffect ? 'fade-out' : ''}`}>
      <div
        id="loading-logo-cobras"
        className="loading-image"
        style={{
          backgroundImage: `url('./assets/images/logo-cobras.png')`,
        }}
      ></div>
    </div>
  );
};
