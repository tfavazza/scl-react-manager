import React from 'react';
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
import Teien from './levels/teien.png'
const RulesPage = () => {
return(
<div>
      <h1>SpyParty Competitive League Rules</h1>
      <h2>Schedule</h2>
      <p>A <strong>regular season</strong> is 13 weeks. This is followed by a one week break to finish makeup matches and set up postseason play. Finally, there is a four week postseason period. </p>
      <p>The period between seasons varies, and depends on the runtime of other SpyParty events, but is typically 3-5 months.</p>
      <h2>League Structure and Divisional Schedules</h2>
      <p>The league is divided into three circuits. These circuits are, in descending order, Masters, Pro, and Challenger.</p>
      <h3>Masters Circuit</h3>
      <p>The Masters Circuit consists of three divisions, which each contain six players. The divisions are, in descending order: Diamond, Platinum, and Gold.</p>
      <p>The regular season in each of the Masters divisions consists of a double round robin event, with a break week for all players in week 7.</p>
      <p>The top two regular season finishers of Diamond play each other in week 4 of the postseason in the League Championship match to determine the overall SCL champion.</p>
      <p>The top two regular season finishers of Platinum and Gold play each other in week 2 of the postseason in Divisional Championship matches to determine the Divisional Champion. </p>
      <p>The bottom two regular season finishers of Diamond and Platinum play each other in week 2 in of the postseason in Hazard matches. The winner is the Hazard Dropper of that divisions, the loser is the Automatic Dropper of that division.</p>
      <p>The loser of the Platinum and Gold Divisional Championship match will play the winner of the Diamond and Platinum Hazard match, respectively, in week 3 of the postseason, in Promotion matches.</p>
      <p>The bottom regular season finisher of Gold is automatically demoted to Silver.</p>
      <p>The 4th and 5th place regular season finishers of Gold must participate in the Tournament of Position</p>
      <h3>Pro Circuit</h3>
      <p>The Pro Circuit consists of a variable number of divisions (which is fixed once a season begins). All of those divisions, or all but the lowest division, consist of 13 players.</p>
      <p>The regular season in each of the Pro circuit divisions consists of a single round robin event, with byes for individual players as scheduled.</p>
      <p>The top finisher in each of the Pro Circuit divisions chooses - either they may promote directly to the next division up, or they may participate in the Tournament of Position.</p>
      <p>Other high finishers in the Pro Circuit divisions may possibly be able to enter the Tournament of Position. See the rules below specific to the Tournament of Position.</p>
      <h3>Challenger Circuit</h3>
      <p>The Challenger Circuit consists of a single Challenger Division. This division consists of all players who join SCL while a season is in progress and the lowest Pro division reached its capacity of 13 players.</p>
      <p>Challenger players may challenge each other to a match at any time during the 13 week regular season, except no two players may play more than one match against each other.</p>
      <p>The player with the most points in Challenger Division at the end of the regular season is entered into the Tournament of Position. All other Challengers will be incorporated into new Pro Divisions (or promoted into existing ones administratively as needed) in the order they finish in the Challenger event.</p>
      <h2>The Tournament of Position</h2>
      <h3>Format</h3>
      <p>The Tournament of Position occurs during all four rounds of the postseason. Exactly 16 players participate in it.</p>
      <p>The Tournament of Position is a four-round Swiss event. Pairings occur by reference to the following hierarchy of determiners: first by pairing players with the same current score in the tournament, then if necessary by pairing players who have an identical sequence of wins and losses, then if necessary by pairing players such that the player with the best finish in the preceding regular season is paired against the player with the worst finish, the player with the 2nd-best finish against the player with the 2nd-worst finish, and so on. A regular season finish of any kind in a higher division is always better than a regular season finish of any kind in a lower division.</p>
      <h3>Participants</h3>
      <p>The Gold 4th and 5th place regular season finishers must always participate. <strong>This always accounts for 2 slots in the tournament</strong></p>
      <p>The 1st place regular season finishers from every division in Bronze or lower may choose to participate. If they instead choose direct promotion to the next division, a substitute is selected instead. The substitute for a 1st place finisher who chooses direct promotion is always the next-highest finisher in that division who would not already be in the Tournament of Position by operation of the next paragraph. Such substitutes must participate. <strong>This always accounts for a number of slots in the tournament equal to the number of Pro Circuit divisions lower than Silver.</strong></p>
      <p>The 2nd place finishers in each division, starting with Silver and proceeding down through the divisions, are entered into the tournament until there are 16 players total including all of the entrants in the preceding two paragraphs. If that does not suffice to populate the tournament, then 3rd place finishers are entered starting in Silver and moving downwards. This general procedure continues until there are 16 players in the tournament. Players so entered must participate. <strong>This always accounts for a number of slots in the tournament equal to the difference between 16 and the number of players entered by operation of the above two paragraphs.</strong></p>
      <h3>Results</h3>
      <p>After four rounds, the tournament is over. The top two finishers are placed directly into Gold Division. 3rd and 4th are placed directly into Silver Division. 5th and 6th are placed directly into Bronze Division. 7th and 8th are placed directly into Copper Division.</p>
      <p>If, as a result of the above paragraph, a player would be placed into a division lower than the one they currently occupy, instead they tentatively remain where they are, subject to the promotion of other players.</p>
      <p>Order of finish in the Tournament of Position is determined by reference to the following hierarchy: first, players finish higher who won more matches; second, players finish higher who won head-to-head against all other players against whom a tiebreaker is required; third, players finish higher who had the earliest win which occurred in the same round as a loss as all the other players against whom a tiebreaker is required.</p>
      <p>Any player who is in Iron Division or lower who wins at least one match in the Tournament of Position against an opponent from a division higher than their own promotes to the next division.</p>
      <h2>Regular Season Standings and Tiebreakers in Masters and Pro Circuits</h2>
      <p>During the regular season in Masters and Pro Circuits, a win is worth 2 points, a draw is worth 1 point, and a loss is worth 0 points. </p>
      <p>If players have the same number of points at the end of a season,ties are broken first by reference to head-to-head result: a player who scored more points than the player they are tied with, in matches with that player, will finish ahead to match wins. If ties still remain, they will next be broken by reference to match wins; a player with more match wins that season will finish ahead of a player they are otherwise tied with, but who has fewer match wins. If this still does not resolve the tie, the next tiebreaker is finish in the immediately preceding season. Finishing a season in the league is considered better than not participating in the league. If there is still a tie, all players still involved in the tie will play tiebreaker matches using regular season match rules until the tie is broken, at the direction of the league administrator.</p>
      <h2>Challenger Division</h2>
      <p>In Challenger Division, any player may challenge any other player privately at any time, but no two players may play more than one match against each other. Challenges should be issued privately, and may occur on the forums, on the discord, or by deliver the challenge through the League Administrator. In any event, the League Administrator should be notified of all challenges.</p>
      <p>Once a challenge has been issued, the match should be scheduled and played within one week, and the result reported as normal. If the match is not played in a week, the League Administrator will adjudicate the result depending on the relative good-faith effort of the players to play the match. Forfeits, postponements, or any other arrangement considered just by the League Administrator, may result in such a situation.</p>
      <p>The results of Challenger Division matches are secret until the end of the regular season.</p>
      <p>In Challenger Division, a win is worth 3 points, a draw is worth 2 points, and a loss is worth 1 point.</p>
      <p>Standings tiebreakers in Challenger Division work identically to Masters and Pro Division.</p>
      <h2>Promotion, Demotion, and Integration of Challenger</h2>
      <h3>Masters Circuit</h3>
      <p>Promotion into Diamond and Platinum occurs either by winning the Divisional Championship of the immediately lower division, or by winning a Promotion match against the Hazard Dropper of that division.</p>
      <p>Demotion from Diamond and Platinum occurs either by losing the Hazard match of a division, or by losing a Promotion match against the runner-up of the immediately lower division.</p>
      <p>Promotion into Gold occurs automatically for the Silver 1st place finisher, as well as a result of the Tournament of Position</p>
      <h3>Pro and Challenger Circuits</h3>
      <p>Promotion into all Pro Circuit divisions occurs when a 1st place finisher in the immediately lower division elects direct promotion, and also may occur as a result of the Tournament of Position.</p>
      <p>The Gold last place regular season finisher is always demoted to Silver.</p>
      <p>Demotion from all Pro Circuit divisions, as well as Gold, only occurs when other players promoting to that division (or players demoting from a higher division) causes the division to exceed its capacity of players. In that event, players are demoted to the immediately lower division, starting with the lowest ranked player, to make room.</p>
      <p>At the end of a season/beginning of a subsequent season, all Challenger players are integrated into existing divisions by creating new Pro Circuit divisions as necessary.</p>
      <p>Administrative promotions occur when player drops or departures leave vacancies in existing divisions. Administrative promotion to a vacant slot goes to players in this order: first, to placement players who earn the slot; second, to any player who was in the division in question in the previous season, in order of finish; third, to any divisional runner-up in the immediately lower division who lost their subsequent Promotion match; fourth, to other players in the immediately lower division in order of finish; fifth, by using the same general rules of priority as above, but descending down divisions as necessary.</p>
      <h2>Match Formatting</h2>
      <p><strong>Players are encouraged to use LtHummus' browser-based utility for setting up their matches. It can be found <a href="http://draft.spypartyfans.com/" rel="noopener noreferrer" target="_blank">here</a></strong></p>
      <h3>Regular Season Matches</h3>
      <p>This format is used in all Circuits for all matches occurring during the regular season. A regular season match consists of a maximum of twelve games over four venues, drafted by the players from the venue pool (see below for venue pool). In the draft process, the players may use any random method (like flipping a coin or LtHummus' draft utility) to determine a winner; that winner has their choice of determining who bans and drafts first, or who spies/snipes first; whichever of these options they choose, the player who lost the random toss determines the other. The players each ban one venue from the venue pool.</p>
      <p>Following bans, the player who banned first picks a non-banned venue layout first, followed by the other. This first pick of each player will be played TWICE (twice each as spy and sniper for each player). Then each player picks a further venue which will be played ONCE. </p>
      <p>No given venue may be chosen more than once during this process. The players then play up to twelve games on the selected venues, alternating as spy and sniper in the order that the venues were picked (e.g., the first doubled venue has its all its matches played first, then the second doubled venue, etc). In all matches, regular season or otherwise, the sniper is encouraged to ensure the spy is ready before starting the game. If one player wins seven games, that player is the winner and the match ends at once. If all twelve games are played and the score is 6-6, the match is a draw.</p>
      <h3>Playoff Matches</h3>
      <p>Playoff matches are used for all non-regular season matches which are not the League Championship. They consist of a maximum of sixteen games. The general rules are exactly the same as for regular season matches, with a few differences: </p>
      <p>First - the higher-finishing player from the regular season selects BOTH who picks/bans first, AND who spies.</p>
      <p>Second - The players do the exact same pick/ban method as for a regular season game, except they each pick one venue to be played through twice and TWO venues to be played through once. </p>
      <p>Third - The first player to win nine games wins a playoff match. If the match ends 8-8, the player with the higher regular-season finish is the winner.</p>
      <h3>League Championship Match</h3>
      <p>The League Championship Match is played between the 1st and 2nd place finishers in the top division to determine the League Champion. </p>
      <p>It is identical to a playoff match as above, except the players only pick one venue each to ban, and one venue each that will be doubled. Then ALL the unbanned venues are played through in alphabetical order, with the doubled venues being played twice when it comes their turn.</p>
      <p>The winner of the League Championship is the first to win 12 games. In the event of an 11-11 tie, the game proceeds to a tiebreaker.</p>
      <p>In a tiebreaker, the player who picked/banned first selects any venue (not a variant, but a general venue) from the venue pool, even one that was played during the tied match. Then the other player similarly picks any venue. The first player then spies on the first selected venue, followed by the second player. On the second selected venue, the second player spies first, followed by the first player. Each venue, instead of any of its normal variant, is played with all of its possible missions activated in a "known" variant (also called "known maximum"). </p>
      <p>The player who, over the course of these four games, completes more missions as spy, wins the match. "Pending" missions do not count as completed. If the sniper shoots a civilian, the spy is considered to have completed all the missions available in that venue. If the players complete the same number of missions, the procedure is repeated until one player completes more missions over the course of four games. No venue may be selected more than once for a tiebreaker unless all venues have already been selected. </p>
      <h2>Venue Pool</h2>
      <p>The venue pool is as follows. It is subject to change. All venues use the "any" gametype of the specified numbers. All venues refer to new art variants. Default partygoers and time control unless otherwise specified.</p>
      <div className="venues">
            <span className="venue-images">
                  <figure className="venue-figures"><img src={Ballroom} className="smaller-image" alt="venue" alt-text="Ballroom 4/8"/>
                  <figcaption>Ballroom 4/8</figcaption></figure></span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={Library} className="smaller-image" alt="venue" alt-text="Library 5/8"/>
                        <figcaption>Library 5/8</figcaption></figure>
                  </span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={Moderne} className="smaller-image" alt="venue" alt-text="Moderne 5/8"/>
                        <figcaption>Moderne 5/8</figcaption></figure>
                  </span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={Balcony} className="smaller-image" alt="venue" alt-text="Balcony 2/3"/>
                        <figcaption>Balcony 2/3</figcaption></figure>
                  </span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={Terrace} className="smaller-image" alt="venue" alt-text="Terrace 3/5"/>
                        <figcaption>Terrace 3/5 </figcaption></figure>
                  </span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={Pub} className="smaller-image" alt="venue" alt-text="Pub 4/7"/>
                        <figcaption>Pub 3/5</figcaption></figure>
                  </span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={HighRise} className="smaller-image" alt="venue" alt-text="High-Rise 3/5"/>
                        <figcaption>High-Rise 3/5</figcaption></figure>
                  </span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={Courtyard} className="smaller-image" alt="venue" alt-text="Courtyard 4/7"/>
                        <figcaption>Courtyard 4/7</figcaption></figure>
                  </span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={Gallery} className="smaller-image" alt="venue" alt-text="Gallery 4/8"/>
                        <figcaption>Gallery 4/8</figcaption></figure>
                  </span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={Veranda} className="smaller-image" alt="venue" alt-text="Veranda 5/8"/>
                        <figcaption>Veranda 5/8</figcaption></figure>
                  </span>
                  <span className="venue-images">
                        <figure className="venue-figures"><img src={Teien} className="smaller-image" alt="venue" alt-text="Teien 4/8"/>
                        <figcaption>Teien 4/8</figcaption></figure>
                  </span>
            </div>
            <h2>Scheduling and Miscellaneous</h2>
            <h3>Joining the League</h3>
            <p>Players joining the league while a season is not in progress are added to the lowest Pro Circuit division (unless they qualify as placement players, see below). If the lowest division is already full, a new one is created to accommodate them. </p>
            <p>Late joining a season in progress is permitted. If the lowest Pro Circuit division does not yet have 13 players, a late joiner is added to that division. Such a player will be treated with extreme lenience in catching up to play all their matches, but they must still complete the single round robin season or else forfeit all their matches, as normal. Such players are encouraged to catch up as quickly as possible.</p>
            <p>If the lowest Pro Circuit division already has a full complement of 13 players, late joiners are added to Challenger Division.</p>
            <h3>Placement Matches</h3>
            <p>Any player who has at least 1,000 games played who has not previously participated in a full season of SCL is entitled to placement. Placement players choose any player who finished in 3rd place in a division in the previous season and play a regular season match against them. If the 3rd place finisher is not available in that division for any reason, then instead they place the 4th place finisher, and so on. If the placement player loses, they are placed in the lowest available Pro Circuit division. If the placement player wins or draws, they are entitled to placement in the division where they player they beat or drew finished in 3rd place, if available. Availability is determined by the existence of vacancies in that division. No player may be displaced by a placement player if they earned their slot in a division in the preceding season by finishing the season there. If no slots are available in the placement player's earned division, they are instead placed in the highest available lower division.</p>
            <p>If divisions exist in the Pro Circuit which did not exist in the previous season, a Placement player may also elect direct promotion to such a division, without the need for any matches played.</p>
            <h3>Returning Alumni</h3>
            <p>If a player retires from SCL between seasons having completed their matches to the extent of their ability, without being dropped, then they are considered an alumnus player. A returning alumnus player is entitled to placement in the division in which they last finished a season as though they were a placement player who earned placement there.</p>
            <h3>Scheduling Matches</h3>
            <p>Match schedules are posted in advance. Weeks begin and end at midnight Pacific time on Friday/Saturday. Matches scheduled for a particular week should be played during that week by arrangement of the players over the messaging system of this forum or the discord. If absolutely necessary the League Administrator can liaise. Players should be attentive to their PMs, and be polite/facilitate the tournament by promptly attempting to schedule matches and respond to inquiries from opponents and the league administrator. </p>
            <p>Scheduling for a particular week should begin immediately; scheduling weeks in advance is encouraged. If a player has contacted their opponent and received no reply within a reasonable amount of time (generally, allow 24 hours), then they should immediately contact the league administrator (KrazyCaley) by PM. Also encouraged, though not mandatory, is scheduling matches to coincide with the casting show associated with the league, which occur on both Saturday and Sunday; contact the stream coordinator (Wodar) to get your match on the livestream. Matches that are so scheduled will be broadcast live if feasible. </p>
            <h3>Posting Results</h3>
            <p>To be counted, replays of a match must be uploaded to the primary SCL website here, and then posting the resulting auto-generated forum post to the results thread here. If any difficult is had in uploading replays, or the site is not working for any reason, the replays should be sent directly to the League Administrator.</p>
            <h3>Byes and Makeups</h3>
            <p>A player who has a weeklong scheduling conflict or otherwise finds it inconvenient to play in a given week may declare a makeup. Up to three makeups, so long as they are given with advance notice, are permitted. Makeups which are required due to unannounced absences may be granted or denied and forfeited, at the discretion of the league administrator. Although a week is allotted at the end of the regular season for resolving makeup matches, makeup matches may be played at any time before then at the convenience of the involved players. Makeup matches MAY NOT be played later than the end of the makeup week. </p>
            <p>As part of the regular schedule, some players may receive byes during the regular season, meaning they have no match to play that week.</p>
            <p>A player who stops being responsive to match scheduling and inquiries from the league administrator may be dropped from the League.</p>
            <h3>Forfeits</h3>
            <p>If a player fails to comply with match scheduling/participation requirements, they may forfeit their matches at the discretion of the league administrator. The general rule is that a player may have no more than three "hanging" late matches still to be played after the week the match was supposed to be played has ended. If a player would have a fourth match become late, that player automatically forfeits that match unless the league administrator rules otherwise for good cause. A forfeited match is credited as a victory to the other player. </p>
            <p>If a player outside of Masters Circuit is dropped, or fails by the end of the makeup week to play all their matches, then all their results are retroactively counted as forfeits, even if some of the matches were completed. This is also true of players within Masters Circuit unless the player completed at least one match against all other opponents in their division. If that occurred, then the earliest result against each opponent is kept as valid and the rest are forfeited.</p>
            <p>If, in the judgment of the league administrator, both players in a match are culpable in failing to schedule/play that match, then the match will be scored as a loss for both players.</p>
            <h3>Technical Problems</h3>
            <p>If a technical problem or accident occurs during a game which would have a serious effect on the playability of that game, and the technical problem/accident is associated with one player, then affected player should immediately inform the unaffected player if possible. The game should be stopped at once, and a replacement game played, along with the rest of the match as normal (players should continue playing match games until either the outcome of the match is decided without counting the problematic game at all, or until all games besides the problematic game have been played) Then the league administrator should be contacted. Replays of all games, including the game with the problem, should be uploaded.</p>
            <p>If the game with the technical problem and/or its replacement would not have affected the outcome of the match, no ruling will be made and the replacement game's result will be accepted. If the problematic game would have affected the outcome of a match, then it will be reviewed by the league administrator. The administrator may rule either that the affected player forfeits the game in question, or that the result of the replacement game stands. This ruling will be made primarily on the administrator's judgment as to what result would be most fair given the nature of the technical problem and the progress of the game in question before the technical problem occurred.</p>
            <p>In games where the problem is associated with neither player, such as server crash, neither player will be considered the affected player. A replacement game should still be played and all replays submitted. The league administrator will review the games. The result of the replacement game will usually be accepted unless one player or the other was extremely likely to win the stopped game. Similarly, if a game is stopped due to unplayable latency issues, neither player will be considered the "affected" player unless there is clear evidence that one player's internet connection was to blame. Players are strongly encouraged, however, to play through minor latency if possible.</p>
            <h3>The Ed Rule</h3>
            <p>Both players should ensure that the "mixed art" setting is turned off for SCL matches. Games which are played using mixed art characters are void. Only new art is allowed in SCL.</p>
            <h3>Wrong Venue Rule</h3>
            <p>If the players play a game on the wrong venue, mission layout, or game settings by accident, any player who notices must immediately point out the problem, terminate the game, and restart on the correct venue. This may be done at any time before the game ends. Once the game ends, it becomes "official." </p>
            <p>If the players accidentally play their games on the correct venues, but out of the correct venue order, such games should not be aborted once they are in progress. A player who wants to ensure that venues are played through in correct order should do so before a game starts.</p>
            <h3>Disputes</h3>
            <p>During a match, players should attempt to resolve disputes on their own by mutual agreement. If a dispute cannot be so settled, the league administrator (KrazyCaley) should be contacted to resolve the dispute before the match proceeds. If the league administrator is not available, the match should be postponed until later in the week, after the dispute can be settled. The match may also be postponed to the bye week if convenient. In the unlikely event that the league administrator is involved in an unresolvable dispute, disputes will be resolved by Checker. Disputes relating to the functionality of the draft/standings/replays utility will be resolved by LtHummus, as will the unlikely contingency of a dispute between Checker and KrazyCaley.</p>
      </div>
      )}
      export default RulesPage;