import React from "react";
import "./SingleVideo.css";

function SingleVideo({
  thumb_img,
  profile_img,
  channel_name,
  views,
  title,
  timestamps,
  video_duration,
}) {
  return (
    <div className="col-lg-4 col-xl-2 relative">
         
        <img
          src={thumb_img}
          alt=""
          className="thumb-img pointer"
          style={{ "width": "300px"}}
        />
        <span className="videos_duration absolute">{video_duration}</span>
        <div className="description_option d-flex-column align-items-center justify-content-center">
          <div className="profile_img d-flex align-items-center justify-content-space-between" style={{ "gap": "10px"}}>
            <img src={profile_img} alt="" className="channel_image pointer" />
          <div className="title d-flex-column align-items-center justify-content-center">
          <span>{title}</span>
          </div></div>
          <div><span className="channelname">{channel_name}</span>
          </div>
            <div className="time_description d-flex  align-items-center"  style={{ "gap": "10px"}}>
              <span className="views">{views} views</span>
              <span className="timestamps"> <b>.</b>{timestamps}</span>
            </div>
          </div>
          
      </div>
    
  );
}

export default SingleVideo;
