function initMap() {
  	var asukoht = {lat: 57.799, lng: 23.246};
  	var map = new google.maps.Map(
      	document.getElementById('map'), {zoom: 15, center: asukoht});
  	var marker = new google.maps.Marker({position: asukoht, map: map});
}