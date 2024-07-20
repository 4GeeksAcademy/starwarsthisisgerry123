import React from "react";

import "../../styles/home.css";

export const Home = () => (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-md-end">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo.jpg" width="75" height="50"></img>
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" class="btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-divider"></a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div className="text-center mt-5">
      <div className="container horizontal-scrollable">
        <div className="row text-center">
          <div className="col-xs-4">1</div>
          <div className="col-xs-4">2</div>
          <div className="col-xs-4">3</div>
          <div className="col-xs-4">4</div>
          <div className="col-xs-4">5</div>
          <div className="col-xs-4">6</div>
          <div className="col-xs-4">7</div>
        </div>
      </div>
    </div>
  </>
);
