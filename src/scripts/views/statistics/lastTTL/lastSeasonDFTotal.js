import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import DfTable from '../components/dfTable'
import ReactTooltip from 'react-tooltip'

var seasonDFData = require('../../../data.json').lastSeasonDFdata

var LastSeasonDFTotal = React.createClass({
  	render: function() {
  		var tableResponsive = {
	      overflowX:"auto"
    	}
    	if (this.props.showDFStats === false) {
    		return null
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table' style={tableResponsive}>
			        <table id="complete" className="tablesorter table table-condensed table-striped table-hover">
						<Headers />
						<Body data={seasonDFData} />
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
      	<DfTable />
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
				<td>{player.gp}</td>
				<td>{player.sack}</td>
				<td>{player.blk}</td>
				<td>{player.int}</td>
				<td>{player.fumr}</td>
				<td>{player.sfty}</td>
				<td>{player.deftd}</td>
				<td>{player.rettd}</td>
				<td>{player.fpts}</td>
              	</tr>
            )
         })}
      </tbody>
    );
  }
})

export default LastSeasonDFTotal