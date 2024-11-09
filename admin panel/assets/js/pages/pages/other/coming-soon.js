(() => {
	'use strict'

	const sec = 1000,
	min = sec * 60,
	hour = min * 60,
	day = hour * 24;

	//const end = new Date("Dec 25, 2023 00:00:00").getTime();

	const today = new Date();
	today.setMonth(today.getMonth() + 3);
	const end = today.getTime();

	const int = setInterval(() => {
		const current = new Date().getTime();
		const remaining = end - current;
		document.getElementById("days").innerText = Math.floor(remaining / day);
		document.getElementById("hours").innerText = Math.floor( (remaining % day) / hour );
		document.getElementById("minutes").innerText = Math.floor( (remaining % hour) / min );
		document.getElementById("seconds").innerText = Math.floor( (remaining % min) / sec );
	}, 1000);
})()