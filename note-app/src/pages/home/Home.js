import React, { useState } from 'react';
import { Button, Typography, Popover } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import useStyle from './styles';
import './Home.scss';

const Home = () => {
    const classes = useStyle();
    const [anchor, setAnchor] = useState(null);

    const handleClick = e => setAnchor(e.currentTarget);
    const handleClose = () => setAnchor(null);

    const open = Boolean(anchor);
    const id = open ? 'simple-popver' : undefined;

    return (
        <div className='home'>
            <div className='clouds'></div>

            <div className='home-container'>
                <div className='container-titles'>
                    <h1>BE</h1>
                    <ul className='titles-list'>
                        <li><span>organized.</span></li>
                        <li><span>informed.</span></li>
                        <li><span>in technology.</span></li>
                    </ul>
                </div>
                <div className='register'>
                    <Button
                        aria-describedby={id}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<AccountCircleOutlinedIcon />}
                        onClick={handleClick}
                    >
                        log in
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchor}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Typography className={classes.typography}>This will be available soon once DB is ready</Typography>
                    </Popover>
                    <Button
                        aria-describedby={id}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<PersonAddIcon />}
                        onClick={handleClick}
                    >
                        sign up
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home;
