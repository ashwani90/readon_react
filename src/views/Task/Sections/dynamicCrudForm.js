import React from "react";
import { useFormik } from 'formik';
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import axios from "axios";
import {axiosWrapper}  from '../../../helpers/axios_wrapper';
import formParser from "../../../parsers/FormParser/formParser";


// We will need to custom form data to make the form with types and lot of data
const DynamicCrudForm = ({closeModal, formData, form_type}) => {
    const formik = useFormik({
      enableReinitialize:true,
        initialValues: {
            name: formData ? formData.name : '',
            due_date: formData ? formData.due_date : '',
            time_spent: formData ? formData.time_spent : '0'
        },
        onSubmit:(values,actions) => {
          let method='POST';
          let fdata = {};
          let url = "http://localhost:8000/api/create_object";
          fdata.object_type = "task";
          if (formData && formData.id) {
            fdata.operation = 'update';
          } else {
            fdata.operation = 'create';
          }
          
          fdata.data = {
              "name": values.name,
              "due_date": values.due_date,
              "time_spent": values.time_spent
          };
          if (formData && formData.id) {
            fdata.data.where_clause = {
              'id': formData.id
            }
            method = "PUT";
          }
          axiosWrapper(method,url,fdata).then((response) => {
            if (response && response.data.status) {
              // Close the modal and refresh items on page
              closeModal();
              actions.resetForm({
                name: '',
                due_date: '',
                time_spent: '0'
              });
            }
          });
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            
            {formParser(form_type,formik)}
        
        <Button type="submit" variant="outlined">Add Task</Button>
        </form>
    )
}

export default DynamicCrudForm;