import React, {useState, useEffect} from 'react';
import RadioBtn from './RadioBtn.jsx';

export default function GenericComp(props){

  const [radioBtnClicked, setRadioBtnClicked] = useState(false);

  let toggleRadioBtn = function(){
    setRadioBtnClicked(!radioBtnClicked);
  }

  return(
    <div>
      <h2>My Component</h2>
      <RadioBtn toggle={toggleRadioBtn} clicked={radioBtnClicked}/>
    </div>
  )

}
