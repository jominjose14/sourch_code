import React from "react";

const FormInput = ({label, onChange, ...otherProps}) => {
    return (
        <div className={"form-input-container p-3"}>
            <label className={"block mb-2"}>{label}</label>
            <input
                className={"form-input appearance-none shadow rounded py-2 px-3 focus:outline-none focus:shadow-outline"}
                onChange={onChange} {...otherProps}
            />
        </div>
    );
};

export default FormInput;
