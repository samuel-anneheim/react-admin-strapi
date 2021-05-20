import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const useStyles = makeStyles({
  graphOverview: {
    background: '#18214D',
    borderRadius: '10px'
  },
  containerGraphOverview: {
    display: "flex",
    justifyContent: "space-between"
  },
  blueButton:{
    color: "#fff",
    background: "#5e72e4",
    textTransform: 'none'
  },
  whiteButton:{
    color: "#5e72e4", 
    background: grey[100], 
    textTransform: 'none'
  },
  typoPrimary: {
    color: grey[400],
    fontSize: "12px"
  },
  secondaryTypo: {
    color: grey[200],
    textTransform: "uppercase",
    fontSize: "18px"
  }
})

export const OverviewGraph = ({dataGraphMonth, dataGraphWeekly, theme}) => {

  const classes = useStyles();

  const [data, setData] = useState(dataGraphMonth);
  const [styleButtonMonth, setStyleButtonMonth] = useState(classes.blueButton);
  const [styleButtonWeekly, setStyleButtonWeekly] = useState(classes.whiteButton);

  const handleOnChangeDataWeekly = () => {
    setData(dataGraphWeekly);
    setStyleButtonMonth(classes.whiteButton);
    setStyleButtonWeekly(classes.blueButton)
  }

  const handleOnChangeDataMonth = () => {
    setData(dataGraphMonth);
    setStyleButtonWeekly(classes.whiteButton);
    setStyleButtonMonth(classes.blueButton)
  }

  return (
    <Box p={2} className={classes.graphOverview}>
      <Box className={classes.containerGraphOverview} pb={2}>
        <Box>
          <Typography className={classes.typoPrimary}><b>Overview</b></Typography>
          <Typography className={classes.secondaryTypo}><b>{theme}</b></Typography>
        </Box>
        <Box display="flex">
          <Box mr={2}>
            <Button variant="contained"
              className={styleButtonMonth}
              onClick={handleOnChangeDataMonth}>
              Mois
            </Button>
          </Box>
          <Box>
            <Button variant="contained"
              className={styleButtonWeekly}
              onClick={handleOnChangeDataWeekly}>
              Semaine
            </Button>
          </Box>
        </Box>
      </Box>
      <ResponsiveContainer height={350}>
        <LineChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis unit="K" stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" strokeWidth={3} dot={false} unit="K" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}