import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'
import ACTIONS from '../../actions'

var PickButtons = React.createClass({
	render: function() {
		return (
			<div className='button-container'>
				<div className='pos-button-row' id="pick-buttons" >
          <button id="pick-pos-button"
            style={{background:this.props.qbPicksButtonColor,
            color:this.props.qbPicksButtonFontColor}}
            onClick={ACTIONS.showQBPicks}>
            <p>QUARTERBACKS</p>
          </button>
          <button id="pick-pos-button"
            style={{background:this.props.rbPicksButtonColor,
            color:this.props.rbPicksButtonFontColor}}
            onClick={ACTIONS.showRBPicks}>
            <p>RUNNING BACKS</p>
          </button>
          <button id="pick-pos-button"
            style={{background:this.props.wrPicksButtonColor,
            color:this.props.wrPicksButtonFontColor}}
            onClick={ACTIONS.showWRPicks}>
            <p>WIDE RECEIVERS</p>
          </button>
          <button id="pick-pos-button"
            style={{background:this.props.tePicksButtonColor,
            color:this.props.tePicksButtonFontColor}}
            onClick={ACTIONS.showTEPicks}>
            <p>TIGHT ENDS</p>
          </button>
          <button id="pick-pos-button"
            style={{background:this.props.dfPicksButtonColor,
            color:this.props.dfPicksButtonFontColor}}
            onClick={ACTIONS.showDFPicks}>
            <p>DEFENSE/ST</p>
          </button>
		    </div>
			</div>
		)
	}
})

export default PickButtons
