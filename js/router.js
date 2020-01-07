"use strict";

function Router(routes){
	try{
		if(!routes){
			throw 'error:routes param is mandatory';
		}
		this.constructor(routes);
		this.init();
	}catch(e){
		console.error(e);
	}
}
Router.prototype = {
	routes:undefined;
	rootElem: undefined;
	constructor: function(routes){
		this.routes = routes;
		this.rootElem = document.getElementById("app");
	},
	init: function (){
		var r = this.routes;
		(function(scope, r){
			window.addEventListener("hasChanged", function(e){
				scope.hasChanged(scope, r);
			});	
		})(this, r);
		this.hasChanged(this, r);
	},
	hasChanged: function(scope, r){
	}
}