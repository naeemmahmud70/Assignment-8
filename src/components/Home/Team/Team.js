import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Team = ({team}) => {
    const {strTeam, strSport, strTeamLogo, idTeam} = team
    return (
        <div className="div-style shadow">
            <img src={strTeamLogo} alt=""/>
            <h2>{strTeam}</h2>
            <h5>Spots: {strSport}</h5>
            <Link to={"/team/"+idTeam}><button className="btn-style shadow">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></button></Link>
        </div>
    );
};

export default Team;