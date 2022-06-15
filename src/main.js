
import React,{useState,useEffect} from 'react';
import './style.scss';
import { v4 as uuid } from 'uuid';
import logo from './images/logo.png'
import { BsArrowRight } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

const iconStyle = {
  fontSize: "90%",
  marginRight: '10px'
}
const delete_icon_Style = {
  fontSize: "20px",
  color: "red"
}
const like_icon_Style = {
  color: "blue"
}

function App() {
    const [data, setdata] = useState([]);
    const [country, setCountry] = useState("")
    const [liked_schools, pushLikedShool] = useState([]);
    
    // fetch data
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if(data !== ""){
          setdata(data)
        }else{
          console.log('Please check the spelling')
        }
      }catch (error) { console.log("error", error)}
    }

    // set default country
    useEffect( ()=>{
      if(country !== ""){
        const userCountry = `http://universities.hipolabs.com/search?country=${country}`
        fetchData(userCountry);
      }else{
        const defaultCountry = 'http://universities.hipolabs.com/search?country=Belgium'
        fetchData(defaultCountry);
      }
    })
   
    // collect your liked universties
    const likeSchool = function(school) {
      pushLikedShool(liked_schools => [...liked_schools, school])
    }
    const schoolLiked = function(name) {
        return liked_schools.some(function(school) {
          return school.name === name; 
      });
    }
 
    // remove from fav box
    const handleRemoveItem = (e) => {
      const name = e.target.getAttribute("name")
      pushLikedShool(liked_schools.filter(item => item.name !== name))
      };

    

  return (
    <main className="container">

          <section id='form_container'>
              <input id="input" type="text" placeholder="put country name here" value={country} onChange={e => setCountry(e.target.value)}></input>
              <h2> We Found <i id='data_length'>{data.length ++}</i> Universities In  </h2> {country === ''? <h2 className='countryname'>BELGIUM</h2>: <h2 className='countryname'>{country}</h2>}
          </section>

        <article>

              <section className='box_container'>
                 <div id="small_screen_header">
                   <h3> List Of Universities In </h3> {country === ''? <h3 className='countryname'>BELGIUM</h3>: <h3 className='countryname'>{country}</h3>}
                </div> 
                 {data.map((school) => {
                   let liked = schoolLiked(school.name)
                  return (
                    <div id='box' key={uuid()}>
                      <button className='liked_button' onClick={() => likeSchool(school)} disabled={liked} ><BsHeartFill style={like_icon_Style}/></button>
                      <h3>{school.name}</h3>
                      <div id='universty_web'>
                        <BsArrowRight style={iconStyle} />
                        <a href={school.web_pages} target="_blank" rel="noreferrer">Visit website</a>
                      </div>
                      </div>
                  )
                })}
              </section>

              
            <section className='liked_box_container'>
                  <h3>Your Dream Schools</h3>
                  {liked_schools.map((school) => (
                    <div id='liked_box' key={uuid()}>
                      
                      <h3>{school.country}</h3>
                      <h3>{school.name}</h3>
                      <div id='universty_web'>
                        <BsArrowRight style={iconStyle} />
                        <a href={school.web_pages} target="_blank" rel="noreferrer">Visit website</a>
                      </div>
                    <button className='unliked_button' name={school.name} onClick={handleRemoveItem}><TiDelete style={delete_icon_Style }/></button>
                    </div>
                  ))}
            </section>

        </article>

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
