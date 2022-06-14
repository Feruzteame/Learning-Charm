
import React,{useState,useEffect} from 'react';
import './App.scss';
// import axios from "axios"

function App() {
const [data, setdata] = useState([]);

 useEffect( ()=>{
  const url = 'http://universities.hipolabs.com/search?country=Belgium'

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setdata(json)
    } catch (error) {
      console.log("error", error);
    }
  };
  fetchData();
 }, [])

 
  return (
    <div className="App">
     <h1>Learning Charm</h1>
    <div>
    {data.map((school) => (
      
      <div key={school.name}>
        <p>{school.country}</p>
        <p>{school.name}</p>
        <a href={school.web_pages}>Visit</a>
      </div>
    ))}
    </div>
      
    </div>
  );
}

export default App;
