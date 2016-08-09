function AuthConfig($stateProvider, $httpProvider){
	'ngInject';
	
	$stateProvider
		.state('app.login',{
			url: '/login',
			controller: 'AuthCtrl as $ctrl',
			templateUrl: 'auth/auth.html',
			title: 'Sign In',
			resolve: {
				auth: function(User){
					return User.ensureAuthIs(false);
				}
			}
		})
		
		.state('app.register',{
			url: '/register',
			controller: 'AuthCtrl as $ctrl',
			templateUrl: 'auth/auth.html',
			title: 'Sign Up',
			resolve: {
				auth: function(User){
					return User.ensureAuthIs(false);
				}
			}
		});
};

export default AuthConfig;