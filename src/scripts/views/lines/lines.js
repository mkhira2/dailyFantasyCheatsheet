import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

import Header from '../components/header'
import Navigation from '../components/navigation'
import Loading from '../components/loading'

import LineData from './components/lineData'

var lines = require('../../data.json').lines

var Lines = React.createClass({
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
			<div className='statistics-container'>
        		<Header />
		        <div className="statistics-wrapper">
					<Navigation />
					<LineData lines={lines}/>
		        </div>
			</div>
		)
	}
})

export default Lines