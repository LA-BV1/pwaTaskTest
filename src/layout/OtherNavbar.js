import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import navbarStyle from '../util/navbarStyle'

const useStyles = makeStyles(navbarStyle);

const OtherNavbar = props => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.navBar}>
                <Button onClick={() => { props.history.push(props.returnLink) }} classes={{ root: classes.toggleButtonNotMain, label: classes.toggleButtonNotMainLabel }}><ArrowLeftIcon classes={{ root: classes.listIcon }} /></Button>
            </div>
            <Avatar alt="user avatar" src={props.userImage} classes={{ root: classes.bigAvatar, img: classes.img }} />
        </React.Fragment>
    )
}

export default withRouter(OtherNavbar)