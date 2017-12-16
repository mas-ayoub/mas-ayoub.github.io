// Our labels along the x-axis
var months = ["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","October"];
// For drawing the lines
var bitcoin = [967.67,1190.89,1079.75,1349.19,2338.91,2504.28,2873.83,4764.87,4349.29,5524.37];
var ethereum = [8.23,10.59,15.74,50.59,77.84,222.71,284.78,227.67,387.42,302.55];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    	labels: months,
    	datasets: [
      { 
        data: bitcoin,
        label: "bitcoin",
        borderColor: "#36a9e1",
		fill: false

      },

            { 
        data: ethereum,
        label: "ethereum",
        borderColor: "#e6007e",
		fill: false

      },


    ]
  }
});

var url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';

 fetch (url)
 	.then( function(response) {
 		return response.json();
	}).then (function(response) {
		var coinval = document.getElementById("coinval");
		coinval.innerHTML = response.USD
	})

	var url = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';

 fetch (url)
 	.then( function(response) {
 		return response.json();
	}).then (function(response) {
		var coinval = document.getElementById("coinval2");
		coinval.innerHTML = response.USD
	})
