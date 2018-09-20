import React from 'react';
import Countdown from 'react-countdown-now';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const SettingsPage = ({size, handleChange}) => {
    const timerVariant = returnTimerSize(size)
    return (
    <div className="page">
        <Card className="welcome-container">
            <div className="welcome-card">
                <Typography variant="headline">
                    Settings
                </Typography>
                <Typography variant={timerVariant} >
                    <Countdown date={Date.now()} />
                </Typography>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Timer size</FormLabel>
                    <RadioGroup
                        name="timerSize"
                        value={size}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="small" control={<Radio />} label="small" />
                        <FormControlLabel value="medium" control={<Radio />} label="medium" />
                        <FormControlLabel value="big" control={<Radio />} label="big" />
                    </RadioGroup>
                </FormControl>
            </div>
        </Card>
    </div>
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

export default SettingsPage;