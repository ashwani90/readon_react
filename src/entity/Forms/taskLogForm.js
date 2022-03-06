export const TaskLogForm = {
    formEntities: [
        {
            field_type: "input",
            field_name: "description",
            field_label: "Description",
            custom_fields: { }
        },
        {
            field_type: "input",
            field_name: 'time_spent',
            field_label: "Time Spent"
        },
        {
            field_type: "input",
            field_name: 'start_time',
            field_label: "Start Time"
        },
        {
            field_type: "input",
            field_name: 'end_time',
            field_label: "End Time"
        },
        { 
            field_type: "submit_button",
            field_name: "Add Task Log"
        }
    ],
    initialValues: {
        description: '',
        time_spent: '',
        start_time: '',
        end_time: ''
    }
}

// types could be input, email, button, dateField, interger_field, text_area