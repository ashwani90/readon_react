import React from 'react';
import HeaderLinks from "../../components/Header/HeaderLinks";
import Header from "../../components/Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Tasks from './Sections/Tasks';
import styles from "../../assets/jss/material-kit-react/views/taskPage";
import Footer from "components/Footer/Footer.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function Task(props) {
    const { ...rest } = props;
    const classes = useStyles();
    return (
        <div>
        <Header
            color="primary"
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
                <GridItem xs={12} sm={12} md={6} lg={6}>
                    <Tasks />
                </GridItem>
                </GridContainer>
        </div>
        <Footer />
        </div>
    )
}
