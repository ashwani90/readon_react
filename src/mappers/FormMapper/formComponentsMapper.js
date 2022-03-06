import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";


const formComponentMapper = (component,formik) => {
    if (component.field_type == "input") {
        return (
            <CustomInput
                id={component.field_name}
                inputProps={{
                  placeholder: component.field_label,
                }}
                handleChange={formik.handleChange}
                inputValue={formik.values[component.field_name]}
                formControlProps={{
                  fullWidth: true,
                }}
              />
        );
    }
    if (component.field_type == "submit_button") {
      return (<Button type="submit" variant="outlined">{component.field_name}</Button>);
    }
}

export default formComponentMapper;