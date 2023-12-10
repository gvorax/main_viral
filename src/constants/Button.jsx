import React from 'react';
import './buttons.scss';

const Button = ({title,color}) => {
  return (
    <button className={`button ${color}`}>
        <div/>
        <div/>
        <span>{title}</span>
        </button>
  )
}

export default Button