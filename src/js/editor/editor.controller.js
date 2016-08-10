class EditorCtrl{
	constructor(Article, article, $state){
		'ngInject';

		if(!article){
			this.article = {
			title: '',
			description: '',
			tagList: []
			}
		}
		else{
			this.article = article;
		}

		// references
		this._Article = Article;
		this._$state = $state;
		
	}

	addTag(){
		// if tag is not in list, add it
		if(!this.article.tagList.includes(this.tagField)){
			this.article.tagList.push(this.tagField)
			this.tagField = '';
		}
	}

	removeTag(tagName){
		this.article.tagList = this.article.tagList.filter((slug) => slug != tagName)
	}

	submit(){
		this.isSubmitting = true;

		this._Article.save(this.article).then(
			(newArticle)=>{
				console.log('article', newArticle);
				this._$state.go('app.article', {slug: newArticle.slug})
			},
			(err)=>{
				this.isSubmitting = false;
				this.errors = err.data.errors;
			}
		)
	}
}

export default EditorCtrl;