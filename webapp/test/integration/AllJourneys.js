/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"FB_Qunit/FB_QUnit/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"FB_Qunit/FB_QUnit/test/integration/pages/ViewCalc",
	"FB_Qunit/FB_QUnit/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "FB_Qunit.FB_QUnit.view.",
		autoWait: true
	});
});