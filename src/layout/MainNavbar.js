import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import navbarStyle from '../util/navbarStyle'

const useStyles = makeStyles(navbarStyle);

const MainNavbar = props => {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
        users: null,
    });

    const pages = [
        { label: 'Main', link: '/' },
        { label: 'Merchants', link: '/merchants' }
    ]

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };

    const sideList = withRouter(({ history }, side) => {
        return (
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
            </div>
        )
    });

    return (
        <React.Fragment>
            <div className={classes.navBar}>
                <Button onClick={toggleDrawer('left', true)} className={classes.toggleButton}><MenuIcon /></Button>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>
            </div>
            <Avatar alt="user avatar" src={props.userImage} classes={{ root: classes.bigAvatar, img: classes.img }} />
            <h2 className={classes.userName}>Welcome {props.userName}</h2>
        </React.Fragment>
    )
}

export default MainNavbar