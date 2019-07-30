import React from "react";
import "./HobbyTable.css";
import HobbyForm from '../HobbyForm/HobbyForm';

const HobbyTable:  React.FC<{ userHobbyData: any, userName: String, handleConfirmBox: Function, handleHobbbyAdd: Function }> = ({ userHobbyData, userName, handleConfirmBox, handleHobbbyAdd }) => {
    const addHobbies = (e: any, hobby: any ,year: any, passion: any) => {
       e.preventDefault();
       const newHobbies = {
        "passion": passion,
        "name": hobby,
        "year": year
      };
      userHobbyData.hobbies.push(newHobbies);
      handleHobbbyAdd(e, userHobbyData);
    }
    
    const getHobbies = (hobbies: any) => {
        if (!hobbies)
        return <></>
    
        return (<div>
        <h3>{userName} Hobbies</h3>
        {hobbies.map((hobby: any, index: any) => getHobbyItem(hobby, index))}
        </div>)
    };

    const getHobbyItem = (hobby: any, index: any) => {
        return (<div key={index} className="hobbyItems">
            <div className="passionBlock">
            <label>Passion: </label>
            <span>{hobby.passion}</span>
            </div>

            <div>
            <span>{hobby.name}</span>
            </div>

            <div>
            <span>{hobby.year}</span>
            </div>

            <div>
            <span className="deleteLink">
              <button onClick={() => handleConfirmBox(userHobbyData, index)}>
                Delete
              </button>
            </span>
            </div>

        </div>);
    }
    return (
    <div className="hobbyLists">
        <HobbyForm addHobbiesFunc={addHobbies} />
        <div className="hobbiesItems">
          {userHobbyData && getHobbies(userHobbyData.hobbies)}
        </div>
    </div>
    )
};

export default HobbyTable;