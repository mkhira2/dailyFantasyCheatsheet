import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

import Header from '../components/header'
import Navigation from '../components/navigation'
import Loading from '../components/loading'

import TrackerData from './components/trackerData'

var BankrollTracker = React.createClass({
	componentWillMount: function() {
		ACTIONS.fetchAllData()
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
			<div className='bankroll-tracker-container'>
        		<Header />
		        <div className="bankroll-tracker-wrapper">
					<Navigation />
					{ this.state.loadingGif ? <Loading /> : <TrackerData contests={this.state.contestCollection} /> }
		        </div>
			</div>
		)
	}
})

export default BankrollTracker