import React from 'react';


const PersonalCard = ({ cardHeader, text }) => (
  <div className="bg-green-100 border-width-2 rounded w-96 h-48 p-5 m-3">
    <h1>{cardHeader}</h1>
    <p>{text}</p>
  </div>
);

export default PersonalCard;
