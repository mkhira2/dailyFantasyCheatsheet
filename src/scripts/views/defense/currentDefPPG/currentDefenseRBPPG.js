import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import ReactTooltip from 'react-tooltip'

var rbDefense = require('../../../data.json').rbDefense

var CurrentDefenseRBPPG = React.createClass({
  	render: function() {
  		// Hide RB table if RB Button is not active
  		if (this.props.showRBDef === false) {
    		return null
    	}
   		if (rbDefense.length < 2) {
    		return (
    			<div className='no-data'>
    				<h4>There are currently no stats to display</h4>
		            <p>
		              Check back after the season has started<br />
		              or select 'Last Season' above to view last season's stats.
		            </p>
    			</div>
    		)
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table'>
			        <table id="complete">
						<Headers />
						<Body  data={rbDefense}/>
			        </table>
	      		</div>
        		<ReactTooltip place="bottom" effect="solid" multiline={true} offset={{bottom: 20, right: 9}}/>
	      </div>
	    ) 
	}
})

var Headers = React.createClass({
  componentDidMount: function() {
    $("#complete").tablesorter();
  },
  render: function () {
    return (
      	<thead>
	        <tr>
				<th id='widen-th'><span id='th-pointer' data-tip="Team Name">TEAM</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th><span id='th-pointer' data-tip="Games Played">GP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Attempts">RUATT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Yards">RUYDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Touchdowns">RUTDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th><span id='th-pointer' data-tip="Targets">TAR</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Receptions">REC</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Receiving Yards">REYDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th><span id='th-pointer' data-tip="Receiving Touchdowns">RETDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th><span id='th-pointer' data-tip="Fantasy Points">FPTS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
	        </tr>
      	</thead>
    )
  }
})

var Body = React.createClass({
  render: function() {
  	var preSortedData = this.props.data.sort(function(a,b){return b.fpts - a.fpts})
    return (
      <tbody>
        {preSortedData.map(function(player, i) {
            return (
              <tr key={i}>
                <td id='align-left'>{player.team}</td> 
				<td>{player.gp}</td>
				<td>{(player.ruatt/player.gp).toFixed(2)}</td>
				<td>{(player.ruyds/player.gp).toFixed(2)}</td>
				<td>{(player.rutd/player.gp).toFixed(2)}</td>
				<td>{(player.tar/player.gp).toFixed(2)}</td>
				<td>{(player.rec/player.gp).toFixed(2)}</td>
				<td>{(player.reyds/player.gp).toFixed(2)}</td>
				<td>{(player.retd/player.gp).toFixed(2)}</td>
				<td>{(player.fpts/player.gp).toFixed(2)}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default CurrentDefenseRBPPG