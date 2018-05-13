import React from 'react';
import DiamondI from './scl_rank_badges/scl_badge_diamond.svg'
import PlatinumI from './scl_rank_badges/scl_badge_platinum.svg'
import SilverI from './scl_rank_badges/scl_badge_silver.svg'
import GoldI from './scl_rank_badges/scl_badge_gold.svg'
import CopperI from './scl_rank_badges/scl_badge_copper.svg'
import IronI from './scl_rank_badges/scl_badge_iron.svg'
import ChallengerI from './scl_rank_badges/scl_badge_challenger.svg'
import BronzeI from './scl_rank_badges/scl_badge_bronze.svg'

const PlayerSchedule = props => {
      const schedule = props.schedule || [];
    const images = {
      Diamond: DiamondI,
      Platinum: PlatinumI,
      Silver: SilverI,
      Gold: GoldI,
      Copper: CopperI,
      Iron: IronI,
      Challenger: ChallengerI,
      Bronze: BronzeI
    };
    return (
      <div>
        <div className="h3 player-names col-6 recap-names">
         <img align="float-left" alt={props.playerInfo.divisionName} src={images[props.playerInfo.divisionName]} height="70"/> {props.playerInfo.name}
        </div> 
        <blockquote className="alt-color">
          {schedule.map((week) => {
            return (
              <div key={week.week}>
                <div className="alt-color h3">Week {week.week}: <span className={`flag-icon flag-icon-${week.player1.country}`}></span> <b>{week.player1.name}</b> against <span className={`flag-icon flag-icon-${week.player2.country}`}></span> <b>{week.player2.name}</b></div>
                <div className="alt-color h4">{week.scoreSummary}</div>
                {week.forfeitWinner && <div className="alt-color h3">{week.forfeitWinner} wins by forfeit</div> }
              </div>
            )
          })} 
        </blockquote>
      </div>
    )
}

export default PlayerSchedule;
