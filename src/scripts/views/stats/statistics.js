import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

import Header from '../components/header'
import Navigation from '../components/navigation'
import Loading from '../components/loading'

import LastStatData from './components/lastSeason/lastStatData'
import CurrentStatData from './components/currentSeason/currentStatData'

var Statistics = React.createClass({
	componentWillMount: function() {
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
						<LastStatData
						allButtonColor={this.state.allButtonColor}
						qbButtonColor={this.state.qbButtonColor} 
						rbButtonColor={this.state.rbButtonColor} 
						wrButtonColor={this.state.wrButtonColor} 
						teButtonColor={this.state.teButtonColor} 
						dfButtonColor={this.state.dfButtonColor}
						ppgButtonColor={this.state.ppgButtonColor} 
						totalButtonColor={this.state.totalButtonColor} 
						showAllStats={this.state.allStats}
						showQBStats={this.state.qbStats}
						showRBStats={this.state.rbStats}
						showWRStats={this.state.wrStats}
						showTEStats={this.state.teStats}
						showDFStats={this.state.dfStats}
						ppgStats={this.state.ppgStats}/>
					}
		        </div>
			</div>
		)
	}
})

export default Statistics