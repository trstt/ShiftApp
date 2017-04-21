    var d = new Date();
	var nowDate = {
		year: d.getFullYear(),
		month: d.getMonth()+1,
		day: d.getDate(),
		hours: d.getHours(),
		quarters: Math.floor(d.getMinutes() / 15)
	};

if(nowDate.year === 2017 /*&& nowDate.month === 4 && nowDate.day === 7*/){
    $(".verticalLine").css("display", "inline");
    var left = (nowDate.hours - 10) * 4*30 + nowDate.quarters*30+14;
    $(".verticalLine").css("left", left+"vw");
    var vwscroll = window.innerWidth/100 * left - window.innerWidth/2;
    $(".schedule").scrollLeft(vwscroll);
}
