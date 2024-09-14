import React from 'react';
//import VideoCard from './VideoCard';
import VideoCard from '../Components/VideoCard';
import { useRouter } from "next/navigation";


const VIDEOS = [
  {
    title: "CS50W project 1 wiki",
    image: "thumbnail2.png",
    thumbImage: "thumbphoto.png",
    author: "Haarshitaa",
    timestamp: "1 months ago",
    views: "232",
  },
  {
    title: "Coding Video",
    image: "photo.jpg",
    thumbImage: "thumbphoto.png",
    author: "Haarshitaa",
    timestamp: "11 months ago",
    views: "62",
  },
  {
    title: "Learn how to Code",
    image: "thumbnail1.png",
    thumbImage: "thumbphoto.png",
    author: "Haarshitaa",
    timestamp: "1 year ago",
    views: "255",
  }
];

function VideoGrid() {
  const router = useRouter();
  const HandleClick = () => {
    router.push('video');
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {VIDEOS.map((video, index) => {
        return (
          <div key={index} onClick={HandleClick}> 
            <VideoCard
              title={video.title}
              image={video.image}
              thumbImage={video.thumbImage} 
              author={video.author}
              timestamp={video.timestamp}
              views={video.views}
            />
          </div>
        );
      })}
    </div>
  );
}

export default VideoGrid;
