export default class User{
	constructor(JWT, AppConstants, $http, $state, $q){
		'ngInject';
		
		// no one is logged in
		this.current = null;
		this._AppConstants = AppConstants;
		this._$http = $http;
		this._JWT = JWT;
		this._$state = $state;
		this._$q = $q;
	}
	
	attemptAuth(type, credentials){
		// let allows for box scoping 
		let route = (type === 'login') ? "/login" : "";
		return this._$http({
			url: this._AppConstants.api + "/users" + route,
			method: "POST",
			data: {
				user: credentials
			}
		})
		// => arrow service allows us to reference this (or anything in the outer scope
		.then((result)=>{
			this._JWT.save(result.data.user.token);
			this.current = result.data.user;
			
			return result;
		});
	}

	logout(){
		this.current = null;
		this._JWT.destroy();
		this._$state.go(this._$state.current, null, {reload: true});
	}

	verifyAuth(){
		let deferred = this._$q.defer();

		// check for JWT token
		if(!this._JWT.get()){
			deferred.resolve(false);
			return deferred.promise;
		}

		if(this.current){
			deferred.resolve(true);
		}
		else{
			this._$http({
				url: this._AppConstants.api + '/user',
				method: 'GET',
				headers: {
					Authorization: 'Token ' + this._JWT.get()
				}
			})
			.then(
				(res)=>{
					this.current = res.data.user;
					deferred.resolve(true);
				},
				(err)=>{
					this._JWT.destroy();
					deferred.resolve(false);
				}
			)
		}
		return deferred.promise;
	}	

	ensureAuthIs(bool){
		let deferred = this._$q.defer();

		this.verifyAuth().then((authValid)=>{
			if(authValid !== bool){
				this._$state.go('app.home');
				deferred.resolve(false);
			}
			else{
				deferred.resolve(true);
			}
		})

		return deferred.promise;
	}
}