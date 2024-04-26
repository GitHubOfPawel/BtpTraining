sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'pku/po/purchaseorderapp/test/integration/FirstJourney',
		'pku/po/purchaseorderapp/test/integration/pages/POsList',
		'pku/po/purchaseorderapp/test/integration/pages/POsObjectPage',
		'pku/po/purchaseorderapp/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('pku/po/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);