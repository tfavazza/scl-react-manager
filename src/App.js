import React, { Component } from 'react';
import logo from './logos/sclmanager_logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import RecapBlock from './recapBlock';
import ModalWrapper from './modalWrapper';
import FullSchedule from './fullScheduleBlock'
import Standings from './standingsBlock';
import WeeksBlock from './weeksBlock';
import PlayerSchedule from './playerSchedule';
import RulesPage from './rulesPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wodar: null,
      checker: null,
      matchData: [],
       isVisible: {
        isStandingsVisible: false,
        isAllGamesVisible: false, 
        isThisWeekVisible: false,
        isRules: true,
        isPrevWeeksVisible: false,
        isPostSeasonVisible: false,
      },
     gamesThisWeek: [],
     selectedWeekGames: [],
     recap: null,
     isOpen: false,
     selectedLeague: 'Diamond',
     currentWeek: null,
     selectedWeek: 1,
     standingsData: [],
     file: null,
     confirmation: '',
     currentPlayer: '',
     isPlayerSelected: false,
     schedule: [],
     playerInfo: {},
     recapOpen: false,
     scheduleOpen: false,
     fileName: '',
     url: "http://localhost:8082/api/",
     formData: {}
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

onChecker = () => {
  this.setState({checker: 'checker'} );
}
// hard coding the start of SCL woo!
  getCurrentWeek = () => {
    const startDate =  new Date('Sat May 05 2018 00:00:01 GMT-0400 (Eastern Daylight Time)');
    let utcDay = new Date();
    let today = utcDay - new Date().getTimezoneOffset();
    let leagueWeek = (today - startDate) / 86400000;
    leagueWeek = parseInt(Math.ceil(leagueWeek / 7), 10);
    this.setState({currentWeek: leagueWeek});
    return leagueWeek;
  }  

  getGamesForAWeek = (gamesState, week) => {
    if (!week)
      {week = 1};
    fetch(this.state.url + "match/week/" + week)
    .then(res => res.json())
    .then(res=> this.setState({[gamesState]: res, selectedWeek: week}))
  };

  getGameRecap = (id) => {
    fetch(this.state.url + "match/" + id)
    .then(res=> res.json())
  .then(res => this.setState({recap: res, recapOpen: true}))
  .then(this.toggleModal)
  };

  getSelectedLeague = (e) => {
    this.setState({selectedLeague: e.target.name})
    this.fetchSelectedLeague(e.target.name);
  }
  getGamesForPostSeason = () => {
    fetch(this.state.url + "match/week/" + 11)
    .then(res => res.json())
    .then(res=> this.setState({selectedWeekGames: res, selectedWeek: 11}))
  }
 getPlayerWLD = (player) => {
  if (player) {
    fetch(this.state.url + 'player/' + player + '/matches')
    .then(res => res.json())
    .then(res => this.setState({formData: {...this.state.formData, [player]: {'scoreSummary': res.matches.map(match => match.scoreSummary), 'matchUrl':  res.matches.map(match => match.matchUrl)}} }))
  }
}
  fetchSelectedLeague = (league = null) => {
    if (!league) {
      league = 'Diamond';
    }
    fetch(this.state.url + "league/" + league)
    .then(res => res.json())
    .then(res => {
      res.players.forEach(player => this.getPlayerWLD(player.name));
     // res.players.map(player => player.name).forEach(name => this.getPlayerWLD(name));
      this.setState({standingsData: res})
    })  
  }
  getPlayerInfo = (player) => {
    this.setState({currentPlayer: player});
    this.getPlayerSchedule(player);
  }

  onCloseModal = (modal) => {
    this.setState({ [modal]: false });
  };


  componentDidMount = () => {
    this.getGamesForAWeek('selectedWeekGames', this.getCurrentWeek());
    this.fetchSelectedLeague()
    fetch(this.state.url + "match/all")
    .then(res => res.json())
    .then(res => this.setState( { matchData: res}))
    .then(this.setState({isPrevWeeksVisible: true}))
  };

  getActiveTab = (tabName) => {
    const newVisible = {}
    const lastVisible = {...this.state.isVisible};
    Object.keys(lastVisible).forEach(function(key) {
        newVisible[key] = (key === tabName)
    });
    this.setState({isVisible: newVisible})
  };
  uploadZip = (e) => {
    e.preventDefault();
    this.setState({fileName: 'Loading...'})
    const data = new FormData();
    data.append('file', this.state.file);
    fetch(this.state.url + 'match/parse', {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(res => 
      this.setState(
        {
          confirmation: res.errorMessage ? res.errorMessage : res.forumPost,
          file: null,
          fileName: res.errorMessage ? 'Failed' : 'Success!'
        }
      )
    )
  }
  onFileSet = (e) => {
    if (e.target.files[0]) {
      this.setState({file: e.target.files[0], fileName: e.target.files[0].name});
    }
  }

  onWodar = () => {
        //canvas init
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    //canvas dimensions
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    //snowflake particles
    const mp = 800; //max particles
    const particles = [];
    for (var i = 0; i < mp; i++) {
        particles.push({
            x: Math.random() * W, //x-coordinate
            y: Math.random() * H, //y-coordinate
            r: Math.random() * 15 + 1, //radius
            d: Math.random() * mp, //density
            color: "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.8)",
            tilt: Math.floor(Math.random() * 5) - 5
        });
    }

    //Lets draw the flakes
    function draw() {
        ctx.clearRect(0, 0, W, H);



        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color; // Green path
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + p.tilt + p.r / 2, p.y + p.tilt);
            ctx.stroke(); // Draw it
        }

        update();
    }

    //Function to move the snowflakes
    //angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
    var angle = 0;

    function update() {
        angle += 0.01;
        for (var i = 0; i < mp; i++) {
            var p = particles[i];
            //Updating X and Y coordinates
            //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
            //Every particle has its own density which can be used to make the downward movement different for each flake
            //Lets make it more random by adding in the radius
            p.y += Math.cos(angle + p.d) + 2 + p.r / 2;
            p.x += Math.sin(angle) * 2;

            //Sending flakes back from the top when it exits
            //Lets make it a bit more organic and let flakes enter from the left and right also.
            if (p.x > W + 5 || p.x < -5 || p.y > H) {
                if (i % 3 > 0) //66.67% of the flakes
                {
                    particles[i] = {
                        x: Math.random() * W,
                        y: -10,
                        r: p.r,
                        d: p.d,
                        color: p.color,
                        tilt: p.tilt
                    };
                } else {
                    //If the flake is exitting from the right
                    if (Math.sin(angle) > 0) {
                        //Enter from the left
                        particles[i] = {
                            x: -5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d,
                            color: p.color,
                            tilt: p.tilt
                        };
                    } else {
                        //Enter from the right
                        particles[i] = {
                            x: W + 5,
                            y: Math.random() * H,
                            r: p.r,
                            d: p.d,
                            color: p.color,
                            tilt: p.tilt
                        };
                    }
                }
            }
        }
    }

    //animation loop
    setInterval(draw, 20);
  }

  formatForumPost = () => {
    return {__html: this.state.confirmation}
  }
  onCloseForumPost = () => {
    this.setState({confirmation: ''});
  }

  getPlayerSchedule = (player) => {
    fetch(this.state.url + 'player/' + player + '/matches')
    .then(res => res.json())
    .then(res => this.setState(
      {schedule: res.matches,
       playerInfo: res,
        isPlayerSelected: true,
        scheduleOpen: true
      })
    )
  }
  static linkStyle = {
        fontFamily: 'agencyfb',
        fontWeight: 'bold',
        margin: 0,
        padding: 0
      }
  render() {
    return (
      <div className="App">
                          <canvas id="canvas"></canvas>
        <header className="App-header">
        <h3 className="text-right" style={this.linkStyle}><a className="white" href="http://www.spypartyfans.com">Back to SpyPartyFans</a></h3>
          <img src={logo} className="App-logo img-fluid" height="375" alt="the logo" />
        </header>
          <div className="container">
            <div className="text-center">
              <h3>Upload your .zip replay files</h3>
                <form encType="multipart/form-data" id="zip-form" onChange={this.onFileSet}>
                  <label className={`btn ${this.state.checker ? this.state.checker : "btn-default"}`}>
                    Browse Files<input type="file" className="ugly-input" hidden />
                  </label>
                  <output name="list" id="list"></output>
                  <label htmlFor="list">{this.state.fileName || 'No file selected'}</label>
                  <br/>
                  <button type="submit" id="zip-file" className="btn btn-primary" onClick={this.uploadZip}>Submit</button>
                </form>
              {this.state.confirmation && 
                <div id="confirmation">
                  <button className="btn close-button align-right" onClick={this.onCloseForumPost}>x</button>
                  <div dangerouslySetInnerHTML={this.formatForumPost()} />
                  {this.state.confirmation && <a href="https://secure.spyparty.com/beta/forums/viewtopic.php?f=10&t=3071" target="_blank" rel="noopener noreferrer">Forum Link</a>}
                </div>}
                </div>
          <div className="fix-index">
            <ul className="nav nav-tabs center-block text-center">
              <li className={`${this.state.isVisible.isPrevWeeksVisible && "active"} h3 cursor`}>
                <a className={`${this.state.isVisible.isPrevWeeksVisible && "active"}`} data-toggle="tab" name="isPrevWeeksVisible" onClick={(e) => this.getActiveTab(e.target.name)}>Games By Week</a>
              </li>
              <li className={`${this.state.isVisible.isStandingsVisible && "active"} h3 cursor`}>
                <a className={`${this.state.isVisible.isStandingsVisible && "active"}`} data-toggle="tab" name="isStandingsVisible" onClick={(e) => this.getActiveTab(e.target.name)}>Player Standings</a>
              </li>
              <li className={`${this.state.isVisible.isAllGamesVisible && "active"} h3 cursor`}>
                <a className={`${this.state.isVisible.isAllGamesVisible && "active"}`} data-toggle="tab" name="isAllGamesVisible" onClick={(e) => this.getActiveTab(e.target.name)}>Full Schedule</a>
              </li>
              <li className={`${this.state.isVisible.isPostSeasonVisible && "active"} h3 cursor`}>
                <a className={`${this.state.isVisible.isPostSeasonVisible && "active"}`} data-toggle="tab" name="isPostSeasonVisible" onClick={(e) => this.getActiveTab(e.target.name)}>Challenger Bracket</a>
              </li>              
              <li className={`${this.state.isVisible.isRules && "active"} h3 cursor`}>
                <a className={`${this.state.isVisible.isRules && "active"}`} data-toggle="tab" name="isRules" onClick={(e) => this.getActiveTab(e.target.name)}>Venues and Rules</a>
              </li>
            </ul>
            <br/>
          {this.state.isVisible.isPrevWeeksVisible && 
            <WeeksBlock
              selectedWeek={this.state.selectedWeek}
              getGamesForAWeek={this.getGamesForAWeek}
              selectedWeekGames={this.state.selectedWeekGames}
              getGameRecap={(value) => this.getGameRecap(value)}
              getPlayerSchedule={(name) => this.getPlayerSchedule(name)}
              getGamesForPostSeason={this.getGamesForPostSeason}
            />
          }
          {this.state.isVisible.isStandingsVisible && 
            <Standings
              standingsData={this.state.standingsData}
              getSelectedLeague={this.getSelectedLeague}
              getPlayerInfo={this.getPlayerInfo}
              selectedLeague={this.state.selectedLeague}
              formData={this.state.formData}
            />
          }
          {this.state.isVisible.isAllGamesVisible &&
            <FullSchedule
              selectedLeague={this.state.selectedLeague}
              matchData={this.state.matchData}
              getSelectedLeague={this.getSelectedLeague}
              getGameRecap={this.getGameRecap}
            />
          }
          {this.state.isVisible.isPostSeasonVisible && 
            <iframe 
              title="Challenger Bracket"
              src="https://challonge.com/SCL4Challenger/module?&show_standing=1&show_final_results=1&match_width_multipler&theme=5" 
              width="100%" 
              height="500" 
              frameborder="0" 
              scrolling="auto" 
              allowtransparency="true"
            >
            </iframe>
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
          {this.state.isVisible.isRules && 
            <RulesPage/>
          }
          </div>
        </div>
        <footer className="bd-footer text-muted">
  <div className="container">
    <div className="h4 text-center">
      SCL Manager was made by <a href="https://www.twitter.com/lthummus" rel="noopener noreferrer" target="_blank">LtHummus</a> and <a href="https://www.twitter.com/aforgottentune" rel="noopener noreferrer" target="_blank">aforgottentune</a>, with design and iconography by <a href="https://www.twitter.com/alexandremisson" rel="noopener noreferrer" target="_blank">kaplOw</a>.
      SpyParty is being made by Chris Hecker, and is available for purchase <i>right now</i> on <a href="https://store.steampowered.com/app/329070/SpyParty/" rel="noopener noreferrer" target="_blank">Steam</a> and at <a href="https://www.spyparty.com" rel="noopener noreferrer" target="_blank">SpyParty.com</a>. Special thanks to all these fine folk who helped create SCL and this manager: CanadianBacon, 
      KrazyCaley, Elvisnake, Catnip, WarningTrack, <a className="wodar" onClick={this.onWodar}>Wodar</a>, and of course <a className={`wodar ${this.state.checker}`} onClick={this.onChecker}>Checker</a>. Come hang out with us on <a href="https://discord.gg/spyparty" rel="noopener noreferrer" target="_blank">Discord</a>!
    </div>
  </div>
</footer>
    </div>
    );
  }
}

export default App;