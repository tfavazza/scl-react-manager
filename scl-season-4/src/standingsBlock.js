import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import matchSorter from 'match-sorter';
import Divisions from './divisions'

const StandingsTable = props => {
  const standingsData = props.standingsData ? props.standingsData.players : []
  const  getButtonForURL = row => {
    return row.row.matchUrl ? <a className="btn btn-info" href={`${row.row.standingsData}`}>Download Game</a> : 'N/A'
  }
  const getPlayerLink = row => {
    return row.row.name ? <a className="cursor" name={row.row.name} onClick={(e) => props.getPlayerInfo(e.target.name)}>{row.row.name}</a> : ''
  }



    const columns = [{
      Header: 'Name',
      accessor: 'name',
      Cell: getPlayerLink
    },
    {
      Header: 'Score',
      accessor: 'score'
    }, 
    {
      Header: 'Wins',
      accessor: 'wins'
    },
    {
      Header: 'Losses',
      accessor: 'losses'
    }]
return (
  <div className="padding">
    <Divisions
      getSelectedLeague={props.getSelectedLeague}
      selectedLeague= {props.selectedLeague}
    />
    <div className="react-table">
    <ReactTable 
    filterable
    defaultFilterMethod={props.filterMethod}
    className="-striped -highlight" data={standingsData} columns={columns} 
    defaultPageSize={10}
    pageSizeOptions={[10, 20, 30]}
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