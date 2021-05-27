function clock() {
	var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();
	
	document.querySelectorAll(".hours")[0].innerHTML= zero(hours),
	document.querySelectorAll(".minutes")[0].innerHTML = zero(minutes),
	document.querySelectorAll(".seconds")[0].innerHTML = zero(seconds);
	
	function zero(standIn) {
		if (standIn < 10) {
			standIn = "0" + standIn
		}
		return standIn;
	}
}

setInterval(clock);