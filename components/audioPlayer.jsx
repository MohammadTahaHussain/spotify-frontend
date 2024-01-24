import React, { useState } from 'react';
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";


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
    <div className='mt-2'>
      <audio ref={audioRef} src={audioUrl} />
      <button onClick={handlePlayPause} className='bg-black rounded-full'>
        {isPlaying ? <FaPauseCircle className='text-[20px]' /> : <FaPlayCircle className='text-[20px]' />}
      </button>
    </div>
  );
};

export default AudioPlayer;
