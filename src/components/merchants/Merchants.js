import React, { useState, useEffect } from 'react'
import { Api } from '../../services/Api'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import merchantsStyle from '../../util/merchantsStyle'
import SeachInput from '../../layout/SearchInput'
const useStyles = makeStyles(merchantsStyle);

const Merchants = props => {
    const classes = useStyles();
    const [allMerchants, setAllMerchants] = useState([])
    const [merchants, setMerchants] = useState([])

    useEffect(() => {
        fetchAllMerchants()
        let timer = setInterval(fetchAllMerchants, 10000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    const fetchAllMerchants = async () => {
        console.log('entered merc2')
        let response = await Api.merchants.getMerchants()
        setAllMerchants(response.filter(item => item.categoryId === 1))
        setMerchants(response.filter(item => item.categoryId === 1))
    }

    const getSearchValue = (value) => {
        setMerchants(allMerchants.filter(item => item.name.toLowerCase().includes(value.toLowerCase())))
    }

    return (
        <div>
            <SeachInput getValue={getSearchValue} />
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
                                        {el.description === '' ? 'no description available' : el.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </div>

        </div>
    )
}

export default Merchants;