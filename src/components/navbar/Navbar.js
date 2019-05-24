import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import axios from 'axios'
import Loader from 'react-loader-spinner'
import Avatar from '@material-ui/core/Avatar';

import './Navbar.css'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    toggleButton: {
        paddingTop: '0px',
        paddingBottom: '0px',
        height: '35px',
        color: 'white'
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
});

function Navbar(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
        users: null,
    });



    useEffect((state) => {
        axios.get('https://my-json-server.typicode.com/lazicmladen/FakeServer/users')
            .then(res => { setState({ ...state, users: res.data }) })
            .catch(err => console.log(err))
    }, [])

    if (state.users === null) return <Loader type="Triangle" color="green" height="50" width="50" />

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Home', 'Categories'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index === 0 ? <HomeIcon /> : <LabelImportantIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className="nav-bar-template">
            <Button onClick={toggleDrawer('left', true)} className={classes.toggleButton}><MenuIcon /></Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            <Avatar alt="user avatar" src={state.users[0].image} className={classes.bigAvatar} />

        </div>
    );
}

export default Navbar;