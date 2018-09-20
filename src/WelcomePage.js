import React from 'react';

import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Pot from './pot.png';

const WelcomePage = () => 
    <div className="page">
        <Card className="welcome-container">
            <div className="welcome-card">
                <Typography variant="headline">
                    Welcome
                </Typography>
                <img src={Pot} alt="boiling pot"/>
                <Typography variant="body2">
                    Please wait until your water is boiling
                </Typography>
                <Link to="/timers">
                    <Button variant="outlined">START</Button>
                </Link>
            </div>
        </Card>
    </div>
export default WelcomePage;