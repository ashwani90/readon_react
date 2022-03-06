import React from 'react';
import HeaderLinks from "../../components/Header/HeaderLinks";
import Header from "../../components/Header/Header";
import ReadFileForm from "./Sections/ReadFileForm";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/homePage";
import GridItem from "../../components/Grid/GridItem";
import TaskList from "./Sections/TaskList";
import DailyBriefs from "./Sections/DailyBriefs";
import WorkAnalysis from "./Sections/WorkAnalysis";
import CustomInput from "../../components/CustomInput/CustomInput";
import GridContainer from "../../components/Grid/GridContainer";
import Paper from "@material-ui/core/Paper";
import ProgressChart from './Sections/ProgressChart';
import NewTests from './Sections/NewTests';
import NewReports from './Sections/NewReports';
import Footer from "components/Footer/Footer.js";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default function Home(props) {
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
                <GridItem xs={12} sm={4} md={4} lg={3}>
                    <ReadFileForm />
                    <TaskList />
                </GridItem>
                <GridItem xs={12} sm={8} md={8} lg={9}>
                    <ProgressChart />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={6}>
                    <WorkAnalysis />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={6}>
                    <DailyBriefs />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={6}>
                    <NewTests />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={6}>
                    <NewReports />
                </GridItem>
                </GridContainer>
        </div>
        <Footer />
        </div>
    )
}
