import React from 'react'
import Backbone from 'backbone'
import STORE from '../../../../store'
import ACTIONS from '../../../../actions'

import CurrentPositionButtons from './currentPositionButtons'
import CurrentAllStats from './currentALLstats'
import CurrentQBStats from './currentQBstats'
import CurrentRBStats from './currentRBstats'
import CurrentWRStats from './currentWRstats'
import CurrentTEStats from './currentTEstats'
import CurrentDFStats from './currentDFstats'

var seasonAllData = require('../../../../data.json').alldata
var seasonQBData = require('../../../../data.json').qbdata
var seasonRBData = require('../../../../data.json').rbdata
var seasonWRData = require('../../../../data.json').wrdata
var seasonTEData = require('../../../../data.json').tedata
var seasonDFData = require('../../../../data.json').dfdata

var CurrentSeasonTotal = React.createClass({
  render: function() {
  	return (
        <div className='currentseason-wrapper'>
          <CurrentPositionButtons
            allButtonColor={this.props.allButtonColor}
            qbButtonColor={this.props.qbButtonColor} 
            rbButtonColor={this.props.rbButtonColor} 
            wrButtonColor={this.props.wrButtonColor} 
            teButtonColor={this.props.teButtonColor} 
            dfButtonColor={this.props.dfButtonColor}/>
          <CurrentAllStats 
            seasonAllData={seasonAllData}
            showAllStats={this.props.showAllStats}
            ppgStats={this.props.ppgStats} />
          <CurrentQBStats 
            seasonQBData={seasonQBData}
            showQBStats={this.props.showQBStats}
            />
          <CurrentRBStats 
            seasonRBData={seasonRBData}
            showRBStats={this.props.showRBStats}
            />
          <CurrentWRStats 
            seasonWRData={seasonWRData}
            showWRStats={this.props.showWRStats}
            />
          <CurrentTEStats 
            seasonTEData={seasonTEData}
            showTEStats={this.props.showTEStats}
            />
          <CurrentDFStats 
            seasonDFData={seasonDFData}
            showDFStats={this.props.showDFStats}
            />
        </div>
  	)
	}
})

export default CurrentSeasonTotal