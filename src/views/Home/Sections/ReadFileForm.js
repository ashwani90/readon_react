import React from 'react';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/home.js";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);


export default function ReadFileForm() {
    const classes = useStyles();
    return (
        <>
        <div className={classes.space50} />
        <div className={classes.readForm}>
            <div className={classes.title}>
                <h3 style={{color: "red"}}>Upload File To Read</h3>
            </div>
                    <CustomInput
                        id="regular"
                        inputProps={{
                            placeholder: "Regular",
                            type: "file"
                        }}
                        formControlProps={{
                            fullWidth: true,
                        }}
                    />
                    <Button variant="outlined">Upload File to Read</Button>

        </div>
            </>
    );
}
