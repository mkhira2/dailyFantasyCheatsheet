import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import ReactTooltip from 'react-tooltip'

var DfTable = React.createClass({
    render: function() {
      return (
        <thead>
            <tr>
                <th id='widen-th'><span id='th-pointer' data-tip="Player Name">PLAYER</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Games Played">GP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Quarterback Sacks">SACK</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Field Goals Blocked">BLK</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Interceptions">INT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Fumble Recoveries">FUMR</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Safeties">SFTY</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Defensive Touchdowns">DEFTD</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Kickoffs Returned for Touchdown">RETTD</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Fantasy Points">FPTS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            </tr>
        </thead>
      )
  }
})

export default DfTable