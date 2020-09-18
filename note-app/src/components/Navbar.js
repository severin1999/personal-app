import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, CssBaseline, IconButton, Typography, AppBar, Drawer, Toolbar, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AirplayIcon from '@material-ui/icons/Airplay';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const openMenu = () => setOpen(true);
    const closeMenu = () => setOpen(false);

    return (
        <nav className={classes.nav}>
            <CssBaseline />
            <AppBar 
                position='fixed'
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <NavLink to='/' className={classes.logo} onClick={closeMenu}>
                        <img src={require('../images/logo.png')} className={classes.logoImage} alt='logo' />
                        <Typography variant='h6' noWrap className={classes.title}>
                            Note APP
                        </Typography>
                    </NavLink>

                    <Toolbar className={classes.toolbar} >
                        <IconButton
                            color='inherit'
                            aria-label='open drawer'
                            edge='end'
                            onClick={openMenu}
                            className={clsx(open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Grid>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={closeMenu}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    <Typography>
                        Welcome
                    </Typography>
                </div>
                <Divider />
                <List>
                    <NavLink to='/voiceApp'>
                        <ListItem button onClick={closeMenu}>
                            <ListItemIcon><AirplayIcon /></ListItemIcon>
                            <ListItemText primary={'News & Voice App'} />
                        </ListItem>
                    </NavLink>

                    <NavLink to='/to-do'>
                        <ListItem button onClick={closeMenu}>
                            <ListItemIcon><FormatListBulletedOutlinedIcon /></ListItemIcon>
                            <ListItemText primary={'My to do list'} />
                        </ListItem>
                    </NavLink>

                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </nav>
    )
}

export default Navbar
