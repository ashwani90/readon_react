import React from "react";
import { useFormik } from 'formik';
import axios from "axios";
import {axiosWrapper}  from '../../../helpers/axios_wrapper';
import formParser,{getEditFormData} from "../../../parsers/FormParser/formParser";



// We will need to custom form data to make the form with types and lot of data
const DynamicCrudForm = ({closeModal, formData, form_type, formInitValues}) => {
    const formik = useFormik({
      enableReinitialize:true,
        initialValues: getEditFormData(form_type,formData),
        onSubmit:(values,actions) => {
            
          let method='POST';
          let fdata = {};
          let url = "http://localhost:8000/api/create_object";
          fdata.object_type = form_type;
          if (formData && formData.id) {
            fdata.operation = 'update';
          } else {
            fdata.operation = 'create';
          }
          
          fdata.data = getEditFormData(form_type, values);
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
              actions.resetForm(formInitValues);
            }
          });
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            {formParser(form_type,formik)}
        </form>
    )
}

export default DynamicCrudForm;