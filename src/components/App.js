import video from "../data/video.js";
import React from "react";
import Description from "./Description.js";
import Buttons from "./Buttons.js";
import VideoiFrame from "./VideoiFrame.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoiFrame video={video} />
      <Description video={video}/>
      <Buttons video={video}/>
    </div>
  );
}

export default App;
