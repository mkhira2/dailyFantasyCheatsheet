import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'
import ACTIONS from '../../actions'
import User from '../../models/userModel'

var CheatsheetModal = React.createClass({
  hideCheatSheetModal: function(){
    STORE.set({
      infoModal: false
    })
  },

  render: function() {
  	return (
      <div className='modal-background'>
    		<div className='info-modal'>
          <div className='close-modal' onClick={this.hideCheatSheetModal}> <i className="fa fa-times" aria-hidden="true"></i> </div>
          <h4>THE CHEATSHEET</h4>
          <p>
            The Cheatsheet is your weekly DFS headquarters. On this one page you can see salaries, projections, values, vegas data, matchup data, and advanced statistics. All the data is broken down by position and color coded making it easier to find the best daily fantasy plays of the week.
          </p>
    		</div>
      </div>
  	)
	}
})

export default CheatsheetModal
