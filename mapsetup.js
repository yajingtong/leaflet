
//create variable of different icon
var schoolIcon = L.icon({
	iconUrl: 'schoolmarker.png',
	iconSize: [30, 40],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	
});

var greyIcon = L.icon({
	iconUrl: 'marker-icon-grey.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],

});
var SupermarketIcon= L.icon({
	iconUrl: 'supermarket.png',
	iconSize: [32, 37],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
});

var TransportIcon = L.icon({
	iconUrl: 'transporticon.png',
	iconSize: [30, 30],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	
});

var RetailIcon = L.icon({
	iconUrl: 'Retail-Icon.png',
	iconSize: [30, 30],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	
});

var PubIcon = L.icon({
	iconUrl: 'pubicon.png',
	iconSize: [32, 37],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	
});

var TakeawayIcon = L.icon({
	iconUrl: 'sandwichicon.svg',
	
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	
});

var ManufacturerIcon = L.icon({
	iconUrl: 'manufactureicon.png',
	
	iconSize: [32, 37],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],

});

var yellowIcon = L.icon({
	iconUrl: 'marker-icon-yellow.png',
	
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	
});

var HospitalIcon = L.icon({
	iconUrl: 'hospitalicon.png',
	iconSize: [32, 37],
	iconAnchor: [16, 37],
	popupAnchor: [1, -34],
});

var HotelIcon = L.icon({
	iconUrl: 'hotelicon.png',
	iconSize: [32, 37],
	iconAnchor: [16, 37],
	popupAnchor: [1, -34],
});


var Farmericon = L.icon({
	iconUrl: 'farmicon.png',
	iconSize: [32, 37],
	iconAnchor: [16, 37],
	popupAnchor: [1, -34],
});
var restaurantIcon = L.icon({
	iconUrl: 'restauranticon.png',
	iconSize: [32, 37],
	iconAnchor: [16, 37],
	popupAnchor: [1, -34],
});


// Create variables for each type of marker and convert to layerGroup

var restaurantMarkers = L.layerGroup();
var schoolMarkers = L.layerGroup();
var HotelMarkers=L.layerGroup();
var HospitalMarkers =L.layerGroup();
var FarmerMarkers=L.layerGroup();
var RetailerMarkers = L.layerGroup();
var TransportMarkers = L.layerGroup();
var greyMarkers = L.layerGroup();
var PubMarkers = L.layerGroup();
var TakeawayMarkers = L.layerGroup();
var ManufacturerMarkers = L.layerGroup();
var yellowMarkers = L.layerGroup();
var SupermarketMarkers=L.layerGroup();

  //create attributes of layer
         var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ';

	     mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
 

         // Creating  Layer objects

         var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
	         streets  =  L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
             

    
         //Create the map object and set the centre point and zoom level 
	
         var map = L.map('leafletmap', {
		           center: [53.79, -1.54],
		           zoom: 15,
		           zoomcontrol:false,
				   layers: [grayscale, streets]
	    });

        var baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets,
		
	     };

         // Create group of the different overlay layers, different markers

         var overlayers ={

		"Restaurant/Cafe/Canteen": restaurantMarkers,
		"Farmers/growers": FarmerMarkers,
		"Hospitals/Childcare/Caring Premises": HospitalMarkers,
		"Hotel/bed & breakfast/guest house":HotelMarkers,
        "School/college/university":schoolMarkers,
		"Distributors/Transporters": TransportMarkers,
		"Retailers - supermarkets/hypermarkets": SupermarketMarkers,
		"Pub/bar/nightclub": PubMarkers,
		"Takeaway/sandwich shop": TakeawayMarkers,
		"Manufacturers/packers": ManufacturerMarkers,
		"Other catering premises": yellowMarkers,
		"Retailers - other":RetailerMarkers,
		"Mobile caterer":greyMarkers
	    };


//The function initialise the map tiles and marker layergroup
function fetchData(){
	
       

	   //create the array to hold results returned from server
	   data = new Array();
	
	    //AJAX request to server; accepts a URL to which the request is sent 
	    //and a callback function to execute if the request is successful. 
	    $.getJSON("fetchData.php", function(results) { 
		
		//Populate data with results
		for (var i = 0; i < results.length; i++ ) {
			
			data.push ({
				id: results[i].id, 
				hygiene: results[i].hygiene, 
				addressline1:results[i].addressline1,
				businesstype:results[i].businesstype,
				businessname:results[i].businessname,
				postcode:results[i].postcode,
				lat: results[i].lat, 
				lon: results[i].lon
			}); 
		}
		//call the function to populate the data
		plotdata();
		//applyFilters();
		//matchesFilters();
		
})
};
	

	
//a function which Loop through  data to create marker at each location

