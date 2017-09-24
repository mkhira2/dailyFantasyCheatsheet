import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import TeTable from '../components/teTable'
import ReactTooltip from 'react-tooltip'

var seasonTEData = require('../../../data.json').tedata

var CurrentSeasonTETotal = React.createClass({
  	render: function() {
  		var tableResponsive = {
	      overflowX:"auto"
    	}
    	if (this.props.showTEStats === false) {
    		return null
    	}
    	if (seasonTEData.length < 2) {
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
				<div className='stat-table' style={tableResponsive}>
			        <table id="complete" className="tablesorter table table-condensed table-striped table-hover">
						<Headers />
						<Body data={seasonTEData} />
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
      	<TeTable />
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
					<td id='align-left'>{player.player}</td> 
					<td>{player.team}</td>
					<td>{player.gp}</td>
					<td>{player.tar}</td>
					<td>{player.rec}</td>
					<td>{player.reyds}</td>
					<td>{player.reypc}</td>
					<td>{player.retd}</td>
					<td>{player.ruatt}</td>
					<td>{player.ruyds}</td>
					<td>{player.ruypc}</td>
					<td>{player.rutd}</td>
					<td>{player.tchs}</td>
					<td>{player.tyds}</td>
					<td>{player.fpts}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default CurrentSeasonTETotal