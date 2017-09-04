import React from 'react'
import Backbone from 'backbone'
import STORE from '../../../../store'
import ACTIONS from '../../../../actions'

import LastPositionButtons from './lastPositionButtons'
import LastAllStats from './lastALLstats'
import LastQBStats from './lastQBstats'
import LastRBStats from './lastRBstats'
import LastWRStats from './lastWRstats'
import LastTEStats from './lastTEstats'
import LastDFStats from './lastDFstats'

var seasonAllData = require('../../../../data.json').alldata
var seasonQBData = require('../../../../data.json').qbdata
var seasonRBData = require('../../../../data.json').rbdata
var seasonWRData = require('../../../../data.json').wrdata
var seasonTEData = require('../../../../data.json').tedata
var seasonDFData = require('../../../../data.json').dfdata

var LastSeasonTotal = React.createClass({
  render: function() {
  	return (
        <div className='lastseason-wrapper'>
          <LastPositionButtons
            allButtonColor={this.props.allButtonColor}
            qbButtonColor={this.props.qbButtonColor} 
            rbButtonColor={this.props.rbButtonColor} 
            wrButtonColor={this.props.wrButtonColor} 
            teButtonColor={this.props.teButtonColor} 
            dfButtonColor={this.props.dfButtonColor}
            ppgButtonColor={this.props.ppgButtonColor} 
            totalButtonColor={this.props.totalButtonColor}/>
          <LastAllStats 
            seasonAllData={seasonAllData}
            showAllStats={this.props.showAllStats}
            ppgStats={this.props.ppgStats}/>
          <LastQBStats 
            seasonQBData={seasonQBData}
            showQBStats={this.props.showQBStats}
            ppgStats={this.props.ppgStats}/>
          <LastRBStats 
            seasonRBData={seasonRBData}
            showRBStats={this.props.showRBStats}
            ppgStats={this.props.ppgStats}/>
          <LastWRStats 
            seasonWRData={seasonWRData}
            showWRStats={this.props.showWRStats}
            ppgStats={this.props.ppgStats}/>
          <LastTEStats 
            seasonTEData={seasonTEData}
            showTEStats={this.props.showTEStats}
            ppgStats={this.props.ppgStats}/>
          <LastDFStats 
            seasonDFData={seasonDFData}
            showDFStats={this.props.showDFStats}
            ppgStats={this.props.ppgStats}/>
        </div>
  	)
	}
})

export default LastSeasonTotal