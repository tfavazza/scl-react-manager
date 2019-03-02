import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import Divisions from './divisions'


const StandingsTable = props => {
  const formData = props.formData;
  const regexPlayers = /(?:\S+\s)?\S*vs\S*(?:\s\S+)?/;
  const getWLD = row => {
      return (<div>
        {formData[row.row.name] ? 
          formData[row.row.name].scoreSummary.map((result, index) => {
            if (result === undefined ) {
              return (<span title="unknown" className="grey courier">U</span>)
            } else if (result.startsWith('TieParty')) {
              return(<a href={formData[row.row.name].matchUrl[index]}><span title={formData[row.row.name].matchUrl[index].match(regexPlayers).map(playerName => playerName.replace(/\s/, ' ').substring(0, playerName.length - 4))} className="black courier">D</span></a>)
            }
              else if(result.startsWith(row.row.name)) {
              return (<a href={formData[row.row.name].matchUrl[index]}><span title={formData[row.row.name].matchUrl[index].match(regexPlayers).map(playerName => playerName.replace(/\s/, ' ').substring(0, playerName.length - 4))} className="green courier">W</span></a>);
            } else {
              return(<a href={formData[row.row.name].matchUrl[index]}><span title={formData[row.row.name].matchUrl[index].match(regexPlayers).map(playerName => playerName.replace(/\s/, ' ').substring(0, playerName.length - 4))} className="red courier">L</span></a>)
            }
          }
          ).concat()
         : (<span>Loading...</span>)}
        </div>)
      }
  
  const standingsData = props.standingsData ? props.standingsData.players : []
  
  const getPlayerLink = row => {
    return row.row.name ? 
    (<div className="text-left"><span className={`flag-icon flag-icon-${row.original.country}`}></span> <a className="cursor" name={row.row.name} onClick={(e) => props.getPlayerInfo(e.target.name)}>{row.row.name}</a></div>) 
    : ''
  }

  const columns = [{
      Header: 'Name',
      accessor: 'name',
      Cell: getPlayerLink,
      width: 250
    },
    {
      Header: 'Score',
      accessor: 'score',
      filterable: false
    }, 
    {
      Header: 'Wins',
      accessor: 'wins',
      filterable: false   
    },
    {
      Header: 'Losses',
      accessor: 'losses',
      filterable: false
    },
    {
      Header: 'Draws',
      accessor: 'draws',
      filterable: false
    },
    {
      Header: 'Form (click to download)',
      Cell: getWLD,
      width: 300
    }
    ]
return (
  <div className="">
    <Divisions
      getSelectedLeague={props.getSelectedLeague}
      selectedLeague= {props.selectedLeague}
    />  <div className="h4 text-center">Click a player's name to get their full schedule and match results. Hover over <strong><span className="green courier">W</span><span className="red courier">L</span><span className="courier" >D</span></strong> to see opponent, click letter to download match.</div>
    <div className="react-table table-size h4">
    <ReactTable 
    defaultFilterMethod={props.filterMethod}
    className="-striped -highlight text-center" 
    data={standingsData} 
    columns={columns}
    defaultPageSize={15}
    pageSizeOptions={[15, 20, 50, 100]}
    />
    </div>
  </div>
  )
}
StandingsTable.defaultProps = {
  standingsData: []
}
StandingsTable.propTypes = {
  standingsData: PropTypes.shape({
    league: PropTypes.string,
    players: PropTypes.array
  })
};
export default StandingsTable