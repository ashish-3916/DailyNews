import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

const myMap = {
  India: "in",
  UnitedStates: "us",
  UnitedKingdom: "gb",
  Russia: "ru",
  UAE: "ae",
  China: "cn",
};
// const apiKey = "117f123c1b5b41c29a56da9a67668af1"
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "in",
    };
  }
  changeCountry = (cntry)=>{
    this.setState({
      country : myMap[cntry]
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar handleSelect={this.changeCountry}/>
          <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={9} country={this.state.country} category="general" />} />
              <Route exact path="/home" element={<News key="general" pageSize={9} country={this.state.country} category="general" />} />
              <Route exact path="/business" element={<News key="business" pageSize={9} country={this.state.country} category="business" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country={this.state.country} category="entertainment" />} />
              <Route exact path="/health" element={<News key="health" pageSize={9} country={this.state.country} category="health" />} />
              <Route exact path="/science" element={<News key="science" pageSize={9} country={this.state.country} category="science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={9} country={this.state.country} category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={9} country={this.state.country} category="technology" />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
