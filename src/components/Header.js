import React from 'react'
import {Link} from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

// 818103712258-4t3k9s81ch38lk3d49psnihkhjn69ups.apps.googleusercontent.com
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">       
        <Link to="/" className="item">
          All Streams
        </Link>

        <GoogleAuth></GoogleAuth>

      </div>
    </div>
  );
}

export default Header