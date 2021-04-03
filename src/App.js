import { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import UpdateProfile from './components/UpdateProfile';


function App() {
  const [userState, setUserState] = useState({
    dataList: [],
  })
  const [update,setUpdate]=useState({
    updateObj:{

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
  const handleNewUpdate=(index,newValue)=>{
    console.log(index,newValue);
    const dataList = [...userState.dataList];
     dataList[index]=newValue;
     setUserState({
        dataList
     })
  }
  return (
    <div className="App">
      <UserProfile callback={handleUserProfile} />
      <UserList data={userState.dataList} callback={handleRemove} callbackUpdate={handleUpdate} />
      <UpdateProfile  callback={handleNewUpdate} dataUpdate={update}/>


    </div>
  );
}

export default App;
