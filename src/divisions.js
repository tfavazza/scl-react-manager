import React, { Component } from 'react';
import Diamond from './scl_rank_badges/scl_badge_diamond.svg'
import Platinum from './scl_rank_badges/scl_badge_platinum.svg'
import Silver from './scl_rank_badges/scl_badge_silver.svg'
import Gold from './scl_rank_badges/scl_badge_gold.svg'
import Copper from './scl_rank_badges/scl_badge_copper.svg'
import Iron from './scl_rank_badges/scl_badge_iron.svg'
import Challenger from './scl_rank_badges/scl_badge_challenger.svg'
import Bronze from './scl_rank_badges/scl_badge_bronze.svg'
import Bamboo from './scl_rank_badges/scl_badge_bamboo.svg'
import Oak from './scl_rank_badges/scl_badge_oak.svg'


class Divisions extends Component {
  render() {
 return (<div className="text-center leagues">
    <figure className={`cursor ${this.props.selectedLeague === 'Diamond' ? "selected": ''} division-figures`}>
      <img onClick={this.props.getSelectedLeague} alt="diamond" name="Diamond"  src={Diamond} className="division-image"></img>
      <figcaption>Diamond</figcaption>
    </figure>
  <figure className={`cursor ${this.props.selectedLeague === 'Platinum' ? "selected": ''} division-figures`}>
    <img onClick={this.props.getSelectedLeague} alt="platinum" name="Platinum" src={Platinum}  className="division-image"></img>
    <figcaption>Platinum</figcaption>
    </figure>
  <figure className={`cursor ${this.props.selectedLeague === 'Gold' ? "selected": ''} division-figures`}>
  <img onClick={this.props.getSelectedLeague} alt="gold" name="Gold" src={Gold}  className="division-image"></img>
        <figcaption>Gold</figcaption>
    </figure>
    <figure className={` cursor ${this.props.selectedLeague === 'Silver' ? "selected": ''} division-figures`}>
      <img onClick={this.props.getSelectedLeague} alt="silver" name="Silver" src={Silver} className="division-image"></img>
        <figcaption>Silver</figcaption>
    </figure>
    <figure className={`cursor ${this.props.selectedLeague === 'Bronze' ? "selected": ''} division-figures`}>
    <img onClick={this.props.getSelectedLeague} alt="bronze" name="Bronze" src={Bronze} className="division-image"></img>
      <figcaption>Bronze</figcaption>
    </figure>
    <figure className={`cursor ${this.props.selectedLeague === 'Copper' ? "selected": ''} division-figures`}>
      <img onClick={this.props.getSelectedLeague} alt="copper" name="Copper" src={Copper} className="division-image"></img>
      <figcaption>Copper</figcaption>
    </figure>
    <figure className={`cursor ${this.props.selectedLeague === 'Iron' ? "selected": ''} division-figures`}>
      <img onClick={this.props.getSelectedLeague} alt="iron" name="Iron"  src={Iron} className="division-image"></img>
      <figcaption>Iron</figcaption>
    </figure>
    <figure className={`cursor ${this.props.selectedLeague === 'Bamboo' ? "selected": ''} division-figures`}>
      <img onClick={this.props.getSelectedLeague} alt="bamboo" name="Bamboo"  src={Bamboo} className="division-image"></img>
      <figcaption>Bamboo</figcaption>
    </figure>
    <figure className={`cursor ${this.props.selectedLeague === 'Oak' ? "selected": ''} division-figures`}>
      <img onClick={this.props.getSelectedLeague} alt="iron" name="Oak"  src={Oak} className="division-image"></img>
      <figcaption>Oak</figcaption>
    </figure>
      <figure className={`cursor ${this.props.selectedLeague === 'Challenger' ? "selected": ''} division-figures`}>
    <img onClick={this.props.getSelectedLeague} alt="challenger" name="Challenger" src={Challenger} className="division-image"></img>
        <figcaption>Challenger</figcaption>
    </figure>
  </div>
  )

  }
}

export default Divisions