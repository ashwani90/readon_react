import React from 'react';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import styles from "assets/jss/material-kit-react/views/home.js";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function NewTests() {
    const classes = useStyles();
    return (
        <>
        <div className={classes.title}>
                <h3 style={{color: "red"}}>New Tests</h3>
            </div>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
            </>
    );
}
