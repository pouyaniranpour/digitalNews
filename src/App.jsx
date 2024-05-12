import './App.css'
// import Hamburger from './assets/hamburger.svg'
// import CloseIcon from './assets/closeIcon.svg'
import { useState } from 'react'

// import Logo from './assets/logo2.png'

function App() {
  const [menuToggled, setMenuToggled] = useState();

  function toggleMenu () {
    setMenuToggled (!menuToggled);
  }

  
  
  function renderLinks() {
    return(
      <ul className='links' style= {{maxHeight: menuToggled && '200px'}}>
                <li>News</li>
                <li>Contact</li>
                <li>About</li>
                <li className='loginBtn'>Login</li>
            </ul >
            )  
  }

  return (
    <div className='mainContainer'>
    <div className="mobileContainer">
      <div className="navbar">
        <img className="logo" src="/logo2.png" />
        <img
          onClick={toggleMenu}
          className="hamburgerIcon"
          src={menuToggled ? "/closeIcon.svg" : "/hamburger.svg"}
        />
        {renderLinks()}
      </div>
      <div className="topArea">
        <div className="topText">DIGITAL NEWS</div>
        <div className="searchContainer">
          <input type="text" className="searchBar" />
          <button className="searchBtn">SEARCH</button>
        </div>

        
      </div>
<div className="placeholderContainer">
            <div className="placeholder">
              <img className="image" src="/boardroom.jpg" alt="" />
              <footer className="footer">
                <strong>Lorem ipsum</strong> <br /> est venenatis
              </footer>
            </div>
            <div className="placeholder">
              <img className="image" src="/agreement.jpg" alt="" />
              <footer className="footer">
                <strong>Lorem ipsum</strong> <br /> est venenatis
              </footer>
            </div>
            <div className="placeholder">
              <img className="image" src="/paper.jpg" alt="" />
              <footer className="footer">
                <strong>Lorem ipsum</strong> <br /> est venenatis
              </footer>
            </div>
          </div>  
          
      <div className='pageFooter'>© 2024 Marketing Association NZ.  All rights reserved</div>
      </div>
        
    </div>
  );
}

export default App