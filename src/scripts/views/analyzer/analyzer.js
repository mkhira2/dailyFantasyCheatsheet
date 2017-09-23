import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

import Header from '../components/header'
import Navigation from '../components/navigation'
import Loading from '../components/loading'

import Buttons from './buttons'
import QBAnalyzer from './positions/qbAnalyzer'
import RBAnalyzer from './positions/rbAnalyzer'
import WRAnalyzer from './positions/wrAnalyzer'
import TEAnalyzer from './positions/teAnalyzer'
import DFAnalyzer from './positions/dfAnalyzer'

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

var proj = require('../../../../data/player_projections_w3.json')

import CheatsheetModal from './../components/cheatsheetModal'


var Analyzer = React.createClass({
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

	render: function() {
		return (
			<div className='statistics-container'>
        		<Header />
		        <div className="statistics-wrapper">
					<Navigation />
					<AnalyzerData
						qbData = {this.state.qbAnalyzer}
						rbData = {this.state.rbAnalyzer}
						wrData = {this.state.wrAnalyzer}
						teData = {this.state.teAnalyzer}
						dfData = {this.state.dfAnalyzer}
						showQBCheat = {this.state.showQBCheat}
						showRBCheat = {this.state.showRBCheat}
						showWRCheat = {this.state.showWRCheat}
						showTECheat = {this.state.showTECheat}
						showDFCheat = {this.state.showDFCheat}
						qbCheatButtonColor = {this.state.qbCheatButtonColor}
						rbCheatButtonColor = {this.state.rbCheatButtonColor}
						wrCheatButtonColor = {this.state.wrCheatButtonColor}
						teCheatButtonColor = {this.state.teCheatButtonColor}
						dfCheatButtonColor = {this.state.dfCheatButtonColor}
						qbCheatButtonFontColor = {this.state.qbCheatButtonFontColor}
						rbCheatButtonFontColor = {this.state.rbCheatButtonFontColor}
						wrCheatButtonFontColor = {this.state.wrCheatButtonFontColor}
						teCheatButtonFontColor = {this.state.teCheatButtonFontColor}
						dfCheatButtonFontColor = {this.state.dfCheatButtonFontColor}
						infoModal = {this.state.infoModal} />
		        </div>
			</div>
		)
	}
})

var AnalyzerData = React.createClass({
  showCheatSheetModal: function(){
  	STORE.set({
			infoModal: true
		})
  },
  render: function() {
  	return (
  		<div className='data-container'>
        <div className='section-header'>
        	<div className='section-overlay'>
	            <div className='section-info'>
	              <h4>The CheatSheet &nbsp;<i className="fa fa-info-circle" aria-hidden="true" onClick={this.showCheatSheetModal}></i></h4>
	            </div>
	            {this.props.infoModal ? <CheatsheetModal /> : null }
	            <div className='legend-wrapper'>
	                <div className='legend'>Good &nbsp;<div id='great'></div></div>
	                <div className='legend'><div id='good'></div></div>
	                <div className='legend'><div id='average'></div></div>
	                <div className='legend'><div id='below'></div></div>
	                <div className='legend'><div id='terrible'></div>  &nbsp;Poor</div>
	            </div>
	         </div>
        </div>
        <div className='stat-data-wrapper'>
        <Buttons
        	showQBCheat =    	  {this.props.showQBCheat}
			showRBCheat =    	  {this.props.showRBCheat}
			showWRCheat =    	  {this.props.showWRCheat}
			showTECheat =    	  {this.props.showTECheat}
			showDFCheat =    	  {this.props.showDFCheat}
			qbCheatButtonColor =  {this.props.qbCheatButtonColor}
			rbCheatButtonColor =  {this.props.rbCheatButtonColor}
			wrCheatButtonColor =  {this.props.wrCheatButtonColor}
			teCheatButtonColor =  {this.props.teCheatButtonColor}
			dfCheatButtonColor =  {this.props.dfCheatButtonColor}
			qbCheatButtonFontColor = {this.props.qbCheatButtonFontColor}
			rbCheatButtonFontColor = {this.props.rbCheatButtonFontColor}
			wrCheatButtonFontColor = {this.props.wrCheatButtonFontColor}
			teCheatButtonFontColor = {this.props.teCheatButtonFontColor}
			dfCheatButtonFontColor = {this.props.dfCheatButtonFontColor} />
          <div className='positional-wrapper'>
            <QBAnalyzer
              qbData =            {this.props.qbData}
              showQBCheat =    	  {this.props.showQBCheat}
			  showRBCheat =    	  {this.props.showRBCheat}
			  showWRCheat =    	  {this.props.showWRCheat}
			  showTECheat =    	  {this.props.showTECheat}
			  showDFCheat =    	  {this.props.showDFCheat} />
           <RBAnalyzer
              rbData = {this.props.rbData}
              showQBCheat =    	  {this.props.showQBCheat}
			  showRBCheat =    	  {this.props.showRBCheat}
			  showWRCheat =    	  {this.props.showWRCheat}
			  showTECheat =    	  {this.props.showTECheat}
			  showDFCheat =    	  {this.props.showDFCheat} />
            <WRAnalyzer
              wrData = {this.props.wrData}
              showQBCheat =    	  {this.props.showQBCheat}
			  showRBCheat =    	  {this.props.showRBCheat}
			  showWRCheat =    	  {this.props.showWRCheat}
			  showTECheat =    	  {this.props.showTECheat}
			  showDFCheat =    	  {this.props.showDFCheat} />
            <TEAnalyzer
              teData = {this.props.teData}
              showQBCheat =    	  {this.props.showQBCheat}
			  showRBCheat =    	  {this.props.showRBCheat}
			  showWRCheat =    	  {this.props.showWRCheat}
			  showTECheat =    	  {this.props.showTECheat}
			  showDFCheat =    	  {this.props.showDFCheat} />
            <DFAnalyzer
              dfData = {this.props.dfData}
              showQBCheat =    	  {this.props.showQBCheat}
			  showRBCheat =    	  {this.props.showRBCheat}
			  showWRCheat =    	  {this.props.showWRCheat}
			  showTECheat =    	  {this.props.showTECheat}
			  showDFCheat =    	  {this.props.showDFCheat} />
          </div>
        </div>
  		</div>
  	)
	}
})

export default Analyzer
