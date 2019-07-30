import React, {useState} from "react";
import "./UserForm.css";

const UserForm:  React.FC<{ userAddFunc: any }> = ({ userAddFunc }) => {
    const [name, setName] = useState<any>('');

    const UserForm = <div className="userAddform">
                        <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="nameBox" />
                        <button onClick={(e) => userAddFunc(e, name)}>Add</button>
                </div>
    return UserForm;
};

export default UserForm;