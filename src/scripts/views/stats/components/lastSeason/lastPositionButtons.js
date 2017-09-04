import React from 'react'
import Backbone from 'backbone'
import STORE from '../../../../store'
import ACTIONS from '../../../../actions'

var LastPositionButtons = React.createClass({
	render: function() {
		return (
			<div className='button-container'>
				<div className='pos-button-row'>
					<button className='stat-button' style={{backgroundColor:this.props.allButtonColor}} onClick={ACTIONS.showAllStats}>
		              <p>ALL</p>
		            </button>
		            <button className='stat-button' style={{backgroundColor:this.props.qbButtonColor}} onClick={ACTIONS.showQBStats}>
		              <p>QB</p>
		            </button>
		            <button className='stat-button' style={{backgroundColor:this.props.rbButtonColor}} onClick={ACTIONS.showRBStats}>
		              <p>RB</p>
		            </button>
		            <button className='stat-button' style={{backgroundColor:this.props.wrButtonColor}} onClick={ACTIONS.showWRStats}>
		              <p>WR</p>
		            </button>
		            <button className='stat-button' style={{backgroundColor:this.props.teButtonColor}} onClick={ACTIONS.showTEStats}>
		              <p>TE</p>
		            </button>
		            <button className='stat-button' style={{backgroundColor:this.props.dfButtonColor}} onClick={ACTIONS.showDFStats}>
		              <p>DEF</p>
		            </button>
		        </div>
		        <div className='ppg-button-row'>
					<button className='ppg-button' style={{backgroundColor:this.props.totalButtonColor}} onClick={ACTIONS.showTotalStats}>
					  <p>TOTAL</p>
					</button>
					<button className='ppg-button' style={{backgroundColor:this.props.ppgButtonColor}} onClick={ACTIONS.showPPGStats}>
					  <p>PPG</p>
					</button>
				</div>
				<div className='year-button-row'>
					<button className='yearly-button'>
					  <p>Current Season</p>
					</button>
					<button className='yearly-button' id='current-button'>
					  <p>Last Season</p>
					</button>
				</div>
			</div>
		)
	}
})

export default LastPositionButtons