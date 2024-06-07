import React, { useEffect, useRef, useState } from 'react';
import LoadScript from './LoadScript';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (isScriptLoaded && mapRef.current) {
      new google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
  }, [isScriptLoaded]);

  return (
    <div>
      {!isScriptLoaded && (
        <LoadScript
          url={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBXD3NTCBLQXHqV3yW58aNJx6-aC1eVnGM&`} onLoad={() => setIsScriptLoaded(true)} />
      )}
      <div ref={mapRef} style={{ height: '500px', width: '100%' }} />
    </div>
  );
};

export default MapComponent;
