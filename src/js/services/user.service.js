export default class User{
	constructor(AppConstants, $http){
		'ngInject';
		
		// no one is logged in
		this.current = null;
		this._AppConstants = AppConstants;
		this._$http = $http;
	}
	
	attemprAuth(type, credentials){
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
			this.current = result.data.user;
			
			return result;
		});
	}
}