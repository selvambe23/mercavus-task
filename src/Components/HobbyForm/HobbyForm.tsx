import React, { useState } from "react";
import "./HobbyForm.css";

const UserForm: React.FC<{ addHobbiesFunc: any }> = ({ addHobbiesFunc }) => {
  const [hobby, setHobby] = useState<any>("");
  const [year, setYear] = useState<any>("");
  const [passion, setPassionLevel] = useState<any>("default");

  const UserForm = (
    <div className="userHobbyAddform">
      <div className="passionBox">
        <select value={passion} onChange={e => setPassionLevel(e.target.value)}>
          <option key="0" value="default">
            Select Passion Level
          </option>
          <option key="1" value="Medium">
            Medium
          </option>
          <option key="2" value="Low">
            Low
          </option>
          <option key="3" value="High">
            High
          </option>
          <option key="4" value="Very-High">
            Very-High
          </option>
        </select>
      </div>
      <div className="passionBox">
        <input
          type="text"
          placeholder="Enter User Hobby"
          onChange={e => setHobby(e.target.value)}
          value={hobby}
          className="nameBox"
        />
      </div>
      <div className="passionBox">
        <input
          type="text"
          placeholder="Enter Year"
          value={year}
          onChange={e => setYear(e.target.value)}
          className="nameBox"
        />
      </div>
      <button onClick={e => addHobbiesFunc(e, hobby, year, passion)}>
        Add
      </button>
    </div>
  );
  return UserForm;
};

export default UserForm;
