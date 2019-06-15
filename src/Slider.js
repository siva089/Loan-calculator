import React, { Component } from "react";
// import Slider from "react-rangeslider";
import "./Slider.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";


class VolumeSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      volume: null,
      months: null
    };
  }

  handleOnChange = value => {
    this.setState(state => ({ volume: value }));
    this.props.onValueChange(this.state.volume);
  };
  handleMonths = value => {
    this.setState(state => ({ months: value }));
    this.props.onMonthChange(this.state.months);
  };
  

  render() {
    let { volume, months } = this.state;
    return (
      <div className="slide">
        <div>
          <h2 className="slider-heading">
            Loan Amount : <span>$ {this.state.volume}</span>{" "}
          </h2>

          <Slider
            className="slider"
     
          
            onChange={a => this.handleOnChange(a)}
            onAfterChange={a => this.handleOnChange(a)}
            min={500}
            max={5000}
            step={100}
          />
        </div>
        <div>
          <h2 className="slider-heading">
            Months: <span>{this.state.months}</span>
          </h2>

          <Slider
            className="slider"
 
            onChange={a => this.handleMonths(a)}
            onAfterChange={a => this.handleMonths(a)}
            min={6}
            max={24}
            step={1}
          />
        </div>
      </div>
    );
  }
}

export default VolumeSlider;
