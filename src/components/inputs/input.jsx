import React from "react";
import {
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

export default function InputIcon({
  value,
  onChange,
  onBlur,
  placeholder,
  type,
  name,
  icon,
  error,
  touched,
  props
}) {
  return (
    <>
      <input
        className="p-inputtext p-component"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        invalid={error && touched}
        valid={!error && touched}
      />
      {error && <FormFeedback tooltip>{error}</FormFeedback>}
    </>
  );
}
