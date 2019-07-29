import { fade } from '@material-ui/core/styles/colorManipulator';
export default {
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
    recordIcon: {
        color: '#9c1816',
        height: '25px'
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
}