import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import styles from './App.css';

injectTapEventPlugin();

class App extends Component {

  render() {
    return (<div>Hello</div>);
  }
}

render(<App />, document.getElementById('app'));
