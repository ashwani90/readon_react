import formMapper from "../../mappers/FormMapper/formMapper";
import formComponentMapper from "../../mappers/FormMapper/formComponentsMapper";

const formParser = (form_type,formik) => {
    const formConfig = formMapper(form_type);
    return formConfig.formEntities.map((item) => {
        return formComponentMapper(item,formik);
    });
}

export default formParser;