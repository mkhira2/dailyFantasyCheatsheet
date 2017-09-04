import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'
import ACTIONS from '../../actions'
import $ from 'jquery'

import Loading from '../components/loading'

var weather ='https://api.darksky.net/forecast/e26e2e8d0cba22e89ce2429b7448b155/39.048939,-94.483916?callback=?'

var WeatherData = React.createClass({
  render: function() {
  	return (
  		<div className='data-container'>
  			<div className='section-header'>
	          <h4>Weather</h4>
	        </div>
  			<div className='weather-data-wrapper'>
  
  			</div>	
  		</div>
  	)
  }
})

export default WeatherData