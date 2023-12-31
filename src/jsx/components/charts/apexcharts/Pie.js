import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexPie extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
		   render: false,
			series: [44, 55, 40],
			options: {
            chart: {
				fontSize: '1rem',
				fontFamily: 'Oswald, sans-serif',
				type: "donut",
				toolbar: {
                  show: false,
               },
            },
            labels: ["Blue Stat", "Green Stat", "Green Stat"],
            colors: [
               "rgba(30,167,197,1)",
               "rgba(110,197,30,1)",
               "rgba(235,235,235,1)",
            ],
            stroke: {
               width: [0],
            },
            legend: {
               position: "top",
               offsetX: -10,
            },
            dataLabels: {
               enabled: false,
            },
            responsive: [
               {
                  breakpoint: 480,
                  options: {
                     chart: {
                        width: 200,
                     },
                  },
               },
            ],
         },
      };
   }


	componentDidMount() {
	  setTimeout(function() { //Start the timer
		  this.setState({render: true}) //After 1 second, set render to true
	  }.bind(this), 1000)
	}	
		
	render() {
		let renderContainer = false;
		if(this.state.render) {
				 renderContainer = <div id="chart">
				<ReactApexChart
				   options={this.state.options}
				   series={this.state.series}
				   type="donut"
				    height={350}
				/>
			 </div>;
		}
			
        return (
				
			<></>// renderContainer //Render the dom elements, or, when this.state == false, nothing.
		);
	}
}

export default ApexPie;
