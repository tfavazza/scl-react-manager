import React from 'react';
import PlayerBlock from './playerBlock';



const prevWeeksBlock = props => {
	const prevWeekGames = props.prevWeekGames || [];
	const arrayOfNumbers = Array.from(new Array(10),(val,index)=>index+1);;
 return (<div>
 	{arrayOfNumbers.map(number => {
 		return <a name={number} className="h1 cursor padding" onClick={e => props.getGamesForAWeek('prevWeekGames', e.target.name)}>{number}</a>
 	})}
  {props.prevWeekGames && <PlayerBlock 
    gamesThisWeek={props.prevWeekGames}
    getGameRecap={(value) => props.getGameRecap(value)}
  /> } 
</div>
  )
}

export default prevWeeksBlock;