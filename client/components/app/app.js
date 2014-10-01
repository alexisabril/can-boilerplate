define(['jquery',
	'can',
	'can/view/stache',
	'text!components/app/init.stache'],

function($, can, stache, init) {

	$('body').append(can.stache(init)());

});
