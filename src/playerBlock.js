import React from 'react';
import DiamondI from './scl_rank_badges/scl_badge_diamond.svg'
import PlatinumI from './scl_rank_badges/scl_badge_platinum.svg'
import SilverI from './scl_rank_badges/scl_badge_silver.svg'
import GoldI from './scl_rank_badges/scl_badge_gold.svg'
import CopperI from './scl_rank_badges/scl_badge_copper.svg'
import IronI from './scl_rank_badges/scl_badge_iron.svg'
import ChallengerI from './scl_rank_badges/scl_badge_challenger.svg'
import BronzeI from './scl_rank_badges/scl_badge_bronze.svg'

const PlayerBlock = props => {
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
  const getGameRecap = (id) => {
    props.getGameRecap(id);
  }
  const getPlayerSchedule = (player) => {
    props.getPlayerSchedule(player);
  }

  const games = props.gamesThisWeek
  return (
    <div>

    {games.map((prop) => {
      const leagueName = prop.league;
      return (
        <div  className="alt-color block" key={prop.id}>
            <li className="week-tabs h4 list-group-item col-md-12 col-sm-12 col-lg-4" data-success={prop.status}>
              <div data-tint={prop.status} className="panel-heading" role="tab" id="heading">
                <div className="media">
                  <div className="ml-3 col-4 float-right" >
                   <img alt={leagueName} align="right" src={images[leagueName]} height="70"/>
                   </div>
                   <div className="player-names col-6 float-left">
                      <span className={`flag-icon flag-icon-${prop.player1.country}`}></span>  <a className="cursor" onClick={(e) => getPlayerSchedule(prop.player1.name)}>{prop.player1.name}</a>
                    </div>
                    <br/>
                    <div className="player-names col-6 float-left">
                      <span className={`flag-icon flag-icon-${prop.player2.country}`}></span> <a className="cursor" onClick={(e) => getPlayerSchedule(prop.player2.name)}>{prop.player2.name}</a>
                    </div>
                  </div>
                <div>
                <hr/>
                <div className="level-name player-names move-down">
                  {prop.status ? 
                  (<span className="float-right level-name">
                    <a className="green game-details float-right cursor" value={prop.id} onClick={(e) => getGameRecap(prop.id)}>
                      RESULTS 
                    </a> {" "}
                  {!prop.forfeitWinner ?
                  (<a className="player-names" href={prop.matchUrl}>REPLAYS</a>) 
                  :
                   <span>FORFEITED</span>
                  }
                </span>) :
          <span>Not Played</span>
        }
        </div>
        </div>
        </div>
        </li>
        </div>)
})}
</div>
)
}
export default PlayerBlock;