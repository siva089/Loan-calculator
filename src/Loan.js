import React, { Component, Fragment } from "react";
import axios from "axios";
import VolumeSlider from "./Slider";
import "./Loan.css";

export default class Loan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loan: "",
      months: 0,
      intrest: 0,
      loaded: false,

      monthlyPayment: 0
    };
  }

  slider = a => {
    this.setState({ loan: a },()=>this.getData());
  };
  onMonth = a => {
    this.setState({  months: a },()=>this.getData());
  };
  getData = (prevProps, prevState) => {
    let loan = Number(this.state.loan);
    let months = Number(this.state.months);
    console.log("running");
    const url = `https://ftl-frontend-test.herokuapp.com/interest?amount=${loan}&numMonths=${months}`;

    axios.get(url).then(res => {
      this.setState(state => ({
        ...state,
        intrest: res.data.interestRate,

        monthlyPayment:
          res.data.status !== "error" && res.data.monthlyPayment.amount
      }));
    });
  };
  render() {
    return (
      <div className="margin-divider">
        <div className="divide-sliders">
          <VolumeSlider
            onMonthChange={this.onMonth}
            onValueChange={this.slider}
          />
        </div>
        <div className="divide-chart">
          {/* <h1>
            IntrestRate:{this.state.intrest} Number of Payments:
            {this.state.monthlyPayment}
          </h1> */}
          <h2 className="loan-heading">
            IntrestRate :<span>{this.state.intrest}</span>
          </h2>
          <h2 className="loan-heading">
            Monthly Payment: <span>$ {this.state.monthlyPayment}</span>
          </h2>
        </div>
      </div>
    );
  }
}
