import React from "react";
import PropTypes from "prop-types";
const FilterBar = ({ options, selected, onSelect }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      {options.map(opt => (
        <button 
          key={opt} 
          onClick={() => onSelect(opt)}
          style={{ backgroundColor: selected === opt ? 'lightblue' : 'white', marginRight: '5px' }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

FilterBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
export default FilterBar;