import React from 'react';
import './title.styles.scss'

const Title = ({ className, title, type }) => {
  let titleResult =  null;
  switch (type) {
    case 'h2':
      titleResult = <h2 className={`title ${className ? className : ''}`}>{title}</h2>;
      break;
    case 'h3':
      titleResult = <h3 className={`title ${className ? className : ''}`}>{title}</h3>;
      break;
    default:
      titleResult = <h1 className={`title ${className ? className : ''}`}>{title}</h1>;
  }

  return titleResult;
};

export default Title;
