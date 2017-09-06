import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'
import ACTIONS from '../../actions'

var Buttons = React.createClass({
	render: function() {
		return (
			<div className='button-container'>
				<div className='pos-button-row' id="pick-buttons">
		            <button className='stat-button' id="pick-pos-button"
		            		style={{background:this.props.qbCheatButtonColor, color:this.props.qbCheatButtonFontColor}}
		            		onClick={ACTIONS.showQBCheat}>
		              <p>QUARTERBACKS</p>
		            </button>
		            <button className='stat-button' id="pick-pos-button"
		            		style={{background:this.props.rbCheatButtonColor, color:this.props.rbCheatButtonFontColor}}
		            		onClick={ACTIONS.showRBCheat}>
		              <p>RUNNING BACKS</p>
		            </button>
		            <button className='stat-button' id="pick-pos-button"
		            		style={{background:this.props.wrCheatButtonColor, color:this.props.wrCheatButtonFontColor}}
		            		onClick={ACTIONS.showWRCheat}>
		              <p>WIDE RECEIVERS</p>
		            </button>
		            <button className='stat-button' id="pick-pos-button"
		            		style={{background:this.props.teCheatButtonColor, color:this.props.teCheatButtonFontColor}}
		            		onClick={ACTIONS.showTECheat}>
		              <p>TIGHT ENDS</p>
		            </button>
		            <button className='stat-button' id="pick-pos-button"
		            		style={{background:this.props.dfCheatButtonColor, color:this.props.dfCheatButtonFontColor}}
		            		onClick={ACTIONS.showDFCheat}>
		              <p>DEFENSE/ST</p>
		            </button>
		        </div>

			</div>
		)
	}
})

export default Buttons
