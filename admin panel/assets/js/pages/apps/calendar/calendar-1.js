(() => {
	'use strict'

	// Retrieves the theme's color palette to be used in charts. subtle
	let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-primary');
	let secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-secondary');
	let dangerColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-danger');
	let successColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-success');
	let infoColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-info');
	let warningColor = getComputedStyle(document.documentElement).getPropertyValue('--bs-warning');

	// Helper function to clean up color values
	function cleanColor(color) {
		// remove any leading or trailing whitespace
		color = color.trim();
		// remove any leading # characters
		color = color.replace(/^#+/, '');
		// ensure the color string is exactly 6 characters long
		if (color.length < 6) {
			color = color.padStart(6, '0');
		} else if (color.length > 6) {
			color = color.slice(0, 6);
		}
		// add a leading # character
		color = '#' + color;
		return color;
	}

	// Clean up color values
	primaryColor = cleanColor(primaryColor);
	secondaryColor = cleanColor(secondaryColor);
	dangerColor = cleanColor(dangerColor);
	successColor = cleanColor(successColor);
	infoColor = cleanColor(infoColor);
	warningColor = cleanColor(warningColor);


	/******************** Calendar Init Start ********************/
	const eventCalendar = document.querySelector("#event-calendar");
	if(eventCalendar) {
		let ec = new EventCalendar(document.getElementById('event-calendar'), {
		    view: 'dayGridMonth',
		    height: '930px',
		    headerToolbar: {
		        start: 'prev,next today',
		        center: 'title',
		        end: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		    },
		    buttonText: function (texts) {
		        texts.today = 'Today';
		        texts.dayGridMonth = 'Month';
		        texts.timeGridWeek = 'Week';
		        texts.timeGridDay = 'Day';
		        texts.listWeek = 'List';
		        return texts;
		    },
		    scrollTime: '09:00:00',
		    events: createEvents(),
		    views: {
		        timeGridWeek: {pointer: true},
		        resourceTimeGridWeek: {pointer: true}
		    },
		    dayMaxEvents: true,
		    nowIndicator: true,
		    selectable: true,
			eventClick: function (info) {
			    Swal.fire({
			        html: 
						'<table class="table qd-table mb0">' +
							'<tbody>' +
								'<tr><td colspan="3"><strong class="d-flex align-items-center justify-content-center" style="color: ' + info.event.backgroundColor + '">' + formatDate(info.event.title) + '</strong></td></tr>' +
								'<tr><td><i class="fa fa-calendar-o"></i></td><td><span>Start Date</span></td><td><strong class="text-heading">' + formatDate(info.event.start) + '</strong></td></tr>' +		
								'<tr><td><i class="fa fa-calendar-o"></i></td><td><span>End Date</span></td><td><strong class="text-heading">' + formatDate(info.event.end) + '</strong></td></tr>' +		
							'</tbody>' +
						'</table>',
			        buttonsStyling: false,
			        confirmButtonText: "Ok, got it!",
			        customClass: {
			            confirmButton: "btn btn-primary"
			        }
			    });
			}
		});
	}
	/******************** Calendar Init End ********************/


	/******************** Date Formatter Function Start ********************/
	function formatDate(date) {
		const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
		return date.toLocaleString('en-US', options);
	}
	/******************** Date Formatter Function End ********************/


	/******************** Event Lists Start ********************/
	function createEvents() {
	    let days = [];
	    for (let i = 0; i < 28; ++i) {
	        let day = new Date();
	        days[i] = day.getFullYear() + "-" + _pad(day.getMonth()+1) + "-" + _pad(i + 1);
	    }

	    return [
	        {start: days[0] + " 10:00", end: days[1] + " 14:00", resourceId: 1, title: "Car Rental Web Design", color: primaryColor},
	        {start: days[4] + " 16:00", end: days[4] + " 08:00", resourceId: 2, title: "Research", color: successColor},
	        {start: days[5] + " 09:00", end: days[6] + " 13:00", resourceId: 3, title: "Food Delivery App", color: infoColor},
	        {start: days[8] + " 09:00", end: days[10] + " 11:00", resourceId: 4, title: "Dating Mobile App Design", color: infoColor},
	        {start: days[13] + " 10:00", end: days[14] + " 13:00", resourceId: 5, title: "Admin Dashboard Development", color: warningColor},
	        {start: days[13] + " 09:00", end: days[13] + " 13:00", resourceId: 6, title: "Shopping", color: dangerColor},
	        {start: days[16] + " 09:00", end: days[16] + " 13:00", resourceId: 7, title: "Mall Meeting", color: secondaryColor},
	        {start: days[22] + " 09:00", end: days[22] + " 13:00", resourceId: 7, title: "Saas Meeting", color: secondaryColor},
	        {start: days[22] + " 09:00", end: days[22] + " 13:00", resourceId: 8, title: "Mobile App", color: primaryColor},
	        {start: days[26] + " 09:00", end: days[27] + " 13:00", resourceId: 9, title: "Cinema Web Site", color: successColor},
	    ];
	}
	/******************** Event Lists End ********************/


	/******************** Number Formatter Start ********************/
	function _pad(num) {
	    let norm = Math.floor(Math.abs(num));
	    return (norm < 10 ? '0' : '') + norm;
	}
	/******************** Number Formatter End ********************/
})()