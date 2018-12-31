import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 

    return (
      <div className="left-sidebar">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="nav-devider"></li>
              <li className="nav-label"><Link to="/">Dashboard</Link></li>
              <li>
                <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-wrench"></i><span className="hide-menu">Settings </span></a>
                <ul aria-expanded="false" className="collapse">
                  <li><Link to="/feature/">Feature</Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
 
export default SideBar;