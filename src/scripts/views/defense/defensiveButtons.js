import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'
import ACTIONS from '../../actions'

var DefensiveButtons = React.createClass({
	render: function() {
		return (
			<div className='button-container'>
				<div className='pos-button-row'>
		            <button className='stat-button' 
		            		style={{backgroundColor:this.props.qbDefButtonColor, color:this.props.qbDefButtonFontColor}} 
		            		onClick={ACTIONS.showQBDefense}>
		              <p>QB</p>
		            </button>
		            <button className='stat-button' 
		            		style={{backgroundColor:this.props.rbDefButtonColor, color:this.props.rbDefButtonFontColor}}  
		            		onClick={ACTIONS.showRBDefense}>
		              <p>RB</p>
		            </button>
		            <button className='stat-button' 
		            		style={{backgroundColor:this.props.wrDefButtonColor, color:this.props.wrDefButtonFontColor}} 
		            		onClick={ACTIONS.showWRDefense}>
		              <p>WR</p>
		            </button>
		            <button className='stat-button' 
		            		style={{backgroundColor:this.props.teDefButtonColor, color:this.props.teDefButtonFontColor}} 
		            		onClick={ACTIONS.showTEDefense}>
		              <p>TE</p>
		            </button>
		        </div>
		        <div className='ppg-button-row'>
					<button className='ppg-button' 
							style={{backgroundColor:this.props.ttlDefButtonColor, color:this.props.ttlDefButtonFontColor}} 
							onClick={ACTIONS.showTotalDefense}>
					  <p>TOTAL</p>
					</button>
					<button className='ppg-button' 
							style={{backgroundColor:this.props.ppgDefButtonColor, color:this.props.ppgDefButtonFontColor}} 
							onClick={ACTIONS.showPPGDefense}>
					  <p>PPG</p>
					</button>
				</div>
				<div className='year-button-row'>
					<button className='yearly-button' 
							style={{backgroundColor:this.props.csDefButtonColor, color:this.props.csDefButtonFontColor}} 
							onClick={ACTIONS.showCurrentSeasonDefense}>
					  <p>Current Season</p>
					</button>
					<button className='yearly-button' 
							style={{backgroundColor:this.props.lsDefButtonColor, color:this.props.lsDefButtonFontColor}} 
							onClick={ACTIONS.showLastSeasonDefense}>
					  <p>Last Season</p>
					</button>
				</div>
			</div>
		)
	}
})

export default DefensiveButtons