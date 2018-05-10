import React, { Component } from 'react';
import Diamond from './scl_rank_badges/scl_badge_diamond.svg'
import Platinum from './scl_rank_badges/scl_badge_platinum.svg'
import Silver from './scl_rank_badges/scl_badge_silver.svg'
import Gold from './scl_rank_badges/scl_badge_gold.svg'
import Copper from './scl_rank_badges/scl_badge_copper.svg'
import Iron from './scl_rank_badges/scl_badge_iron.svg'
import Challenger from './scl_rank_badges/scl_badge_challenger.svg'
import Bronze from './scl_rank_badges/scl_badge_bronze.svg'


class Divisions extends Component {
  render() {
 return (<div className="text-center leagues">
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className="division-figures">
      <img name="Diamond" className={this.props.selectedLeague == 'Diamond' ? "selected": ''}  src={Diamond} height="150"></img>
      <figcaption>Diamond</figcaption>
    </figure>
  </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
  <figure className="division-figures">
    <img name="Platinum" src={Platinum} className={this.props.selectedLeague == 'Platinum' ? "selected": ''} height="150"></img>
    <figcaption>Platinum</figcaption>
    </figure>
  </a>

  <a onClick={this.props.getSelectedLeague} className="cursor">
  <figure className="division-figures">
  <img name="Gold" src={Gold} className={this.props.selectedLeague == 'Gold' ? "selected": ''} height="150"></img>
        <figcaption>Gold</figcaption>
    </figure>
    </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className="division-figures">
      <img name="Silver" className={this.props.selectedLeague == 'Silver' ? "selected": ''} src={Silver} height="150"></img>
        <figcaption>Silver</figcaption>
    </figure>
      </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className="division-figures">
    <img name="Bronze" className={this.props.selectedLeague == 'Bronze' ? "selected": ''} src={Bronze} height="150"></img>
      <figcaption>Bronze</figcaption>
    </figure>
    </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className="division-figures">
      <img name="Copper" className={this.props.selectedLeague == 'Copper' ? "selected": ''} src={Copper} height="150"></img>
      <figcaption>Copper</figcaption>
    </figure>
    </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className="division-figures">
      <img name="Iron" className={this.props.selectedLeague == 'Iron' ? "selected": ''} src={Iron} height="150"></img>
      <figcaption>Iron</figcaption>
    </figure>
  </a>
    <figure className="division-figures">
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <img name="Challenger" src={Challenger} className={this.props.selectedLeague == 'Challenger' ? "selected": ''} height="150"></img>
        <figcaption>Challenger</figcaption>
</a>
    </figure>
  </div>
  )

  }
}

export default Divisions