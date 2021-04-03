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
  const [userState, setUserState] = useState({
    dataList: [],
  })
  const [update, setUpdate] = useState({
    updateObj: {

    }
  })

  const handleUserProfile = (data) => {
    console.log(data)
    const dataList = [...userState.dataList]
    dataList.push(data)
    setUserState({
      dataList
    })

  }
  const handleRemove = (i) => {
    console.log(i)
    const dataList = [...userState.dataList];
    dataList.splice(i, 1);
    setUserState({ dataList })
  }
  const handleUpdate = (ele, i) => {
    console.log(ele, i)
    setUpdate({
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
          <div className="row">
            <div className="col">
              <Route exect path="/">
                <UserProfile callback={handleUserProfile} />
              </Route>
            </div>
            <div className="col">
              <Route exect path="/userList">
                <UserList data={userState.dataList} callback={handleRemove} callbackUpdate={handleUpdate} />
              </Route>
            </div>
            <div className="col">
              <Route exect path="/updateProfile">
                <UpdateProfile callback={handleNewUpdate} dataUpdate={update} />
              </Route>
            </div>
          </div>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
