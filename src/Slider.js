import React, { Component } from "react";
import Slider from "react-rangeslider";
import "./Slider.css";

class VolumeSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      volume: 0,
      months: 6
    };
  }

  handleOnChange = value => {
    this.setState(state => ({ ...state,volume: value }));
    this.props.onValueChange(this.state.volume);
  };
  handleMonths = value => {
    this.setState(state => ({...state, months: value }));
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
            value={volume}
            orientation="horizontal"
            onChange={this.handleOnChange}
            min={500}
            max={5000}
            step={50}
          />
        </div>
        <div>
          <h2 className="slider-heading">
            Months: <span>{this.state.months}</span>
          </h2>

          <Slider
            className="slider"
            value={months}
            orientation="horizontal"
            onChange={this.handleMonths}
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
