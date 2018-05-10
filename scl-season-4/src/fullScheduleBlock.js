import React from 'react';
import Divisions from './divisions';
import MatchTable from './matchTable';


const FullSchedule = props => {
  const matchData = props.matchData.filter(
    (match) => 
    {return match.league == props.selectedLeague
    })
 return (
  <div>
  <Divisions
    selectedLeague={props.selectedLeague}
    getSelectedLeague={props.getSelectedLeague}
    />
      <MatchTable
        matchData={matchData}
        filterMethod={props.filterMethod}
      />
</div>
  )
}

export default FullSchedule;