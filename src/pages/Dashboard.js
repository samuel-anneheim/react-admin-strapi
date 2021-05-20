import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { CardPerformance } from '../components/CardPerformance'
import HomeIcon from '@material-ui/icons/Home';
import { grey } from '@material-ui/core/colors';
import { dataGraphMonth, dataGraphWeekly, dataGraphPerf } from '../data';
import { OverviewGraph } from '../components/OverviewGraph'
import { GraphPerformance } from '../components/GraphPerformance'

const useStyles = makeStyles({
    backgroundSecondary: {
        background: "#11CDEF",
        height: "max-content"
    },
    dashboard: {
        width: "100%",
        
    },
    buttonHeader: {
        color: "#5e72e4",
        background: grey[100],
        textTransform: 'none'
    },
    primaryGrey: {
        color: grey[100]
    },
    secondaryGrey: {
        color: grey[300]
    },
    containerHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "97%",
        margin: "auto",
        maxHeight: "32px",
        flexWrap: "wrap"
    },
    containerDescHeader: {
        display: "flex",
        alignItems: "center",
        minWidth: "300px"
    },
    containerButtonHeader: {
        display: "flex",
        justifyContent: "flex-end",
        minWidth: "300px"
    },
    containerGraph: {
        transform: "translateY(-80px)"
    }
})


export const Dashboard = () => {

    const classes = useStyles();

    return (
        <Box className={classes.dashboard}>
            <Box className={classes.backgroundSecondary} pb={10}>
                <Box className={classes.containerHeader} pt={2}>
                    <Box className={classes.containerDescHeader}>
                        <Box ml={1} mr={2}>
                            <Typography variant="h5" className={classes.primaryGrey}>Default</Typography>
                        </Box>
                        <Box mx={1}>
                            <HomeIcon className={classes.primaryGrey} />
                        </Box>
                        <Box mx={1}>
                            <Typography variant="subtitle1" className={classes.primaryGrey}>Dashboards</Typography>
                        </Box>
                        <Box mx={1}>
                            <Typography variant="subtitle1" className={classes.secondaryGrey}>Default</Typography>
                        </Box>
                    </Box>

                    <Box className={classes.containerButtonHeader}>
                        <Box mr={2}>
                            <Button variant="contained" size="small" disableRipple className={classes.buttonHeader} >
                                New
                                    </Button>
                        </Box>
                        <Button variant="contained" size="small" disableRipple className={classes.buttonHeader}>
                            Filters
                                </Button>
                    </Box>
                </Box>
                <Box pt={3}>
                    <Grid container>
                        <Grid xl={3} lg={3} md={6} sm={12} xs={12}>
                            <CardPerformance pourcentage={-15} icon="video" value="685" firstColor="#f5365c" secondColor="#f56036" item="Video" />
                        </Grid>
                        <Grid xl={3} lg={3} md={6} sm={12} xs={12}>
                            <CardPerformance pourcentage={300} icon="traffic" value="60 125" firstColor="#fb6340" secondColor="#fbb140" item="Vue" />
                        </Grid>
                        <Grid xl={3} lg={3} md={6} sm={12} xs={12}>
                            <CardPerformance pourcentage={-7} icon="person" value="127" firstColor="#2dce89" secondColor="#2dcecc" item="Nouveaux utilisateurs" />
                        </Grid>
                        <Grid xl={3} lg={3} md={6} sm={12} xs={12}>
                            <CardPerformance pourcentage={45} icon="like" value="412" firstColor="#5e72e4" secondColor="#825ee4" item="like" />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box className={classes.containerGraph} p={3}>
                <Grid container spacing={3}>
                    <Grid item lg={8} xl={8} md={12} sm={12} xs={12}>
                        <OverviewGraph dataGraphMonth={dataGraphMonth} dataGraphWeekly={dataGraphWeekly} theme="Nombre de vue" />
                    </Grid>

                    <Grid item lg={4} xl={4} md={12} sm={12} xs={12}>
                        <GraphPerformance dataGraphPerf={dataGraphPerf} theme="Total client" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}