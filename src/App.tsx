import React from "react";
import UserHobbies from "./Components/UserHobbies/UserHobbies";
import Header from './Components/Header/Header';
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
        <Header />
        <UserHobbies />
    </div>
  );
};

export default App;
