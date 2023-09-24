import { useState } from "react";
import { Header } from "../../components/Header";
import "./App.css";
import { Profile } from "../../components/Profile";
import { Input } from "../../components/Input";
import { ItemsList } from "../../components/ItemsList";

function App() {
  const [value, setValue] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleUser = (e:any)=>{
    setValue(e.target.value)
  }

  const handleGetData = ()=>{
    fetch(`https://api.github.com/users/${value}`)
    .then(function (res) {
      if(!res.ok){
        throw res
      }
      return res.json()
    })
    .then(function (data) {
      setUser(data)
    })
    .catch((err)=>{
      console.log(err)
      setUser(null)
    })

    fetch(`https://api.github.com/users/${value}/repos`)
    .then(function (res) {
      console.log(res)
      if(!res.ok){
        throw res
      }
      return res.json()
    })
    .then(function (data) {
      console.log(data)
      setRepos(data)
    })
    .catch((err)=>{
      console.log(err)
      setRepos(null)
    })
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="info">
        <img src='/background.png' alt="background"/>
        <div className="ctn">
          <Input onClick={()=>{handleGetData()}} onChange={handleUser} value={value}></Input>
          {user && <Profile data={user}/>}
          {repos && (
            <><h1>Repositórios</h1><ItemsList data={repos} /></>
          )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
