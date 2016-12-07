//1
var date = Date.parse("2016/05/20-12:00:35+0300");
console.log(date);

//2
function func(str) {
	var company = str.match( /\w+(?=\:)/g ),
		date = str.match( /(\d+\/\d+\/\d+)(?!\:)/g ),
		bid = str.match( /(\d+\.\d+)(?=\-)/g ),
		ask = str.match( /(\d+\.\d{2,})(?!\-)/g );
		;

	let obj = {
		stockName: company[0],
		rates: []
		}
	for (var i = 0; i < date.length; i++)
	obj.rates[i] = {
		date: date[i],
		bid: +bid[i],
		ask: +ask[i]
	}

	return obj
}

var result = func("apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/28__bid_203.39-ask_203.45");
console.log(result);
