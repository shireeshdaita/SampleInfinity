define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konymp.E2ECard", "E2ECard", "E2ECardController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "E2ECard",
            "name": "com.konymp.E2ECard"
        });
        kony.mvc.registry.add("konympcarousel1flx", "konympcarousel1flx", "konympcarousel1flxController");
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});