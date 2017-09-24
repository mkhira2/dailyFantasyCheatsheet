import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import ReactTooltip from 'react-tooltip'

var AllTable = React.createClass({
    render: function() {
      return (
        <thead>
          <tr>
        <th id='widen-th'><span id='th-pointer' data-tip="Player Name">PLAYER</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
        <th><span id='th-pointer' data-tip="Team Name">TEAM</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Player Position">POS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Games Played">GP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Pass Attempts">PATT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
        <th><span id='th-pointer' data-tip="Pass Completions">PCMP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Passing Yards">PYDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
        <th><span id='th-pointer' data-tip="Passing Touchdowns">PTDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Interceptions">PINT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Play Action %">PA%</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
        <th><span id='th-pointer' data-tip="Rushing Attempts">RUATT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Rushing Yards">RUYDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Rushing Touchdowns">RUTDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Receptions">REC</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Receiving Yards">REYRD</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Receiving Touchdowns">RETDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th><span id='th-pointer' data-tip="Fantasy Points">FPTS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          </tr>
        </thead>
      )
  }
})

export default AllTable