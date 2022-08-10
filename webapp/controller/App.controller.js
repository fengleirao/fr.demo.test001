sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	"fr/demo/test001/model/formatter"
], function(Controller, JSONModel, DateFormat, formatter) {
	"use strict";

	return Controller.extend("fr.demo.test001.controller.App", {
		formatter: formatter,
		onInit: function() {
			var oModel = new JSONModel({
				firstStatus: "A",
				secondStatus: "B",
				thirdStatus: "C",
				fourthStatus: "D",

			});
			this.getView().setModel(oModel);
			
			this.dateFormatter();
			
			this.numberFormat();
			
			this.formatHtmlText();
		},
		
		SayHello: function() {
			sap.m.MessageToast.show(this.getView().getModel("html").getProperty("/HTML"));
		},
		
		dateFormatter: function() {
			var oDateFormat = DateFormat.getDateInstance({
				pattern: "yyyy-MM-dd"
			});	
			
			var oDateTimeFormat = DateFormat.getDateTimeInstance({
				pattern: "yyyy-MM-dd HH:MM:SS"
			});
			
			var oTimeFormat = DateFormat.getInstance({
				pattern: "HH:MM:SS"
			});
			
			window.console.log(oDateFormat.format(new Date()));
			window.console.log(oDateTimeFormat.format(new Date()));
			window.console.log(oTimeFormat.format(new Date()));
			
			window.console.log(oDateFormat.parse("2022-07-25"));
		},
		
		numberFormat: function() {
			var oModel = new JSONModel({
				floatNumber1: "",
				floatNumber2: "",
				floatNumber3: "",
				floatNumber4: ""
			}); 
			this.getView().setModel(oModel, "number");
			var oFormatOptions = {
				minIntegerDigits: 3,
				maxIntegerDigits: 5,
				minFractioinDigits: 2,
				maxFractionDigits: 4
			};
			var oFloatFormat = sap.ui.core.format.NumberFormat.getFloatInstance(oFormatOptions);
			
			oModel.setProperty("/floatNumber1", oFloatFormat.format(1.3));		//return 001.10
			oModel.setProperty("/floatNumber2", oFloatFormat.format(1234.567));	//return 1,234.567
			oModel.setProperty("/floatNumber3", oFloatFormat.parse("1,234.567"));	//return 1234.567
			oModel.setProperty("/floatNumber4", oFloatFormat.parse("12.34%"));	//return 0.1234
			
			var oIntegerFormat = sap.ui.core.format.NumberFormat.getIntegerInstance();
			var oPercentFormat = sap.ui.core.format.NumberFormat.getPercentInstance();
			var oCurrencyFormat = sap.ui.core.format.NumberFormat.getCurrencyInstance();
			this.getView().setModel(new JSONModel({number:12}), "number1");
			
		},
		
		
		formatHtmlText: function() {
			var oModel = new JSONModel({
				HTML : "<h3>SubHeader</h3>" + 
				"<p>The first Paragraph</p>"
				// HTML: "test"
			});
			this.getView().setModel(oModel,"html");
		},
		
		showPopoverFragment: function(oEvent) {
			if (!this._popover) {
				this._popover = sap.ui.xmlfragment("fr.demo.test001.fragment.Popover", this);
				this.getView().addDependent(this._popover);
				this._popover.setModel(new JSONModel({myLabel:"This is a custom fragment"}));
			}
			var oButton = oEvent.getSource();
			this._popover.openBy(oButton);
		},
		
		onPopoverCallback: function() {
			sap.m.MessageToast.show("This is a Callback action", {duration:3000});
		}
		



	});
});