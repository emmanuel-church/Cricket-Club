		// Set the date we're counting down to
		var countDownDate = new Date("Jan 12, 2019 10:00:00").getTime();
		
		// Update the count down every 1 second
		var countdownfunction = setInterval(function() {
		
			// Get todays date and time
			var now = new Date().getTime();
			
			// Find the distance between now an the count down date
			var distance = countDownDate - now;
			
			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
			// Output the result in an element with id="demo"
			// document.getElementById("demo").innerHTML = days + "d " + hours + "h "
			// + minutes + "m " + seconds + "s ";
			document.getElementById("day").innerHTML = days;
			document.getElementById("hour").innerHTML = hours;
			document.getElementById("min").innerHTML = minutes;
			document.getElementById("sec").innerHTML = seconds;
			
			// If the count down is over, write some text 
			if (distance < 0) {
				clearInterval(countdownfunction);
				document.getElementById("countdown").innerHTML = "Let's Get Started";
			}
		}, 1000);
 