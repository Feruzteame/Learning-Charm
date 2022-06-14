
import React,{useState,useEffect} from 'react';
import './style.scss';
import { v4 as uuid } from 'uuid';
import logo from './images/logo.png'
import { BsArrowRight } from "react-icons/bs";

const iconStyle = {
  fontSize: "90%",
  marginRight: '10px'
}

function App() {
    const [data, setdata] = useState([]);
    const [country, setCountry] = useState("")


    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if(data !== ""){
          setdata(data)
          // console.log(data)
        }else{
          console.log('Please check the spelling')
        }
      }catch (error) { console.log("error", error)}
    }


    useEffect( ()=>{
      if(country !== ""){
        const userCountry = `http://universities.hipolabs.com/search?country=${country}`
        fetchData(userCountry);
      }else{
        const defaultCountry = 'http://universities.hipolabs.com/search?country=Belgium'
        fetchData(defaultCountry);
      }
    })

      return (
        <main className="container">

          <section id='form_container'>
          <input 
            id="input"
            type="text" 
            placeholder="put country name here"
            value={country} onChange={e => setCountry(e.target.value)}
            ></input>
            <h2> We Found <i id='data_length'>{data.length}</i> Universities In  </h2> {country === ''? <h2 className='countryname'>BELGIUM</h2>: <h2 className='countryname'>{country}</h2>}
        </section>
        
        <section id='box_container'>
        {data.map((school) => (
          <div id='box' key={uuid()}>
            <h3>{school.name}</h3>
            <div id='universty_web'>
              <BsArrowRight style={iconStyle} />
              <a href={school.web_pages} target="_blank" rel="noreferrer">Visit website</a>
            </div>
           </div>
        ))}
        </section>

        <footer>
          <img src={logo} alt="logo" id='logo'></img>
          <ul>
            <li><span>Address</span>: belgium Brussels</li>
            <li><span>Telephone</span>: 00000000</li>
            <li><span>Contact-Us</span>: learning_charm@gmail.com</li>
            <li id='copyRight'><span>Copyright © 2022. All right reserved</span></li>
          </ul>
        </footer>
      </main>
      );
}

export default App;
