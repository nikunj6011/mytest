'use strict';

/**
 * @ngdoc function
 * @name desktopApp.controller:TabCtrl
 * @description
 * # TabCtrl
 * Controller of the desktopApp
 */
angular.module('desktopApp')
  .controller('TabCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

function showTab(tab){
	switch(tab){
		case 0:
			$("#title").show();
			$("#hillary,#donald").removeClass("visible").addClass("invisible");
			$(".tab-pane").css({height:"400px","border-color":"#000"});
			break;
		case 1:
			$("#title").hide();
			$("#hillary").removeClass("invisible").addClass("visible");
			$("#donald").removeClass("visible").addClass("invisible");
			$(".tab-pane").css({height:"650px","border-color":"#0070c0"});
			break;
		case 2:
			$("#title").hide();
			$("#donald").removeClass("invisible").addClass("visible");
			$("#hillary").removeClass("visible").addClass("invisible");
			$(".tab-pane").css({height:"650px","border-color":"red"});
			break;
	}
}