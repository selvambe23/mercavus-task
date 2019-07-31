import React, { useState } from "react";
import "./UserForm.css";

const UserForm: React.FC<{ userAddFunc: Function }> = ({ userAddFunc }) => {
  const [name, setName] = useState<string>("");

  const UserForm = (
    <div className="userAddform">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          className="nameBox"
        />
        <button type="submit" onClick={e => {
              userAddFunc(e, name);
              setName('');
        }}>Add</button>
    </div>
  );
  return UserForm;
};

export default UserForm;
