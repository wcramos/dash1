import React, { Component } from 'react';
import "tabler-react/dist/Tabler.css";
import config from './firebase-config'

import { Site } from "tabler-react";
import { Grid } from "tabler-react";

import MyCard from './components/MyCard';
import MyIndicator1 from './components/MyIndicator1';
import MyIndicator2 from './components/MyIndicator2';
import MyIndicator3 from './components/MyIndicator3';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dash1: {
        bi01: {
          current: 100,
          previous: 75,
          variation: 25.0
        },
        bi02: {
          current: 200,
          previous: 400,
          variation: -100.0
        },
        bi03: {
          current: 200,
          previous: 400,
          variation: -100.0
        }
      }
    }
    config.syncState('dash1', {
      context: this,
      state: 'dash1',
      asArray: false
    })
  }

  render() {
    return (
       <div>
         <Site>
            <Site.displayName>DashBoard Example Number 1</Site.displayName>
            <Site.Header>Teste
            </Site.Header>
            <Grid.Row>
                <Grid.Col><MyIndicator1 indicator={this.state.dash1.bi01} /></Grid.Col>
                <Grid.Col><MyIndicator2 indicator={this.state.dash1.bi02} /></Grid.Col>
                <Grid.Col><MyIndicator3 indicator={this.state.dash1.bi03}/></Grid.Col>
            </Grid.Row>  
            <Grid.Row>
            </Grid.Row>  
            <Site.Footer>
            </Site.Footer>
         </Site>
       </div>
    );
  }
}

export default App;


