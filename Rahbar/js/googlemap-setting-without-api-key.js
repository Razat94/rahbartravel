/* =================================
GOOGLE MAPS
=================================== */

function CustomZoomControl(controlDiv, map) {
	//grap the zoom elements from the DOM and insert them in the map
	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
		controlUIzoomOut= document.getElementById('cd-zoom-out');
	controlDiv.appendChild(controlUIzoomIn);
	controlDiv.appendChild(controlUIzoomOut);

	// Setup the click event listeners and zoom-in or out according to the clicked element
	google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		map.setZoom(map.getZoom()+1)
	});
	google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		map.setZoom(map.getZoom()-1)
	});
}

if ($('#maps').length) {
//set your google maps parameters
var myLat = $('#maps').data('lat'),
myLng = $('#maps').data('lng'),
myMarkerx = $('#maps').data('marker');


var latitude = myLat,
	longitude = myLng,
	markerx = myMarkerx,
	map_zoom = 14;

//google map custom marker icon - .png fallback for IE11
var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
var marker_url = ( is_internetExplorer11 ) ? markerx : markerx;

//define the basic color of your map, plus a value for saturation and brightness
var main_color = '#272727',
	saturation_value= -80,
	brightness_value= 5;

//we define here the style of the map
var style= [{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}];

//set google map options
var map_options = {
	center: new google.maps.LatLng(latitude, longitude),
	zoom: map_zoom,
	panControl: false,
	zoomControl: false,
	mapTypeControl: false,
	streetViewControl: false,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	scrollwheel: false,
	styles: style,
}
//inizialize the map
var map = new google.maps.Map(document.getElementById('maps'), map_options);
//add a custom marker to the map
var marker = new google.maps.Marker({
	position: new google.maps.LatLng(latitude, longitude),
	map: map,
	visible: true,
	icon: marker_url,
});

var zoomControlDiv = document.createElement('div');
var zoomControl = new CustomZoomControl(zoomControlDiv, map);

//insert the zoom div on the top left of the map
map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
}