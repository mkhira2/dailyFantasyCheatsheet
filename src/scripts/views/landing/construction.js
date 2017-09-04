import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

var Construction = React.createClass({
	render: function() {
		return (
			<div className='landing-container'>
				<div className='construction-header'>
					<img src='images/dfc_logo.png' width='400'/>
				</div>
				<div className='jumbotron' id='construction-vh'>
					<div className='jumbo-overlay' id='construction-vh'>
						<div className='jumbo-message'>
							<h2>Website Under Construction</h2>
							<p>We're getting things ready. Check back soon!</p>

							<div className='social-construction-box'>
								<a href='https://twitter.com/DF_CheatSheet' target='_blank'>
					        		<div className='construction-social'><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></div>
					        	</a>
					        	<a href='https://www.youtube.com/channel/UCeUApwPZHp0ZkjZOrGomd1Q' target='_blank'>
					        		<div className='construction-social'><i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i></div>
					        	</a>
					        	<a href='#' target='_blank'>
					        		<div className='construction-social'><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></div>
					        	</a>
				        	</div>

						</div>
					</div>
				</div>
			</div>
		)
	}
})

export default Construction