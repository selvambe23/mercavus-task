import React from "react";

const Table:  React.FC<{ userData: any, enableFullView: Function , onUserClick: Function }> = ({ userData, enableFullView , onUserClick }) => {
    const userClickHandler = (userData: any) => {
        onUserClick(userData);
        enableFullView(true);
    }
    const Table =  <div onClick={ () => userClickHandler(userData)}>
                    <p>{userData.name}</p>
                </div>
    return Table;
};

export default Table;