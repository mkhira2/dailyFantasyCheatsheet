import React from 'react'
import Backbone from 'backbone'
import STORE from '../../../store'
import ACTIONS from '../../../actions'

import Buttons from '../buttons'
import QBAnalyzer from './qbAnalyzer'


var AnalyzerData = React.createClass({
  render: function() {
  	return (
  		<div className='data-container'>
        <div className='section-header'>
            <div className='section-info'>
              <h4>The CheatSheet &copy;</h4>
            </div>
            <div className='legend-wrapper'>
                <div className='legend'>Good <div id='great'></div></div>
                <div className='legend'>Okay <div id='good'></div></div>
                <div className='legend'>Bad <div id='notgood'></div></div>
            </div>
        </div>
        <div className='stat-data-wrapper'>
        <Buttons />
          <div className='positional-wrapper'>
            <QBAnalyzer
              qbData = {this.props.qbData} />
    {/*}        <rbAnalyzer
              rbData = {this.props.rbData} />
            <wrAnalyzer 
              wrData = {this.props.wrData} /> 
            <teAnalyzer
              teData = {this.props.teData} />
            <dfAnalyzer 
              dfData = {this.props.dfData} /> */}
          </div>
        </div>
  		</div>
  	)
	}
})

export default AnalyzerData