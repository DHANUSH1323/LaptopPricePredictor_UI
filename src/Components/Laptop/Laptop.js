import { Card, Typography } from "@material-ui/core";
import useStyles from './styles';

const Laptop = ({laptop, index}) => {
    const classes = useStyles();
    return (
        <Card className={`${classes.card}`}>
                <div>
                    <Typography className={`${classes.title}`} variant="h5">{index === 0 ? "Your Configuration": "Recommendation " + index}</Typography>
                </div>
                <div className={`${classes.price}`}>
                    <Typography variant="h4">{parseFloat(laptop.price).toFixed(2)}$</Typography>
                    <Typography className={`${classes.title}`} variant="body2">{index === 0 ? "(Predicted Price)": ""}</Typography>
                </div>
                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">Brand:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.brand ? laptop.brand.toUpperCase() : "---"}</Typography>
                </div>

                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">Model:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.model ? laptop.model.toUpperCase() : "---"}</Typography>
                </div>
                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">Screen Size:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.screen_size ? laptop.screen_size + " Inch": "---"}</Typography>
                </div>
                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">CPU:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.cpu ? laptop.cpu.toUpperCase() : "---"}</Typography>
                </div>
                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">RAM:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.ram ? laptop.ram + " GB" : "---"}</Typography>
                </div>
                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">Storage:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.harddisk_numeric ? laptop.harddisk_numeric + " GB" : "---"}</Typography>
                </div>
                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">OS:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.OS ? laptop.OS.toUpperCase() : "---"}</Typography>
                </div>
                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">Graphics:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.graphics ? laptop.graphics.toUpperCase() : "---"}</Typography>
                </div>
                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">Secondary Graphics:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.graphics_coprocessor ? laptop.graphics_coprocessor.toUpperCase() : "---"}</Typography>
                </div>
                <div className={`${classes.container}`}>
                    <Typography className={`${classes.key}`} variant="h6">Addition Features:</Typography>
                    <Typography className={`${classes.value}`} variant="h6">{laptop.special_features ? laptop.special_features.toUpperCase() : "---"}</Typography>
                </div>
        </Card>
    )
}

export default Laptop;