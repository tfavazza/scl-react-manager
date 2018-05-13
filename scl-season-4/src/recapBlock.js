import React from 'react';
import DiamondI from './scl_rank_badges/scl_badge_diamond.svg'
import PlatinumI from './scl_rank_badges/scl_badge_platinum.svg'
import SilverI from './scl_rank_badges/scl_badge_silver.svg'
import GoldI from './scl_rank_badges/scl_badge_gold.svg'
import CopperI from './scl_rank_badges/scl_badge_copper.svg'
import IronI from './scl_rank_badges/scl_badge_iron.svg'
import ChallengerI from './scl_rank_badges/scl_badge_challenger.svg'
import BronzeI from './scl_rank_badges/scl_badge_bronze.svg'
import SniperI from './scl_rank_badges/icon_sniper.png'
import SpyI from './scl_rank_badges/icon_spy.png'

const RecapBlock = props => {
    const recap = props.recap || [];

    // picture objects because React is being React
    const division = {
      Diamond: DiamondI,
      Platinum: PlatinumI,
      Silver: SilverI,
      Gold: GoldI,
      Copper: CopperI,
      Iron: IronI,
      Challenger: ChallengerI,
      Bronze: BronzeI
    };
    const role = {
      sniper: SniperI,
      spy: SpyI
    }

  return (
        <div className="fix-modal">
          <div className="text-center h2 less-padding"> 
           {recap.scoreSummary || `${recap.forfeitWinner} wins`} <img alt={recap.league} src={division[recap.league]} height="60" /> 
          </div> 
            <div className="h3 player-names recap-names">
              <span className={`flag-icon flag-icon-${recap.player1.country}`}></span> {recap.player1.name} 
            </div> 
            <div className="h3 player-names recap-names">
              <span className={`flag-icon flag-icon-${recap.player2.country}`}> </span> {recap.player2.name} 
            </div>
            {recap.matchUrl && <div className="text-center button-stretch h2"><a className="btn button-stretch btn-large btn-success" href={recap.matchUrl}>DOWNLOAD REPLAYS</a></div>}
        <div className="h3 padding">RESULTS</div>
        {recap.games.map((game, index) => {
         let counter = (index + 1) < recap.games.length ? index + 1 : null;
          return index % 2 === 1 ? '' :
           (<div key={game.id} className={`h3 background-image ${game.level}`}>
                <div className="float-right white col-4 offset-8 level-name"> {game.level} </div>  
                <div>
                  <div className="float-left white padding col-6"><img className="white-image" alt={game.winnerRole} src={role[game.winnerRole]} height="30" /> {game.winnerName}</div>
                  {counter && <div className="float-left col-6 padding white"><img className="white-image" alt={recap.games[counter].winnerRole} src={role[recap.games[counter].winnerRole]} height="30" /> {recap.games[counter].winnerName}</div>}  
                </div> 
                </div>)})}
          <hr/>
        {recap.draft ?
            (<div>
              <div className="h3 padding"> PICKS & BANS 
                <div> {recap.draft.payload.bannedMaps.map((banned) => {
                    return (<div className="padding" key={banned.map}>
                      <span className="player-names"> {banned.picker} </span> <span className="red">banned</span> {banned.map}
                      </div>)})
                    } 
                </div> 
                <div> 
                  {recap.draft.payload.pickedMaps.map((picked) => {
                    return (<div className="padding" key={picked.map}> 
                              <span className="player-names"> {picked.picker} </span> <span className="green">picked</span> {picked.map}
                            </div>)})} 
                </div> 
              </div>
            </div>) :
            (<div> No draft information available </div>)} 
        </div>)
    }
export default RecapBlock;