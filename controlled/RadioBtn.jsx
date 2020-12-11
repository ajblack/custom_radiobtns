import React from 'react';
import './RadioBtn.css';
import SelectedRadio from './assets/radio_btn_selected.svg';
import UnselectedRadio from './assets/radio_btn_not_selected.svg';

export default function RadioBtn(props){

  return(
    <div className="radioBtnComponent">
      <div>
        <img className={props.clicked ? '':'not-showing'} onClick={props.toggle} src={SelectedRadio}/>
        <img className={props.clicked ? 'not-showing':''} onClick={props.toggle} src={UnselectedRadio}/>
        <span>All Day</span>
      </div>
    </div>
  )


}
