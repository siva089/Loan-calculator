import React, { Component, Fragment } from "react";
import axios from "axios";
import VolumeSlider from "./Slider";
import "./Loan.css";

export default class Loan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loan: "",
      months: "6",
      intrest: 0,
      noOfMonths: 0,

      principalAmount: "",
      monthlyPayment: ""
    };
  }

  slider = a => {
    this.setState(()=>(
    { loan: a }));
    this.onFormSubmit();
  };
  onMonth = a => {
    this.setState(()=>({ months: a }));
    this.onFormSubmit();
  };
  onFormSubmit =  () => {
    let loan = Number(this.state.loan);
    let months = Number(this.state.months);

    const url = `https://ftl-frontend-test.herokuapp.com/interest?amount=${loan}&numMonths=${months}`;
   
      axios.get(url).then(res=>{
       
        this.setState(state => ({
          intrest: res.data.interestRate,
          noOfMonths: res.data.numPayments,
          monthlyPayment: (res.data.status!=="error"&& res.data.monthlyPayment.amount)
        }))
      }).catch(e=>{
        console.log(e)
      })

     
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
