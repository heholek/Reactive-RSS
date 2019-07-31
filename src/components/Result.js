import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <div>
        {/* {this.props.title}  */}→{" "}
        <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
          {this.props.title}
        </a>
        <p> {this.props.description}</p>
      </div>
    );
  }
}

export default Result;
