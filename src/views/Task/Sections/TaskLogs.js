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
import AddTaskForm from "../Sections/addTaskForm";
import axios from 'axios';
import { constants } from 'constants/app';
import {axiosWrapper} from '../../../helpers/axios_wrapper';
import DynamicCrudForm from "./dynamicCrudForm";

const show_fields = ["Description", "Time Spent", "Start Time", "End Time", "Created At"];
const database_fields = ["description", "time_spent", "start_time", "end_time", "created_at"];
const all_fields = [...database_fields, "id"];
const form_type = "task_log";
const form_name = "Task Log";


const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  Transition.displayName = "Transition";


function createData(iterData) {
    let data = {};
    all_fields.forEach((item) => {
        data[item] = iterData[item];
    });
    return data;
  }
  
  

export default function TaskLogs() {
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
  let url = constants.API_URL;
  let method = "get";
  let fdata = {};
  fdata.operation = "delete";
  fdata.object_type = 'task';
  fdata.data = {
    "where_clause": {
    }
  };
  axiosWrapper(method,url,fdata).then((response) => {
    if (response && response.data.status) {
      // refresh items on page
      refreshItems();
    }
  });
}

const refreshItems = () => {
  
  let url = constants.API_URL;
  let fdata = {};
  fdata.operation = "get";
  fdata.object_type = 'task_log';
  fdata.data =  {
    "where_clause": {
    }
  }
  axios({method:'GET', url: url, params:fdata}).then((response) => {
      
    if (response.data.status) {
      let rows = [];
      for (let i =0; i<response.data.data.length;i++) {
        let iterData = response.data.data[i];
        rows[i] = createData(iterData)
      }
      updateRows(rows);
    }
  })
}
    return (
        <>
        <div className={classes.titleContainer}>
                <h3 style={{color: "red"}}>Task Logs</h3>
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
              {show_fields.map((row,index) => {
                  if (index==0) {
                      return (<TableCell >{row}</TableCell>);
                  } else {
                    return (<TableCell align="right">{row}</TableCell>);
                  }
                })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
              return (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                  {database_fields.map((database_row)=> {
                      return (
                      <TableCell align="right">{row[database_row]}</TableCell>
              )
              })}
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
              )
          })}
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
                    <h4 className={classes.modalTitle}>Add Task Log</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <DynamicCrudForm closeModal={closeModal} form_type={form_type} formData={editData.editFormData} />
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
          </GridItem>
            </>
    );
}
