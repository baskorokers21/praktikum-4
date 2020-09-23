import React from 'react';
import Utama from './Covid_web/Utama';
import {Link} from 'react-router-dom';



class App extends React.Component {
  render() {
    return(
      <div> <hr />
      <nav className="navbar navbar-expand-sm bg-info navbar-dark">
  <a className="navbar-brand" href="#">
    <img src="prof.jpg" alt="logo"  weight="40"  height="40"  ></img> 
  </a>

  <ul className="navbar-nav">
    <li className="navbar-nav active">
      <a className="nav-link" href="Covid">Covid <span className="sr-only"></span></a>
    </li>
    <li className="navbar-nav active">
      <a className="nav-link" href="Gallery">Gallery <span className="sr-only"></span></a>
    </li>
    <li className="navbar-nav active">
      <a className="nav-link" href="Hari_besar">Daftar terkena Covid <span className="sr-only"></span></a>
    </li>
      <Link to="/list" className="nav-link">List</Link> 
      <a className="nav-link" href="List">List<span className="sr-only"></span></a>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbardropdown" data-toggle="dropdown">
        semuanya
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="Covid">Covid</a>
        <a className="dropdown-item" href="Gallery">Gallery</a>
        <a className="dropdown-item" href="Hari_besar">Daftar</a>
      </div>
    </li>
  </ul>

</nav>
      <p><Utama /></p>
      </div>
    )
  }
}

export default App;