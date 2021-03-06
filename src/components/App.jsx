// var App = () => (
//   console.log(props.id.videoId)
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//         <VideoPlayer video={exampleVideoData[0]}/>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em> view goes here</h5></div>
//         <VideoList videos={exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: exampleVideoData[0]
    };
  }
  
  updateVideoPlayer(event) {
    for ( var i = 0; i < exampleVideoData.length; i++) {
      if (event.target.innerHTML === exampleVideoData[i].snippet.title) {
        this.setState({value: exampleVideoData[i]}); 
      }
    } 
  }
  render() {
    return <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          {/* <div><h5><em>search</em> view goes here</h5></div> */}
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
          <VideoPlayer video={this.state.value}/>
        </div>
        <div className="col-md-5">
          {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
          <VideoList videos={exampleVideoData} updateVideoPlayer={this.updateVideoPlayer.bind(this)}/>
        </div>
      </div>
    </div>;
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
