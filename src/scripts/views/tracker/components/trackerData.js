import React from 'react'
import Backbone from 'backbone'
import STORE from '../../../store'
import ACTIONS from '../../../actions'

import Loading from '../../components/loading'

import BankrollGraph from './bankrollGraph'

var TrackerData = React.createClass({
  render: function() {
  	ACTIONS.chartingProfit(this.props.contests)
  	return (
  		<div className='data-container'>
  			<div className='section-header'>
	          <h4>Bankroll Tracker</h4>
	        </div>
  			<div className='bankroll-data-wrapper'>
  				<div className='bankroll-top-row'>
	  				<div className='box'>
	  					<p>NFL GAMES PLAYED</p>
			        	<h4>{ACTIONS.filterNFLContests(this.props.contests).length}</h4>
			        </div>
			        <div className='box'>
			        	<p>WINNINGS</p>
			        	<h4>${ACTIONS.calcWinnings(this.props.contests)}</h4>
			        </div>
			        <div className='box'>
			        	<p>ENTRY FEES</p>
			        	<h4>${ACTIONS.calcFees(this.props.contests)}</h4>
			        </div>
			        <div className='box'>
			        	<p>PROFIT</p>
			        	<h4>${ACTIONS.calcProfit(this.props.contests)}</h4>
			        </div>
			        <div className='box'>
			        	<p>ROI</p>
			        	<h4>{ACTIONS.calcROI(this.props.contests)}%</h4>
			        </div>
			        <div className='box'>
			        	<p>WIN RATE</p>
			        	<h4>{ACTIONS.calcWinRate(this.props.contests)}%</h4>
			        </div>
			        <div className='box'>
			        	<p>AVG SCORE</p>
			        	<h4>{ACTIONS.calcAvgScore(this.props.contests)}</h4>
			        </div>
			        <div className='box'>
			        	<p>AVG WINNING SCORE</p>
			        	<h4>{ACTIONS.calcAvgWinningScore(this.props.contests)}</h4>
			        </div>
			    </div>
			    <BankrollGraph data={this.props.contests}/>
			    <div className='bankroll-third-row'>
			    	<div className='breakdown-box'>
			        	<p>CONTEST BREAKDOWN</p>
			        </div>
			    </div>
	       	</div>
  		</div>
  	)
  }
})

export default TrackerData