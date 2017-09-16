import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

var seasonQBData = require('../../data.json').qbdata
var seasonRBData = require('../../data.json').rbdata
var seasonWRData = require('../../data.json').wrdata
var seasonTEData = require('../../data.json').tedata
var seasonDFData = require('../../data.json').dfdata

var qbDefense = require('../../data.json').qbDefense
var rbDefense = require('../../data.json').rbDefense
var wrDefense = require('../../data.json').wrDefense
var teDefense = require('../../data.json').teDefense

var lines = require('../../../../data/lines.json')

var proj = require('../../../../data/player_projections_w2.json')

import Header from '../components/header'
import Navigation from '../components/navigation'

import PickButtons from './pickButtons'
import QBpicks from './position/qbPicks'
import RBpicks from './position/rbPicks'
import WRpicks from './position/wrPicks'
import TEpicks from './position/tePicks'
import DFpicks from './position/dfPicks'

import CheatsheetModal from './../components/cheatsheetModal'

var Picks = React.createClass({
	componentWillMount: function() {
    ACTIONS.qbAnalyzer(seasonQBData, lines, qbDefense, proj)
		ACTIONS.rbAnalyzer(seasonRBData, lines, rbDefense, proj)
		ACTIONS.wrAnalyzer(seasonWRData, lines, wrDefense, proj)
		ACTIONS.teAnalyzer(seasonTEData, lines, teDefense, proj)
		ACTIONS.dfAnalyzer(seasonDFData, lines, proj)
    	STORE.on('dataUpdated', () => {
	      this.setState(STORE.data)
    	})
  	},

	componentWillUnmount: function() {
		STORE.off('dataUpdated')
	},

	getInitialState: function() {
	    return STORE.data
	},

  showPicksModal: function(){
  	STORE.set({
			infoModal: true
		})
  },

	render: function() {
		return (
			<div className='statistics-container'>
        	<Header />
		      <div className="statistics-wrapper">
					   <Navigation />
             <div className='data-container'>
               <div className='section-header'>
                 <div className="gem" onClick={this.showPicksModal}></div>
                 <div className='section-overlay'>
                   <div className='section-info'>
                     <h4>Quick Picks &nbsp;<i className="fa fa-info-circle" aria-hidden="true" ></i></h4>
                   </div>
                   {this.state.infoModal ? <CheatsheetModal /> : null }
                 </div>
               </div>
               <div className='stat-data-wrapper'>
                 <PickButtons
               			qbPicksButtonColor =  {this.state.qbPicksButtonColor}
               			rbPicksButtonColor =  {this.state.rbPicksButtonColor}
               			wrPicksButtonColor =  {this.state.wrPicksButtonColor}
               			tePicksButtonColor =  {this.state.tePicksButtonColor}
               			dfPicksButtonColor =  {this.state.dfPicksButtonColor}
               			qbPicksButtonFontColor = {this.state.qbPicksButtonFontColor}
               			rbPicksButtonFontColor = {this.state.rbPicksButtonFontColor}
               			wrPicksButtonFontColor = {this.state.wrPicksButtonFontColor}
               			tePicksButtonFontColor = {this.state.tePicksButtonFontColor}
               			dfPicksButtonFontColor = {this.state.dfPicksButtonFontColor} />
                 <div className='positional-wrapper'>
                   <QBpicks
                     qbData={this.state.qbAnalyzer}
                     showQBPicks={this.state.showQBPicks} />
                   <RBpicks
                     rbData={this.state.rbAnalyzer}
                     showRBPicks={this.state.showRBPicks} />
                   <WRpicks
                     wrData={this.state.wrAnalyzer}
                     showWRPicks={this.state.showWRPicks} />
                   <TEpicks
                     teData={this.state.teAnalyzer}
                     showTEPicks={this.state.showTEPicks} />
                   <DFpicks
                     dfData={this.state.dfAnalyzer}
                     showDFPicks={this.state.showDFPicks} />
                 </div>
               </div>
             </div>
           </div>
		      </div>

		)
	}
})

export default Picks
