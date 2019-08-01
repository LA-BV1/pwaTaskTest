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
import { Api } from '../../services/Api'
import { withRouter } from 'react-router-dom'
import { ListItemText } from '@material-ui/core';
import categoriesStyle from '../../util/categoriesStyle'

const useStyles = makeStyles(categoriesStyle);

const Categories = ({ history }) => {
    const classes = useStyles();
    const [categories, setCategories] = useState([])
    const [merchants, setMerchants] = useState(0)

    useEffect(() => {
        fetchMerchants()
        fetchCategories()
        let timer1 = setInterval(fetchMerchants, 10000)
        let timer2 = setInterval(fetchCategories, 10000)
        return () => {
            clearInterval(timer1)
            clearInterval(timer2)
        }
    }, [])

    const fetchMerchants = async () => {
        let response = await Api.merchants.getMerchants()
        if (response !== undefined && response.status === 200) {
            setMerchants(response.data.length)
        } else return
    }

    const fetchCategories = async () => {
        let response = await Api.categories.getCategories()
        if (response !== undefined && response.status === 200) {
            setCategories(response.data)
        } else return
    }

    const chooseIcon = id => {
        switch (id) {
            case 1: return <FastfoodIcon className={classes.listIcon} />;
            case 2: return <SpaIcon className={classes.listIcon} />;
            case 3: return <DeveloperBoardIcon className={classes.listIcon} />;
            default: return <FolderIcon className={classes.listIcon} />
        }
    }

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