//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "SampleJenkins",
    appName: "SampleJenkins",
    appVersion: "1.0.0",
    isDebug: false,
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 9200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        postappinit: function(eventObj) {
            applicationController.postAppInitCallBack(eventObj);
        },
        showstartupform: function() {
            new kony.mvc.Navigation("Form1").navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
kony.print = function() {
    return;
};
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();