import React from 'react'
import STORE from '../../store'
import ACTIONS from '../../actions'

import Header from '../components/header'
import Navigation from '../components/navigation'
import Loading from '../components/loading'

import HomeData from './components/homeData'

var Home = React.createClass({
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
			<div className='home-container'>
        		<Header />
		        <div className="home-wrapper">
					<Navigation />
					<HomeData />
		        </div>
			</div>
		)
	}
})

export default Home