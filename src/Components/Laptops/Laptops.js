import { Button, Container, CircularProgress, Grid } from "@material-ui/core";
import Laptop from '../Laptop/Laptop'
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import useStyles from './styles';

const Laptops = () => {
    const classes = useStyles();
    const location = useLocation();

    const [formdata, setFormData] = useState({
        formdata: location.state.data
    })

    const [laptop_data, setLaptopData] = useState("")

    useEffect(() => {
        axios.post('http://127.0.0.1:5000/api/predict_price', formdata)
            .then((response) => {
                setLaptopData(response.data.reverse())
                console.log(response.data)
            })
            .catch((error) => {
                console.log("An error occured while callin the API.")
                throw new Error("An error occured while calling the API. Please check if the server is running. " + error)
            })
    }, [formdata]);

    useEffect(() => {
        console.log(laptop_data)
    }, [laptop_data]);

    const navigator = useNavigate();

    function navigateBack() {
        
        navigator("/")
    }

    return(
        !laptop_data.length ? <CircularProgress className={`${classes.progress}`}/> : 
        <div>
            (
            <Container>
                <Grid container alignItems="stretch" spacing={3}>
                    {laptop_data.reverse().map((laptop, index) => (
                        <Grid key={index} item xs={12} sm={3}>
                            <Laptop className={`${classes.card}`} laptop={laptop} index={index}/>
                        </Grid>
                    ))}
                </Grid>
                <Button className={`${classes.button}`} variant="contained" onClick={navigateBack}>Go Back</Button>
            </Container>)
        </div>
        
    );
}

export default Laptops