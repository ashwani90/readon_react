import React from 'react';
import HeaderLinks from "../../components/Header/HeaderLinks";
import Header from "../../components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/homePage";
import GridContainer from "../../components/Grid/GridContainer";
import Footer from "components/Footer/Footer.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function Analysis(props) {
    const { ...rest } = props;
    const classes = useStyles();
    return (
        <div>
        <Header
            color="warning"
            routes={dashboardRoutes}
            brand="ReadOn"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
                height: 400,
                color: "white",
            }}
            {...rest}
        />
        <div className={classes.customContainer}>
            <GridContainer>
                
                </GridContainer>
        </div>
        <Footer />
        </div>
    )
}
