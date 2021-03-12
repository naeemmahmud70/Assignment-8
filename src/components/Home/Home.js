import React from 'react';
import { useEffect, useState } from 'react';
import Team from './Team/Team';
import './Home.css'
import Header from '../Header/Header';

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (

        <div className="container bg-dark">
            <Header></Header>
            <div className="divStyle">
            {
                teams.map(team => <Team team={team} key={team.idTeam}></Team>)
            }
            </div>
        </div>
    );
};

export default Home;