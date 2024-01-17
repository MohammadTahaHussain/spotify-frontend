import React, { useState } from 'react';

const AudioPlayer = ({ audioUrl }) => {
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = React.createRef();

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={audioUrl} />
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;
