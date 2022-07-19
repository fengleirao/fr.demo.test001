sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("fr.demo.test001.controller.App", {
		init: function() {
			
		},
		
		SayHello: function() {
			sap.m.MessageToast.show("Hello World");
		}

	});
});