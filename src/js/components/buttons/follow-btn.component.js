class FollowBtnCtrl {
  constructor(Profile, User, $state) {
    'ngInject';
    this._User = User;
    this._$state = $state;
    this._Profile = Profile;
  }

  // logic for following or unfollowing  a user
  submit(){
	this.isSubmitting = true;

	// if no user tell them to go register
	if(!this._User.current){
		this._$state.go('app.register');
		return;
	}

	// either follow or unfollow this person
	if(this.user.following){
		this._Profile.unfollow(this.user.username).then(
				()=>{
					this.isSubmitting = false;
					this.user.following = false;
				}
			)
	}
	else{
		this._Profile.follow(this.user.username).then(
				()=>{
					this.isSubmitting = false;
					this.user.following = true;
				}
			)
	}
}
}

// actual component that gets exposted
let FollowBtn= {
  bindings: {
    user: '='
  },
  controller: FollowBtnCtrl,
  templateUrl: 'components/buttons/follow-btn.html'
};

export default FollowBtn;