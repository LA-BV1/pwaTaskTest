export default {
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
}