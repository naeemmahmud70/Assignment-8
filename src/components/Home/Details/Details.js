import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import facebook from '../../../Facebook.png';
import youTube from '../../../YouTube.png';
import twitter from '../../../Twitter.png'
import Conditional from '../../Conditional/Conditional';
import './Details.css'
import flag from '../../../flag (1) 1.png';
import sports from '../../../football (1) 1.png';
import founded from '../../../found 1.png';
import gender from '../../../male-gender-sign 1.png'

const Details = () => {
    const {teamId} = useParams()
    const [team, setTeam] = useState([])
    const {strTeamBanner, strTeam, intFormedYear, strSport, strGender, strDescriptionDE, strDescriptionEN} = team;
    console.log(team)
    useState(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[teamId])
    return (
        <div className="container bg-dark">
           <img className="image-responsive" src={strTeamBanner} alt=""/>
           <div className="row mt-2 rounded bg-primary mx-auto w-75">
           <div className="col-md-8 text-white icons">
               <h2> <img src={flag} alt=""/>{strTeam}</h2>
               <h5> <img src={founded} alt=""/> Founded: {intFormedYear}</h5>
               <h5> <img src={sports} alt=""/> Spots: {strSport}</h5>
               <h5> <img src={gender} alt=""/> Gender: {strGender}</h5>
           </div>
           <div className="col-md-4">
               <Conditional gender = {strGender} ></Conditional>
           </div>
           </div>

           <div className="text-white ">
               <p className="text-justify">{strDescriptionDE}</p><br/>
               <p className="text-justify">{strDescriptionEN}</p>
           </div>
           <div className="icon-style text-center">
               <a href="https://www.facebook.com/"><img src={facebook} alt=""/></a>
               <a href="https://www.youtube.com/"><img src={youTube} alt=""/></a>
               <a href="https://twitter.com/"><img src={twitter} alt=""/></a>
           </div>
        </div>
    );
};

export default Details;