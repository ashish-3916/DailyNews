import React, { Component } from "react";

export default class NewsItems extends Component {

  render() {
    let {title, description, imgUrl} =  this.props;
    return (
      <div className ="my-3" >
        <div className="card" style={{width: "18rem"}}>
          <img src= {imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}...</h5>
            <p className="card-text">{description.slice(0,75)}...</p>
            <a href="/" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    )
  }
}
