import React, { useRef, useState, useEffect } from 'react';
import NyomanPaul from '../../../public/assets/NyomanPaul.mp3';

const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Fungsi untuk toggle play/pause
  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Mengatur musik agar langsung diputar saat halaman dimuat
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, []);

  return (
    <div className="flex justify-center items-center py-8">
      <audio ref={audioRef} autoPlay loop controls className="w-full max-w-md">
        <source src={NyomanPaul} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button
        onClick={togglePlayback}
        className="mt-4 px-6 py-2 bg-mora-pink text-white rounded-full"
      >
        {isPlaying ? 'Pause' : 'Unpause'}
      </button>
    </div>
  );
};

export default Music;
