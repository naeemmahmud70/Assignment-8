import React from 'react';
import male from '../../male.png'
import female from '../../female.png'
import './Conditional.css'

const Conditional = (props) => {
    const gender = props.gender;
    let url;
    if(gender==="Male"){
        url= <img src={male} alt=""/>
    }
    else{
        url = <img src={female} alt=""/>
    }
    return (
        <div className="gender-style">
            {url}
        </div>
    );
};

export default Conditional;