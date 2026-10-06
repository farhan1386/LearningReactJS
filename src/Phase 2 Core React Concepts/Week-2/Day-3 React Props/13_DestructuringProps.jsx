import React from 'react';

const SongCard = ({ title, artist }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>By {artist}</h3>
    </div>
  );
};

export default SongCard;