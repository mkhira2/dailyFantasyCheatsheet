import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import ReactTooltip from 'react-tooltip'

var QbTable = React.createClass({
    render: function() {
      return (
        <thead>
            <tr>
                <th id='widen-th'>PLAYER<i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Team Name">TEAM</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Games Played">GP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Attempted Passes">ATT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Completed Passes">CMP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Completed Passes %">PCT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Total Yards">YDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
                <th><span id='th-pointer' data-tip="Passing Touchdowns">TDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Interceptions">INTS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Rushing Attempts">RUATT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Rushing Yards">RUYDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Rushing Touchdowns">RUTDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
                <th><span id='th-pointer' data-tip="Fantasy Points">FPTS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            </tr>
        </thead>
      )
  }
})

export default QbTable