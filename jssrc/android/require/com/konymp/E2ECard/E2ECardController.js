define("com/konymp/E2ECard/userE2ECardController", function() {
    return {
        mapValue: function() {
            var data = [{
                "imgSlide": "kony_mp_carousel1_slides1.png",
                "hotelName": "Litore Resort Hotel & SPA",
                "hotelPrice": "$119.94",
                "hotelLocation": "Am Rehspung 35, Holzlar, 53229 New York, USA",
                "mapLocations": [{
                    lat: "40.748817",
                    lon: "-73.985428",
                    image: "location1.png",
                }],
                "hotelFacilities": {
                    "wifi": true,
                    "parking": true,
                    "greatView": true,
                    "bedKing": true,
                    "taxibook": true,
                    "disGuest": true
                }
            }, {
                "imgSlide": "kony_mp_carousel1_slides2.png",
                "hotelName": "The Peninsula Chicago",
                "hotelPrice": "$119.94",
                "hotelLocation": "108 E Superior St, Chicago, IL 60611, USA",
                "mapLocations": [{
                    lat: "41.881832",
                    lon: "-87.623177",
                    image: "location1.png",
                }],
                "hotelFacilities": {
                    "wifi": true,
                    "parking": true,
                    "greatView": false,
                    "bedKing": true,
                    "taxibook": false,
                    "disGuest": true
                }
            }, {
                "imgSlide": "kony_mp_carousel1_slides3.png",
                "hotelName": "Castille Paris",
                "hotelPrice": "$119.94",
                "hotelLocation": "33-37 Rue Cambon, 75001 Paris, France",
                "mapLocations": [{
                    lat: "48.864716",
                    lon: "2.349014",
                    image: "location1.png",
                }],
                "hotelFacilities": {
                    "wifi": false,
                    "parking": true,
                    "greatView": true,
                    "bedKing": true,
                    "taxibook": false,
                    "disGuest": true
                }
            }, {
                "imgSlide": "kony_mp_carousel1_slides4.png",
                "hotelName": "Hotel München Palace",
                "hotelPrice": "$119.94",
                "hotelLocation": " Trogerstraße 21, 81675 München, Germany",
                "mapLocations": [{
                    lat: "52.520645",
                    lon: "13.409779",
                    image: "location1.png",
                }],
                "hotelFacilities": {
                    "wifi": true,
                    "parking": true,
                    "greatView": true,
                    "bedKing": true,
                    "taxibook": false,
                    "disGuest": false
                }
            }];
            this.view.segCarousel1.setData(data);
            this.view.mapView.zoomLevel = 7;
            this.onSwipe(0);
        },
        onSwipe: function(row) {
            var data = this.view.segCarousel1.data[row];
            this.view.lblHeading.text = data.hotelName;
            this.view.lblPrice.text = data.hotelPrice;
            this.view.lblLocation.text = data.hotelLocation;
            this.view.mapView.locationData = data.mapLocations;
            if (data.hotelFacilities.wifi === true) {
                this.view.flxWifi.isVisible = true;
            } else {
                this.view.flxWifi.isVisible = false;
            }
            if (data.hotelFacilities.parking === true) {
                this.view.flxParking.isVisible = true;
            } else {
                this.view.flxParking.isVisible = false;
            }
            if (data.hotelFacilities.greatView === true) {
                this.view.flxGreatView.isVisible = true;
            } else {
                this.view.flxGreatView.isVisible = false;
            }
            if (data.hotelFacilities.bedKing === true) {
                this.view.flxKingSizeBed.isVisible = true;
            } else {
                this.view.flxKingSizeBed.isVisible = false;
            }
            if (data.hotelFacilities.taxibook === true) {
                this.view.flxTaxiBooking.isVisible = true;
            } else {
                this.view.flxTaxiBooking.isVisible = false;
            }
            if (data.hotelFacilities.disGuest === true) {
                this.view.flxDisGuests.isVisible = true;
            } else {
                this.view.flxDisGuests.isVisible = false;
            }
        },
        bookHotel: function() {
            alert("Hotel Booked");
        }
    };
});
define("com/konymp/E2ECard/E2ECardControllerActions", {
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_FlexContainer_h77316e20e3541a5bdcb28d3179e08e0: function AS_FlexContainer_h77316e20e3541a5bdcb28d3179e08e0(eventobject, x, y) {
        var self = this;
        this.bookHotel();
    },
    AS_Segment_cc4a496983724c0d906f04a301e2f1e7: function AS_Segment_cc4a496983724c0d906f04a301e2f1e7(seguiWidget, sectionIndex, rowIndex) {
        var self = this;
        this.onSwipe(rowIndex);
    }
});
define("com/konymp/E2ECard/E2ECardController", ["com/konymp/E2ECard/userE2ECardController", "com/konymp/E2ECard/E2ECardControllerActions"], function() {
    var controller = require("com/konymp/E2ECard/userE2ECardController");
    var actions = require("com/konymp/E2ECard/E2ECardControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
