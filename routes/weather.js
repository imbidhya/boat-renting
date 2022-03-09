var weather = require('openweather-apis');

	weather.setLang('US');
	// English - en, Russian - ru, Italian - it, Spanish - es (or sp),
	// Ukrainian - uk (or ua), German - de, Portuguese - pt,Romanian - ro,
	// Polish - pl, Finnish - fi, Dutch - nl, French - fr, Bulgarian - bg,
	// Swedish - sv (or se), Chinese Tra - zh_tw, Chinese Sim - zh (or zh_cn),
	// Turkish - tr, Croatian - hr, Catalan - ca


	// set city by name
	weather.setCity('Kansas');
 	// or set the coordinates (latitude,longitude)
	// weather.setCoordinate(28.217305, 83.948182);
	// or set city by ID (recommended by OpenWeatherMap)
	weather.setCityId(4367872);

    // or set zip code
	// weather.setZipCode(33700);

	// 'metric'  'internal'  'imperial'
 	weather.setUnits('metric');

	// // check http://openweathermap.org/appid#get for get the APPID
 	weather.setAPPID('f7facd702249c7aa24270783e370917a');
    
    weather.getAllWeather(function(err, JSONObj){
		// console.log("weather response", JSONObj);
	});