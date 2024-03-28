import React from 'react'
import logo from '../Images/ju_logo.png'
import background  from '../Images/jucse.jpg'
import './Home1.css'
import { Link } from 'react-router-dom';
const Home1 = () => {

    const handleClick = () => {
        window.location.href = 'https://juniv.edu/department/cse';
      };

      const linkStyle = {
        textDecoration: 'none', // This removes the underline
        color: 'blue', // This makes the link inherit the color from its parent
      };

  return (
    <div style={{ 
        backgroundImage: `url(${background})`,
        backgroundColor: 'LightGray',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        height:"730px",
        width:"1528px"
      }}>
        <div className='main1'>
        <h1 class="title">Examination Bill Management System</h1>
        <img  src={logo} alt="Logo of JU"  class="image"></img>
       
           <div>
            <p><strong> <a href="https://juniv.edu/department/cse" onClick={handleClick} style={linkStyle}>
            Department of Computer Science and Engineering
            </a><br></br>
                Jahangirnagar University<br></br>
                Savar, Dhaka-1342, Bangladesh
                </strong></p>
           </div>
        </div>
        
        <Link to="https://juniv.edu/department/cse" />
    </div>
  );
};

export default Home1;