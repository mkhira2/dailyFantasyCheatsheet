import React from 'react'
import Backbone from 'backbone'
import {Line} from 'react-chartjs-2'
import ACTIONS from '../../../actions'

var BankrollGraph = React.createClass({
	render: function() {
		var date = new Date
		var chartData = {
			labels: ACTIONS.lastSixMonths(date),
		    datasets: [{
			    	label: 'Profit',
		            backgroundColor: 'rgba(0, 152, 248, 0.2)',
		            borderColor: 'rgb(0, 152, 248)',
		            pointBorderColor: 'rgb(0, 152, 248)',
		            pointBackgroundColor: 'rgb(0, 152, 248)',
			        borderWidth: 2,
			        data: ACTIONS.chartingProfit(this.props.data)
		    	}]
		}

		var chartOptions = {
			legend: {
				display: false,
				labels: {
                	fontColor: 'rgb(255, 255, 255)'
            	}
			},
			scales: {
                yAxes: [{
                    ticks: {
                    	fontColor: 'rgb(255, 255, 255)',
                    	fontFamily: 'Lato',
                        beginAtZero:false,
                        callback: function(value, index, values) {
                        	return '$' + value.toFixed(2);
                    	}
                    }                                       
                }],
                xAxes: [{
                    ticks: {
                    	fontColor: 'rgb(255, 255, 255)',
                    	fontFamily: 'Lato',
                        beginAtZero:true
                    }
                }]
            }
        }

		return (
			<div className='bankroll-graph'>
				<div className='bankroll-second-row'>
			    	<div className='graph-box'>
			        	<p>PROFIT BY MONTH</p>
			        	<div className='inner-box'>
			        		<Line className='inner-box' height={120} data={chartData} options={chartOptions} />
			        	</div>
			        </div>
			    </div>
			</div>
		)
	}
})

export default BankrollGraph