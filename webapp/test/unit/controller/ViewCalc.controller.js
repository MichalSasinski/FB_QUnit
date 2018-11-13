/*global QUnit*/

sap.ui.define([
	"FB_Qunit/FB_QUnit/controller/ViewCalc.controller"
], function (ViewCalcController) {
	"use strict";

	//This module tests the main controller of the app. Add any other relevant tests.
	//For more information on Qunit, see https://sapui5.hana.ondemand.com/#/topic/09d145cd86ee4f8e9d08715f1b364c51
	QUnit.module("addition",{
		beforeEach: function(){
			this.oController = new ViewCalcController();
		},
		afterEach: function(){
			this.oController.destroy();
		}
	});

	QUnit.test("add 1 and 2", function (assert) {
		var result = this.oController.calculate(1, 2, "+");
		assert.strictEqual(result, 3, "text computed ok")
	});

	//this is an example of a Qunit that needs to be fixed 
	QUnit.test("I should test any additional controls", function (assert) {
		assert.ok(false, "Implement test");
	});

});