import React 	from 'react'
import STORE 	from '../../store'
import ACTIONS 	from '../../actions'

// Components
import Header 	  from '../components/header'
import Navigation from '../components/navigation'
import Loading 	  from '../components/loading'

// Statistics
import StatButtons from './statButtons'
// Current Season Statistics (Per Game)
import CurrentSeasonAllPPG 	from './currentPPG/currentSeasonAllPPG'
import CurrentSeasonQBPPG 	from './currentPPG/currentSeasonQBPPG'
import CurrentSeasonRBPPG 	from './currentPPG/currentSeasonRBPPG'
import CurrentSeasonWRPPG 	from './currentPPG/currentSeasonWRPPG'
import CurrentSeasonTEPPG 	from './currentPPG/currentSeasonTEPPG'
import CurrentSeasonDFPPG 	from './currentPPG/currentSeasonDFPPG'
// Current Season Statistics (Total)
import CurrentSeasonAllTotal from './currentTTL/currentSeasonAllTotal'
import CurrentSeasonQBTotal from './currentTTL/currentSeasonQBTotal'
import CurrentSeasonRBTotal from './currentTTL/currentSeasonRBTotal'
import CurrentSeasonWRTotal from './currentTTL/currentSeasonWRTotal'
import CurrentSeasonTETotal from './currentTTL/currentSeasonTETotal'
import CurrentSeasonDFTotal from './currentTTL/currentSeasonDFTotal'
// Last Season Statistics (Per Game)
import LastSeasonAllPPG 	from './lastPPG/lastSeasonAllPPG'
import LastSeasonQBPPG 		from './lastPPG/lastSeasonQBPPG'
import LastSeasonRBPPG 		from './lastPPG/lastSeasonRBPPG'
import LastSeasonWRPPG 		from './lastPPG/lastSeasonWRPPG'
import LastSeasonTEPPG 		from './lastPPG/lastSeasonTEPPG'
import LastSeasonDFPPG 		from './lastPPG/lastSeasonDFPPG'
// Last Season Statistics (Total)
import LastSeasonAllTotal 	from './lastTTL/lastSeasonAllTotal'
import LastSeasonQBTotal 	from './lastTTL/lastSeasonQBTotal'
import LastSeasonRBTotal 	from './lastTTL/lastSeasonRBTotal'
import LastSeasonWRTotal 	from './lastTTL/lastSeasonWRTotal'
import LastSeasonTETotal 	from './lastTTL/lastSeasonTETotal'
import LastSeasonDFTotal 	from './lastTTL/lastSeasonDFTotal'

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
					{ this.state.showCurrentSeason ? 
						<CurrentSeasonStats 
							showCurrentSeasonPPG = {this.state.showCurrentSeasonPPG}
							showAllStats =   {this.state.showAllStats}
							showQBStats =    {this.state.showQBStats}
							showRBStats =    {this.state.showRBStats}
							showWRStats =    {this.state.showWRStats}
							showTEStats =    {this.state.showTEStats}
							showDFStats =    {this.state.showDFStats}
							allButtonColor = {this.state.allButtonColor}
							qbButtonColor =  {this.state.qbButtonColor}
							rbButtonColor =  {this.state.rbButtonColor}
							wrButtonColor =  {this.state.wrButtonColor}
							teButtonColor =  {this.state.teButtonColor}
							dfButtonColor =  {this.state.dfButtonColor}
							ppgButtonColor = {this.state.ppgButtonColor}
							ttlButtonColor = {this.state.ttlButtonColor}
							csButtonColor =  {this.state.csButtonColor}
							lsButtonColor =  {this.state.lsButtonColor}
							allButtonFontColor = {this.state.allButtonFontColor}
							qbButtonFontColor =  {this.state.qbButtonFontColor}
							rbButtonFontColor =  {this.state.rbButtonFontColor}
							wrButtonFontColor =  {this.state.wrButtonFontColor}
							teButtonFontColor =  {this.state.teButtonFontColor}
							dfButtonFontColor =  {this.state.dfButtonFontColor}
							ppgButtonFontColor = {this.state.ppgButtonFontColor}
							ttlButtonFontColor = {this.state.ttlButtonFontColor}
							csButtonFontColor =  {this.state.csButtonFontColor}
							lsButtonFontColor =  {this.state.lsButtonFontColor} /> 
					: 
						<LastSeasonStats 
							showLastSeasonPPG = {this.state.showLastSeasonPPG}
							showAllStats =   {this.state.showAllStats}
							showQBStats =    {this.state.showQBStats}
							showRBStats =    {this.state.showRBStats}
							showWRStats =    {this.state.showWRStats}
							showTEStats =    {this.state.showTEStats}
							showDFStats =    {this.state.showDFStats}
							allButtonColor = {this.state.allButtonColor}
							qbButtonColor =  {this.state.qbButtonColor}
							rbButtonColor =  {this.state.rbButtonColor}
							wrButtonColor =  {this.state.wrButtonColor}
							teButtonColor =  {this.state.teButtonColor}
							dfButtonColor =  {this.state.dfButtonColor}
							ppgButtonColor = {this.state.ppgButtonColor}
							ttlButtonColor = {this.state.ttlButtonColor}
							csButtonColor =  {this.state.csButtonColor}
							lsButtonColor =  {this.state.lsButtonColor}
							allButtonFontColor = {this.state.allButtonFontColor}
							qbButtonFontColor =  {this.state.qbButtonFontColor}
							rbButtonFontColor =  {this.state.rbButtonFontColor}
							wrButtonFontColor =  {this.state.wrButtonFontColor}
							teButtonFontColor =  {this.state.teButtonFontColor}
							dfButtonFontColor =  {this.state.dfButtonFontColor}
							ppgButtonFontColor = {this.state.ppgButtonFontColor}
							ttlButtonFontColor = {this.state.ttlButtonFontColor}
							csButtonFontColor =  {this.state.csButtonFontColor}
							lsButtonFontColor =  {this.state.lsButtonFontColor} /> 
					}
		        </div>
			</div>
		)
	}
})

