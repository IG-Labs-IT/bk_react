
import { useState } from 'react';

interface VideoPlayerProps {
  thumbnailUrl: string;
  title?: string;
}

const VideoPlayer = ({ thumbnailUrl, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full aspect-video rounded-md overflow-hidden bg-black">
      {!isPlaying ? (
        <div className="relative w-full h-full">
          <img 
            src={thumbnailUrl} 
            alt={title || "Video thumbnail"} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={handlePlay}
              className="w-16 h-16 md:w-20 md:h-20 bg-gold/90 hover:bg-gold rounded-full flex items-center justify-center transition-all transform hover:scale-105"
              aria-label="Play video"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 md:w-10 md:h-10 text-background ml-1"
              >
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </button>
          </div>
          {title && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-lg md:text-xl font-medium text-white">{title}</h3>
            </div>
          )}
        </div>
      ) : (
        <iframe 
          src="https://www.youtube.com/watch?v=u31qwQUeGuM&ab_channel=JoomlaTemplate" 
          title={title || "Video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      )}
    </div>
  );
};

export default VideoPlayer;
