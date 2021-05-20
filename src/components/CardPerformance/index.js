import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import BarChartIcon from '@material-ui/icons/BarChart';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import VideocamIcon from '@material-ui/icons/Videocam';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { green, grey, orange, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    containerCards: {
        borderRadius: "10px",
        background: "#fff",
        height: "140px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    containerIcon: {
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    iconColor:{
        color: '#fff'
    },
    warningColor: {
        color: red[500]
    },
    alertColor: {
        color: orange[800]
    },
    succesColor: {
        color: green[500]
    },
    titleCard:{
        color: grey[600],
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: "bold"
    },
    descCard:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export const CardPerformance = ({ pourcentage, icon, value, firstColor, secondColor, item }) => {

    const classes = useStyles();

    const upOrDown = (pourcent) => {
        if (pourcent < -10) {
            return (<ArrowDownwardIcon className={classes.warningColor}/>)
        } if (pourcent < 0){
            return (<ArrowDownwardIcon className={classes.alertColor}/>)
        } else {
            return (<ArrowUpwardIcon className={classes.succesColor}/>)
        }
    }

    const chooseIcon = (choice) => {
        if (choice === "video") {
            return (<VideocamIcon className={classes.iconColor}/>)
        }
        if (choice === "traffic") {
            return (<BarChartIcon className={classes.iconColor}/>)
        }
        if (choice === "person") {
            return (<PersonAddIcon className={classes.iconColor}/>)
        }
        if (choice === "like") {
            return (<FavoriteIcon className={classes.iconColor}/>)
        }
    }

    return (
        <Box className={classes.containerCards} m={3} >
            <Box className={classes.descCard} pt={1} px={2}>
                <Grid>
                    <Typography className={classes.titleCard}>{item}</Typography>
                    <Typography variant="h6">{value}</Typography>
                </Grid>
                <Grid>
                    <Box className={classes.containerIcon} style={{background: `linear-gradient(87deg, ${firstColor} 30%, ${secondColor} 90%)`,}}>
                        {chooseIcon(icon)}
                    </Box>
                </Grid>
            </Box>
            <Box display="flex" mt={2} mx={2}>
                <Box display="flex" mr={1} alignItems="center">
                    {
                        upOrDown(pourcentage)
                    }
                    <Typography>{pourcentage}%</Typography>
                </Box>
                <Box>
                    depuis le mois dernier
                </Box>
            </Box>
        </Box>
    )
}