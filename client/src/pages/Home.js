import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <div>
          <li className="active"><Link to="/">{'Home'}</Link></li>
          <li className="active"><Link to="/signup">{'Signup'}</Link></li>
      </div>
  );
};

export default Home;
