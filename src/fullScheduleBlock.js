import React from 'react';
import Divisions from './divisions';
import MatchTable from './matchTable';


const FullSchedule = props => {
  const matchData = props.matchData.filter(
    (match) => 
    {return match.league === props.selectedLeague
    })
 return (
  <div className="numbers-row text-center">
  <Divisions
    selectedLeague={props.selectedLeague}
    getSelectedLeague={props.getSelectedLeague}
    /><div className="h3 text-center col-lg-12 col-md-12 col-sm-12">Click the icons above to view the full schedule for that league</div>
      <MatchTable
        matchData={matchData}
        filterMethod={props.filterMethod}
        getGameRecap={props.getGameRecap}
      />
</div>
  )
}

export default FullSchedule;