define(function() {
    return function(controller) {
        var E2ECard = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "E2ECard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "konympcorousel1sknFlxWhiteBackground",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "E2ECard"), extendConfig({}, controller.args[1], "E2ECard"), extendConfig({}, controller.args[2], "E2ECard"));
        E2ECard.setDefaultUnit(kony.flex.DP);
        var segCarousel1 = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "imgSlide": "kony_mp_carousel1_slides1.png"
            }, {
                "imgSlide": "kony_mp_carousel1_slides2.png"
            }, {
                "imgSlide": "kony_mp_carousel1_slides3.png"
            }, {
                "imgSlide": "kony_mp_carousel1_slides4.png"
            }],
            "groupCells": false,
            "height": "35%",
            "id": "segCarousel1",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": false,
            "onSwipe": controller.AS_Segment_cc4a496983724c0d906f04a301e2f1e7,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "Copyseg2",
            "rowSkin": "Copyseg3",
            "rowTemplate": "konympcarousel1flx",
            "scrollingEvents": {},
            "sectionHeaderSkin": "CopysliPhoneSegmentHeader1",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "imgSlide": "imgSlide",
                "konympcarousel1flx": "konympcarousel1flx"
            },
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "segCarousel1"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segCarousel1"), extendConfig({}, controller.args[2], "segCarousel1"));
        var lblHeading = new kony.ui.Label(extendConfig({
            "id": "lblHeading",
            "isVisible": true,
            "left": "5%",
            "skin": "konympcarouselsknLblSFUIBOLD135",
            "text": "Litore Resort Hotel & SPA",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "35%",
            "width": "70%",
            "zIndex": 2
        }, controller.args[0], "lblHeading"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeading"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHeading"));
        var lblPrice = new kony.ui.Label(extendConfig({
            "id": "lblPrice",
            "isVisible": true,
            "right": "5.50%",
            "skin": "konympcarouselsknLblSFUIBOLD114",
            "text": "$119.94",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "35.40%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblPrice"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPrice"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblPrice"));
        var flxStar = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxStar",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "CopyslFbox1",
            "top": "39.40%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxStar"), extendConfig({}, controller.args[1], "flxStar"), extendConfig({}, controller.args[2], "flxStar"));
        flxStar.setDefaultUnit(kony.flex.DP);
        var imgStar1 = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgStar1",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_active.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "imgStar1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgStar1"), extendConfig({}, controller.args[2], "imgStar1"));
        var imgStar2 = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgStar2",
            "isVisible": true,
            "left": "0.50%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_active.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "imgStar2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgStar2"), extendConfig({}, controller.args[2], "imgStar2"));
        var imgStar3 = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgStar3",
            "isVisible": true,
            "left": "0.50%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_active.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "imgStar3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgStar3"), extendConfig({}, controller.args[2], "imgStar3"));
        var imgStar4 = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgStar4",
            "isVisible": true,
            "left": "0.50%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_active.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "imgStar4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgStar4"), extendConfig({}, controller.args[2], "imgStar4"));
        var imgStar5 = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgStar5",
            "isVisible": true,
            "left": "0.50%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_star_inactive.png",
            "top": "0%",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "imgStar5"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgStar5"), extendConfig({}, controller.args[2], "imgStar5"));
        flxStar.add(imgStar1, imgStar2, imgStar3, imgStar4, imgStar5);
        var imgLocation = new kony.ui.Image2(extendConfig({
            "height": "20dp",
            "id": "imgLocation",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_location.png",
            "top": "44%",
            "width": "20dp",
            "zIndex": 2
        }, controller.args[0], "imgLocation"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgLocation"), extendConfig({}, controller.args[2], "imgLocation"));
        var lblLocation = new kony.ui.Label(extendConfig({
            "id": "lblLocation",
            "isVisible": true,
            "left": "11.50%",
            "skin": "konympcarousel1sknLblSFUIRegularGrey100",
            "text": "Am Rehspung 35, Holzlar, 53229 New York, USA",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "44%",
            "width": "58%",
            "zIndex": 2
        }, controller.args[0], "lblLocation"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocation"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLocation"));
        var mapView = new kony.ui.Map(extendConfig({
            "calloutWidth": 80,
            "defaultPinImage": "location1.png",
            "height": "60dp",
            "id": "mapView",
            "isVisible": true,
            "provider": constants.MAP_PROVIDER_GOOGLE,
            "right": "5.50%",
            "top": "42.70%",
            "width": "85dp",
            "zIndex": 2
        }, controller.args[0], "mapView"), extendConfig({}, controller.args[1], "mapView"), extendConfig({
            "mode": constants.MAP_VIEW_MODE_NORMAL,
            "showZoomControl": true,
            "zoomLevel": 20
        }, controller.args[2], "mapView"));
        var lblServicesIncluded = new kony.ui.Label(extendConfig({
            "id": "lblServicesIncluded",
            "isVisible": true,
            "left": "5%",
            "skin": "konympcarousel1sknLbl100BoldSFUI",
            "text": "Services included:",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "52%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblServicesIncluded"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblServicesIncluded"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblServicesIncluded"));
        var flxBookHotel = new kony.ui.FlexContainer(extendConfig({
            "centerX": "50%",
            "clipBounds": true,
            "height": "6.50%",
            "id": "flxBookHotel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onTouchStart": controller.AS_FlexContainer_h77316e20e3541a5bdcb28d3179e08e0,
            "skin": "konympcarousel1sknFLxButton",
            "top": "91%",
            "width": "93.10%",
            "zIndex": 2
        }, controller.args[0], "flxBookHotel"), extendConfig({}, controller.args[1], "flxBookHotel"), extendConfig({}, controller.args[2], "flxBookHotel"));
        flxBookHotel.setDefaultUnit(kony.flex.DP);
        var lblButton = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblButton",
            "isVisible": true,
            "skin": "konympcarousel1sknLblWhite114SFRegular",
            "text": "Book Hotel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblButton"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblButton"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblButton"));
        flxBookHotel.add(lblButton);
        var flxBody = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35%",
            "id": "flxBody",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox1",
            "top": "56%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxBody"), extendConfig({}, controller.args[1], "flxBody"), extendConfig({}, controller.args[2], "flxBody"));
        flxBody.setDefaultUnit(kony.flex.DP);
        var flxWifi = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxWifi",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxWifi"), extendConfig({}, controller.args[1], "flxWifi"), extendConfig({}, controller.args[2], "flxWifi"));
        flxWifi.setDefaultUnit(kony.flex.DP);
        var imgWifi = new kony.ui.Image2(extendConfig({
            "height": "25dp",
            "id": "imgWifi",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_wifi.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, controller.args[0], "imgWifi"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgWifi"), extendConfig({}, controller.args[2], "imgWifi"));
        var lblWifi = new kony.ui.Label(extendConfig({
            "id": "lblWifi",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Free Wifi",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblWifi"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblWifi"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblWifi"));
        flxWifi.add(imgWifi, lblWifi);
        var flxParking = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxParking",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxParking"), extendConfig({}, controller.args[1], "flxParking"), extendConfig({}, controller.args[2], "flxParking"));
        flxParking.setDefaultUnit(kony.flex.DP);
        var imgParking = new kony.ui.Image2(extendConfig({
            "height": "25dp",
            "id": "imgParking",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_parking.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, controller.args[0], "imgParking"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgParking"), extendConfig({}, controller.args[2], "imgParking"));
        var lblParking = new kony.ui.Label(extendConfig({
            "id": "lblParking",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Free Parking",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblParking"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblParking"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblParking"));
        flxParking.add(imgParking, lblParking);
        var flxGreatView = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxGreatView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxGreatView"), extendConfig({}, controller.args[1], "flxGreatView"), extendConfig({}, controller.args[2], "flxGreatView"));
        flxGreatView.setDefaultUnit(kony.flex.DP);
        var imgGreatView = new kony.ui.Image2(extendConfig({
            "height": "23dp",
            "id": "imgGreatView",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_view.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, controller.args[0], "imgGreatView"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgGreatView"), extendConfig({}, controller.args[2], "imgGreatView"));
        var lblGreatView = new kony.ui.Label(extendConfig({
            "id": "lblGreatView",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Great View",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblGreatView"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblGreatView"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblGreatView"));
        flxGreatView.add(imgGreatView, lblGreatView);
        var flxKingSizeBed = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxKingSizeBed",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxKingSizeBed"), extendConfig({}, controller.args[1], "flxKingSizeBed"), extendConfig({}, controller.args[2], "flxKingSizeBed"));
        flxKingSizeBed.setDefaultUnit(kony.flex.DP);
        var imgKingSizeBed = new kony.ui.Image2(extendConfig({
            "height": "25dp",
            "id": "imgKingSizeBed",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_bed.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, controller.args[0], "imgKingSizeBed"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgKingSizeBed"), extendConfig({}, controller.args[2], "imgKingSizeBed"));
        var lblKingSizeBed = new kony.ui.Label(extendConfig({
            "id": "lblKingSizeBed",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "King Size Bed",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblKingSizeBed"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblKingSizeBed"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblKingSizeBed"));
        flxKingSizeBed.add(imgKingSizeBed, lblKingSizeBed);
        var flxTaxiBooking = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxTaxiBooking",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxTaxiBooking"), extendConfig({}, controller.args[1], "flxTaxiBooking"), extendConfig({}, controller.args[2], "flxTaxiBooking"));
        flxTaxiBooking.setDefaultUnit(kony.flex.DP);
        var imgTaxiBooking = new kony.ui.Image2(extendConfig({
            "height": "25dp",
            "id": "imgTaxiBooking",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_taxi.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, controller.args[0], "imgTaxiBooking"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgTaxiBooking"), extendConfig({}, controller.args[2], "imgTaxiBooking"));
        var lblTaxiBooking = new kony.ui.Label(extendConfig({
            "id": "lblTaxiBooking",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Taxi Booking",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblTaxiBooking"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTaxiBooking"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTaxiBooking"));
        flxTaxiBooking.add(imgTaxiBooking, lblTaxiBooking);
        var flxDisGuests = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxDisGuests",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox1",
            "top": "2%",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flxDisGuests"), extendConfig({}, controller.args[1], "flxDisGuests"), extendConfig({}, controller.args[2], "flxDisGuests"));
        flxDisGuests.setDefaultUnit(kony.flex.DP);
        var imgDisGuests = new kony.ui.Image2(extendConfig({
            "height": "25dp",
            "id": "imgDisGuests",
            "isVisible": true,
            "left": "5%",
            "skin": "CopyslImage2",
            "src": "kony_mp_carousel1_disabled.png",
            "top": "0%",
            "width": "25dp",
            "zIndex": 2
        }, controller.args[0], "imgDisGuests"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDisGuests"), extendConfig({}, controller.args[2], "imgDisGuests"));
        var lblDisGuests = new kony.ui.Label(extendConfig({
            "id": "lblDisGuests",
            "isVisible": true,
            "left": "15.50%",
            "skin": "konympcarousel1SFUIRegularBlack114",
            "text": "Facilities for disabled guests",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, controller.args[0], "lblDisGuests"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDisGuests"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDisGuests"));
        flxDisGuests.add(imgDisGuests, lblDisGuests);
        flxBody.add(flxWifi, flxParking, flxGreatView, flxKingSizeBed, flxTaxiBooking, flxDisGuests);
        E2ECard.add(segCarousel1, lblHeading, lblPrice, flxStar, imgLocation, lblLocation, mapView, lblServicesIncluded, flxBookHotel, flxBody);
        return E2ECard;
    }
})