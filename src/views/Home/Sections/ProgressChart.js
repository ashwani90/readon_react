import React from 'react';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import {makeStyles, styled} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/home.js";
import Button from "components/CustomButtons/Button.js";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Line} from 'react-chartjs-2';

const useStyles = makeStyles(styles);

  const chartData = {
    labels: ['January', 'February', 'March',
             'April', 'May', 'June', 'July', 'August'],
    datasets: [
      {
        label: 'Rainfall',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 34,67,78]
      }
    ]
  }

  const card = (
    <React.Fragment>
      <Line
          data={chartData}
          height={80}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    </React.Fragment>
  );


export default function ProgressChart() {
    const classes = useStyles();
    return (
        <>
        <div className={classes.space50} />
        <div className={classes.readForm}>
            <div className={classes.title}>
                <h3 style={{color: "red"}}>Progress this week</h3>
            </div>
                <Card variant="outlined">{card}</Card> 
        </div>
            </>
    );
}
