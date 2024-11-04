/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Forms = ({pergunta, id, onChange}) => {
 

  return (
    <div>
      <h3>{pergunta}</h3>
      {[...Array(10)].map((_, index) => {
        const valor = index + 1;
        return (
          <label key={valor}>
            <input
              className='custom-radio'
              type="radio"
              id={`radio-${id}`}
              name={`nota-${id}`}
              value={valor}
              onChange={() => onChange(id, valor)} 
            />
            {valor}
          </label>
        );
      })}
    </div>
  );
};

export default Forms;