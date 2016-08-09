class AuthCtrl {
	constructor(User, $state){
		'ngInject';
		this.title = $state.current.title;
		this.authType = $state.current.name.replace('app.', '');
		this._User = User;
		
		console.log('auth controller');
	}
	
	submitForm(){
		this.isSubmitting = true;
		console.log(this.formData);
		this._User.attemptAuth(this.authType, this.formData).then(
				(result)=>{
					this.isSubmitting = false;
					console.log('result', result);
				},
				(err) =>{
					this.isSubmitting = false;
					this.errors = err.data.errors;
					console.log('result', err.data.errors);
				}
			)
		
	}
}

export default AuthCtrl