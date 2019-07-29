import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Api } from '../../services/Api'
import Loader from 'react-loader-spinner'
import { withRouter } from 'react-router-dom'
import navbarStyle from '../../util/navbarStyle'
import MainNavbar from '../../layout/MainNavbar'
import OtherNavbar from '../../layout/OtherNavbar'

const useStyles = makeStyles(navbarStyle);

const Navbar = props => {
    const classes = useStyles();
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            let response = await Api.users.getUsers()
            setUsers(response)
        }
        fetchUsers()
    }, [])

    if (users === null) return (
        <div className={classes.navBar}>
            <div style={{ textAlign: 'center', paddingTop: '50px', margin: '0 auto' }}>
                <Loader type="Triangle" color="#639E85" height="50" width="50" />
            </div>
        </div>)

    return (
        <React.Fragment>
            {window.location.pathname === '/' ? <MainNavbar userImage={users[0].image} userName={users[0].name} /> : <OtherNavbar returnLink='/' userImage={users[0].image} />}
        </React.Fragment>
    );
}

export default withRouter(Navbar);