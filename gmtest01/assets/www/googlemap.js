function GoogleMap(){
 
	this.initialize = function(){
		console.log("initialize ---------------------");
		var map = showMap();
		addMarkersToMap(map);
	}
	 
	var showMap = function(){
		console.log("showMap ---------------------");
		var mapOptions = {
			//zoom: 4,
			zoom: 19,
			//center: new google.maps.LatLng(-33, 151),
			center: new google.maps.LatLng(37.385768,127.125651), //Áöµµ center ÁÂÇ¥
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		 
		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
		 
		return map;
	}
	
	
	var addMarkersToMap = function(map){
		console.log("addMarkersToMap ---------------------");
		
		//var latitudeAndLongitudeOne = new google.maps.LatLng('-33.890542','151.274856');
		var latitudeAndLongitudeOne = new google.maps.LatLng('37.385768', '127.125651');
		
		var markerOne = new google.maps.Marker({
			position: latitudeAndLongitudeOne,
			map: map
		});
		 
		var latitudeAndLongitudeTwo = new google.maps.LatLng('57.77828', '14.17200');
		 
		var markerOne = new google.maps.Marker({
			position: latitudeAndLongitudeTwo,
			map: map
		});
	}
}




