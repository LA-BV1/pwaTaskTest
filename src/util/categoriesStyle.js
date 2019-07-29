export default {
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
}