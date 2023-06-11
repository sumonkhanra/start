import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
const Multi=()=>{
  
  const [options] = useState(['Value1', 'Value2', 'Value3' , 'Value4']);
  const [selectedValues] = useState(['Value1', 'Value2']);



  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center" style={{color:'MediumSeaGreen'}}>Multiselect dropdown element  with checkboxes</h1>
        <Multiselect
          style={{
            chips: {
              background: 'green',
            },
            multiselectContainer: {
              color: 'SlateBlue',
            },
            searchBox: {
              border: 'none',
              borderBottom: '1px solid blue',
              borderRadius: '0px',
            },
          }}
          // showCheckbox
          isObject={false}
          options={options}
          selectedValues={selectedValues}
      
        />
      </div>
    </>
  );

}
export default Multi;