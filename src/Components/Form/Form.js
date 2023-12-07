import React, { useState, useEffect } from 'react';
import axios from "axios";
import { TextField, Button, Typography, Container } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useNavigate } from 'react-router-dom';
import { brand_values, cpu_values, graphics_coprocessor_values, grapics_values, harddisk_values, os_values, ram_values, screen_size_values, special_features_values } from '../../Constants/FormValues';

import useStyles from './styles';

const Form = () => {

    const classes = useStyles();
    const navigator = useNavigate();
    
    function predictPrice() {
        navigator("/laptops", {state: {data: laptop_config}})
    }

    const [laptop_config, setLaptopConfig] = useState({
        "brand": '',
        "model": '',
        "screen_size": '',
        "cpu": '',
        "ram": '',
        "OS": '',
        "special_features": '',
        "graphics": '',
        "graphics_coprocessor": '',
        "harddisk_numeric": ''
    });

    const [buttonState, updateButtonState] = useState(true)
    const [chart_data, setChartData] = useState(null)

    useEffect(() => {
        console.log(laptop_config)
        if(laptop_config.screen_size && laptop_config.ram && laptop_config.harddisk_numeric) {
            updateButtonState(false)
        }
        else{
            updateButtonState(true)
        }
    }, [laptop_config]);

    useEffect(() => {
        const getChartData = async() => {
            axios.get('http://127.0.0.1:5000/api/get_brand_and_price_chart')
                .then((response) => {
                    response.data.forEach(brand => {
                        brand.brand_name = brand.brand_name.toUpperCase()
                    });
                    setChartData(response.data)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log("An error occured while callin the Chart API.")
                    throw new Error("An error occured while calling the Chart API. Please check if the server is running. " + error)
                })
        }; 
        getChartData();
    }, []);
    
    const valueFormatter = (value) => `${parseFloat(value).toFixed(2)}$`;

    return (
        <div>
        <Container className={`${classes.outer_container}`}>
            <Container className={`${classes.inner_container}`}>
                <Typography variant = "h4" style={{color: '#2C2C54'}}>Configure Your Laptop</Typography>    
                <form className={`${classes.form} `}>
                    <Autocomplete
                    disablePortal
                    id="combo-box-brand"
                    className={`${classes.inputBox}`}
                    options={brand_values.sort()}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Brand" />}
                    onChange={(event, newValue) => {
                        setLaptopConfig({...laptop_config, brand: newValue != null? newValue.toLowerCase() : ""})
                    }}
                    />
                    <Autocomplete
                    disablePortal
                    id="combo-box-cpu"
                    className={`${classes.inputBox}`}
                    options={cpu_values.sort()}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="CPU" />}
                    onChange={(event, newValue) => {
                        setLaptopConfig({...laptop_config, cpu: newValue != null? newValue.toLowerCase() : "" })
                    }}
                    />
                    <Autocomplete
                    disablePortal
                    id="combo-box-screen_size"
                    className={`${classes.inputBox}`}
                    options={screen_size_values.map(parseFloat).sort((a,b) => a - b).map(val => val + ' Inch') }
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField required {...params} label="Screen Size" />}
                    onChange={(event, newValue) => {
                        setLaptopConfig({...laptop_config, screen_size: newValue != null? newValue.split(" ")[0].toLowerCase() : ""})
                    }}
                    />
                    <Autocomplete
                    disablePortal
                    id="combo-box-ram"
                    className={`${classes.inputBox}`}
                    options={ram_values.map(parseFloat).sort((a,b) => a - b).map(val => val + ' GB')}
                    sx={{ width: 300 }}
                    aria-required
                    renderInput={(params) => <TextField required {...params} label="RAM" />}
                    onChange={(event, newValue) => {
                        setLaptopConfig({...laptop_config, ram: newValue != null? newValue.split(" ")[0].toLowerCase() : ""})
                    }}
                    />
                    
                    <Autocomplete
                    disablePortal
                    id="combo-box-harddisk"
                    className={`${classes.inputBox}`}
                    options={harddisk_values.map(parseFloat).sort((a,b) => a - b).map(val => val + ' GB')}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField required {...params} label="Storage Size" />}
                    onChange={(event, newValue) => {
                        setLaptopConfig({...laptop_config, harddisk_numeric: newValue != null? newValue.split(" ")[0].toLowerCase() : ""})
                    }}
                    />
                    <Autocomplete
                    disablePortal
                    id="combo-box-os"
                    className={`${classes.inputBox}`}
                    options={os_values.sort()}
                    sx={{ width: 300 }}
                    aria-required
                    renderInput={(params) => <TextField {...params} label="OS" />}
                    onChange={(event, newValue) => {
                        setLaptopConfig({...laptop_config, OS: newValue != null? newValue.toLowerCase() : ""})
                    }}
                    />
                    <Autocomplete
                    disablePortal
                    id="combo-box-graphics"
                    className={`${classes.inputBox}`}
                    options={grapics_values.sort()}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Graphics Processor" />}
                    onChange={(event, newValue) => {
                        setLaptopConfig({...laptop_config, graphics: newValue != null? newValue.toLowerCase() : ""})
                    }}
                    />
                    <Autocomplete
                    disablePortal
                    id="combo-box-graphics_coprocessor"
                    className={`${classes.inputBox}`}
                    options={graphics_coprocessor_values.sort()}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Graphics Co-processor" />}
                    onChange={(event, newValue) => {
                        setLaptopConfig({...laptop_config, graphics_coprocessor: newValue != null? newValue.toLowerCase() : ""})
                    }}
                    />
                    
                    <Autocomplete
                        multiple
                        id="combo-box-additional-features"
                        className={`${classes.multiSelectBox}`}
                        sx={{width : 300}}
                        options={special_features_values.sort()}
                        getOptionLabel={(option) => option}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField 
                                {...params}
                                label="Additional Features"
                            />
                        )}
                        onChange={(event, newValue) => {
                            let special_features_string = ""
                            newValue.forEach((val, id) => {
                                special_features_string = special_features_string + val.toLowerCase()
                                if(id !== newValue.length - 1) {
                                    special_features_string = special_features_string + ", "
                                }
                            });
                            setLaptopConfig({...laptop_config, special_features: newValue ? special_features_string : ""})
                        }}
                    />  
                </form>
                <Button className={`${classes.button}`} disabled={buttonState} variant='contained' type='submit' onClick={predictPrice}>Predict Price</Button>
            </Container>
            {
                chart_data && 
                (<Container className={`${classes.inner_container}`}>
                    <Container className={`${classes.chart}`}>
                        <Typography variant='h4'>Average Price for each brand</Typography>
                        <BarChart
                        dataset={chart_data}
                        width={600}
                        height={500}
                        series={[{ dataKey: 'value', valueFormatter }]}
                        // yAxis={[{}]}
                        xAxis={[{ scaleType: 'band', dataKey: 'brand_name', label: 'Brands' }]}
                        // layout='horizontal'
                        bottomAxis={null}
                        leftAxis={null}
                        sx={{
                            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                                display: 'none'
                            },
                            "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
                                display: 'none'
                            }
                        }}
                        />
                    </Container>   
                </Container> ) 
            }
            
        </Container>
        
        </div>
    );
}

export default Form