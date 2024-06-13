// components/NoisyBlob.tsx
import React from 'react';

const NoisyBlob = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-radial from-red-600 to-black opacity-50 blur-3xl"></div>
      <div className="absolute inset-0 bg-noise-pattern opacity-20"></div>
    </div>
  );
};

export default NoisyBlob;