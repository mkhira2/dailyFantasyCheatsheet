import React from 'react'
import Backbone from 'backbone'
import STORE from '../../store'

var Navigation = React.createClass({
  render: function() {
  	return (
  		<div className='navigation-container'>
  			<div className='nav-profile'>
  				<a href='#home'><img src='images/dfc_logo.png' width='200px'/></a>
        	</div>
	        {/* <a href='#home'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-home" aria-hidden="true"></i></div>
	        		<p>Home</p>
	        	</div>
	        </a> */}
	        <a href='#analyzer'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-th" aria-hidden="true"></i></div>
	        		<p>The CheatSheet</p>
	        	</div>
	        </a>
	        <a href='#picks'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-rocket" aria-hidden="true"></i></div>
	        		<p>Quick Picks</p>
	        	</div>
	        </a>
	        <a href='#statistics'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-list" aria-hidden="true"></i></div>
	        		<p>Player Stats</p>
	        	</div>
	        </a>
	        <a href='#lines'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-minus-square" aria-hidden="true"></i></div>
	        		<p>Vegas Lines</p>
	        	</div>
	        </a>
	        <a href='#defense'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-exchange" aria-hidden="true"></i></div>
	        		<p>Defense vs. Position</p>
	        	</div>
	        </a>
	   {/*  <a href='#preview'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-star" aria-hidden="true"></i></div>
	        		<p>Game Previews</p>
	        	</div>
	        </a>
	        <a href='#weather'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-bolt" aria-hidden="true"></i></div>
	        		<p>Weather</p>
	        	</div>
	        </a>
	        <a href='#tracker'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-line-chart" aria-hidden="true"></i></div>
	        		<p>Bankroll Tracker</p>
	        	</div>
	        </a>				*/}
	        <a href='#planner'>
	        	<div className='navigation-links'>
	        		<div className='nav-icon-box'><i className="fa fa-usd" aria-hidden="true"></i></div>
	        		<p>Bankroll Planner</p>
	        	</div>
	        </a>

	        {/* <div className='nav-footer'>
	        	<a href='https://twitter.com/DF_CheatSheet' target='_blank'>
	        		<div className='foot-social'><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></div>
	        	</a>
	        	<a href='https://www.youtube.com/channel/UCeUApwPZHp0ZkjZOrGomd1Q' target='_blank'>
	        		<div className='foot-social'><i className="fa fa-youtube-play fa-lg" aria-hidden="true"></i></div>
	        	</a>
	        	<a href='#' target='_blank'>
	        		<div className='foot-social'><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></div>
	        	</a>
	        	<p>Daily Fantasy CheatSheet 2017  &copy;</p>
	        </div> */}
  		</div>
  	)
  }
})

export default Navigation
