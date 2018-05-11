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
    <figure className={`${this.props.selectedLeague == 'Diamond' ? "selected": ''} division-figures`}>
      <img name="Diamond"  src={Diamond} height="150"></img>
      <figcaption>Diamond</figcaption>
    </figure>
  </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
  <figure className={`${this.props.selectedLeague == 'Platinum' ? "selected": ''} division-figures`}>
    <img name="Platinum" src={Platinum}  height="150"></img>
    <figcaption>Platinum</figcaption>
    </figure>
  </a>

  <a onClick={this.props.getSelectedLeague} className="cursor">
  <figure className={`${this.props.selectedLeague == 'Gold' ? "selected": ''} division-figures`}>
  <img name="Gold" src={Gold}  height="150"></img>
        <figcaption>Gold</figcaption>
    </figure>
    </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure  className={`${this.props.selectedLeague == 'Silver' ? "selected": ''} division-figures`}>
      <img name="Silver" src={Silver} height="150"></img>
        <figcaption>Silver</figcaption>
    </figure>
      </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className={`${this.props.selectedLeague == 'Bronze' ? "selected": ''} division-figures`}>
    <img name="Bronze" src={Bronze} height="150"></img>
      <figcaption>Bronze</figcaption>
    </figure>
    </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className={`${this.props.selectedLeague == 'Copper' ? "selected": ''} division-figures`}>
      <img name="Copper" src={Copper} height="150"></img>
      <figcaption>Copper</figcaption>
    </figure>
    </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className={`${this.props.selectedLeague == 'Iron' ? "selected": ''} division-figures`}>
      <img name="Iron"  src={Iron} height="150"></img>
      <figcaption>Iron</figcaption>
    </figure>
  </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
      <figure className={`${this.props.selectedLeague == 'Challenger' ? "selected": ''} division-figures`}>
    <img name="Challenger" src={Challenger} height="150"></img>
        <figcaption>Challenger</figcaption>
    </figure>
    </a>
  </div>
  )

  }
}

export default Divisions