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
       /* {position: new google.maps.LatLng(6.4372237, 79.9925907), city: 'Aluthgama'},
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
        {position: new google.maps.LatLng(8.5832077, 81.1781972), city: 'Trincomalee'}*/
        { position: new google.maps.LatLng(7.7339997, 81.6609715), city: 'Batticaloa', coordinator: 'S K Vishwanath', tel: '077 401 0688', start: 'Chenkaladi Hospital, Eravur police station, Iyankerny and KP Nagar ', end: 'United Grounds Chenkalady', moreInfo: '' },
        { position: new google.maps.LatLng(6.9215466, 79.8212828), city: 'Colombo', coordinator: 'Akash', tel: '077 251 2374', start: 'cambel park Boralla ', end: 'Kotte Diywanna open stage (Next to NdB banak', moreInfo: 'Main walk ' },
        { position: new google.maps.LatLng(9.6699865, 80.0109171), city: 'Jaffna', coordinator: 'Mayuran ', tel: '077 284 6599', start: '', end: '', moreInfo: '' },
        { position: new google.maps.LatLng(6.0522314,80.1842461), city: 'Galle ', coordinator: 'Dammika', tel: '071 642 5915', start: 'T D Samaraweera Grounds, Borakanda', end: 'Mahindanada Community Centre', moreInfo: '' },
        { position: new google.maps.LatLng(9.3769346, 80.3415849), city: 'Kilinochchi', coordinator: 'Ashok Kumar', tel: '077 233 6759 / 071 043 5797', start: '1- karadipoku 2- SLT Tower, 3-Royal Pre School ', end: 'Kilinocchi town cooparative hall ', moreInfo: '' },
        { position: new google.maps.LatLng(5.9519919, 80.5332384), city: 'Matara', coordinator: 'Ajith ', tel: '077 900 4724', start: 'Nuupe Junction', end: 'Matara Town.', moreInfo: '' },
        { position: new google.maps.LatLng(9.267669, 80.8105277), city: 'Mullaitivu', coordinator: 'Anesly Newman', tel: '077 418 8774', start: 'Mulativ Beach', end: 'Mulativ Town kids park', moreInfo: '' },
        { position: new google.maps.LatLng(6.285247, 81.2773298), city: 'Tissamaharama', coordinator: 'pubudu', tel: '077 397 6797', start: 'police Station Thissamaharama', end: 'Tissamaharama Roundthebout ', moreInfo: '' },
        { position: new google.maps.LatLng(8.5832077, 81.1781972), city: 'Trincomalee', coordinator: 'Mohomed Yasser ', tel: '071 086 3119', start: 'T/T Pulmoddai Muslim Collage', end: 'Trinco Junction ', moreInfo: '' }

    ];

    var bounds = new google.maps.LatLngBounds();

    var map = new google.maps.Map(document.getElementById('map'), {});

    locations.forEach(function (feature) {

        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' + feature.city + '</h1>' +
            '<div id="bodyContent">' +
            '<p><ul>' +
            '<li><strong> Coordinator : </strong> ' + feature.coordinator + '</li>' +
            '<li><strong> Contact No : </strong> ' + feature.tel + '</li>' +
            '<li><strong> Start Location : </strong> ' + feature.start + '</li>' +
            '<li><strong> End Location : </strong> ' + feature.end + '</li>' +
            '<li>' + feature.moreInfo + '</li>' + 
            '</ul>' +
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