import { Box, makeStyles, Tooltip, Typography } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const useStyles = makeStyles({
    graphPerformance: {
        borderRadius: "10px",
        background: "#fff",
    },
    miniTitle: {
        color: grey[600],
        fontSize: "12px",
        fontWeight: "bold"
    },
    bigTitle: {
        color: grey[800],
        textTransform: "uppercase",
        fontSize: "18px",
        fontWeight: "bold",
    }
})

export const GraphPerformance = ({ dataGraphPerf, theme }) => {

    const classes = useStyles();

    return (
        <Box p={2} className={classes.graphPerformance}>
            <Box pb={2}>
                <Typography className={classes.miniTitle}>Performance</Typography>
                <Typography className={classes.bigTitle}>{theme}</Typography>
            </Box>
            <ResponsiveContainer height={350}>
                <BarChart
                    width={500}
                    height={300}
                    data={dataGraphPerf}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="2" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#8884d8" barSize={15} fill="#FB6340" radius={5} />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    )
}