var CurrentSeasonStats = React.createClass({
	showStatModal: function(){
		alert('Player Stat Modal')
	},
	render: function() {
		return (
			<div className='data-container'>
				<div className='section-header'>
					<div className='section-overlay'>
		          		<h4>Player Stats &nbsp;<i className="fa fa-info-circle" aria-hidden="true" onClick={this.showStatModal}></i></h4>
		          	</div>
		        </div>
				<div className='stat-data-wrapper'>
					<StatButtons 
							allButtonColor = {this.props.allButtonColor}
							qbButtonColor =  {this.props.qbButtonColor}
							rbButtonColor =  {this.props.rbButtonColor}
							wrButtonColor =  {this.props.wrButtonColor}
							teButtonColor =  {this.props.teButtonColor}
							dfButtonColor =  {this.props.dfButtonColor}
							ppgButtonColor = {this.props.ppgButtonColor}
							ttlButtonColor = {this.props.ttlButtonColor}
							csButtonColor =  {this.props.csButtonColor}
							lsButtonColor =  {this.props.lsButtonColor}
							allButtonFontColor = {this.props.allButtonFontColor}
							qbButtonFontColor =  {this.props.qbButtonFontColor}
							rbButtonFontColor =  {this.props.rbButtonFontColor}
							wrButtonFontColor =  {this.props.wrButtonFontColor}
							teButtonFontColor =  {this.props.teButtonFontColor}
							dfButtonFontColor =  {this.props.dfButtonFontColor}
							ppgButtonFontColor = {this.props.ppgButtonFontColor}
							ttlButtonFontColor = {this.props.ttlButtonFontColor}
							csButtonFontColor =  {this.props.csButtonFontColor}
							lsButtonFontColor =  {this.props.lsButtonFontColor} /> 
					{ this.props.showCurrentSeasonPPG ? 
						<CurrentSeasonPPG 
							showAllStats = {this.props.showAllStats}
							showQBStats =  {this.props.showQBStats}
							showRBStats =  {this.props.showRBStats}
							showWRStats =  {this.props.showWRStats}
							showTEStats =  {this.props.showTEStats}
							showDFStats =  {this.props.showDFStats} /> 
					: 
						<CurrentSeasonTotal 
							showAllStats = {this.props.showAllStats}
							showQBStats =  {this.props.showQBStats}
							showRBStats =  {this.props.showRBStats}
							showWRStats =  {this.props.showWRStats}
							showTEStats =  {this.props.showTEStats}
							showDFStats =  {this.props.showDFStats} />  
					}
				</div>
			</div>
		)
	}
})

