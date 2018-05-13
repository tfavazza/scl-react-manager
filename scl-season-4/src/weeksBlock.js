import React from 'react';
import PlayerBlock from './playerBlock';



const WeekBlock = props => {
	const selectedWeekGames = props.selectedWeekGames || [];
	const arrayOfNumbers = Array.from(new Array(10),(val,index)=>index+1);;
 return (<div>
 	<div className="numbers-row">
 	{arrayOfNumbers.map(number => {
 		return (
 			<a 
 				name={number} 
 				className={`${props.selectedWeek == number && "selected"} h1 cursor big-font text-center col`} 
 				onClick={e => props.getGamesForAWeek('selectedWeekGames', e.target.name)}
 			>{number}
 			</a>)
 	})}
 	</div>
  {props.selectedWeekGames && <div className="container"><PlayerBlock 
    gamesThisWeek={props.selectedWeekGames}
    getGameRecap={(value) => props.getGameRecap(value)}
  /> </div>} 
</div>
  )
}

export default WeekBlock;