import React from 'react';
import PlayerBlock from './playerBlock';



const WeekBlock = props => {
	const arrayOfNumbers = Array.from(new Array(10),(val,index)=>index+1);;
 return (<div>
 	<div className="numbers-row">
 	{arrayOfNumbers.map(number => {
 		return (
 			<button 
 				key={number}
 				name={number} 
 				// eslint-disable-next-line
 				className={`${props.selectedWeek == number && "btn-primary"} h1 btn cursor big-font text-center col`} 
 				onClick={e => props.getGamesForAWeek('selectedWeekGames', e.target.name)}
 			>{number}
 			</button>)
 	})}
 	<button key="postseason" name="postseason" className={`${props.selectedWeek == 'postseason' && "btn-primary"} h1 btn cursor big-font text-center col`} onClick={e => props.getGamesForPostSeason('selectedWeekGames', e.target.name)}>Playoffs</button>
 	</div>
  {props.selectedWeekGames && <div className="container"><PlayerBlock 
    gamesThisWeek={props.selectedWeekGames}
    getGameRecap={(value) => props.getGameRecap(value)}
    getPlayerSchedule={(name) => props.getPlayerSchedule(name)}
  /> </div>} 
</div>
  )
}

export default WeekBlock;