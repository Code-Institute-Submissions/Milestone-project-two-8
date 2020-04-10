function initGoogleMap()
	{
		var myLatlng = new google.maps.LatLng(34.043238,-118.258338);
    	var mapOptions = 
    	{
    		center: myLatlng,
	       	zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			draggable: true,
			scrollwheel: false,
			zoomControl: true,
			zoomControlOptions:
			{
				position: google.maps.ControlPosition.RIGHT_CENTER
			},
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: true,
			styles:[]
    	}

    	// Initialize a map with options
    	map = new google.maps.Map(document.getElementById('map'), mapOptions);
    	map.panBy(0, 0);

    	// Use an image for a marker
		// var image = 'images/map_marker.png';
		var image = 
		{
			url:'images/marker.png',
			size: new google.maps.Size(230, 150),
			anchor: new google.maps.Point(206, 125) //setting the anchor for larger icons
		};

		var imageSmall =
		{
			url:'images/dot.png',
			size: new google.maps.Size(54, 54),
			anchor: new google.maps.Point(27, 27) //setting the anchor for larger icons
		};

		var marker = new google.maps.Marker(
		{
			position: new google.maps.LatLng(34.043238,-118.258338),
			map: map
		});

		if($(window).width() < 720)
    	{
    		marker.setIcon(imageSmall);
    	}
    	else
    	{
    		map.panBy(75, 0);
    		marker.setIcon(image);
    	}

		// Re-center map after window resize
		google.maps.event.addDomListener(window, 'resize', function()
		{
			setTimeout(function()
			{
				google.maps.event.trigger(map, "resize");
				map.setCenter(myLatlng);
				if($(window).width() < 720)
		    	{
		    		marker.setIcon(imageSmall);
		    	}
		    	else
		    	{
		    		map.panBy(75, 0);
		    		marker.setIcon(image);
		    	}
			}, 1400);
		});
	}
