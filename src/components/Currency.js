import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'; // Import CSS file for styling

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert custom-alert'> Currency {
      <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
        <option value="$">($ Dollar)</option>
        <option value="£">(£ Pound)</option>
        <option value="€">(€ Euro)</option>
        <option value="₹">(₹ Ruppee)</option>
        
        
      </select>	
      }	
    </div>
    );
};

export default Currency;
