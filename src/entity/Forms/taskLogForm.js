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
        }
    ],
    initialValues: {
        description: '',
        time_spent: 0,
        start_time: 0,
        end_time: 0
    }
}

// types could be input, email, button, dateField, interger_field, text_area