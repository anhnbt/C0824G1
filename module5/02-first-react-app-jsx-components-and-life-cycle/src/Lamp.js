import React, { Component } from "react";
import lamp from "./lamp.png";

class Lamp extends Component {
  componentWillUnmount() {
    console.log("Khi component lamp bị xóa khỏi DOM!");
  }

  render() {
    return (
      <div>
        <img src={lamp} width={200} alt="" />
      </div>
    );
  }
}

export default Lamp;
