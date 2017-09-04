import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'
import ACTIONS from '../../actions'

var StatButtons = React.createClass({
	render: function() {
		return (
			<div className='button-container'>
				<div className='pos-button-row'>
					<button className='stat-button' 
							style={{backgroundColor:this.props.allButtonColor, color:this.props.allButtonFontColor}} 
							onClick={ACTIONS.showAllStats}>
		              <p>ALL</p>
		            </button>
		            <button className='stat-button' 
		            		style={{backgroundColor:this.props.qbButtonColor, color:this.props.qbButtonFontColor}} 
		            		onClick={ACTIONS.showQBStats}>
		              <p>QB</p>
		            </button>
		            <button className='stat-button' 
		            		style={{backgroundColor:this.props.rbButtonColor, color:this.props.rbButtonFontColor}} 
		            		onClick={ACTIONS.showRBStats}>
		              <p>RB</p>
		            </button>
		            <button className='stat-button' 
		            		style={{backgroundColor:this.props.wrButtonColor, color:this.props.wrButtonFontColor}} 
		            		onClick={ACTIONS.showWRStats}>
		              <p>WR</p>
		            </button>
		            <button className='stat-button' 
		            		style={{backgroundColor:this.props.teButtonColor, color:this.props.teButtonFontColor}} 
		            		onClick={ACTIONS.showTEStats}>
		              <p>TE</p>
		            </button>
		            <button className='stat-button' 
		            		style={{backgroundColor:this.props.dfButtonColor, color:this.props.dfButtonFontColor}} 
		            		onClick={ACTIONS.showDFStats}>
		              <p>DEF</p>
		            </button>
		        </div>
		        <div className='ppg-button-row'>
					<button className='ppg-button' 
							style={{backgroundColor:this.props.ttlButtonColor, color:this.props.ttlButtonFontColor}} 
							onClick={ACTIONS.showTotalStats}>
					  <p>TOTAL</p>
					</button>
					<button className='ppg-button' 
							style={{backgroundColor:this.props.ppgButtonColor, color:this.props.ppgButtonFontColor}} 
							onClick={ACTIONS.showPPGStats}>
					  <p>PPG</p>
					</button>
				</div>
				<div className='year-button-row'>
					<button className='yearly-button' 
							style={{backgroundColor:this.props.csButtonColor, color:this.props.csButtonFontColor}} 
							onClick={ACTIONS.showCurrentSeasonStats}>
					  <p>Current Season</p>
					</button>
					<button className='yearly-button' 
							style={{backgroundColor:this.props.lsButtonColor, color:this.props.lsButtonFontColor}} 
							onClick={ACTIONS.showLastSeasonStats}>
					  <p>Last Season</p>
					</button>
				</div>
			</div>
		)
	}
})

export default StatButtons