import React, { Component } from 'react';
import './App.css';

import { Switch, Route , Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Build from '@material-ui/icons/Build';


import EggPage from './EggPage';
import WelcomePage from './WelcomePage';
import SettingsPage from './SettingsPage';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      timerConfig: {
        size: 'small',
        time: {
          boiledEgg: {
            minutes: 7,
            seconds: 0
          },
          softBoiledEgg: {
            minutes: 3,
            seconds: 0
          }
        }
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    const newTimerConfig = this.state.timerConfig;
    newTimerConfig.size = e.target.value;

    this.setState({ timerConfig: newTimerConfig })
  }
  render() {
    return (
      <div className="App">
          <AppBar position="static" color="default">
            <Toolbar className="app-header">
              <Typography variant="title" color="inherit">
                <Link to="/" >Egg Timer</Link>
              </Typography>
              <Link to="/settings">
                <IconButton>
                    <Build color="inherit"/>
                </IconButton>
              </Link>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/timers" render={ () => <EggPage time={this.state.timerConfig.time} size={this.state.timerConfig.size}/> } />
            <Route path="/settings" render={ () => <SettingsPage size={this.state.timerConfig.size} handleChange={this.handleChange}/> } />
          </Switch>

      </div>
    );
  }
}

export default App;
