import React from 'react'
import Backbone from 'backbone'
import STORE from '../../../../store'
import ACTIONS from '../../../../actions'

import LastSeasonTotal from './lastSeasonTotal'

var LastStatData = React.createClass({
  render: function() {
  	return (
  		<div className='data-container'>
        <div className='stat-data-wrapper'>
          <LastSeasonTotal
            allButtonColor={this.props.allButtonColor}
            qbButtonColor={this.props.qbButtonColor} 
            rbButtonColor={this.props.rbButtonColor} 
            wrButtonColor={this.props.wrButtonColor} 
            teButtonColor={this.props.teButtonColor} 
            dfButtonColor={this.props.dfButtonColor}
            ppgButtonColor={this.props.ppgButtonColor} 
            totalButtonColor={this.props.totalButtonColor}
            showAllStats={this.props.showAllStats}
            showQBStats={this.props.showQBStats}
            showRBStats={this.props.showRBStats}
            showWRStats={this.props.showWRStats}
            showTEStats={this.props.showTEStats}
            showDFStats={this.props.showDFStats}
            ppgStats={this.props.ppgStats}/>
        </div>
  		</div>
  	)
	}
})

export default LastStatData