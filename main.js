var moment = require("moment");
require('moment-range');
var Vue = require("vue");

new Vue({
	el: ".container",
	data:{
		days: []
	},
	methods: {
		setDot: function(date, idx){
			this.days.filter(function(day){
				return day.date === date.date;
			}).forEach(function(day){
				day.dots.$set(idx, (day.dots[idx] + 1) % 3);
			})
		}
	},
	ready: function(){
		var start = moment("2015-06-01", "YYYY-MM-DD");
		var end =  moment("2015-07-01", "YYYY-MM-DD");
		var range = moment.range(start,end);
		var days = [];
		range.by('days', function(moment){
			days.push({
				date: moment.format("YYYY-MM-DD"),
				dots: [0, 0, 0, 0]
			});
		});
		this.days = days;
	}
})

