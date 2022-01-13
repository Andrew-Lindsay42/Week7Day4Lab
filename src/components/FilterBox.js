import React from 'react';

const FilterBox = ({setSearch}) => {

    const handleChange = function(event) {
        setSearch(event.target.value);
      }

    return(
        <>
            <input type="text" onChange={handleChange} />
        </>
    )
};

export default FilterBox;