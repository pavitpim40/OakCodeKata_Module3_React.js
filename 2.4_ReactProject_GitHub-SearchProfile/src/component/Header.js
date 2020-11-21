import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return (
      <div className="jumbotron">
        <h1>Github Search App</h1>
        <h2>Search users in GitHub using this simple React application.</h2>
        <p>Click on the card to see more detail about individual user. The search default is nsebhastian (me!)</p>
      </div>
    );
  };

export default Header;