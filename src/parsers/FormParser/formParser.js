import formMapper from "../../mappers/FormMapper/formMapper";
import formComponentMapper from "../../mappers/FormMapper/formComponentsMapper";

const formParser = (form_type,formik) => {
    const formConfig = formMapper(form_type);
    return formConfig.formEntities.map((item) => {
        return formComponentMapper(item,formik);
    });
}

export const formIntitalValues = (form_type) => {
    const formConfig = formMapper(form_type);
    return formConfig.initialValues;
}

export const getEditFormData = (form_type, formData=false) => {
    const formConfig = formMapper(form_type);
    if (!formData) {
        return formConfig.initialValues;
    }
    let keys = Object.keys(formConfig.initialValues);
    let data={}
    keys.map((value) => data[value] = formData[value] ? formData[value] : formConfig.initialValues[value]);
    return data;
}

export default formParser;