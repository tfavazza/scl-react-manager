import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import matchSorter from 'match-sorter';

const MatchTable = props => {
  const matchData = props.matchData ? props.matchData : []
  const  getButtonForURL = row => {
    return row.row.matchUrl ? <a className="btn btn-info" href={`${row.row.matchUrl}`}>Download Game</a> : 'N/A'
  }



    const columns = [{
      Header: 'League',
      accessor: 'league'
    }, 
    {
      Header: 'Replay Files',
      accessor: 'matchUrl',
      Cell: getButtonForURL
    },
    {
      Header: 'Player',
      accessor: 'player1.name',
      filterMethod: props.filterMethod
    },
    {
      Header: 'Player',
      accessor: 'player2.name',
      filterMethod: props.filterMethod  
    }]
return (
  <div className="padding">
    <ReactTable 
    filterable
    defaultFilterMethod={props.filterMethod}
    className="-striped -highlight" data={matchData} columns={columns} 
    defaultPageSize={30}
    pageSizeOptions={[30, 50, 100]}
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