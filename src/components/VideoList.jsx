var VideoList = (props) => (
  
  <div className="video-list">{props.videos.map(video => 
    <VideoListEntry video={video} updateVideoPlayer={props.updateVideoPlayer}/>)}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


// <div className="video-list">
// <div><h5><em><VideoListEntry data={exampleVideoData[0]} /></em>exampleVideoData</h5></div>
// <div><h5><em><VideoListEntry data={exampleVideoData[1]} /></em>exampleVideoData</h5></div>
// <div><h5><em><VideoListEntry data={window.exampleVideoData[2]} /></em>exampleVideoData</h5></div>
// <div><h5><em><VideoListEntry data={window.exampleVideoData[3]} /></em>exampleVideoData</h5></div>
// <div><h5><em><VideoListEntry data={window.exampleVideoData[4]} /></em>exampleVideoData</h5></div>
// </div> */}