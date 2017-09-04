import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import numeral from 'numeral'
import STORE from '../../../store'
import ACTIONS from '../../../actions'
import ReactTooltip from 'react-tooltip'

import LastUpdated from './../../components/lastUpdated'
import Note from './../../components/note'

var RBpicks = React.createClass({
	render: function() {
    if (this.props.showRBPicks === false) {
      return null
    }
		return (
			<div className='stat-container'>
				<div className="notes">
					<LastUpdated />
		        </div>
				<div className='stat-table' >
			    <table id="complete" className="tablesorter">
						<Headers />
						<Body  rbPicks={ACTIONS.rbPicks(this.props.rbData)} />
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
	render: function() {
		return (
			<thead className='stat-container'>
        <tr>
          <th id='widen-th' className='headercol'>PLAYER <span data-tip="Player Name"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th id='widen-th'>TEAM <span data-tip="Team Name"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th>OPP <span data-tip="Opponent"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th>DK SALARY <span data-tip="DraftKings Salary"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th>PROJ <span data-tip="DraftKings Salary"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th>H-VALUE <span data-tip="DraftKings Fantasy<br>Points Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        </tr>
	    </thead>
	  )
	}
})

var Body = React.createClass({
	render: function() {
		return (
			<tbody >
        {this.props.rbPicks.map(function(player, i) {
          var currency = player.salary
          var salary = Number(currency.replace(/[^0-9\.-]+/g,""))
            return (
              <tr key={i}>
                <td id='align-left' className='firstcol'>{player.player}</td>
                <td id='align-left'>{player.team}</td>
                <td>{player.opp}</td>
                <td>{player.salary}</td>
                <td>{player.proj}</td>
                <td>{(player.dvoa_rush_rank)}</td>
              </tr>
            )
         })}
	    </tbody>
	  )
	}
})


export default RBpicks
