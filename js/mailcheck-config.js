var domains = ['gmail.com', 'aol.com', 'outlook.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org", 'br'];

var superStringDistance = function (string1, string2) {
	// a string distance algorithm of your choosing
}

document.querySelector('#email').addEventListener('blur', function () {
	Mailcheck.run({
		email: yourTextInput.value,
		domains: domains,                       // optional
		topLevelDomains: topLevelDomains,       // optional
		secondLevelDomains: secondLevelDomains, // optional
		distanceFunction: superStringDistance,  // optional
		suggested: function (suggestion) {
			// callback code
		}
	});
});