import React from "react";
import { useFormik } from 'formik';
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import axios from "axios";

const AddTaskForm = ({closeModal, formData}) => {
    const formik = useFormik({
        initialValues: {
            name: formData.name,
            due_date: formData.due_date,
            time_spent: formData.time_spent
        },
        onSubmit:(values,actions) => {
          let fdata = {};
          let url = "http://localhost:8000/api/create_object";
          fdata.object_type = "task";
          fdata.operation = 'create';
          fdata.data = {
              "name": values.name,
              "due_date": values.due_date,
              "time_spent": values.time_spent
          };
          console.log(formData);
            axios({method: 'POST',url: url, data: fdata}).then((response) => {
              if (response.data.status) {
                // Close the modal and refresh items on page
                closeModal();
                actions.resetForm({
                  name: '',
                  due_date: '',
                  time_spent: '0'
                });
              }
            })
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            
            <CustomInput
                id="name"
                inputProps={{
                  placeholder: "Name",
                }}
                handleChange={formik.handleChange}
                inputValue={formik.values.name}
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                id="due_date"
                inputProps={{
                  placeholder: "Due Date: YYYY-MM-DD",
                }}
                handleChange={formik.handleChange}
                inputValue={formik.values.due_date}
                formControlProps={{
                  fullWidth: true,
                }}
              />
              <CustomInput
                id="time_spent"
                inputProps={{
                  placeholder: "Time Spent",
                }}
                handleChange={formik.handleChange}
                inputValue={formik.values.time_spent}
                formControlProps={{
                  fullWidth: true,
                }}
              />
        
        <Button type="submit" variant="outlined">Add Task</Button>
        </form>
    )
}

export default AddTaskForm;