
import React, { useState,useEffect } from 'react';
import './style.scss';
import { v4 as uuid } from 'uuid';
import logo from '../images/logo.png';
import { BsArrowRight, BsHeartFill } from 'react-icons/bs';
import { TiDelete } from 'react-icons/ti';

const iconStyle = {
  fontSize: '90%',
  marginRight: '10px'
};

const deleteIconStyle = {
  fontSize: '20px',
  color: 'red'
};

const likeIconStyle = {
  color: 'blue'
};

function Main() {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState('Belgium');
  const [likedSchools, setLikedSchools] = useState([]);

  // fetch data
  const fetchData = async () => {
    const url = `http://universities.hipolabs.com/search?country=${country}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (json) {
        setData(json);
      } else {
        console.log('Please check the spelling');
      }
    } catch (error) {
      console.log('error', error);
    }
  };
   
  // set default country
  useEffect(() => {
    fetchData();
  }, [country]);

  // collect your liked universities
  const likeSchool = (school) => {
    setLikedSchools(likedSchools => [...likedSchools, school]);
  };

  const schoolLiked = (name) => {
      return likedSchools.some((school) => {
        return school.name === name; 
    });
  };

  // remove from fav box
  const handleRemoveItem = (name) => {
    setLikedSchools(likedSchools.filter(item => item.name !== name));
  };

  return (
    <main className='container'>
      <section id='form_container'>
        <input
        id='input'
        type='text'
        placeholder='put country name here'
        value={ country }
        onChange={ (e) => setCountry(e.target.value) } />
        <h2>
          We Found <i id='data_length'>{ data.length ? (data.length + 1) : data.length }</i> Universities In
        </h2>
        <h2 className='country_name'>
          { country }
        </h2>
      </section>
      <article>
        <section className='box_container'>
          <div id='small_screen_header'>
            <h3>
              List Of Universities In
            </h3>
            <h3 className='country_name'>
              { country + 1 }
            </h3>
          </div> 
          {data.map((school) => {
            const liked = schoolLiked(school.name);
            return (
            <div className='box' key={ uuid() }>
              <button
              className='liked_button'
              onClick={ () => likeSchool(school) }
              disabled={ liked }>
                <BsHeartFill style={ likeIconStyle } />
              </button>
              <h3>
                { school.name }
              </h3>
              <div className='university_web'>
                <BsArrowRight style={ iconStyle } />
                <a href={ school.web_pages } target='_blank' rel='noreferrer'>
                  Visit website
                </a>
              </div>
            </div>
            );
          })}
        </section>
        <section className='liked_box_container'>
          <h3>
            Your Dream Schools
          </h3>
          {likedSchools.map((school) => (
            <div className='liked_box' key={ uuid() }>
              <h3>
                { school.country }
              </h3>
              <h3>
                { school.name }
              </h3>
              <div className='university_web'>
                <BsArrowRight style={ iconStyle } />
                <a href={ school.web_pages } target='_blank' rel='noreferrer'>
                  Visit website
                </a>
              </div>
              <button
              className='unliked_button'
              name={ school.name }
              onClick={ () => handleRemoveItem(school.name) }>
                <TiDelete style={ deleteIconStyle } />
              </button>
            </div>
          ))}
        </section>
      </article>
      <footer>
        <img src={ logo } alt='logo' id='logo' />
        <ul>
          <li>
            <span>Address</span>: belgium Brussels
          </li>
          <li>
            <span>Telephone</span>: 00000000
          </li>
          <li>
            <span>Contact-Us</span>: learning_charm@gmail.com
          </li>
          <li id='copy_right'>
            <span>Copyright © 2022. All right reserved</span>
          </li>
        </ul>
      </footer>
    </main>
  );
}

export default Main;
