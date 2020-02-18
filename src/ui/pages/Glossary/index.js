import React from 'react';
import CustomInput from '../../components/CustomtInput';

const words = [
  {
    labelFr: "saut court",
    labelEn: "short hop",
    defFr: "saut court",
    defEn: "short hop",
  },
];

export const Glossary = () => {
  return (
    <div>
      <h1 className="u-mt-0 u-mb-3">Lexique</h1>
      <CustomInput fullWidth variant="outlined" label="Rechercher un mot" />
      {words.map((word, index) => (
        <p key={index}>{console.log(word)}</p>
      ))}
    </div>
  );
};
