import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
          margin: theme.spacing(1),
    },

    outer_container: {
        display: 'flex',
        // textAlign: 'center',
        marginTop: '20px',
        
    },

    inner_container: {
        textAlign: 'center',
        alignContent: 'center',
        // backgroundColor: '#595f39'
    },

    form: {
        textAlign: 'center',
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },

    inputBox: {
        display: 'block',
        marginTop: '20px',
    },

    multiSelectBox: {
        display: 'block',
        marginTop: '20px'
    },

    button: {
        display: 'block',
        marginTop: '20px',
        marginBottom: '20px',
        width:'100%',
        backgroundColor: '#2C2C54',
        color: 'white'
    },

    chart: {
        textAlign: 'center',
        alignContent: 'center',
        width:'100%',
        backgroundColor: '#3D405B',
        color: 'white'
    },

    barchart: {
        textAlign: 'center',
        alignContent: 'center',
        // width: '100%'
        position: 'absolute'
    }
}))
