require.config({

	baseUrl: '/',

	map: {
		'*': {
			'less': 'lib/require-less/less',
			'text': 'lib/require-text/text',
			'css': 'lib/require-css/css',
		}
	},

	paths: {
		'bootstrap': 'lib/bootstrap/js',
		'jquery': 'lib/jquery/dist/jquery',
		'can': 'lib/canjs/amd/can',
		'faker': 'lib/faker/Faker',
		'datejs': 'lib/datejs/build/date'
	},

	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'faker': {
			exports: 'faker'
		},
		'datejs': {
			exports: 'Date'
		}
	}

});
