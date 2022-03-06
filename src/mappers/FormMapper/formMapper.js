import { TaskLogForm } from "entity/Forms/taskLogForm";

const formMapper = (form_type) => {
    const formConfig = mappedForms[form_type];
    return formConfig;
}

const mappedForms = {
    task_log: TaskLogForm
}

export default formMapper;