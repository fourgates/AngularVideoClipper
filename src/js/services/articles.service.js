export default class Article{
	constructor(AppConstants, $http){
		'ngInject';

		this._AppConstants = AppConstants;
		this._$http = $http
	}

	get(slug) {
	    let deferred = this._$q.defer();

	    // Check for blank title
	    if (!slug.replace(" ", "")) {
	      deferred.reject("Article slug is empty");
	      return deferred.promise;
	    }
	}
	save(article){
		let request = {};

		if(article.slug){
			request.url = `${this._AppConstants.api}/articles/${article.slug}`;
			request.method = 'PUT';
			delete article.slug;
		}
		else{
			request.url = `${this._AppConstants.api}/articles`;
			request.method = 'POST';
			
		}
		request.data = {article: article};
		return this._$http(request).then((res)=>res);
	}
}