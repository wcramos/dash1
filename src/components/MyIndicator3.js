import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { StatsCard } from "tabler-react";

class MyIndicator3 extends Component {
  render() {
    return (
      <StatsCard layout={2} movement={this.props.indicator.variation} total={this.props.indicator.current} label="Total Sales" />
    );
  }
}

export default MyIndicator3;
