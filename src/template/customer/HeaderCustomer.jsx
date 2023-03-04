import React from 'react'
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import "./customer.scss"

const HeaderCustomer = () => {
  return (
    <div className="header">
    <div className="row">
      <div className="col-md-2 text-center">
        LOGO
      </div>
      <div className="col-md-8">
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Product
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Product1</a></li>
            <li><a class="dropdown-item" href="#">Product2</a></li>
            <li><a class="dropdown-item" href="#">Product3</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Sale</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
     
    </div>
    <div className="search row">
      <div className="col-2 text-center">
        <BsSearch className="icon-search"/>
      </div>
      <div className="col-10">
        <input type="text" placeholder="Xinh đẹp tuyệt vời"/>
      </div>
      </div>
  </div>
</nav>
      </div>
      <div className="col-md-2">
        <span className='mx-5'>Cart</span>
        <span>User</span>
        </div>
    </div>
    </div>
  )
}

export default HeaderCustomer