// filepath: c:\Users\Omindu Abeywardane\Documents\SDGP\InnovaStruct\frontend\vite-project2\src\components\AdSystem\AdForm.js
import React, { useState, useContext } from 'react';
import { AdContext } from './AdContext';

const AdForm = ({ adToEdit }) => {
  const { addAd, updateAd } = useContext(AdContext);
  const [image, setImage] = useState(adToEdit ? adToEdit.image : '');
  const [link, setLink] = useState(adToEdit ? adToEdit.link : '');
  const [altText, setAltText] = useState(adToEdit ? adToEdit.altText : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAd = { image, link, altText };
    if (adToEdit) {
      updateAd({ ...adToEdit, ...newAd });
    } else {
      addAd(newAd);
    }
    // Reset form or navigate away
    setImage('');
    setLink('');
    setAltText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Link URL"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="Alt Text"
        value={altText}
        onChange={(e) => setAltText(e.target.value)}
      />
      <button type="submit">{adToEdit ? 'Update Ad' : 'Add Ad'}</button>
    </form>
  );
};

export default AdForm;