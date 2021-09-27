define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var BorderButtonRound = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "45dp",
                "id": "BorderButtonRound",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0g2db33123c984e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            BorderButtonRound.setDefaultUnit(kony.flex.DP);
            var ButtonBorder = new kony.ui.Button({
                "bottom": "5dp",
                "focusSkin": "ButtonBorderActive",
                "id": "ButtonBorder",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "ButtonBorderNormal",
                "text": "Button",
                "top": "5dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            BorderButtonRound.add(ButtonBorder);
            var E2ECard = new com.konymp.E2ECard({
                "height": "100%",
                "id": "E2ECard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "konympcorousel1sknFlxWhiteBackground",
                "top": "0dp",
                "width": "100%",
                "overrides": {}
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(BorderButtonRound, E2ECard);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});