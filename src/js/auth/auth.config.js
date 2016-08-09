function AuthConfig($stateProvider, $httpProvider){
	'ngInject';
	
	$stateProvider
		.state('app.login',{
			url: '/login',
			controller: 'AuthCtrl as $ctrl',
			templateUrl: 'auth/auth.html',
			title: 'Sign In'
		})
		
		.state('app.register',{
			url: '/register',
			controller: 'AuthCtrl as $ctrl',
			templateUrl: 'auth/auth.html',
			title: 'Sign Up'
		});
};

export default AuthConfig;