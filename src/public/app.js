function initMap() {
    window.infoWindow = null;
    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
        parking: {
            icon: iconBase + 'parking_lot_maps.png'
        },
        library: {
            icon: iconBase + 'library_maps.png'
        },
        info: {
            icon: iconBase + 'info-i_maps.png'
        }
    };
    var locations = [
        {position: new google.maps.LatLng(6.4372237, 79.9925907), city: 'Aluthgama'},
        {position: new google.maps.LatLng(6.8364579, 80.9774738), city: 'Bandarawela'},
        {position: new google.maps.LatLng(7.7339997, 81.6609715), city: 'Batticaloa'},
        {position: new google.maps.LatLng(6.9215466, 79.8212828), city: 'Colombo'},
        {position: new google.maps.LatLng(9.6699865, 80.0109171), city: 'Jaffna'},
        {position: new google.maps.LatLng(7.0095365, 79.9425256), city: 'Kadawatha'},
        {position: new google.maps.LatLng(7.2943955, 80.6081318), city: 'Kandy'},
        {position: new google.maps.LatLng(9.3769346, 80.3415849), city: 'Kilinochchi'},
        {position: new google.maps.LatLng(5.9519919, 80.5332384), city: 'Matara'},
        {position: new google.maps.LatLng(9.267669, 80.8105277), city: 'Mullaitivu'},
        {position: new google.maps.LatLng(7.1894442, 79.7884597), city: 'Negombo'},
        {position: new google.maps.LatLng(6.093524, 80.8595993), city: 'Ranna'},
        {position: new google.maps.LatLng(6.285247, 81.2773298), city: 'Tissamaharama'},
        {position: new google.maps.LatLng(8.5832077, 81.1781972), city: 'Trincomalee'}
    ];

    var bounds = new google.maps.LatLngBounds();

    var map = new google.maps.Map(document.getElementById('map'), {});

    locations.forEach(function (feature) {

        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' + feature.city + '</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the ' +
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
            'south west of the nearest large town, Alice Springs; 450&#160;km ' +
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
            'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
            'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
            'Aboriginal people of the area. It has many springs, waterholes, ' +
            'rock caves and ancient paintings. Uluru is listed as a World ' +
            'Heritage Site.</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: feature.position,
            //icon: icons[feature.type].icon,
            map: map,
            title: feature.city
        });

        var loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
        bounds.extend(loc);

        marker.addListener('click', function () {
            if (window.infoWindow != null) {
                window.infoWindow.close();
            }
            window.infoWindow = infowindow;
            infowindow.open(map, marker);
        });
    });
    map.fitBounds(bounds);
    map.panToBounds(bounds);
}