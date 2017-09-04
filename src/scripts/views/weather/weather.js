import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'
import $ from 'jquery'

import Header from '../components/header'
import Navigation from '../components/navigation'
import Loading from '../components/loading'

import WeatherData from './weatherData'

var Weather = React.createClass({
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
					<WeatherData />
		        </div>
			</div>
		)
	}
})

export default Weather