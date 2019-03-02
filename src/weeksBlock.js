import React from 'react';
import PlayerBlock from './playerBlock';



const WeekBlock = props => {
	const arrayOfNumbers = Array.from(new Array(13),(val,index)=>index+1);;
 return (<div className="">
 	
 	<div className="numbers-row text-center">
 	{arrayOfNumbers.map(number => {
 		return (
 			<button 
 				key={number}
 				name={number} 
 				// eslint-disable-next-line
 				className={`${props.selectedWeek == number ? "btn-primary" : "btn-grey"} btn cursor big-font`} 
 				onClick={e => props.getGamesForAWeek('selectedWeekGames', e.target.name)}
 			>{number}
 			</button>)
 	})}
 	</div>
  {props.selectedWeekGames ? <div className="container"><PlayerBlock 
    gamesThisWeek={props.selectedWeekGames}
    getGameRecap={(value) => props.getGameRecap(value)}
    getPlayerSchedule={(name) => props.getPlayerSchedule(name)}
  /> </div> : <h1>Coming Soon &#8482;</h1>} 
</div>
  )
}

export default WeekBlock;