import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import Table from "../Table/Table";
import HobbyTable from "../HobbyTable/HobbyTable";
import UserForm from "../UserForm/UserForm";

import { getData, postData, API_URL } from "../../Utils";
import "./UserHobbies.css";

import { PostType, UserHobby, Hobbies } from "../../interfaces";

const UserHobbies: React.FC = () => {
  const [data, setData] = useState<Array<UserHobby> | undefined>();
  const [isFullView, setFullView] = useState<Boolean>(false);
  const [currentUserHobby, setCurrentUserData] = useState<
    Array<Hobbies> | undefined
  >();

  useEffect(() => {
    getData(`${API_URL}/userHobbies`).then(respData => {
      console.log("Resp", respData);
      setData(respData);
    });
  }, []);

  const handleConfirmBox = (currentUserHobby: any, index: any) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Delete",
          onClick: () => handleDelete(currentUserHobby, index)
        },
        {
          label: "Don't delete",
          onClick: () => {}
        }
      ]
    });
  };

  const handleDelete = (currentUserHobby: any, deleteIndex: any) => {
    if (currentUserHobby) {
      console.log(currentUserHobby);
      setFullView(true);
      const updtedHobbies = currentUserHobby.hobbies.filter(
        (hobby: any, index: any) => index !== deleteIndex
      );
      currentUserHobby.hobbies = updtedHobbies;
      postData(
        `${API_URL}/userHobbies/${currentUserHobby.id}`,
        currentUserHobby,
        PostType.PUT
      ).then(respData => {
        if (respData)
          getData(`${API_URL}/userHobbies`).then(respData => {
            console.log("Resp", respData);
            setData(respData);
          });
      });
    }
  };

  const handeUserAdd = (e: any, newUserData: any) => {
    e.preventDefault();
    if (newUserData && data) {
      console.log("User To Be add", newUserData);
      const newUserObj = {
        id: Number(data.length) + 1,
        name: newUserData,
        hobbies: []
      };
      postData(`${API_URL}/userHobbies`, newUserObj, PostType.POST).then(
        respData => {
          if (respData)
            getData(`${API_URL}/userHobbies`).then(respData => {
              console.log("Resp", respData);
              setData(respData);
            });
        }
      );
    }
  };

  const handleHobbbyAdd = (e: any, newUserHobbyData: any) => {
    e.preventDefault();
    if (newUserHobbyData) {
      console.log(newUserHobbyData);
      setFullView(true);
      postData(
        `${API_URL}/userHobbies/${newUserHobbyData.id}`,
        newUserHobbyData,
        PostType.PUT
      ).then(respData => {
        if (respData)
          getData(`${API_URL}/userHobbies`).then(respData => {
            console.log("Resp", respData);
            setData(respData);
          });
      });
    }
  };

  const getHobbyDetails = (currentUserHobby: any) => {
    if (!currentUserHobby) return <></>;

    return (
      <HobbyTable
        userName={currentUserHobby.name}
        userHobbyData={currentUserHobby}
        handleConfirmBox={handleConfirmBox}
        handleHobbbyAdd={handleHobbbyAdd}
      />
    );
  };

  return (
    <div className="ReactTable">
      <div className="userHobbyDetails">
        <div className="userDetails">
          <h1>User Lists</h1>
          <div className="userAddForm">
            <UserForm userAddFunc={handeUserAdd} />
          </div>
          <div className="userLists">
            {data &&
              data.map((userData: any, index: any) => (
                <Table
                  userData={userData}
                  key={index}
                  onUserClick={setCurrentUserData}
                  enableFullView={setFullView}
                />
              ))}
          </div>
        </div>
        {isFullView && (
          <div className="userHobbyDetails">
            {getHobbyDetails(currentUserHobby)}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserHobbies;
