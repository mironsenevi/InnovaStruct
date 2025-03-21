// filepath: c:\Users\Omindu Abeywardane\Documents\SDGP\InnovaStruct\frontend\vite-project2\src\components\AdSystem\AdList.js
import React, { useContext } from 'react';
import { AdContext } from './AdContext';

const AdList = () => {
  const { ads, deleteAd } = useContext(AdContext);

  return (
    <div>
      <h2>Ad List</h2>
      {ads.map((ad) => (
        <div key={ad.id}>
          <img src={ad.image} alt={ad.altText} style={{ width: '100px', height: 'auto' }} />
          <p>{ad.altText}</p>
          <button onClick={() => deleteAd(ad.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdList;