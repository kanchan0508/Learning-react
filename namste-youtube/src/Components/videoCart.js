import React from 'react';

function VideoCard({ title, thumbnail, channelTitle }) {
  return (
    <div className="video-card ml-4 shadow-lg" style={{ padding: '10px', margin: '10px' }}>
      <img src={thumbnail} alt={title} style={{ width: '150px', height: 'auto' }} />
      <h3>{title}</h3>
      <p>{channelTitle}</p>
    </div>
  );
}

export default VideoCard;
