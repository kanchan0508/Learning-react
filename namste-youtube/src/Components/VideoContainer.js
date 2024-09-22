import React, { useEffect, useState } from 'react';
import { data } from '../utils/Constant';
import VideoCard from  "./videoCart"// Ensure you have this import

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(data.items);
    console.log("Videos set: ", data.items); // Log to verify if data is correct
  }, []);

  return (
    <div className='ml-5 mt-5'>
      
      <div className="video-container ml-5 flex flex-wrap" >
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.default.url}
            channelTitle={video.snippet.channelTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoContainer;
