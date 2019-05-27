import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({
    navBar: {
        height: '35px',
        backgroundColor: '#95DBC8'
    },
    list: {
        width: 250,
    },
    toggleButton: {
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '0px',
        height: '35px',
        color: 'white',
    },
    toggleButtonNotMain: {
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '0px',
        height: '35px',
        color: 'white',
        // justifyContent: 'unset'
    },
    toggleButtonNotMainLabel: {
        width: '35px',
    },
    bigAvatar: {
        margin: '10px auto',
        width: 100,
        height: 100,
        border: '3px solid #C1BEC0',
        backgroundColor: 'white',
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            position: 'relative',
            top: '-25px',
            width: 80,
            height: 80,
            margin: '0 auto',
        }
    },
    img: {
        height: 'auto'
    },
    userName: {
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: 0,
        color: '#456152',
    },
    listIcon: {
        height: '35px',
        width: '35px',
    },
});

const Navbar = props => {
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

    if (state.users === null) return (
        <div className={classes.navBar}>
            <div style={{ textAlign: 'center', paddingTop: '50px', margin: '0 auto' }}>
                <Loader type="Triangle" color="#639E85" height="50" width="50" />
            </div>
        </div>)

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };

    const pages = [
        { label: 'Main', link: '/' },
        { label: 'Merchants', link: '/merchants' }
    ]

    const renderMainNavbar = () => {
        return (
            <React.Fragment>
                <div className={classes.navBar}>
                    <Button onClick={toggleDrawer('left', true)} className={classes.toggleButton}><MenuIcon /></Button>
                    <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                        {sideList('left')}
                    </Drawer>
                </div>
                <Avatar alt="user avatar" src={state.users[0].image} classes={{ root: classes.bigAvatar, img: classes.img }} />
                <h2 className={classes.userName}>Welcome {state.users[0].name}</h2>
            </React.Fragment>
        )
    }

    const renderNotMainNavbar = () => {
        return (
            <React.Fragment>
                <div className={classes.navBar}>
                    <Button onClick={toggleDrawer} classes={{ root: classes.toggleButtonNotMain, label: classes.toggleButtonNotMainLabel }}><ArrowLeftIcon classes={{ root: classes.listIcon }} /></Button>
                </div>
                <Avatar alt="user avatar" src={state.users[0].image} classes={{ root: classes.bigAvatar, img: classes.img }} />
            </React.Fragment>
        )
    }

    const sideList = withRouter(({ history }, side) => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {pages.map((el, index) => (
                    <ListItem button key={el.label} onClick={() => history.push(el.link)}>
                        <ListItemIcon>{index === 0 ? <HomeIcon /> : <AttachMoneyIcon />}</ListItemIcon>
                        <ListItemText primary={el.label} />
                    </ListItem>
                ))}
            </List>
        </div >
    ));
    return (
        <React.Fragment>
            {props.main === true ? renderMainNavbar() : renderNotMainNavbar()}
        </React.Fragment>
    );
}

export default Navbar;