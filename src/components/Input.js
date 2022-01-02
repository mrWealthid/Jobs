import React from 'react';

const Input = ({ type, name, value, onchange }) => {
  return (
    <>
      <input
        type={type}
        className=' border rounded p-2'
        name={name}
        value={value}
        onChange={onchange}
      />
    </>
  );
};

// Input.defaultProps = {
//     onchange: handleChangeLogin,
//   };

export default Input;
