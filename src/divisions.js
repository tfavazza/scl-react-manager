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
    <figure className={`${this.props.selectedLeague === 'Diamond' ? "selected": ''} division-figures`}>
      <img alt="diamond" name="Diamond"  src={Diamond} className="division-image"></img>
      <figcaption>Diamond</figcaption>
    </figure>
  </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
  <figure className={`${this.props.selectedLeague === 'Platinum' ? "selected": ''} division-figures`}>
    <img alt="platinum" name="Platinum" src={Platinum}  className="division-image"></img>
    <figcaption>Platinum</figcaption>
    </figure>
  </a>

  <a onClick={this.props.getSelectedLeague} className="cursor">
  <figure className={`${this.props.selectedLeague === 'Gold' ? "selected": ''} division-figures`}>
  <img alt="gold" name="Gold" src={Gold}  className="division-image"></img>
        <figcaption>Gold</figcaption>
    </figure>
    </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure  className={`${this.props.selectedLeague === 'Silver' ? "selected": ''} division-figures`}>
      <img alt="silver" name="Silver" src={Silver} className="division-image"></img>
        <figcaption>Silver</figcaption>
    </figure>
      </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className={`${this.props.selectedLeague === 'Bronze' ? "selected": ''} division-figures`}>
    <img alt="bronze" name="Bronze" src={Bronze} className="division-image"></img>
      <figcaption>Bronze</figcaption>
    </figure>
    </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className={`${this.props.selectedLeague === 'Copper' ? "selected": ''} division-figures`}>
      <img alt="copper" name="Copper" src={Copper} className="division-image"></img>
      <figcaption>Copper</figcaption>
    </figure>
    </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
    <figure className={`${this.props.selectedLeague === 'Iron' ? "selected": ''} division-figures`}>
      <img alt="iron" name="Iron"  src={Iron} className="division-image"></img>
      <figcaption>Iron</figcaption>
    </figure>
  </a>
  <a onClick={this.props.getSelectedLeague} className="cursor">
      <figure className={`${this.props.selectedLeague === 'Challenger' ? "selected": ''} division-figures`}>
    <img alt="challenger" name="Challenger" src={Challenger} className="division-image"></img>
        <figcaption>Challenger</figcaption>
    </figure>
    </a>
  </div>
  )

  }
}

export default Divisions