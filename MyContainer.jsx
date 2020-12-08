import React, {useState} from 'react';
import RadioButtonComponent from './RadioButtonComponent.jsx';

export default function MyContainer(){

  const getRadioOptions = (val) =>{
    console.log('radio options from buttons is: '+val);
  }

  return(
    <div>
    My Container
      <RadioButtonComponent all_day={true} specific_time={false} sendSelection = {getRadioOptions}/>
    </div>

  )
}
