import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        width: 250,
        ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
            marginBottom: '32px'
        }
    },
    media: {
        height: 140,
        backgroundSize: 'contain',
        marginTop: '5px',
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    search: {
        position: 'relative',
        borderRadius: '5px',
        backgroundColor: fade('rgb(255, 255, 255)', 0.15),
        '&:hover': {
            backgroundColor: fade('rgb(255, 255, 255)', 0.25),
        },
        marginBottom: '16px',
        textAlign: 'center',
    },
    searchIcon: {
        color: '#95DBC8',
    },
    inputRoot: {
        border: '1px solid #95DBC8',
        borderRadius: '5px',
        padding: '5px',
        color: 'inherit',
        width: 250,
        maxWidth: '85%',
    },
    inputInput: {
        padding: '8px 8x 8x 16px',
    },
});


const Merchants = props => {
    const classes = useStyles();
    const [merchants, setMerchants] = useState([])

    useEffect(merchants => {
        axios.get('https://my-json-server.typicode.com/lazicmladen/FakeServer/mercants')
            .then(res => {
                setMerchants(res.data.filter(item => item.categoryId === 1))
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <React.Fragment>
            <Navbar main={false} />
            <div className={classes.search}>
                <InputBase
                    placeholder="Search…"
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton aria-label="Mic">
                                <SearchIcon className={classes.searchIcon} />
                            </IconButton>
                        </InputAdornment>}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="Mic">
                                <MicIcon className={classes.searchIcon} />
                            </IconButton>
                        </InputAdornment>}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>
            <div className={classes.cardContainer}>
                {merchants.map(el => {
                    return (
                        <Card key={el.id} className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={el.image}
                                    title={el.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {el.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {el.description === '' ? 'no description' : el.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </div>

        </React.Fragment>
    )
}

export default Merchants;