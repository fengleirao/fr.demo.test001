sap.ui.define([], function() {
	"use strict";
	
	return {
		statusText: function(sStatus) {
			var resourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A": 
					return resourceBundle.getText("statusA");
				case "B": 
					return resourceBundle.getText("statusB");
				case "C": 
					return resourceBundle.getText("statusC");
				case "D": 
					return resourceBundle.getText("statusD");	
				default: 
					return sStatus;
			}
					
		}
	};
});