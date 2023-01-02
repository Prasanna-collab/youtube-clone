import React from 'react'
import Filter from './Filter';
import SingleVideo from './SingleVideo';
import "./Video.css";

function Video() {
  return (
    <div className="container">
     <Filter/>
     
     <div clasName="row">
          <div>
          <SingleVideo
          thumb_img="https://i.ytimg.com/vi/N000qglmmY0/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gSAAuADigIMCAAQARgrIFMofzAP&rs=AOn4CLCFyfZufw2tTMYo8KQM5XxqE5criQ"
          profile_img="https://yt3.ggpht.com/ytc/AMLnZu_rkOQP282cWp5MJLwUAHdVgJ9QqmO8Y4xmJk92vQ=s88-c-k-c0x00ffffff-no-rj"
          title="Dua Lipa- Levitating(Official Animated Music Video)"
          channel_name="Dualipa"
          views="16M"
          timestamps="1 year ago"
          video_duration="3:30"/>
          </div>
         
     </div>
     </div>
  )
}

export default Video