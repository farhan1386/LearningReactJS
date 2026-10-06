import React from 'react';

const AudioPlayer = ({ config }) => {
  return (
    <div>
      <p>Theme mode: {config.theme}</p>
      <p>Current Volume: {config.volume}%</p>
    </div>
  );
};

export default AudioPlayer;