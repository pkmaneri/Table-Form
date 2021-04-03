import { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import UpdateProfile from './components/UpdateProfile';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  const initialState = {
    "dataList": [],
    "updateObj": {

    }
  }
  const [userState, setUserState] = useState(initialState)

  const handleUserProfile = (data) => {
    if (data !== undefined) {
      const dataList = [...userState.dataList];
      const updateObj =userState.updateObj !==undefined ?
       JSON.parse(JSON.stringify(userState.updateObj)):{};
      dataList.push(data)
      setUserState({
        "dataList": dataList,
        "updateObj": updateObj
      })
    }
    console.log(data)


  }
  const handleRemove = (i) => {
    console.log(i)
    const dataList = [...userState.dataList];
    dataList.splice(i, 1);

    const updateObj = userState.updateObj !== undefined ?
      JSON.parse(JSON.stringify(userState.updateObj)) : {};
    setUserState({
      "dataList": dataList,
      "updateObj": updateObj
    })
  }
  const handleUpdate = (ele, i) => {
    console.log(ele, i)
    const dataList = [...userState.dataList];
    setUserState({
      "dataList": dataList,
      "updateObj": {
        "ele": ele,
        "i": i
      }

    })
  }
  const handleNewUpdate = (index, newValue) => {
    console.log(index, newValue);
    const dataList = [...userState.dataList];
    dataList[index] = newValue;
    setUserState({
      dataList
    })
  }
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/userList">
            <UserList data={userState.dataList} callback={handleRemove} callbackUpdate={handleUpdate} />
          </Route>
          <Route exact path="/updateProfile">
            <UpdateProfile callback={handleNewUpdate} dataUpdate={userState.updateObj} />
          </Route>
          <Route exact path="/">
            <UserProfile callback={handleUserProfile} />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
