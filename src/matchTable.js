import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

const MatchTable = props => {
  const matchData = props.matchData ? props.matchData : []
  const  getButtonForReplays = row => {
    return row.row.matchUrl ? <a className="green cursor" onClick={() => props.getGameRecap(row.original.id)}>RESULTS</a> : 'N/A'
  }
  const getFlagForPlayer1 = row => {
    return <div className="text-left"><span className={`flag-icon flag-icon-${row.original.player1.country}`}> </span> {row.original.player1.name}</div>
  }
    const getFlagForPlayer2 = row => {
    return <div className="text-left"><span className={`flag-icon flag-icon-${row.original.player2.country}`}> </span> {row.original.player2.name}</div>
  }

    const columns = [
        {
      Header: 'Week',
      accessor: 'week'
    },
    {
      Header: 'Player',
      accessor: 'player1.name',
      Cell: getFlagForPlayer1
    },
    {
      Header: 'Player',
      accessor: 'player2.name',
      Cell: getFlagForPlayer2  
    },
        {
      Header: 'Game Information',
      accessor: 'matchUrl',
      Cell: getButtonForReplays,
      filterable: false
    }]
return (
  <div className="h4 table-size">
    <ReactTable 
    defaultFilterMethod={props.filterMethod}
    className="-striped -highlight text-center" 
    data={matchData} 
    columns={columns} 
    defaultPageSize={15}
    pageSizeOptions={[15, 20, 30, 100]}
    />
  </div>
  )
}
MatchTable.defaultProps = {
  matchData: []
}
MatchTable.propTypes = {
  matchData: PropTypes.arrayOf(PropTypes.shape({
      league: PropTypes.string,
      matchType: PropTypes.string,
      matchUrl: PropTypes.string
    }))
};
export default MatchTable