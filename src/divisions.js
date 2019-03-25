import React, { Component } from 'react';

class Divisions extends Component {
  render() {
 return (<div className="row text-center leagues">
  <div className={`cursor ${this.props.selectedLeague === 'Diamond' ? "selected": ''} big-button btn col-md-4 col-sm-4`} name="Diamond" id="Diamond" onClick={() => this.props.getSelectedLeague("Diamond")}>Coal</div>
  <div className={`cursor ${this.props.selectedLeague === 'Platinum' ? "selected": ''} big-button btn col-md-4 col-sm-4`} name="Platinum" id="Platinum" onClick={() => this.props.getSelectedLeague("Platinum")}>Seagull</div>
  <div className={`cursor ${this.props.selectedLeague === 'Gold' ? "selected": ''} big-button btn col-md-4 col-sm-4`} name="Gold" id="Gold" onClick={() => this.props.getSelectedLeague("Gold")}>Bookcase</div>
  <div className={`cursor ${this.props.selectedLeague === 'Silver' ? "selected": ''} big-button btn col-md-4 col-sm-4`} name="Silver" id="Silver" onClick={() => this.props.getSelectedLeague("Silver")}>Kiel</div>
  <div className={`cursor ${this.props.selectedLeague === 'Bronze' ? "selected": 'Bronze'} big-button btn col-md-4 col-sm-4`} name="Bronze" id="Bronze" onClick={() => this.props.getSelectedLeague("Bronze")}>Banana</div>
  <div className={`cursor ${this.props.selectedLeague === 'Copper' ? "selected": ''} big-button btn col-md-4 col-sm-4`} name="Copper" id="Copper" onClick={() => this.props.getSelectedLeague("Copper")}>Bread</div>
  <div className={`cursor ${this.props.selectedLeague === 'Iron' ? "selected": ''} big-button btn col-md-4 col-sm-4`} name="Iron" id="Iron" onClick={() => this.props.getSelectedLeague("Iron")}>Turing</div>
  <div className={`cursor ${this.props.selectedLeague === 'Obsidian' ? "selected": ''} big-button btn col-md-4 col-sm-4`} name="Obsidian" id="Obsidian" onClick={() => this.props.getSelectedLeague("Obsidian")}>Salt</div>
  <div className={`cursor ${this.props.selectedLeague === 'Oak' ? "selected": ''} big-button btn col-md-4 col-sm-4`} name="Oak" id="Oak" onClick={() => this.props.getSelectedLeague("Oak")}>Owl</div>
  <div className={`cursor ${this.props.selectedLeague === 'Challenger' ? "selected": ''} big-button btn col-md-4 col-sm-4`} name="Challenger" id="Challenger" onClick={() => this.props.getSelectedLeague("Challenger")}>Ouroboros</div>
  </div>
  )

  }
}

export default Divisions