import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Loader from 'react-loader-spinner'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrorRight from '@material-ui/icons/KeyboardArrowRight'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SpaIcon from '@material-ui/icons/Spa';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import FolderIcon from '@material-ui/icons/Folder';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
    menuList: {
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        }
    },
    listItem: {
        borderTop: '1px solid lightgrey',
        borderBottom: '1px solid lightgrey',
        color: '#639E85',
        height: '65px',
        fontWeight: 'bold',
        fontSize: '14px',
        margin: '0 10px',
        paddingRight: 0
    },
    listItemText: {
        fontWeight: "bold",
        color: '#639E85',
    },
    listArrow: {
        color: 'lightgrey',
        height: '40px',
        width: '40px',
        position: 'absolute',
        right: 0,
    },
    cardGrid: {
        width: '90%',
        margin: '0 auto',
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        }
    },
    cardPaper: {
        textAlign: 'center',
        padding: '5px',
        margin: '5px'
    },
    listIcon: {
        color: '#639E85',
        ['@media (min-width:600px)']: { // eslint-disable-line no-useless-computed-key
            height: '35px',
            width: '35px'
        }
    },
    userName: {
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: 0,
        color: '#456152',
    }
});

const Categories = ({history}) => {
    const classes = useStyles();
    const [categories, setCategories] = useState([])
    const [merchants, setMerchants] = useState(0)

    useEffect(categories => {
        axios.get('https://my-json-server.typicode.com/lazicmladen/FakeServer/categories')
            .then(res => {
                setCategories(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(merchants => {
        axios.get('https://my-json-server.typicode.com/lazicmladen/FakeServer/mercants')
            .then(res => {
                setMerchants(res.data.length)
            })
            .catch(err => console.log(err))
    }, [])

    const chooseIcon = id => {
        switch (id) {
            case 1: return <FastfoodIcon className={classes.listIcon} />;
            case 2: return <SpaIcon className={classes.listIcon} />;
            case 3: return <DeveloperBoardIcon className={classes.listIcon} />;
            default: return <FolderIcon className={classes.listIcon} />
        }
    }

    // if (state.users === null) return (
    //         <div style={{ textAlign: 'center'}}>
    //             <Loader type="Triangle" color="green" height="50" width="50" />
    //         </div>)

    return (
        <React.Fragment>
            <h5 className={classes.userName}>Choose Category For Available Gifts</h5>
            <MenuList classes={{ root: classes.menuList }}>
                {categories.map(el => {
                    return (
                        <MenuItem key={el.id} classes={{ root: classes.listItem }} onClick={() => { history.push('/merchants') }}>
                            <ListItemIcon>
                                {chooseIcon(el.id)}
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.listItemText }}>
                                {el.title}
                                <p style={{ color: 'grey', margin: '0', fontWeight: 'normal' }}>{merchants} Gifts Available</p>
                            </ListItemText>
                            <ArrorRight classes={{ root: classes.listArrow }} />
                        </MenuItem>
                    )
                })}
            </MenuList>

            <Grid container className={classes.cardGrid}>
                {categories.map(el => {
                    return (
                        <Grid item key={el.id} sm={6} md={4}>
                            <Paper className={classes.cardPaper} onClick={() => { history.push('/merchants') }}>
                                {chooseIcon(el.id)}
                                <p className={classes.listItemText}>{el.title}</p>
                                <p style={{ color: 'grey', margin: '0', fontWeight: 'normal' }}>{merchants} Gifts Available</p>
                            </Paper>
                        </Grid>

                    )
                })}
            </Grid>
        </React.Fragment>
    )
}

export default withRouter(Categories);