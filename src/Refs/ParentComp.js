import React, { use, useRef } from "react";
import InputField from "./InputField";

const ParentComp = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const ref = useRef(null);

    const changeHandler = (e) => {
        const {name, value} = e.target;
        if(name === "username") {
            setUserName(value)
        } else {
            setPassword(value)
        }
    }

  return (
    <div>
      <InputField ref={ref} placeholder="Type here..." changeHandler={changeHandler} />
      <input type="password" name="password" onChange={changeHandler} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ParentComp;
