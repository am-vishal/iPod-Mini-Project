import { Component } from "react";
import $ from "jquery";
import "lodash";
import ZingTouch from "zingtouch";
import Buttons from "./Buttons";
import Screen from "./Screen";

class App extends Component {
  constructor() {
    super();
    // Initialize the angle class property to 0
    this.angle = 0;
    // Initialize the selected class property to 0
    this.selected = 0;
    this.state = {
      options: ["Games", "Music", "Settings", "CoverFlow"], // options that are displayed on the screen
      change_in_angle: 0, // change in angle 
      selected: 0, // index of the currently selected option
      showPage: -1, // index of the page to show 
      general_menu: ["Games", "Music", "Settings", "Cover Flow"], // options in the main menu
      songs_sub_menu: ["All Songs", "Artists", "Albums"], // options in the music sub-menu
      current_music_selection: 0, // index of the currently selected music track 
      currently_on_play_music_screen: false, // whether the component is currently on the play music screen
    };
  }
  componentDidMount() {
    const zt = new ZingTouch.Region($(".buttons-container")[0]);
    // Bind the rotate event to the ZingTouch.Region
    zt.bind($(".buttons-container")[0], "rotate", (event) => {
      if ($(".screen-menu")[0].classList.contains("width-50")) {
        // Get the distance of the current rotate event from the last one
        let dist = event.detail.distanceFromLast;
        // Add the distance to the angle class property
        this.angle += dist;
        if (this.angle > 60) {
          this.selected++;
          this.selected = this.selected % this.state.options.length;
          this.setState({
            selected: this.selected,
          });

          this.angle = 0;
        } else if (this.angle < -60) {
          this.selected--;
          if (this.selected === -1)
            this.selected = this.state.options.length - 1;
          this.selected = this.selected % this.state.options.length;
          this.setState({
            selected: this.selected,
          });
          this.angle = 0;
        }
      }
    }
    );
  }

  // handler for onClick of menu button
  menuButtonClicked = () => {
    let screenMenuClassList =
      $(".screen-menu")[0].classList;
    if (screenMenuClassList.contains("width-50")) {
      $(".screen-menu").removeClass("width-50"); //hide menu
    } else {
      $(".screen-menu").addClass("width-50"); //show menu
    }
  };

  // handler for onClick of select button
  selectButtonClicked = () => {
    if (this.state.selected === 1 && this.state.options.length === 4) {
      this.setState({
        options: this.state.songs_sub_menu,
        selected: 0,
        showPage: -1,
      });
      this.selected = 0;
      return;
    }

    this.setState({
      showPage: this.state.selected,
      selected: 0,
    });
    this.selected = 0;
    this.menuButtonClicked();
  };

  // handler for onClick of right button
  rightButtonClicked = () => {
    this.setState({
      options: this.state.general_menu,
      selected: 0,
    });
  };

  // handler for onClick of left button
  leftButtonClicked = () => {
    this.setState({
      options: this.state.general_menu,
      selected: 0,
    });
  };

  // handler for onClick of rotate button
  rotatePod = () => {
    /* screen rotation feature */
    $(".App").toggleClass("rotate-anti-clockwise");
    $(".buttons-container").toggleClass("rotate-clockwise");
    $(".screen-container").toggleClass("rotate-clockwise");
  };

  render() {
    return (
      <div className="App">
        <Screen
          selectedOption={this.state.selected}
          showPage={this.state.showPage}
          optionsInMenu={this.state.options}
          currentMusicSelection={this.state.current_music_selection}
          currentlyOnPlayMusicScreen={this.currentlyOnPlayMusicScreen}
          playPauseButtonClicked={this.playPauseButtonClicked}
        />
        <Buttons
          check={this.checker}
          centerButton={this.centerButton}
          menuButtonClicked={this.menuButtonClicked}
          selectButtonClicked={this.selectButtonClicked}
          leftButtonClicked={this.leftButtonClicked}
          rightButtonClicked={this.rightButtonClicked}
          playPauseButtonClicked={this.playPauseButtonClicked}
        />
        <button className="rotate" onClick={this.rotatePod}>
          <i className="fas fa-undo"></i>
        </button>
      </div>
    );
  }
}

export default App;
