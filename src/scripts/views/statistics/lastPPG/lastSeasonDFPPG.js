import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import DfTable from '../components/dfTable'
import ReactTooltip from 'react-tooltip'

var seasonDFData = require('../../../data.json').lastSeasonDFdata

var LastSeasonDFPPG = React.createClass({
  	render: function() {
  		// Hide DF table if DF Button is not active
  		if (this.props.showDFStats === false) {
    		return null
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table'>
			        <table id="complete">
						<Headers />
						<Body  data={seasonDFData}/>
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
				<td>{(player.sack/player.gp).toFixed(2)}</td>
				<td>{(player.blk/player.gp).toFixed(2)}</td>
				<td>{(player.int/player.gp).toFixed(2)}</td>
				<td>{(player.fumr/player.gp).toFixed(2)}</td>
				<td>{(player.sfty/player.gp).toFixed(2)}</td>
				<td>{(player.deftd/player.gp).toFixed(2)}</td>
				<td>{(player.rettd/player.gp).toFixed(2)}</td>
				<td>{(player.fpts/player.gp).toFixed(2)}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default LastSeasonDFPPG