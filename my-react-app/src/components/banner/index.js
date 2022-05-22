import React, { Component } from "react";
import "./styles.css";

class Banner extends Component {
  render() {
    const { className, children, style } = this.props;
    console.log(style);
    return (
      <>
        <div className={`container banner ${className}`} style={style}>
          {children}
        </div>
      </>
    );
  }
}

export default Banner;
