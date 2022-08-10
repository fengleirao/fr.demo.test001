sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"fr/demo/test001/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("fr.demo.test001.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},
		
		
		createContent: function() {
			//Below is just lik manual specify i18n model, equal to configure in the manifest file
			var oRootPath = jQuery.sap.getModulePath("Test1");
			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl: [oRootPath, "i18n/i18n.properties"].join("/")
			});
	
		//Below is equal to the root view configure in the manifest file
		// "rootView": {
		// 	"viewName": "fr.demo.test001.view.App",
		// 	"type": "XML"
		// },	
			
			sap.ui.getCore().setModel(i18nModel, "i18n");
			var view = sap.ui.view({
				id: "app",
				viewName: "fr.demo.test001.view.App",
				type: "XML",
				viewData: {
					component: this
				}
			});
			
			view.setModel(i18nModel, "i18n");
			return view;
		}
				
		
	});
});