import React from 'react';

import './title.styles.scss'

const Title = props => {
  return (
    <h1 className={`title ${props.className}`}>{props.title}</h1>
  )
};

export default Title;
