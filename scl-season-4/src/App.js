import React, { Component } from 'react';
import logo from './logos/SCL_hor_mono_dark.png';
import './App.css';
import PropTypes from 'prop-types';
import PlayerBlock from './playerBlock';
import RecapBlock from './recapBlock';
import ModalWrapper from './modalWrapper';
import FullSchedule from './fullScheduleBlock'
import Standings from './standingsBlock';
import PlayerSchedule from './playerSchedule';
import Ballroom from './levels/ballroom.png';
import Balcony from './levels/balcony.png';
import Courtyard from './levels/courtyard.png';
import Gallery from './levels/gallery.png';
import HighRise from './levels/high-rise.png';
import Library from './levels/library.png';
import Moderne from './levels/moderne.png';
import Pub from './levels/pub.png';
import Terrace from './levels/terrace.png';
import Veranda from './levels/veranda.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     matchData: [],
     isVisible: {
        isStandingsVisible: false,
        isAllGamesVisible: false, 
        isThisWeekVisible: true,
        isRules: false,
        howTow: false
      },
     gamesThisWeek: [],
     recap: null,
     isOpen: false,
     selectedLeague: 'Diamond',
     currentWeek: 1,
     standingsData: [],
     file: null,
     confirmation: '',
     currentPlayer: '',
     isPlayerSelected: false,
     schedule: [],
     playerInfo: {},
     recapOpen: false,
     scheduleOpen: false
   }
 }
 static defaultProps = {
  matchData: []
  };
  static propTypes = {
    matchData: PropTypes.arrayOf(PropTypes.shape({
    forfeitText: PropTypes.string,
    league: PropTypes.string,
    matchType: PropTypes.string,
    matchUrl: PropTypes.string,
    confirmation: PropTypes.string
    }))
  }

