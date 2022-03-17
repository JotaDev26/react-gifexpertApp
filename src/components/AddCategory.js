import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(" ");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // hacemos una validación del inputValue
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      // borramos su valor defecto cada que se renderiza para no hacer un doble posteo
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

// hacemos validacion de las props
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
