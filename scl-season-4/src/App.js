import React, { Component } from 'react';
import logo from './scl-4.jpeg';
import './App.css';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data: []
    }
  }
  defaultProps = {
    data: []
  }
  propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      forfeitText: PropTypes.string,
      league: PropTypes.string,
      matchType: PropTypes.string,
      matchUrl: PropTypes.string
    }))
  }

  componentDidMount = () => {
    fetch("https://scl.spypartyfans.com/api/match/all")
    .then(res => res.json())
    .then(res => this.setState( { data: res}))
  };

  render() {
    const data = this.state.data
    console.log(data)
    const columns = [{
      Header: 'Forfeit',
      accessor: 'forfeitText' // String-based value accessors!
    }, {
      Header: 'League',
      accessor: 'league',
    }, {
      Header: 'Match Type',
      accessor: 'matchType'
    }, {
      Header: 'Match Url',
      accessor: 'matchUrl'
    }]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Spy Party Competitive League Season Four</h1>
        </header> 
        <ReactTable className="-striped -highlight" data={data} columns={columns} />
      </div>

    );
  }
}

export default App;