var LastSeasonStats = React.createClass({
	showStatModal: function(){
		alert('Player Stat Modal')
	},
	render: function() {
		return (
			<div className='data-container'>
				<div className='section-header'>
		          <div className='section-overlay'>
		          	<h4>Player Stats &nbsp;<i className="fa fa-info-circle" aria-hidden="true" onClick={this.showStatModal}></i></h4>
		          </div>
		        </div>
				<div className='stat-data-wrapper'>
					<StatButtons 
							allButtonColor = {this.props.allButtonColor}
							qbButtonColor =  {this.props.qbButtonColor}
							rbButtonColor =  {this.props.rbButtonColor}
							wrButtonColor =  {this.props.wrButtonColor}
							teButtonColor =  {this.props.teButtonColor}
							dfButtonColor =  {this.props.dfButtonColor}
							ppgButtonColor = {this.props.ppgButtonColor}
							ttlButtonColor = {this.props.ttlButtonColor}
							csButtonColor =  {this.props.csButtonColor}
							lsButtonColor =  {this.props.lsButtonColor}
							allButtonFontColor = {this.props.allButtonFontColor}
							qbButtonFontColor =  {this.props.qbButtonFontColor}
							rbButtonFontColor =  {this.props.rbButtonFontColor}
							wrButtonFontColor =  {this.props.wrButtonFontColor}
							teButtonFontColor =  {this.props.teButtonFontColor}
							dfButtonFontColor =  {this.props.dfButtonFontColor}
							ppgButtonFontColor = {this.props.ppgButtonFontColor}
							ttlButtonFontColor = {this.props.ttlButtonFontColor}
							csButtonFontColor =  {this.props.csButtonFontColor}
							lsButtonFontColor =  {this.props.lsButtonFontColor} /> 
					{ this.props.showLastSeasonPPG ? 
						<LastSeasonPPG 
							showAllStats = {this.props.showAllStats}
							showQBStats =  {this.props.showQBStats}
							showRBStats =  {this.props.showRBStats}
							showWRStats =  {this.props.showWRStats}
							showTEStats =  {this.props.showTEStats}
							showDFStats =  {this.props.showDFStats} /> 
					: 
						<LastSeasonTotal 
							showAllStats = {this.props.showAllStats}
							showQBStats =  {this.props.showQBStats}
							showRBStats =  {this.props.showRBStats}
							showWRStats =  {this.props.showWRStats}
							showTEStats =  {this.props.showTEStats}
							showDFStats =  {this.props.showDFStats}  />  
					}
				</div>
			</div>
		)
	}
})

var CurrentSeasonPPG = React.createClass({
	render: function() {
		return (
			<div className='positional-wrapper'>
	          	<CurrentSeasonAllPPG 
	          		showAllStats = {this.props.showAllStats} />
	          	<CurrentSeasonQBPPG
					showQBStats = {this.props.showQBStats} />
	          	<CurrentSeasonRBPPG
					showRBStats = {this.props.showRBStats} />
	          	<CurrentSeasonWRPPG 
					showWRStats = {this.props.showWRStats} />	
	          	<CurrentSeasonTEPPG
					showTEStats = {this.props.showTEStats} />
	          	<CurrentSeasonDFPPG 
					showDFStats = {this.props.showDFStats} />
			</div>
		)
	}
})

var CurrentSeasonTotal = React.createClass({
	render: function() {
		return (
			<div className='positional-wrapper'>
				<CurrentSeasonAllTotal
	          		showAllStats = {this.props.showAllStats}/>
	          	<CurrentSeasonQBTotal
					showQBStats =  {this.props.showQBStats} />
	          	<CurrentSeasonRBTotal
					showRBStats =  {this.props.showRBStats} />
	          	<CurrentSeasonWRTotal
					showWRStats =  {this.props.showWRStats} />	
	          	<CurrentSeasonTETotal
					showTEStats =  {this.props.showTEStats} />
	         	<CurrentSeasonDFTotal
					showDFStats =  {this.props.showDFStats} />
			</div>
		)
	}
})

var LastSeasonPPG = React.createClass({
	render: function() {
		return (
			<div className='positional-wrapper'>
				<LastSeasonAllPPG 
	          		showAllStats = {this.props.showAllStats}/>
	          	<LastSeasonQBPPG
					showQBStats =  {this.props.showQBStats} />
	          	<LastSeasonRBPPG
					showRBStats =  {this.props.showRBStats} />
	          	<LastSeasonWRPPG 
					showWRStats =  {this.props.showWRStats} />	
	          	<LastSeasonTEPPG
					showTEStats =  {this.props.showTEStats} />
	          	<LastSeasonDFPPG 
					showDFStats =  {this.props.showDFStats} />
			</div>
		)
	}
})

var LastSeasonTotal = React.createClass({
	render: function() {
		return (
			<div className='positional-wrapper'>
				<LastSeasonAllTotal
	          		showAllStats = {this.props.showAllStats}/>
	          	<LastSeasonQBTotal
					showQBStats =  {this.props.showQBStats} />
	          	<LastSeasonRBTotal
					showRBStats =  {this.props.showRBStats} />
	          	<LastSeasonWRTotal
					showWRStats =  {this.props.showWRStats} />	
	          	<LastSeasonTETotal
					showTEStats =  {this.props.showTEStats} />
	         	<LastSeasonDFTotal
					showDFStats =  {this.props.showDFStats} />
			</div>
		)
	}
})

export default Statistics