let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.938845, lng: 30.32296 },
    zoom: 4,
  });
}
  const icons = {
    pin: {
      icon: "../images/pin_2997.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(-33.91721, 151.2263),
      type: "pin",
    },];