function authInterceptor(JWT, AppConstants, $window, $q){
	'ngInject';

	return{
		// automatically attach Auth header
		request: function(config){
			if(config.url.indexOf(AppConstants.api) === 0 && JWT.get()){
				config.headers.Authorization = 'Token ' + JWT.get();
			}
			return config;
		},

		// handle 401 -- token was invalid
		responseError: function(rejection){
			if(rejection.status === 401){
				//clear JWT token
				JWT.destory();

				// do a hard page refresh
				$window.location.reload();
			}
			return $q.reject(rejection);
		}
	}
}

export default authInterceptor;