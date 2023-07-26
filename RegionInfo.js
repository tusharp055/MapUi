import React from 'react';
import { useSelector } from 'react-redux';

const RegionInfo = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);

  return (
    <div className="region-info">
      {selectedRegion && (
        <>
          <h2>{selectedRegion}</h2>
          {/* Display other region information like currency, speed units, etc. */}
        </>
      )}
    </div>
  );
};

export default RegionInfo;
