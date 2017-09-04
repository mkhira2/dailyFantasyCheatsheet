import React from 'react'
import STORE from '../store'
import ACTIONS from '../actions'
import Papa from 'papaparse'

import Header from './components/header'

var Dashboard = React.createClass({
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
	_handleFileSelect: function(evt) {
		var file = evt.target.files[0]
		Papa.parse(file, {
      		header: true,
      		complete: function(results) {
      			ACTIONS.saveData(results)
      		}
    	})
	},
  	render: function() {
      console.log(this.state.contestCollection)
  		var dashboardText = this.state.showDashboardText === true ? 'dashboard-text' : 'dashboard-text-hidden'
  		return (
  			<div className='dashboard-container'>
        <Header />
  				<div className={dashboardText}>
  					<h1>Dashboard</h1>
  					<div>
  					   <h4>Upload DraftKings History</h4>
    					<input type="file" id='file' className='dashboard-input' name='files' onChange={this._handleFileSelect}/>
					</div>
  				</div>
  			</div>
  		)
  	}
})

export default Dashboard