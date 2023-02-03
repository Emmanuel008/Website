import React from 'react';
import logo from './assets/notdanLogo.png'

export default class Header extends React.Component{
    render(){
      return (
        <div className="Header">
          <div className='Container'>
              <nav id='navbar' className="navbar">
                <div id='nav-container' className="container d-flex flex-column justify-content-center ">
                  <img id='nav-logo' src={logo} alt="!Dan"></img>
                    <h1 id='page-heading'>Markdown Previewer</h1>
                </div>
              </nav>
          </div>
        </div>
    );}
}
    