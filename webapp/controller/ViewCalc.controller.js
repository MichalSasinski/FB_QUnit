sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("FB_Qunit.FB_QUnit.controller.ViewCalc", {
		
		getModel: function(sModelName) {
			return this.getView().getModel(sModelName);
		},
		
		calculate: function (par1, par2, operation) {
			var result;
			if (operation === "+") {
				result = par1 + par2;
			} else if (operation === "-") {
				result = par1 - par2;
			}
			return result;
		},
		/**
		 *@memberOf FB_Qunit.FB_QUnit.controller.ViewCalc
		 */
		runCalculate: function (oEvent) {
			var par1 = this.getView().byId("valueA").getValue();
			var par2 = this.getView().byId("valueB").getValue();
			var operation = this.getView().byId("operation").getSelectedKey();

			this.result = this.calculate(par1, par2, operation);

			this.getView().byId("result").setValue(this.result);
			
			this.getView().byId("inWords").setText(this.inWords(par1, par2, operation));
		},

		inWords: function (par1, par2, operation) {
			var words;
			var oResourceBundle = this.getModel("i18n").getResourceBundle();
			if (operation === "+") {
				words = par1 + " " + oResourceBundle.getText("add") + " " + par2 + " " + oResourceBundle.getText("is") + " " + this.calculate(
					par1, par2, operation);

			} else if 
			(operation === "-") {
				words = par1 + " " + oResourceBundle.getText("substract") + " " + par2 + " " + oResourceBundle.getText("is") + " " + this.calculate(
					par1, par2, operation);

			}
			return words;
		}
	});
});