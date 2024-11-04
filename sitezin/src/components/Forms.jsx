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
          <label key={valor} className='custom-radio-label' data-value={valor}>
            <input
              className='custom-radio'
              type="radio"
              id={`radio-${id}-${valor}`}
              name={`nota-${id}`}
              value={valor}
              onChange={() => onChange(id, valor)} 
            />
            <span>{valor}</span>
          </label>
        );
      })}
    </div>
  );
};

export default Forms;