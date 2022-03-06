import React, {useEffect} from 'react';
import styles from "assets/jss/material-kit-react/components/tasks.js";
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Popover from "@material-ui/core/Popover";
import Datetime from "react-datetime";
// @material-ui/icons
import AddTaskForm from "../Sections/addTaskForm";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import axios from 'axios';


const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  Transition.displayName = "Transition";


function createData(id, name, due_date, completed_date, parent_task,start_date,time_spent) {
    return { id, name, due_date, completed_date, parent_task,start_date,time_spent };
  }
  
  

export default function Tasks() {
const classes = useStyles();
const [editData, setEditData] = React.useReducer(
  (state,newState) => ({...state,...newState}),
  {editFormData:null, classicModal:false}
)
// const [classicModal, setClassicModal] = React.useState(false);
const [rows, updateRows] = React.useState([]);
// const [editFormData, setEditFormData] = React.useState(null);

useEffect(() => {
  refreshItems();
}, [rows.length])

const closeModal = () => {
  setEditData({classicModal:false});
  refreshItems();
}

const editContent = (id) => {
  let formData = null;
  for (let i =0; i<rows.length;i++) {
    let iterData = rows[i];
    if (iterData.id == id) {
      formData = iterData;
      break;
    }
  }


  if (formData) {
    setEditData({editFormData:formData, classicModal:true});
  }
}

const deleteContent = (id) => {
  console.log(id);
}

const refreshItems = () => {
  
  let url = "http://localhost:8000/api/create_object";
  let fdata = {};
  fdata.operation = "get";
  fdata.object_type = 'task';
  fdata.data =  {
    "where_clause": {
    }
  }
  axios({method:'GET', url: url, params:fdata}).then((response) => {
    if (response.data.status) {
      let rows = [];
      for (let i =0; i<response.data.data.length;i++) {
        let iterData = response.data.data[i];
        rows[i] = createData(iterData.id,iterData.name,iterData.due_date,iterData.completed_date,iterData.parent_task,iterData.start_date,iterData.time_spent)
      }
      updateRows(rows);
    }
  })
}
    return (
        <>
        <div className={classes.titleContainer}>
                <h3 style={{color: "red"}}>Tasks</h3>
                <Tooltip
          id="instagram-twitter"
          title="Add task"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
            <Button
            className={classes.addBtn}
                  color="transparent"
                  block
                  onClick={() => setEditData({classicModal:true})}
                >
                  <AddIcon />
                </Button>
          
        </Tooltip>
            </div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Due Date</TableCell>
            <TableCell align="right">Completed Date</TableCell>
            <TableCell align="right">Parent Task</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">Time Spent</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.due_date}</TableCell>
              <TableCell align="right">{row.completed_date}</TableCell>
              <TableCell align="right">{row.parent_task}</TableCell>
              <TableCell align="right">{row.start_date}</TableCell>
              <TableCell align="right">{row.time_spent}</TableCell>
              <TableCell align="right"><Button
                      onClick={() => editContent(row.id)}
                      color="warning"
                      simple
                    >
                      Edit
                    </Button></TableCell>
              <TableCell align="right"><Button
                      onClick={() => deleteContent(row.id)}
                      color="danger"
                      simple
                    >
                      Delete
                    </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <GridItem xs={12} sm={12} md={6}>
            
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} lg={4}>
                
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal,
                  }}
                  open={editData.classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setEditData({classicModal:false})}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setEditData({classicModal:false})}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Add Task</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    
                   <AddTaskForm closeModal={closeModal} formData={editData.editFormData}/>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button
                      onClick={() => setEditData({classicModal:false})}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </GridItem>
              </GridContainer>
            {/* <GridItem xs={12} sm={12} md={12}>
              <div className={classes.title}>
                <h3>Datetime Picker</h3>
              </div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel className={classes.label}>
                    Datetime Picker
                  </InputLabel>
                  <br />
                  <FormControl fullWidth>
                    <Datetime
                      inputProps={{ placeholder: "Datetime Picker Here" }}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
            </GridItem> */}
          </GridItem>
            </>
    );
}
