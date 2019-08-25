import React from 'react';
import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="banner">

      </div>
      <div className="container">
        <Directory/>
      </div>
    </div>
  )
};

export default HomePage;