// hard coding the start of SCL woo!
  getCurrentWeek = () => {
    const startDate =  new Date('2018-05-05');
    let utcDay = new Date();
    let today = utcDay - new Date().getTimezoneOffset();
    let leagueWeek = (today - startDate) / 86400000;
    leagueWeek = parseInt(Math.ceil(leagueWeek / 7));
    this.setState({currentWeek: leagueWeek});
  }  


  filterMethod = (filter, row) => { 
    if (!row) {
      console.log(this.state);
      row = this.state.matchData;
    }
    console.log(row);
    console.log(filter.id);
    console.log(filter.value);
    return row[filter.id].startsWith(filter.value)
  }
  getGamesThisWeek = (week) => {
    console.log(week);
    if (!week)
      {week = 1};
    fetch("https://scl.spypartyfans.com/api/match/week/" + week)
    .then(res => res.json())
    .then(res=> this.setState({gamesThisWeek: res}))
  };

  getLeagueStatus = (league) => {
    fetch("https://scl.spypartyfans.com/api/match")
  }

  getGameRecap = (id) => {
    fetch("https://scl.spypartyfans.com/api/match/" + id)
    .then(res=> res.json())
  .then(res => this.setState({recap: res, recapOpen: true}))
  .then(this.toggleModal)
  };

  getSelectedLeague = (e) => {
    this.setState({selectedLeague: e.target.name})
    this.fetchSelectedLeague(e.target.name);
  }

  fetchSelectedLeague = (league = null) => {
    if (!league) {
      league = 'Diamond';
    }
    fetch("https://scl.spypartyfans.com/api/league/" + league)
    .then(res => res.json())
    .then(res => this.setState({standingsData: res}))
  }
  getPlayerInfo = (player) => {
    this.setState({currentPlayer: player});
    this.getPlayerSchedule(player);
  }

  onCloseModal = (modal) => {
    this.setState({ [modal]: false });
  };


  componentDidMount = () => {
    this.getGamesThisWeek(this.state.currentWeek);
    this.fetchSelectedLeague()
    fetch("https://scl.spypartyfans.com/api/match/all")
    .then(res => res.json())
    .then(res => this.setState( { matchData: res}))
    .then(this.setState({isThisWeekVisible: true}))
  };

  getActiveTab = (tabName) => {
    const newVisible = {}
    const lastVisible = {...this.state.isVisible};
    Object.keys(lastVisible).forEach(function(key) {
        newVisible[key] = (key == tabName)
    });
    this.setState({isVisible: newVisible})
  };
  uploadZip = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', this.state.file);
    fetch('https://scl.spypartyfans.com/api/match/parse', {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(res => 
      this.setState(
        {confirmation: res.errorMessage ? res.errorMessage : res.forumPost}
      )
    )
  }
  onFileSet = (e) => {
    this.setState({file: e.target.files[0]});
  }
  onWodar = () => {
    console.log('wooodar');
  }

  getPlayerSchedule = (player) => {
    fetch('https://scl.spypartyfans.com/api/player/' + player + '/matches')
    .then(res => res.json())
    .then(res => this.setState(
      {schedule: res.matches,
       playerInfo: res,
        isPlayerSelected: true,
        scheduleOpen: true
      })
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="img-fluid" className="App-logo" alt="logo" />
        </header>
          <div className="container">
            <center><div className="h1"><b>SCL Manager</b></div>
              <div id="upload-file">
                <h3>Upload your replay zip files here!</h3>
                <form encType="multipart/form-data" id="zip-form" onChange={this.onFileSet}>
                  <input type="file" name="file" />
                  <output id="list"></output>
                  <input type="submit" id="zip-file" className="btn btn-primary"  onClick={this.uploadZip} value="Upload .zip file!" />
                </form>
              </div>
              {this.state.confirmation && <div id="confirmation">{this.state.confirmation}</div>}
            </center>
            <ul className="white-modal nav nav-tabs center-block text-center">
              <li className={`${this.state.isVisible.isThisWeekVisible && "active"} h3 cursor`}>
                <a className={`${this.state.isVisible.isThisWeekVisible && "active"}`} name="isThisWeekVisible" data-toggle="tab" onClick={(e) => this.getActiveTab(e.target.name)}>Games This Week</a>
              </li>
              <li className={`${this.state.isVisible.isStandingsVisible && "active"} h3 cursor`}>
                <a className={`${this.state.isVisible.isStandingsVisible && "active"}`} data-toggle="tab" name="isStandingsVisible" onClick={(e) => this.getActiveTab(e.target.name)}>Player Standings</a>
              </li>
              <li className={`${this.state.isVisible.isAllGamesVisible && "active"} h3 cursor`}>
                <a className={`${this.state.isVisible.isAllGamesVisible && "active"}`} data-toggle="tab" name="isAllGamesVisible" onClick={(e) => this.getActiveTab(e.target.name)}>Full Schedule</a>
              </li>
              <li className={`${this.state.isVisible.isRules && "active"} h3 cursor`}>
                <a className={`${this.state.isVisible.isRules && "active"}`} data-toggle="tab" name="isRules" onClick={(e) => this.getActiveTab(e.target.name)}>Venues and Rules</a>
              </li>
            </ul>
          {this.state.isVisible.isThisWeekVisible && 
            <PlayerBlock 
              gamesThisWeek={this.state.gamesThisWeek}
              getGameRecap={(value) => this.getGameRecap(value)}
            />
          }
          {this.state.isVisible.isStandingsVisible && 
            <Standings
              standingsData={this.state.standingsData}
              getSelectedLeague={this.getSelectedLeague}
              getPlayerInfo={this.getPlayerInfo}
              selectedLeague={this.state.selectedLeague}
            />
          }
          {this.state.isVisible.isAllGamesVisible &&
            <FullSchedule
              selectedLeague={this.state.selectedLeague}
              matchData={this.state.matchData}
              filterMethod={this.filterMethod}
              getSelectedLeague={this.getSelectedLeague}
              getGameRecap={this.getGameRecap}
            />
          }
          {this.state.schedule && 
            <ModalWrapper
              onCloseModal={(e) => this.onCloseModal('scheduleOpen')}
              open={this.state.scheduleOpen}
            >
              <PlayerSchedule 
                currentPlayer={this.state.currentPlayer}
                playerInfo={this.state.playerInfo}
                schedule={this.state.schedule}
                getPlayerSchedule={this.getPlayerSchedule}
              />
            </ModalWrapper>
          }
          {this.state.recap && 
            <ModalWrapper
              onCloseModal={(e) => this.onCloseModal('recapOpen')}
              open={this.state.recapOpen}
            >
              <div>
                <RecapBlock
                  recap={this.state.recap}
                />
                <div className="footer">
                </div>
              </div>
            </ModalWrapper>
          }
          {this.state.isVisible.isRules && <div>
            <h1>SpyParty Competitive League Rules</h1>
            <h2>Schedule</h2>
            <p>A <strong>regular season</strong> is 10 weeks. There will follow for the normal divisions a two-week break to play makeup matches and set playoff matches. The next week will have all <strong>divisional championship</strong> and <strong>hazard matches</strong>, and the week after that will have all promotion and relegation matches, plus the <strong>league championship</strong>. Then there is an offseason of variable length, after which the next regular season resumes. Offseason breaks may be increased in length to accommodate other events.</p>
            <p>For Challenger division, the regular season is a 10-week Swiss event, followed by a seeded bracket single-elimination tournament, using results from the Swiss as seeding.</p>
            <h2>Seasonal Rules</h2>
            <p>The league is divided into a number of divisions.</p>
            <p>Except in Challenger, A regular season consists of a double round robin of matches between all division members. (Every player in a division plays a match against every other player twice). This format is subject to change as division size and composition may vary as members leave or join. </p>
            <p>In the league standings, a win is worth 2 points, a draw is worth 1 point, and a loss is worth 0 points. </p>
            <p>At the end of a regular season, the <strong>post-season occurs</strong>. The top two finishers in each division (except the top division) have a <strong>divisional championship</strong> match. The winner of such a match is the <strong>divisional champion</strong>, and the loser is the <strong>divisional runner-up</strong>. The top two finishers of the top division have a league championship match, the winner of which is the overall league champion. The bottom two finishers in each division (except the bottom division) have a <strong>hazard match</strong>. The loser of a <strong>hazard match</strong> is the automatic dropper, the winner of a <strong>hazard match</strong> is the hazard dropper. Challenger Division and Iron Division are treated slightly differently; see the Challenger Division rules immediately following.</p>
            <p>Players may be tied in such a way as to render status as divisional champion, runner-up, or dropper unclear. If so, such ties are broken first by reference to head-to-head results, a player who scored more points than the player they are tied with, in matches with that player, will finish ahead to match wins. If ties still remain, they will next be broken by reference to match wins; a player with more match wins will finish ahead of a player they are otherwise tied with, but who has fewer match wins. If this still does not resolve the tie, the next tiebreaker is performance in the immediately preceding season; this tiebreaker does not apply to non-participants in the prior season. If there is still a tie, all players still involved in the tie will play tiebreaker matches using <strong>regular season</strong> match rules until the tie is broken, at the direction of the league administrator.</p>
            <p>Promotion and relegation occurs at the end of each season. Where applicable, the <strong>divisional champion</strong> is automatically promoted into the next highest league, and the automatic dropper is relegated to the next lowest league. Where applicable, a <strong>divisional runner-up</strong> will play the hazard dropper from the next highest league in a <strong>promotion match</strong>; if the <strong>divisional runner-up</strong> wins, they switch divisions with the hazard dropper, otherwise each remains in their status quo division. </p>
            <h3>Challenger Division and Iron Division</h3>
            <p>The lowest division is Challenger Division. Instead of a double round robin, the Challenger Division regular season consists of a Swiss event. The top two finishers will be promoted to Iron automatically. </p>
            <p>There will then follow a seeded single-elimination bracket tournament. The winner of this tournament also receives automatic Iron promotion. The runner-up obtains the right to an immediate <strong>promotion match</strong> against the 3rd Place finisher of Iron.</p>
            <p>In Iron, everyone who did not finish 1st or 2nd is at risk! 4th-6th place are automatically demoted to make room for Challenger promotees as above. 3rd Place is subject to a <strong>hazard match</strong> vs. the runner-up of the Challenger tournament.</p>
            <h2>Match Rules</h2>
            <p><strong>Players are encouraged to use LtHummus' browser-based utility for setting up their matches. It can be found <a href="https://draftmeaspy.party/" target="_blank">here</a></strong></p>
            <h3>Regular Season Matches</h3>
            <p>A regular season match consists of a maximum of twelve games over four maps, drafted by the players from the map pool (see below for map pool). In the draft process, the players may use any random method (like flipping a coin or LtHummus' draft utility) to determine a winner; that winner has their choice of determining who bans and drafts first, or who spies/snipes first; whichever of these options they choose, the player who lost the random toss determines the other. The players each ban one map from the map pool.</p>
            <p>Following bans, the player who banned first picks a non-banned map layout first, followed by the other. This first pick of each player will be played TWICE (twice each as spy and sniper for each player). Then each player picks a further map which will be played ONCE. </p>
            <p>No given map may be chosen more than once during this process. The players then play up to twelve games on the selected maps, alternating as spy and sniper in the order that the maps were picked (e.g., the first doubled map has its all its matches played first, then the second doubled map, etc). In all matches, regular season or otherwise, the sniper is encouraged to ensure the spy is ready before starting the game. If one player wins seven games, that player is the winner and the match ends at once. If all twelve games are played and the score is 6-6, the match is a draw.</p>
            <h3>Playoff Matches</h3>
            <p>Playoff matches are used for all non-regular season matches which are not the League Championship. They consist of a maximum of sixteen games. The general rules are exactly the same as for regular season matches, with a few differences: </p>
            <ol>
              <li>The higher-finishing player from the regular season selects BOTH who picks/bans first, AND who spies.</li>
              <li>The players do the exact same pick/ban method as for a regular season game, except they each pick one map to be played through twice and TWO maps to be played through once. </li>
              <li>The first player to win nine games wins a playoff match. If the match ends 8-8, the player with the higher regular-season finish is the winner.</li>
            </ol>
            <h3>League Championship Match</h3>
            <p>The League Championship Match is played between the 1st and 2nd place finishers in the top Division to determine the League Champion. </p>
            <p>It is identical to a playoff match as above, except the players only pick one map each to ban, and one map each that will be doubled. Then ALL the unbanned maps are played through in alphabetical order, with the doubled maps being played twice when it comes their turn.</p>
            <p>The winner of the League Championship is the first to win 11 games. In the event of a 10-10 tie, the game proceeds to a tiebreaker.</p>
            <p>In a tiebreaker, the player who picked/banned first selects any map (not a variant, but a general map) from the map pool, even one that was played during the tied match. Then the other player similarly picks any map. The first player then spies on the first selected map, followed by the second player. On the second selected map, the second player spies first, followed by the first player. Each map, instead of any of its normal variant, is played with all of its possible missions activated in a "known" variant (also called "known maximum"). </p>
            <p>The player who, over the course of these four games, completes more missions as spy, wins the match. "Pending" missions do not count as completed. If the sniper shoots a civilian, the spy is considered to have completed all the missions available in that map. If the players complete the same number of missions, the procedure is repeated until one player completes more missions over the course of four games. No map may be selected more than once for a tiebreaker unless all maps have already been selected. </p>
            <h2>Map Pool</h2>
            <p>The map pool is as follows. It is subject to change. All maps use the "any" gametype of the specified numbers. All maps refer to new art variants. Default partygoers and time control unless otherwise specified.</p>
            <div className="maps">
            <span className="map-images">
            <figure className="map-figures"><img src={Ballroom} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>Ballroom 4/8</figcaption></figure></span>
            <span className="map-images">
            <figure className="map-figures"><img src={Library} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>Library 5/8</figcaption></figure></span>
            <span className="map-images">
            <figure className="map-figures"><img src={Moderne} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>Moderne 5/8</figcaption></figure></span>
            <span className="map-images">
            <figure className="map-figures"><img src={Balcony} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>Balcony 2/3</figcaption></figure></span>
            <span className="map-images">
            <figure className="map-figures"><img src={Terrace} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>Terrace 3/5 </figcaption></figure></span>
            <span className="map-images">
            <figure className="map-figures"><img src={Pub} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>Pub 4/6 - 16 guests</figcaption></figure></span>
            <span className="map-images">
            <figure className="map-figures"><img src={HighRise} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>High-Rise 3/5</figcaption></figure></span>
            <span className="map-images">
            <figure className="map-figures"><img src={Courtyard} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>Courtyard 4/7</figcaption></figure></span>
            <span className="map-images">
            <figure className="map-figures"><img src={Gallery} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>Gallery 4/8</figcaption></figure></span>
            <span className="map-images">
            <figure className="map-figures"><img src={Veranda} className="smaller-image" alt-text="Ballroom 4/8"/>
            <figcaption>Ballroom 5/8</figcaption></figure></span>
            </div>
            <h2>Scheduling and Miscellaneous</h2>
            <h3>Scheduling Matches</h3>
            <p>Match schedules are posted in advance. Weeks begin and end at midnight Pacific time on Friday/Saturday. Matches scheduled for a particular week should be played during that week by arrangement of the players over the messaging system of this forum. Players should be attentive to their PMs, and be polite/facilitate the tournament by promptly attempting to schedule matches and respond to inquiries from opponents and the league administrator. </p>
            <p>Scheduling for a particular week should begin immediately; scheduling weeks in advance is encouraged. If a player has contacted their opponent and received no reply within a reasonable amount of time (generally, allow 24 hours), then they should immediately contact the league administrator (KrazyCaley) by PM. Also encouraged, though not mandatory, is scheduling matches to coincide with the casting show associated with the league, which occur on both Saturday and Sunday; contact the stream coordinator (Wodar) to get your match on the livestream. Matches that are so scheduled will be broadcast live if feasible. </p>
            <h3>Posting Results</h3>
            <p>To be counted, replays of a match must be uploaded to the primary SCL website here, and then posting the resulting auto-generated forum post to the results thread here.</p>
            <h3>Byes and Makeups</h3>
            <p>A player who has a weeklong scheduling conflict or otherwise finds it inconvenient to play in a given week may declare a makeup. Players may, except in extraordinary circumstances. Up to three makeups, so long as they are given with advance notice, are permitted. Makeups which are required due to unannounced absences may be granted or denied and forfeited, at the discretion of the league administrator. Although a week is allotted at the end of the regular season for resolving makeup matches, makeup matches may be played at any time before then at the convenience of the involved players. Makeup matches MAY NOT be played later than the end of the makeup week. </p>
            <p>As part of the regular schedule, some players may receive byes during the regular season, meaning they have no match to play that week.</p>
            <p>A player who stops being responsive to match scheduling and inquiries from the league administrator may be dropped from the League.</p>
            <h3>Forfeits</h3>
            <p>If a player fails to comply with match scheduling/participation requirements, they may forfeit their matches at the discretion of the league administrator. A forfeited match is credited as a victory to the other player. If a player forfeits a large number of games, they may be dropped from the league as a result. If so, and especially if they would forfeit more games to someone players in their division than to others, then at the discretion of the league administrator, their past played results may be changed into forfeits, to ensure fairness for the remaining players.</p>
            <p>If, in the judgment of the league administrator, both players in a match are culpable in failing to schedule/play that match, then the match will be scored as a loss for both players. </p>
            <p>A player may have no more than three "hanging" late matches still to be played after the week the match was supposed to be played has ended. If a player would have a fourth match become late, that player automatically forfeits that match unless the league administrator rules otherwise for good cause.</p>
            <h3>Technical Problems</h3>
            <p>If a technical problem or accident occurs during a game which would have a serious effect on the playability of that game, and the technical problem/accident is associated with one player, then affected player should immediately inform the unaffected player if possible. The game should be stopped at once, and a replacement game played, along with the rest of the match as normal (players should continue playing match games until either the outcome of the match is decided without counting the problematic game at all, or until all games besides the problematic game have been played) Then the league administrator should be contacted. Replays of all games, including the game with the problem, should be uploaded.</p>
            <p>If the game with the technical problem and/or its replacement would not have affected the outcome of the match, no ruling will be made and the replacement game's result will be accepted. If the problematic game would have affected the outcome of a match, then it will be reviewed by the league administrator. The administrator may rule either that the affected player forfeits the game in question, or that the result of the replacement game stands. This ruling will be made primarily on the administrator's judgment as to what result would be most fair given the nature of the technical problem and the progress of the game in question before the technical problem occurred.</p>
            <p>In games where the problem is associated with neither player, such as server crash, neither player will be considered the affected player. A replacement game should still be played and all replays submitted. The league administrator will review the games. The result of the replacement game will usually be accepted unless one player or the other was extremely likely to win the stopped game. Similarly, if a game is stopped due to unplayable latency issues, neither player will be considered the "affected" player unless there is clear evidence that one player's internet connection was to blame. Players are strongly encouraged, however, to play through minor latency if possible.</p>
            <h3>The Ed Rule</h3>
            <p>Both players should ensure that the "mixed art" setting is turned off for SCL matches. Games which are played using mixed art characters are voidable, and must be replayed, at the discretion of either involved player. Only new art is allowed in SCL.</p>
            <h3>Wrong Map Rule</h3>
            <p>If the players play a game on the wrong map, mission layout, or game settings by accident, any player who notices may (and should) immediately point out the problem, terminate the game, and restart on the correct map. This may be done at any time before the next game has started. Once the next game is started, the last game played becomes "official." If the wrong map is played on the last game in a set, this may be done any time before the result is submitted. </p>
            <p>If the players accidentally play their games on the correct maps, but out of the correct map order, such games will be deemed official if completed. A player who wants to ensure that maps are played through in correct order should do so before a game starts.</p>
            <h3>Disputes</h3>
            <p>During a match, players should attempt to resolve disputes on their own by mutual agreement. If a dispute cannot be so settled, the league administrator (KrazyCaley) should be contacted to resolve the dispute before the match proceeds. If the league administrator is not available, the match should be postponed until later in the week, after the dispute can be settled. The match may also be postponed to the bye week if convenient. In the unlikely event that the league administrator is involved in an unresolvable dispute, disputes will be resolved by Checker. Disputes relating to the functionality of the draft/standings/replays utility will be resolved by LtHummus.</p>
            <h3>Entering the League; Divisional Changes as a result of new members</h3>
            <p>Anyone may join the league by signing up in a given season's signup thread, posted prior to the commencement of new seasons. New players will enter the bottom league at the beginning of the next regular season. More experienced players may be placed higher than this at the discretion of the league administrator.</p>

          </div>}
        </div>
        <footer className="bd-footer text-muted">
  <div className="container">
    <div className="h4 text-center">
      SCL Manager was made by <a href="https://www.twitter.com/lthummus" target="_blank">LtHummus</a> and <a href="https://www.twitter.com/aforgottentune" target="_blank">aforgottentune</a>, with design and iconography by <a href="https://www.twitter.com/alexandremisson" target="_blank">kaplOw</a>.
      SpyParty is being made by Chris Hecker, and is available for purchase <i>right now</i> on <a href="httpss://store.steampowered.com/app/329070/SpyParty/" target="_blank">Steam</a> and at <a href="https://www.spyparty.com" target="_blank">SpyParty.com</a>. Special thanks to all these fine folk who helped create SCL and this manager: CanadianBacon, 
      KrazyCaley, Elvisnake, Catnip, WarningTrack, <a className="wodar" onClick={this.onWodar}>Wodar</a>, and of course Checker. Come hang out with us on <a href="https://discord.gg/spyparty" target="_blank">Discord</a>!
    </div>
  </div>
</footer>
    </div>
    );
  }
}

export default App;
