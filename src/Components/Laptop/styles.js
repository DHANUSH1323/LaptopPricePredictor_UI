import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title: {      
        textAlign:'center',
        color: '#2C2C54',
    },

    price: {
        textAlign: 'center',
        padding: "10px",
        fontWeight: "bold",
        color: '#10b0b0'
    },
    label: {
        textAlign:'center',
        color: 'red',
        marginTop: '10px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: "20px"
    },

    key: {
        fontWeight: "bold",
        marginLeft: "10px",
    },
    value: {
        marginLeft: "10px",
    },
    card: {
        backgroundColor: '#F4F1DE'
    }
}))
