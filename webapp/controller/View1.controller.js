sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.iajListaProdutos.controller.View1", {

		handleListItemPress: function(evt) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			var selectedProductId = evt.getSource().getBindingContext().getProperty("ProductID");
			oRouter.navTo("detail", {
				productId: selectedProductId
			});
		}

		// handleListItemPress: function (evt) {
		// 	// show in a pop-up which list element was pressed
		//     jQuery.sap.require("sap.m.MessageBox");
		//      	sap.m.MessageBox.show(
		// 	     	"You pressed item: " + evt.getSource().getBindingContext(), {
		// 		    	icon: sap.m.MessageBox.Icon.INFORMATION,
		// 			    title: "Produto selecionado!",
		// 			    actions: [sap.m.MessageBox.Action.OK]
		// 		}
		// 	);
		// }

	});
});