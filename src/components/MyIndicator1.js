import React, { Component } from "react";

import "tabler-react/dist/Tabler.css";

import { StatsCard } from "tabler-react";

class MyIndicator1 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StatsCard layout={2} movement={this.props.indicator.variation} total={this.props.indicator.current} label="Users" />
    );
  }
}

export default MyIndicator1;
