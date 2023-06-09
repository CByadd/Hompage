var today = new Date();
		var hourNow = today.getHours();
		var greeting;

		if (hourNow > 21) {
			greeting = 'Good nigth🥱';
		} else if (hourNow > 12) {
			greeting = 'Good afternoon 😉';
		} else if (hourNow > 0) {
			greeting = 'Good morning 😤';
		} 
		 else if (hourNow > 17) {
			greeting = 'Good evening 😋';
		}
     else {
			greeting = 'Welcome!';
		}

    greeting = greeting + ',' + 'Srini'

		document.getElementById('greeting').innerHTML = greeting;