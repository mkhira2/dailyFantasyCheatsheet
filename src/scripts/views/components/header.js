import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'
import ACTIONS from '../../actions'
import User from '../../models/userModel'

var Header = React.createClass({
  render: function() {
  	return (
  		<div className='header-container'>
  			<div className='links'>
  				<a href="#home">NFL</a>
  				<a className='disabled-text'>MLB</a>
  				<a className='disabled-text'>NBA</a>
  				<a className='disabled-text'>PGA</a>
  			</div>
	        {/*<div className='username'><button><i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>I ENJOY COFFEE</button></div>*/} 
	        {/*<div className='logout'><i className="fa fa-sign-out fa-2x" aria-hidden="true" onClick={ACTIONS.logout}></i></div>*/} 
  		</div>
  	)
	}
})

export default Header