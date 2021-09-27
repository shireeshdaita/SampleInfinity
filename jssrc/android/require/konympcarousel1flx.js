define("konympcarousel1flx", function() {
    return function(controller) {
        var konympcarousel1flx = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "97%",
            "id": "konympcarousel1flx",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox1"
        }, {}, {});
        konympcarousel1flx.setDefaultUnit(kony.flex.DP);
        var imgSlide = new kony.ui.Image2({
            "height": "100%",
            "id": "imgSlide",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyslImage2",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        konympcarousel1flx.add(imgSlide);
        return konympcarousel1flx;
    }
})