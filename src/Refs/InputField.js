import React, { forwardRef } from "react";

const InputField = forwardRef((props, ref) => {
  return <input type="text" name="username" ref={ref} {...props} onChange={(e) => {
    e.target.value
  }} />;
});

export default InputField;
