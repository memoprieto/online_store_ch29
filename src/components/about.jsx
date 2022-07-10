import {useState} from "react";

const About=()=>{
  const [visible, setVisible]=useState(false);

    const changeVisibility=()=>{
      if (visible === true) {
        setVisible(false);
      } else{
        setVisible(true);
      }
        
    }

    return (
        <div>
            <h1>About me</h1>
            <h3>Guillermo</h3>

            {visible ? <h4>memoprieto79@hotmail.com</h4>: "Click on the button below" }
            <button onClick={changeVisibility}>Show info</button>
        </div>
    );
}

export default About;


/**
 * 
 * create an state var (visible), initial value is false
 * click on button call a function
 * function set visible to true
 *  
 */