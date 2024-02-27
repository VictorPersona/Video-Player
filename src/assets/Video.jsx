import React from 'react'

function Video({ selectedVideo }) {
  if (!selectedVideo) {
    return <div>No video selected</div>
  }
  return (
    <div>
      <h2>{selectedVideo.title}</h2>
      <p>{selectedVideo.description}</p>
      <video controls autoPlay loop>
        <source src={selectedVideo.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Video
