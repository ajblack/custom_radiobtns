import React, {useState, useEffect} from 'react';
import SelectedRadio from './assets/radio_btn_selected.svg';
import UnselectedRadio from './assets/radio_btn_not_selected.svg';

import './RadioButtonComponent.css';

export default function RadioButtonComponent(props){

  const [allDay, setAllDay] = useState(false);
  const [specificTime, setSpecificTime] = useState(false);

  useEffect(()=>{
    console.log(props);
    if(props.all_day){
      setAllDay(props.all_day);
    }
    if(props.specific_time){
      setSpecificTime(props.specific_time);
    }
  },[])

  useEffect(()=>{
    let selection = 'none';
    if(specificTime){
      selection = 'specificTime';
    }
    else if(allDay){
      selection = 'allDay';
    }
    props.sendSelection(selection)
  })

  const handleAllDayChange = (val) =>{
    if(specificTime && val){
      setSpecificTime(false);
    }
    setAllDay(val);
  }

  const handleSpecificTimeChange = (val) =>{
    if(allDay && val){
      setAllDay(false);
    }
    setSpecificTime(val);
  }

  return(
    <div className="radioBtnComponent">
      <div>
        <img className={allDay ? '':'not-showing'} onClick={()=>handleAllDayChange(false)} src={SelectedRadio}/>
        <img className={allDay ? 'not-showing':''} onClick={()=>handleAllDayChange(true)} src={UnselectedRadio}/>
        <span>All Day</span>
      </div>
      <div>
        <img className={specificTime ? '':'not-showing'} onClick={()=>handleSpecificTimeChange(false)} src={SelectedRadio}/>
        <img className={specificTime ? 'not-showing':''} onClick={()=>handleSpecificTimeChange(true)} src={UnselectedRadio}/>
        <span>Specific Times</span>
      </div>
    </div>
  )
}