function plotdata() {
		
   
   for (var i = 0; i < data.length; i++) {
      var markerLocation = new L.LatLng(data[i].lat, data[i].lon);//marker position 
	  
     var markerOptions = {
         title: "MyLocation",
         value: data[i].businessType,      // Options for the marker
         clickable: true,
         draggable: false
         }	
      	// For different types of business use different icon and add to variables/layerGroups (set previously)
		
	  var marker = new L.Marker(markerLocation,markerOptions),//set property searched
	      value = data[i].businessType ;//value searched
		  		
	 switch (data[i].businesstype) {
			case "Restaurant/Cafe/Canteen":
				marker = new L.Marker(markerLocation, { icon: restaurantIcon }).addTo(restaurantMarkers);
				break;

			case "Farmers/growers":
				marker = new L.Marker(markerLocation, { icon: Farmericon }).addTo(FarmerMarkers);
				break;

			case "Distributors/Transporters":
				marker = new L.Marker(markerLocation, { icon: TransportIcon }).addTo(TransportMarkers);
				break;

			case "Hospitals/Childcare/Caring Premises":
				marker = new L.Marker(markerLocation, { icon: HospitalIcon }).addTo(HospitalMarkers);
				break;

			case "Pub/bar/nightclub":
				marker = new L.Marker(markerLocation, { icon: PubIcon }).addTo(PubMarkers);
				break;

			case "Takeaway/sandwich shop":
				marker = new L.Marker(markerLocation, { icon: TakeawayIcon }).addTo(TakeawayMarkers);
				break;

			case "Manufacturers/packers":
				marker = new L.Marker(markerLocation, { icon: ManufacturerIcon }).addTo(ManufacturerMarkers);
				break;

			case "Hotel/bed & breakfast/guest house":
				marker = new L.Marker(markerLocation, { icon: HotelIcon }).addTo(HotelMarkers);
				break;
            case "School/college/university":
				marker = new L.Marker(markerLocation, { icon: schoolIcon }).addTo(schoolMarkers);
				break;
			case "Retailers - supermarkets/hypermarkets":
				marker = new L.Marker(markerLocation, { icon: SupermarketIcon }).addTo(SupermarketMarkers);
				break;
			case "Retailers - other":
				marker = new L.Marker(markerLocation, { icon: RetailIcon }).addTo(RetailerMarkers);
				break;	
			case "Mobile caterer":
				marker = new L.Marker(markerLocation, { icon: greyIcon }).addTo(greyMarkers);
				break;	
			case "Other catering premises":
				marker = new L.Marker(markerLocation, { icon: yellowIcon }).addTo(yellowMarkers);
				break;		
			default:
				text = " businessType Not Recognised";
		}

	  
     //add marker layer to the map
      map.addLayer(marker);
	  //add popup info window
      marker.bindPopup("business name:"+ data[i].businessname +"   hygiene ratting:"+ data[i].hygiene + "postcode:"+ data[i].postcode);
     
   };
};

function clearData(marker){
	document.getElementById('textWrap').innerHTML = ''; 
}
		
/* parse the initial data and store the markers in an array. 
When a filter is applied we loop through our array of markers 
checking if they match the selected filters and, if they do, add them to the map. 

commented out because marker was created inside a function,unable to use in global

function applyFilters() {
 	map.clearData(marker);
	for(var i = 0; i < allmarkers.length; i++) {
		if(matchesFilters(allmarkers[i])) {
			markerLocation.addLayer(allmarkers[i]);
		}
	}
}

function matchesFilters(marker) {
	for(var i = 0; i < appliedfilters.length; i++) {
		if(!marker.options.data[appliedfilters[i]] ||
			marker.options.data[appliedfilters[i]] !== data[appliedfilters[i]]) {
			return false;
		}
	}
	return true;
}
*/

// add marker overlayes and baselayers to themap

L.control.layers(baseLayers,overlayers).addTo(map);


/*comented out because unable to call the 'addcontrol'function in leaflet-controlSearch.js
//create  object control search
var controlSearch = new L.Control.Search({
		position:'topleft',		
		layer: overlayers,
		initial: false,
		zoom: 12,
		marker: false
	});map.addControl(controlSearch);
*/
// Add scale control panel to bottom right corner
L.control.scale({position:'bottomright'}).addTo(map);

//Add ZoomBar control panel to top right corner
var zoombar = new L.Control.ZoomBar({ position: 'topright' }).addTo(map);



//add pop up window
var popup = L.popup();	 

//define a function click on screen and pop up the coordinates

function onMapClick(e) {
		popup.setLatLng(e.latlng)
			 .setContent("You clicked the map at " + e.latlng.toString()) //popup info
			 .openOn(map);
}

	map.on('click', onMapClick);
	
	
    

//define a function to alert when layer turned on/off	
map.on('overlayadd', function(e){
	alert( e.name +"was just turned on");
	});
	
map.on('overlayremove', function(e){
	alert (e.name +"was just turned off");
	});




//set jequery to turn the layer on and off
$("button").click(function(){
	

if (map.hasLayerGroup(overlayers)){ 
map.removeLayerGroup(overlayers)}
else {
	map.addLayerGroup(overlayers);
};
});

/*filter function
function filter(json){
 var attribute =json.properties;
 var optdata =$('input[businesstypeid='1']:checked.val();)
 if (optdata=='ALL'){
	 return true;
 } else{
	 return(att.status==optdata);
 }
}

*/


/*
 //use a jquery sedo selector to select the radio button that is currently selected,
 //retrieve the value attribute and assign the value

 
 $.getJSON("fetchData.php", pointoLayer(returnMarker)addTo(my map);
 
 markerlayers =L.geoJSON.ajax()
 
  leedsdata = new Array();
  $.getJSON("fetchData.php", function(data) {
    var geojsonlayer = L.geoJson(leedsdata, {
      onEachFeature: function (leedsdata, layer) {
		leedsdata.push(layer);  
        layer.bindPopup(leedsdata.properties.postcode);
      }
    });
 
L.control.search({
  data: leedsdata
}).addTo(map);

 
 */
