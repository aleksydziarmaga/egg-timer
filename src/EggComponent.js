import React, { Component } from 'react';
import Countdown from 'react-countdown-now';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class EggComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        startTimer: false
    }
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.setState({ startTimer: !this.state.startTimer })
  }

  render(){
    return (
        <EggContainer type={this.props.type} image={this.props.image} onClick={this.onClick} time={this.props.time} timer={this.state.startTimer} size={this.props.size}/> 
    )
  }
}

const EggContainer = ({type, image, onClick, timer, time, size}) => {
    const timerVariant = returnTimerSize(size);

    return (
        <Paper elevation={1} className="egg-container" onClick={onClick}>
            <div>
                <img src={image} className="egg-image" alt={`${type} egg`} />
                <Typography variant="title" gutterBottom className="egg-name">{type} Egg</Typography>
                { timer 
                
                ? 
                    <Typography variant={timerVariant} >
                        <Countdown date={Date.now() + time}>
                            <Vibrate />
                        </Countdown> 
                    </Typography>
                    : <Typography variant={timerVariant} className="hidden-timer"></Typography> }
            </div>
        </Paper>
    )
}

const returnTimerSize = (value) => {
    if (value === "small")
        return "display1";
    else if (value === "medium")
        return "display2";  
    else if (value === "big")   
        return "display3" 
}

class Vibrate extends Component {

    vibrate = () => navigator.vibrate(500)

    componentDidMount() {
        this.vibrate();
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default EggComponent;