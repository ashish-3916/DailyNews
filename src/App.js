import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

const myMap = {
  India : "in",
  UnitedStates : "us",
  England : "gb",
  Russia : "ru",
  UAE : "ua",
  China : "ch"
};
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: 'in'
    };
  }
  // changeCountry = (cntry)=>{
  //   this.setState({
  //     country : myMap[cntry]
  //   });
  // }
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          {/* <NavBar handleSelect = {this.changeCountry}/> */}
          <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<News key="home" pageSize={6} country={this.state.country} category="general" />} />
              <Route exact path="/home" element={<News key="general" pageSize={6} country={this.state.country} category="general" />} />
              <Route exact path="/business" element={<News key="business" pageSize={6} country={this.state.country} category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country={this.state.country} category="entertainment" />} />
              <Route exact path="/health" element={<News key="health" pageSize={6} country={this.state.country} category="health" />} />
              <Route exact path="/science" element={<News key="science" pageSize={6} country={this.state.country} category="science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={6} country={this.state.country} category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={6} country={this.state.country} category="technology" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
