import React from "react";
import YouTube from "react-youtube";
import "./youtube.scss";

import Congratulations from "../Modals/Congratulations";

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this._onStateChange = this._onStateChange.bind(this);
  }

  _onReady(event) {
    event.target.playVideo();
  }

  _onStateChange(event) {
    if (event.data === 0) {
      let currentPoints = localStorage.getItem("userPoints");
      let currentPointsInNumber = parseInt(currentPoints, 10);
      localStorage.setItem("userPoints", currentPointsInNumber + 50);
      this.setState({
        show: true,
      });
    }
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
        controls: 1,
        iv_load_policy: 0,
        enablejsapi: 1,
        showinfo: 0,
        // modestbranding: 1,
        rel: 0, // Hide related videos when paused
        origin: 1,
      },
    };

    return (
      <>
        <YouTube
          className="youtubeVideo"
          videoId={this.props.videoId}
          opts={opts}
          onReady={this._onReady}
          onStateChange={this._onStateChange}
        />
        {this.state.show ? <Congratulations show={true} /> : ""}
      </>
    );
  }
}

export default Youtube;
